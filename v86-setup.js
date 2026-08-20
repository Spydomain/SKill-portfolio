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
            
            // Customize xterm.js instance for smooth scrolling and better experience
            setTimeout(function() {
                if (emulator.serial_adapter && emulator.serial_adapter.term) {
                    var term = emulator.serial_adapter.term;
                    term.setOption('scrollback', 10000);
                    term.setOption('scrollSensitivity', 1);
                    term.setOption('theme', {
                        background: '#000000',
                        foreground: '#ffffff',
                        cursor: '#00ff99',
                        selection: 'rgba(0, 255, 153, 0.3)'
                    });
                    console.log("V86-SETUP: Xterm.js customized successfully");
                }
            }, 1000);
        } catch (e) {
            console.error("V86-SETUP: Emulator creation FAILED:", e);
            return;
        }

        // State machine for auto-login and data injection
        var state = "BOOTING";
        var buffer = "";

        var lastBufferLength = 0;
        var bootTimeout = setTimeout(function() {
            if (state === "BOOTING") {
                console.log("V86-SETUP: FALLBACK: Triggering injection after timeout.");
                state = "INJECTING";
                injectData(emulator);
            }
        }, 30000); // 30 second safety net

        var checkInterval = setInterval(function() {
            if (state === "DONE") {
                clearInterval(checkInterval);
                clearTimeout(bootTimeout);
                return;
            }

            if (buffer.length > 0 && buffer.length === lastBufferLength) {
                var clean = buffer.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, "").trim();
                var isPrompt = clean.endsWith("#") || clean.endsWith("$") || clean.includes("login:");
                
                if (isPrompt) {
                    console.log("V86-SETUP: Prompt detected via idle check:", JSON.stringify(clean.slice(-10)));
                    if (state === "BOOTING") {
                        clearTimeout(bootTimeout);
                        if (clean.includes("login:")) {
                            console.log("V86-SETUP: Sending root");
                            emulator.serial0_send("root\n");
                            state = "LOGGING_IN";
                        } else {
                            console.log("V86-SETUP: Starting injection");
                            state = "INJECTING";
                            const statusEl = document.getElementById('v86-status');
                            if (statusEl) {
                                statusEl.innerHTML = '<i class="fas fa-sync fa-spin"></i> PREPARING';
                                statusEl.style.color = '#00ccff';
                            }
                            injectData(emulator);
                        }
                        buffer = "";
                    } else if (state === "LOGGING_IN") {
                        console.log("V86-SETUP: Logged in, starting injection");
                        state = "INJECTING";
                        injectData(emulator);
                        buffer = "";
                    }
                }
            } else if (buffer.indexOf("STATUS_RUNNING") !== -1 && state !== "DONE") {
                state = "DONE";
                const statusEl = document.getElementById('v86-status');
                if (statusEl) {
                    statusEl.innerHTML = '<i class="fas fa-check-circle"></i> RUNNING';
                    statusEl.style.color = '#00ff99';
                }
            }
            lastBufferLength = buffer.length;
        }, 1000);

        var rootGifShown = false;
        function onChar(char) {
            if (typeof char === "number") char = String.fromCharCode(char);
            buffer += char;
            if (buffer.length > 5000) buffer = buffer.slice(-2000);

            if (state === "DONE") {
                var clean = buffer.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, "");
                
                if (clean.slice(-30).includes("Bikash@Spydomain")) {
                    rootGifShown = false;
                }

                if (!rootGifShown && (clean.includes("WOAH! YOU GOT ROOT ACCESS") || clean.includes("root@Spydomain"))) {
                    rootGifShown = true;
                    const gifEl = document.getElementById('v86-root-gif');
                    if (gifEl) {
                        gifEl.style.display = 'flex';
                    }
                }
            }
        }

        emulator.add_listener("serial0-output-char", function(char) {
            onChar(char);
            if (emulator.serial_adapter && emulator.serial_adapter.term) {
                emulator.serial_adapter.term.scrollToBottom();
            }
        });
        emulator.add_listener("serial0-output-byte", function(char) {
            onChar(char);
            if (emulator.serial_adapter && emulator.serial_adapter.term) {
                emulator.serial_adapter.term.scrollToBottom();
            }
        });
    }

    function injectData(emulator) {
        var cmds = [
            "hostname Spydomain",
            "adduser -D -s /bin/sh Bikash",
            "passwd -d Bikash",
            "mkdir -p /home/Bikash/portfolio",
            
            // About Me
            "echo 'NAME: Bikash Sarraf (Spydomain)' > /home/Bikash/portfolio/aboutme.txt",
            "echo 'TAGLINE: Cybersecurity & Ethical Hacking Enthusiast' >> /home/Bikash/portfolio/aboutme.txt",
            "echo 'LOCATION: Kathmandu, Nepal' >> /home/Bikash/portfolio/aboutme.txt",
            "echo 'COLLEGE: Softwarica College of IT and E-Commerce, Gyaneshwor, Kathmandu Nepal' >> /home/Bikash/portfolio/aboutme.txt",
            "echo 'ABOUT: I am passionate about learning new things in technology, especially cybersecurity, ethical hacking, and web development. I enjoy tackling challenges and continuously developing my skills.' >> /home/Bikash/portfolio/aboutme.txt",
            "echo 'GOAL: To become a skilled cybersecurity professional and help make the digital world a safer place.' >> /home/Bikash/portfolio/aboutme.txt",

            // Education
            "echo '--- EDUCATION TIMELINE ---' > /home/Bikash/portfolio/education.txt",
            "echo '2024 — Present: Bachelor in Cyber Security and Ethical Hacking' >> /home/Bikash/portfolio/education.txt",
            "echo '   Softwarica College of IT & E-Commerce, Kathmandu Nepal' >> /home/Bikash/portfolio/education.txt",
            "echo '2022 — 2024: +2 Science (Biology) - GPA: 3.08' >> /home/Bikash/portfolio/education.txt",
            "echo '   Xavier International College, Kalopul, Kathmandu Nepal' >> /home/Bikash/portfolio/education.txt",
            "echo '2022: SEE - GPA: 3.10' >> /home/Bikash/portfolio/education.txt",
            "echo '   Shree Sharaswasti English Boarding School, Bara Nepal' >> /home/Bikash/portfolio/education.txt",

            // Skills
            "echo '--- TECHNICAL SKILLS ---' > /home/Bikash/portfolio/skills.txt",
            "echo 'LANGUAGES: HTML/CSS (75%), Python (70%), JS/Node.js (65%), Bash (65%), React.js (55%), C (50%)' >> /home/Bikash/portfolio/skills.txt",
            "echo 'SECURITY: OSINT (70%), Web Sec (65%), PenTest (60%), Network Sec (55%), Bug Bounty (45%)' >> /home/Bikash/portfolio/skills.txt",

            // Projects
            "echo '--- PROJECTS ---' > /home/Bikash/portfolio/projects.txt",
            "echo '1. Keylogger: Python-based educational keylogger (github.com/Spydomain/keylogger)' >> /home/Bikash/portfolio/projects.txt",
            "echo '2. Bike Rental Nepal: Full-stack MERN platform (github.com/Spydomain/front)' >> /home/Bikash/portfolio/projects.txt",
            "echo '3. CVE-2023-22809 Exploits: Automated Python exploits (github.com/Spydomain/CVE-2023-22809-automated-python-exploits)' >> /home/Bikash/portfolio/projects.txt",
            "echo '4. ClipboardAI: Bash-based offline LLM assistant (github.com/Spydomain/ClipboardAI)' >> /home/Bikash/portfolio/projects.txt",
            "echo '5. NotesVista: Note-taking app (notesvista.netlify.app)' >> /home/Bikash/portfolio/projects.txt",
            "echo '6. NebullaComms: Communication app (nebullacomms.netlify.app)' >> /home/Bikash/portfolio/projects.txt",
            "echo '7. FGE Identification Test Platform: Flutter app (army-testgit-45113358-666ec.web.app)' >> /home/Bikash/portfolio/projects.txt",
            "echo '8. CVE-2021-22555 PoC: Python-based (github.com/Spydomain/CVE-2021-22555-Poc)' >> /home/Bikash/portfolio/projects.txt",
            "echo '9. CVE-2017-1000112 PoC: Python-based (github.com/Spydomain/CVE-2017-1000112-PoC)' >> /home/Bikash/portfolio/projects.txt",
            "echo '10. CVE-2022-0435 PoC: Python-based (github.com/Spydomain/CVE-2022-0435-Poc)' >> /home/Bikash/portfolio/projects.txt",

            // Achievements & CTF
            "echo '--- ACHIEVEMENTS & CTF ---' > /home/Bikash/portfolio/achievements.txt",
            "echo '1. 2nd Place: Pentester Nepal CTF (2026) as team Visored' >> /home/Bikash/portfolio/achievements.txt",
            "echo '2. 8th Place: HackAstra Finale CTF by Herald College' >> /home/Bikash/portfolio/achievements.txt",
            "echo '3. 9th Place: Trinity Technology Solo CTF' >> /home/Bikash/portfolio/achievements.txt",
            "echo '4. 18th Place: HackAstra CTF & qualified for finals' >> /home/Bikash/portfolio/achievements.txt",
            "echo '5. 69th Place: Midnight CTF' >> /home/Bikash/portfolio/achievements.txt",
            "echo '6. Blue Lock Eleven CTF Team Member (Nepal U20)' >> /home/Bikash/portfolio/achievements.txt",
            "echo '7. TryHackMe: Top 1% & 500+ Days Streak' >> /home/Bikash/portfolio/achievements.txt",
            "echo '8. HackerOne Bug Bounty: Valid Bug Submissions' >> /home/Bikash/portfolio/achievements.txt",
            "echo '9. TryHackMe Lab Creator: Ganheist Room' >> /home/Bikash/portfolio/achievements.txt",

            // Certifications
            "echo '--- CERTIFICATIONS ---' > /home/Bikash/portfolio/certifications.txt",
            "echo '- Google Cybersecurity Professional' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- CompTIA PenTest+ (PT0-002) Course Completed (Coursera)' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- Cisco Ethical Hacker' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- CCEP (Certified Cybersecurity Educator Professional)' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- Certified Red Team Operations Management (CRTOM)' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- Certified C++ Practitioner Professional (CCPP)' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- TryHackMe: Pre-Security, Cyber Security 101, Advent of Cyber (2022-2024)' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- Certified API Security Analyst' >> /home/Bikash/portfolio/certifications.txt",
            "echo '- APIsec Certified Practitioner' >> /home/Bikash/portfolio/certifications.txt",

            // Contact
            "echo '--- CONTACT DETAILS ---' > /home/Bikash/portfolio/contact.txt",
            "echo 'EMAIL: contactme@bikashkumarsarraf.com.np' >> /home/Bikash/portfolio/contact.txt",
            "echo 'GITHUB: github.com/Spydomain' >> /home/Bikash/portfolio/contact.txt",
            "echo 'LINKEDIN: linkedin.com/in/bikash-sarraf-683787320/' >> /home/Bikash/portfolio/contact.txt",
            "echo 'TRYHACKME: tryhackme.com/p/bikashsarraf' >> /home/Bikash/portfolio/contact.txt",
            "echo 'MEDIUM: medium.com/@spydomain1' >> /home/Bikash/portfolio/contact.txt",
            
            // Timezone: Asia/Kathmandu (UTC+5:45)
            "echo 'Asia/Kathmandu' > /etc/timezone",
            "export TZ='NPT-5:45'",

            // Root Easter Egg & Privilege Escalation Setup
            "passwd -d root",
            "echo \"PS1='\\\\e[1;31mroot@Spydomain\\\\e[0m:\\\\e[1;34m\\\\w\\\\e[0m\\\\# '\" > /root/.profile",
            "echo \"export TZ='NPT-5:45'\" >> /root/.profile",
            "echo \"alias clear='printf \\\"\\\\033[H\\\\033[2J\\\\033[3J\\\"'\" >> /root/.profile",
            "echo \"printf '\\\\033[H\\\\033[2J\\\\033[3J'\" >> /root/.profile",
            "echo \"echo -e '\\\\e[1;31m'\" >> /root/.profile",
            "echo \"echo '  ____   ____   ____ _____   _   _    _    ____ _  _______ ____  _ '\" >> /root/.profile",
            "echo \"echo ' |  _ \\\\ / ___| / ___|_   _| | | | |  / \\\\  / ___| |/ / ____|  _ \\\\| |'\" >> /root/.profile",
            "echo \"echo ' | |_) | |  _ | |     | |   | |_| | / _ \\\\| |   |  /|  _| | |_) | |'\" >> /root/.profile",
            "echo \"echo ' |  _ <| |_| || |___  | |   |  _  |/ ___ \\\\ |___| . \\\\| |___|  _ <|_|'\" >> /root/.profile",
            "echo \"echo ' |_| \\\\_\\\\\\\\____| \\\\____| |_|   |_| |_/_/   \\\\_\\\\____|_|\\\\_\\\\_____|_| \\\\_(_)'\" >> /root/.profile",
            "echo \"echo -e '\\\\e[0m'\" >> /root/.profile",
            "echo \"echo -e '\\\\e[1;33m😱 WOAH! YOU GOT ROOT ACCESS?! 🚀\\\\e[0m'\" >> /root/.profile",
            "echo \"echo -e '\\\\e[1;32m🎉 CONGRATULATIONS! You successfully escalated privileges to ROOT (uid=0)!\\\\e[0m'\" >> /root/.profile",
            "echo \"echo -e '\\\\e[1;36m🏆 You have mastered the Spydomain Terminal challenge!\\\\e[0m'\" >> /root/.profile",
            "echo \"echo -e '\\\\e[1;30m---------------------------------------------------------\\\\e[0m'\" >> /root/.profile",
            "echo \"echo ''\" >> /root/.profile",

            // User Bikash Setup & Aliases
            "chown -R Bikash:Bikash /home/Bikash",
            "echo \"PS1='\\\\e[1;32mBikash@Spydomain\\\\e[0m:\\\\e[1;34m\\\\w\\\\e[0m\\\\$ '\" > /home/Bikash/.profile",
            "echo \"export TZ='NPT-5:45'\" >> /home/Bikash/.profile",
            "echo \"cd ~/portfolio\" >> /home/Bikash/.profile",
            "echo \"alias clear='printf \\\"\\\\033[H\\\\033[2J\\\\033[3J\\\"'\" >> /home/Bikash/.profile",
            "echo \"alias sudo='su - root'\" >> /home/Bikash/.profile",
            "echo \"alias doas='su - root'\" >> /home/Bikash/.profile",
            "echo \"alias pwn='su - root'\" >> /home/Bikash/.profile",
            "echo \"alias root='su - root'\" >> /home/Bikash/.profile",
            "echo \"printf '\\\\033[H\\\\033[2J\\\\033[3J'\" >> /home/Bikash/.profile",
            "echo \"echo -e '\\\\e[1;32m+----------------------------------------------+\\\\e[0m'\" >> /home/Bikash/.profile",
            "echo \"echo -e '\\\\e[1;32m|      WELCOME TO SPYDOMAIN SECURE SHELL       |\\\\e[0m'\" >> /home/Bikash/.profile",
            "echo \"echo -e '\\\\e[1;32m+----------------------------------------------+\\\\e[0m'\" >> /home/Bikash/.profile",
            "echo \"echo 'Type \"ls\" to see my portfolio details.'\" >> /home/Bikash/.profile",
            "echo \"echo ''\" >> /home/Bikash/.profile",
            "sed -i 's|:fault non-root user$|:/bin/sh|' /etc/passwd",
            "sed -i 's|Bikash:x:1001:1001:.*:/home/Bikash:.*|Bikash:x:1001:1001:Bikash:/home/Bikash:/bin/sh|' /etc/passwd",
            "chown -R 1001:1001 /home/Bikash",
            "echo STATUS_RUNNING",
            "su - Bikash"
        ];
        
        var delay = 500;
        for (var i = 0; i < cmds.length; i++) {
            (function(cmd, isLast) {
                setTimeout(function() {
                    console.log("V86-SETUP: Sending command:", cmd);
                    emulator.serial0_send(cmd + "\n");
                }, isLast ? delay + 1000 : delay); // Extra delay for the final switch
            })(cmds[i], i === cmds.length - 1);
            delay += 400;
        }
    }

    window.startEmulator = startEmulator;
})();
