// PDF Generation
export function generateAndOpenResumePDF() {
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 40;
    const margin = 40;
    const lineHeight = 16;

    // Add section header function with page break check
    function addSectionHeader(text, yPos) {
      // Define minimum space needed for the section header (header + some content)
      const minSpaceNeeded = 100; // Adjust this value based on your needs
      
      // Check if we need a new page (leaving space for the header and some content)
      if (yPos > doc.internal.pageSize.getHeight() - minSpaceNeeded) {
        doc.addPage();
        yPos = margin + 20; // Reset Y position to top of new page with margin
      } else if (yPos > margin + 20) {
        // Add some space before the section if not at the top of the page
        yPos += 20;
      }
      
      doc.setFillColor(41, 82, 143);
      doc.rect(margin, yPos - 12, pageWidth - 2 * margin, 20, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(text, margin + 8, yPos + 2);
      // Return the new Y position after adding the section header
      return yPos + 30;
    }

    // Add text with formatting and automatic page breaks
    function addText(text, x, yPos, options = {}) {
      doc.setFont('helvetica', options.fontStyle || 'normal');
      doc.setFontSize(options.fontSize || 11);
      
      // Check if we need a new page (leaving space for section headers and margins)
      if (yPos > doc.internal.pageSize.getHeight() - 100) {
        doc.addPage();
        yPos = margin + 20; // Add some top margin
      }
      
      // Split text into lines that fit within the page width
      const maxWidth = pageWidth - (2 * margin);
      const splitText = doc.splitTextToSize(text, maxWidth);
      
      // Add each line of text
      splitText.forEach((line) => {
        // Check if we need a new page for this line
        if (yPos > doc.internal.pageSize.getHeight() - 30) {
          doc.addPage();
          yPos = margin + 20;
        }

        const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch) {
          const url = urlMatch[0];
          const parts = line.split(url);
          let currentX = x;
          
          if (parts[0]) {
            doc.setTextColor(0, 0, 0);
            doc.text(parts[0], currentX, yPos);
            currentX += doc.getTextWidth(parts[0]);
          }
          
          doc.setTextColor(0, 0, 255);
          doc.text(url, currentX, yPos);
          currentX += doc.getTextWidth(url);
          
          if (parts[1]) {
            doc.setTextColor(0, 0, 0);
            doc.text(parts[1], currentX, yPos);
          }
        } else {
          doc.setTextColor(0, 0, 0);
          doc.text(line, x, yPos, options);
        }
        yPos += lineHeight;
      });
      
      return yPos;
    }

    // Document header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('CURRICULUM VITAE', margin, y);
    y += 30;

    // Personal Information
    doc.setFontSize(14);
    doc.text('Bikash Sarraf', margin, y);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 255);
    doc.text('contactme@bikashkumarsarraf.com.np', pageWidth - margin - 220, y, { maxWidth: 220 });
    y += lineHeight;

    doc.setTextColor(0, 0, 0);
    y = addText('Kathmandu, Nepal', margin, y);
    y += 20;

    // Education Section
    y = addSectionHeader('EDUCATION', y);
    
    doc.setFontSize(11);
    y = addText('Bachelor\'s in Cyber Security and Ethical Hacking', margin, y);
    doc.setFont('helvetica', 'italic');
    doc.text('2024 - Present', pageWidth - margin - 120, y - lineHeight);
    doc.setFont('helvetica', 'normal');
    y = addText('Softwarica College of IT and E-Commerce, Gyaneshwor, Kathmandu Nepal', margin, y);
    y += 10;
    
    y = addText('+2 Science (Biology) - 3.08 GPA', margin, y);
    doc.setFont('helvetica', 'italic');
    doc.text('2022 - 2024', pageWidth - margin - 120, y - lineHeight);
    doc.setFont('helvetica', 'normal');
    y = addText('Xavier International College, Kalopul, Kathmandu Nepal', margin, y);
    y += 10;
    
    y = addText('SEE - 3.10 GPA', margin, y);
    doc.setFont('helvetica', 'italic');
    doc.text('2022', pageWidth - margin - 120, y - lineHeight);
    doc.setFont('helvetica', 'normal');
    y = addText('Shree Sharaswasti English Boarding School, Lipanimal-3, Bara Nepal', margin, y);
    y += 20;
    
    // Professional Experience Section
    y = addSectionHeader('PROFESSIONAL EXPERIENCE', y);
    
    doc.setFont('helvetica', 'bold');
    y = addText('Currently no work experience', margin, y);
    y += 10;
    
    // Skills Section
    y = addSectionHeader('SKILLS', y);
    
    const skills = [
      'Languages: Intermediate HTML, C, Python, CSS, Node.js, React.js, MySQL, Bash, PHP',
      'Hacking: Social Engineering, OSINT, session hacking, learning Pentesting & Bug Bounty'
    ];
    
    skills.forEach(skill => {
      y = addText(skill, margin, y);
    });
    y += 10;

    // Projects Section
    y = addSectionHeader('PROJECTS', y);
    
    const projects = [
      '1. Keylogger (Python)',
      '   A Python-based keylogger project for educational purposes.',
      '   GitHub: https://github.com/Spydomain/keylogger',
      '',
      '2. Bike Rental Nepal (Node.js + React.js)',
      '   Full-stack bike rental platform built with Node.js and React.js.',
      '   Frontend: https://github.com/Spydomain/front',
      '   Backend: https://github.com/Spydomain/backend',
      '',
      '3. CVE-2023-22809 Automated Exploits (Python)',
      '   Automated Python exploits for CVE-2023-22809 vulnerability.',
      '   GitHub: https://github.com/Spydomain/CVE-2023-22809-automated-python-exploits',
      '',
      '4. ClipboardAI (Bash Script)',
      '   Bash script that sends copied text to Ollama and pops up instant offline answers.',
      '   GitHub: https://github.com/Spydomain/ClipboardAI',
      '',
      '5. NotesVista (Node.js + React.js)',
      '   Modern note-taking application built with MERN stack.',
      '   Live Demo: https://notesvista.netlify.app/',
      '',
      '6. FGE Identification Test Platform (Flutter)',
      '   Modern test-taking platform for French Army built with Flutter.',
      '   Live Demo: https://army-testgit-45113358-666ec.web.app/',
      '',
      '7. CVE-2021-22555 PoC (Python)',
      '   Proof of Concept for CVE-2021-22555 vulnerability.',
      '   GitHub: https://github.com/Spydomain/CVE-2021-22555-Poc',
      '',
      '8. CVE-2017-1000112 PoC (Python)',
      '   Proof of Concept for CVE-2017-1000112 vulnerability.',
      '   GitHub: https://github.com/Spydomain/CVE-2017-1000112-PoC',
      '',
      '9. CVE-2022-0435 PoC (Python)',
      '   Proof of Concept for CVE-2022-0435 vulnerability.',
      '   GitHub: https://github.com/Spydomain/CVE-2022-0435-Poc'
    ];
    
    projects.forEach(project => {
      if (project.trim() === '') {
        y += lineHeight / 2;
      } else {
        y = addText(project, margin, y);
      }
    });
    y += 10;

    // Achievements Section
    y = addSectionHeader('ACHIEVEMENTS & CTF', y);
    
    const achievements = [
      '2nd place in Pentester Nepal CTF (2026) as team Visored',
      '8th place in HackAstra finale CTF by Herald College',
      '9th place in Trinity Technology Solo CTF',
      '18th place in HackAstra CTF and qualified for finals',
      '69th place in Midnight CTF',
      'Captain and active member of Team Visored',
      'Former Blue Lock Eleven CTF team member',
      'TryHackMe: Reached Top 1% and a 500+ day streak',
      'Submitted valid bug report on HackerOne Bug Bounty Program (marked duplicate)',
      'Created custom cybersecurity lab room on TryHackMe'
    ];
    
    achievements.forEach((ach, index) => {
      y = addText(`${index + 1}. ${ach}`, margin, y);
    });
    y += 10;

    // Certifications Section
    y = addSectionHeader('CERTIFICATIONS', y);
    
    const certifications = [
      'Cisco Ethical Hacker',
      'Certified Cybersecurity Educator Professional (CCEP)',
      'Google Cybersecurity Professional Certificate',
      'CompTIA PenTest+ (PT0-002) Course Completed (Coursera)',
      'Certified API Security Analyst (CASA)',
      'APIsec Certified Practitioner (ACP)',
      'Certified Red Team Operations Management (CRTOM)',
      'Certified C++ Practitioner Professional (CCPP)',
      'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      'Hack The Box Mini Pro Labs: Mythical Certificate of Completion',
      'Hack The Box Mini Pro Labs: Puppet Certificate of Completion'
    ];
    
    certifications.forEach((cert, index) => {
      y = addText(`${index + 1}. ${cert}`, margin, y);
    });
    y += 20;

    // References Section
    y = addSectionHeader('REFERENCES', y);
    
    doc.setFont('helvetica', 'bold');
    y = addText('currently no references', margin, y);
    doc.setFont('helvetica', 'normal');
    y += 10;
    
    // Add page numbers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(100);
      const ph = doc.internal.pageSize.getHeight();
      doc.text(`Page ${i} / ${pageCount}`, pageWidth - margin - 60, ph - 30);
    }

    // Generate PDF and trigger download
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    // Open in new tab
    const newWindow = window.open('', '_blank');
    newWindow.location.href = pdfUrl;
    
    // Trigger download
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Bikash_Sarraf_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    return pdfUrl;
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
    throw error;
  }
}

// Make function globally available for HTML onclick
window.generateAndOpenResumePDF = generateAndOpenResumePDF;
