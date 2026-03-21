// v86-setup.js — Clean rewrite
(function() {
    "use strict";

    async function startEmulator() {
        console.log("V86-SETUP: startEmulator() called");

        var screenContainer = document.getElementById("v86-terminal-container");
        if (!screenContainer) {
            console.error("V86-SETUP: #v86-terminal-container NOT FOUND in DOM");
            return;
        }
        console.log("V86-SETUP: Container found");

        // Replace placeholder content with xterm target div
        screenContainer.innerHTML = '<div id="v86-screen" style="width:100%;height:100%;"></div>';

        // Wait for V86 constructor to be available
        var attempts = 0;
        while (!window.V86 && attempts < 100) {
            await new Promise(function(r) { setTimeout(r, 50); });
            attempts++;
        }

        var logInfo = "Diag: V86=" + typeof window.V86 + ", emulatorStarted=" + window.emulatorStarted;
        console.log(logInfo);
        try { fetch("/diag?msg=" + encodeURIComponent(logInfo)); } catch(e){}

        if (!window.V86) {
            console.error("V86-SETUP: window.V86 not found after waiting");
            return;
        }

        if (!window.Terminal) {
            console.error("V86-SETUP: window.Terminal (xterm.js) not found!");
            return;
        }
        console.log("V86-SETUP: window.Terminal (xterm.js) found");

        var screenDiv = document.getElementById("v86-screen");
        if (!screenDiv) {
            console.error("V86-SETUP: #v86-screen not found");
            return;
        }

        // Create emulator using xterm.js serial container
        var emulator;
        try {
            emulator = new V86({
                wasm_path: "v86/v86.wasm",
                memory_size: 128 * 1024 * 1024,
                vga_bios: { url: "v86/vgabios.bin" },
                bios: { url: "v86/seabios.bin" },
                bzimage: { url: "v86/bzimage" },
                initrd: { url: "v86/initrd" },
                cmdline: "rw init=/bin/sh root=/dev/ram0 load_ramdisk=1 prompt_ramdisk=0 console=ttyS0",
                autostart: true,
                serial_container_xtermjs: screenDiv, // Use xterm.js!
            });
            console.log("V86-SETUP: Emulator created using xterm.js");
        } catch (e) {
            console.error("V86-SETUP: Emulator creation FAILED:", e);
            return;
        }

        // State machine for auto-login and data injection
        var state = "BOOTING";
        var buffer = "";

        emulator.add_listener("serial0-output-char", function(char) {
            if (state === "DONE") return;
            buffer += char;

            // Robust prompt detection: look for "# " (root) or "login:"
            var isPrompt = buffer.endsWith("# ") || buffer.endsWith("#") || buffer.includes("login:");
            
            if (state === "BOOTING" && isPrompt) {
                if (buffer.includes("login:")) {
                    console.log("V86-SETUP: Login detected, sending root");
                    emulator.serial0_send("root\n");
                    state = "LOGGING_IN";
                } else {
                    console.log("V86-SETUP: Shell prompt detected, injecting data");
                    state = "INJECTING";
                    injectData(emulator);
                }
                buffer = "";
            } else if (state === "LOGGING_IN" && buffer.endsWith("# ")) {
                console.log("V86-SETUP: Logged in, injecting data");
                state = "INJECTING";
                injectData(emulator);
                buffer = "";
            } else if (state === "INJECTING" && buffer.indexOf("SPYDOMAIN_READY") !== -1) {
                state = "DONE";
                console.log("V86-SETUP: All done. Bikash@Spydomain shell is active.");
            }
            
            // Limit buffer size to prevent memory issues
            if (buffer.length > 2000) buffer = buffer.slice(-1000);
        });
    }

    function injectData(emulator) {
        var cmds = [
            "hostname Spydomain",
            "adduser -D Bikash",
            "passwd -d Bikash",
            "mkdir -p /home/Bikash/portfolio",
            // About Me
            "echo 'NAME: Bikash Sarraf (Spydomain)' > /home/Bikash/portfolio/aboutme.txt",
            "echo 'TAGLINE: Cybersecurity & Ethical Hacking Enthusiast' >> /home/Bikash/portfolio/aboutme.txt",
            "echo 'ABOUT: A passionate cybersecurity student with a strong interest in ethical hacking and web security.' >> /home/Bikash/portfolio/aboutme.txt",
            // Education
            "echo '- BSc (Hons) Cybersecurity & Ethical Hacking, Softwarica College' > /home/Bikash/portfolio/education.txt",
            "echo '- +2 Science, Xavier International College [GPA: 3.08]' >> /home/Bikash/portfolio/education.txt",
            // Skills
            "echo 'SECURITY: OSINT (70%), Web Sec (65%), PenTest (60%)' > /home/Bikash/portfolio/skills.txt",
            "echo 'CODE: Python (70%), JS (65%), Bash (65%), HTML/CSS (75%)' >> /home/Bikash/portfolio/skills.txt",
            // My Work / Projects
            "echo '1. Keylogger (Python) - github.com/Spydomain/keylogger' > /home/Bikash/portfolio/mywork.txt",
            "echo '2. CVE-2023-22809 Automated Exploits - github.com/Spydomain/CVE-2023-22809' >> /home/Bikash/portfolio/mywork.txt",
            "echo '3. ClipboardAI (Bash) - github.com/Spydomain/ClipboardAI' >> /home/Bikash/portfolio/mywork.txt",
            // Sync projects.txt as well for backward compatibility
            "cp /home/Bikash/portfolio/mywork.txt /home/Bikash/portfolio/projects.txt",
            // Final Setup & Security Lockdown
            "chown -R Bikash:Bikash /home/Bikash",
            "echo \"PS1='\\e[1;32mBikash@Spydomain\\e[0m:\\e[1;34m\\w\\e[0m\\$ '\" > /home/Bikash/.profile",
            "echo \"cd ~/portfolio\" >> /home/Bikash/.profile",
            "echo \"clear\" >> /home/Bikash/.profile",
            "echo \"echo -e '\\\\e[1;32m╔══════════════════════════════════════════════╗\\\\e[0m'\" >> /home/Bikash/.profile",
            "echo \"echo -e '\\\\e[1;32m║      WELCOME TO SPYDOMAIN SECURE SHELL       ║\\\\e[0m'\" >> /home/Bikash/.profile",
            "echo \"echo -e '\\\\e[1;32m╚══════════════════════════════════════════════╝\\\\e[0m'\" >> /home/Bikash/.profile",
            "echo \"echo 'Type \"ls\" to see my portfolio details.'\" >> /home/Bikash/.profile",
            "passwd -l root", // LOCK ROOT PERMANENTLY
            "echo SPYDOMAIN_READY",
            "exec su - Bikash" // REPLACE ROOT SHELL WITH BIKASH SHELL
        ];
        
        var delay = 500;
        for (var i = 0; i < cmds.length; i++) {
            (function(cmd) {
                setTimeout(function() {
                    emulator.serial0_send(cmd + "\n");
                }, delay);
            })(cmds[i]);
            delay += 400; // Faster injection
        }
    }

    window.startEmulator = startEmulator;
})();
