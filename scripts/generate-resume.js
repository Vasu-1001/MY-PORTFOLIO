import fs from 'fs';
import path from 'path';
import { PDFDocument, StandardFonts, rgb, PDFName, PDFString, PDFArray } from 'pdf-lib';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter dimensions: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  // Load standard fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontBoldItalic = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

  const marginX = 36;
  const contentWidth = width - marginX * 2; // 540 pt
  let cursorY = height - 28;

  const colorBlack = rgb(0, 0, 0);
  const colorGray = rgb(0.2, 0.2, 0.2);
  const colorLine = rgb(0.15, 0.15, 0.15);

  // Helper: Add clickable link annotation
  const addLink = (x, y, textWidth, textHeight, url) => {
    const linkAnnot = pdfDoc.context.register(
      pdfDoc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [x, y - 1, x + textWidth, y + textHeight],
        Border: [0, 0, 0],
        C: [0, 0, 0],
        A: {
          Type: 'Action',
          S: 'URI',
          URI: PDFString.of(url),
        },
      })
    );

    let annots = page.node.Annots();
    if (!annots) {
      page.node.set(PDFName.of('Annots'), pdfDoc.context.obj([]));
      annots = page.node.Annots();
    }
    annots.push(linkAnnot);
  };

  // Helper: Draw horizontal line
  const drawHr = (y) => {
    page.drawLine({
      start: { x: marginX, y },
      end: { x: width - marginX, y },
      thickness: 0.6,
      color: colorLine,
    });
  };

  // Helper: Section Header
  const drawSectionHeader = (title) => {
    cursorY -= 8;
    page.drawText(title, {
      x: marginX,
      y: cursorY,
      size: 9.5,
      font: fontBold,
      color: colorBlack,
    });
    cursorY -= 2;
    drawHr(cursorY);
    cursorY -= 8;
  };

  // Helper: Word wrap text
  const wrapText = (text, maxWidth, font, size) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // ==========================================
  // HEADER
  // ==========================================
  const nameText = 'VASUDEVAN R';
  const nameSize = 19;
  const nameWidth = fontBold.widthOfTextAtSize(nameText, nameSize);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: cursorY,
    size: nameSize,
    font: fontBold,
    color: colorBlack,
  });

  cursorY -= 14;
  const titleText = 'Java Full Stack Developer | Spring Boot · React · AI/ML | Cloud';
  const titleSize = 9.5;
  const titleWidth = fontBold.widthOfTextAtSize(titleText, titleSize);
  page.drawText(titleText, {
    x: (width - titleWidth) / 2,
    y: cursorY,
    size: titleSize,
    font: fontBold,
    color: colorBlack,
  });

  cursorY -= 12;
  // Contact line: Coimbatore, Tamil Nadu (Open to relocate) | vasudevann.dev@gmail.com | +91 97872 60711
  const contactPart1 = 'Coimbatore, Tamil Nadu (Open to relocate) | ';
  const emailText = 'vasudevann.dev@gmail.com';
  const contactPart2 = ' | +91 97872 60711';
  const contactSize = 8.5;

  const wPart1 = fontRegular.widthOfTextAtSize(contactPart1, contactSize);
  const wEmail = fontRegular.widthOfTextAtSize(emailText, contactSize);
  const wPart2 = fontRegular.widthOfTextAtSize(contactPart2, contactSize);
  const totalContactWidth = wPart1 + wEmail + wPart2;

  let currentContactX = (width - totalContactWidth) / 2;
  page.drawText(contactPart1, {
    x: currentContactX,
    y: cursorY,
    size: contactSize,
    font: fontRegular,
    color: colorBlack,
  });
  currentContactX += wPart1;

  page.drawText(emailText, {
    x: currentContactX,
    y: cursorY,
    size: contactSize,
    font: fontRegular,
    color: colorBlack,
  });
  addLink(currentContactX, cursorY, wEmail, contactSize, 'mailto:vasudevann.dev@gmail.com');
  currentContactX += wEmail;

  page.drawText(contactPart2, {
    x: currentContactX,
    y: cursorY,
    size: contactSize,
    font: fontRegular,
    color: colorBlack,
  });

  cursorY -= 11;

  // Social Links: LinkedIn | GitHub | LeetCode | CodeChef | Credly
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vasudevan-r-870a8a2a7' },
    { name: 'GitHub', url: 'https://github.com/Vasu-1001' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/vasu1001/' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/vasu_1001' },
    { name: 'Credly', url: 'https://www.credly.com/users/vasu-devan.8fc47ff6' },
  ];

  const sepText = ' | ';
  const linksSize = 8.5;
  const wSep = fontRegular.widthOfTextAtSize(sepText, linksSize);

  let totalLinksWidth = 0;
  socialLinks.forEach((item, index) => {
    totalLinksWidth += fontRegular.widthOfTextAtSize(item.name, linksSize);
    if (index < socialLinks.length - 1) totalLinksWidth += wSep;
  });

  let currentLinkX = (width - totalLinksWidth) / 2;
  socialLinks.forEach((item, index) => {
    const itemWidth = fontRegular.widthOfTextAtSize(item.name, linksSize);
    page.drawText(item.name, {
      x: currentLinkX,
      y: cursorY,
      size: linksSize,
      font: fontRegular,
      color: colorBlack,
    });
    // underline
    page.drawLine({
      start: { x: currentLinkX, y: cursorY - 1 },
      end: { x: currentLinkX + itemWidth, y: cursorY - 1 },
      thickness: 0.5,
      color: colorBlack,
    });
    addLink(currentLinkX, cursorY, itemWidth, linksSize, item.url);
    currentLinkX += itemWidth;

    if (index < socialLinks.length - 1) {
      page.drawText(sepText, {
        x: currentLinkX,
        y: cursorY,
        size: linksSize,
        font: fontRegular,
        color: colorBlack,
      });
      currentLinkX += wSep;
    }
  });

  cursorY -= 6;

  // ==========================================
  // PROFESSIONAL SUMMARY
  // ==========================================
  drawSectionHeader('PROFESSIONAL SUMMARY');
  const summaryText =
    'Final-year Computer Science and Engineering student with 4 internships in Java, Spring Boot, Full Stack and AI/ML development. Built Vaprideen AI, an enterprise AI operations, governance and security platform, along with full-stack and AI-powered applications using Java, Spring Boot, React.js and Python. Winner of Smart India Hackathon (SIH), Internal Level and 2nd Prize winner at a 24-hours national-level hackathon, with participation in 7 hackathons. National Gold Medalist in Jump Rope and Kalam’s World Records Participant. Seeking a Software Engineer role to build reliable, scalable systems.';

  const summaryLines = wrapText(summaryText, contentWidth, fontRegular, 8.2);
  for (const line of summaryLines) {
    page.drawText(line, {
      x: marginX,
      y: cursorY,
      size: 8.2,
      font: fontRegular,
      color: colorBlack,
    });
    cursorY -= 10;
  }

  // ==========================================
  // EDUCATION
  // ==========================================
  drawSectionHeader('EDUCATION');

  // Edu 1
  page.drawText('B.E., Computer Science and Engineering', {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontBold,
    color: colorBlack,
  });
  const beInst = ' | Suguna College of Engineering, Coimbatore';
  const beDegWidth = fontBold.widthOfTextAtSize('B.E., Computer Science and Engineering', 8.5);
  page.drawText(beInst, {
    x: marginX + beDegWidth,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorBlack,
  });
  const dateEdu1 = '2023 – 2027';
  const dateEdu1Width = fontRegular.widthOfTextAtSize(dateEdu1, 8.5);
  page.drawText(dateEdu1, {
    x: width - marginX - dateEdu1Width,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorBlack,
  });

  cursorY -= 10;
  page.drawText('Affiliated to Anna University, Chennai | CGPA: 8.0 / 10 (till 6th semester)', {
    x: marginX,
    y: cursorY,
    size: 8,
    font: fontItalic,
    color: colorGray,
  });

  cursorY -= 10.5;
  // Edu 2
  page.drawText('Higher Secondary (12th)', {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontBold,
    color: colorBlack,
  });
  const hsInst = ' | Government Boys Higher Secondary School, Cuddalore';
  const hsWidth = fontBold.widthOfTextAtSize('Higher Secondary (12th)', 8.5);
  page.drawText(hsInst, {
    x: marginX + hsWidth,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorBlack,
  });
  const dateEdu2 = '2022 – 2023';
  const dateEdu2Width = fontRegular.widthOfTextAtSize(dateEdu2, 8.5);
  page.drawText(dateEdu2, {
    x: width - marginX - dateEdu2Width,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorBlack,
  });

  cursorY -= 10;
  page.drawText('Tamil Nadu State Board | Computer Science stream | 72%', {
    x: marginX,
    y: cursorY,
    size: 8,
    font: fontItalic,
    color: colorGray,
  });
  cursorY -= 3;

  // ==========================================
  // TECHNICAL SKILLS
  // ==========================================
  drawSectionHeader('TECHNICAL SKILLS');

  const skillsData = [
    { cat: 'Languages', list: 'Java, Python, JavaScript (ES6+), TypeScript, SQL' },
    { cat: 'Backend', list: 'Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security (JWT), REST APIs, JDBC' },
    { cat: 'Frontend', list: 'React.js, HTML5, CSS3, Tailwind CSS, Bootstrap' },
    { cat: 'Databases', list: 'MySQL, MongoDB, PostgreSQL' },
    { cat: 'AI/ML', list: 'Machine Learning, Deep Learning, NLP, Generative AI, LLMs, RAG | NumPy, Pandas, Scikit-learn, OpenCV' },
    { cat: 'Cloud & DevOps', list: 'AWS, Docker, Vercel, Render' },
    { cat: 'Tools', list: 'Git, GitHub, Maven, JUnit, Postman, IntelliJ IDEA, VS Code' },
  ];

  const colCatWidth = 84;
  for (const s of skillsData) {
    page.drawText(s.cat, {
      x: marginX,
      y: cursorY,
      size: 8.2,
      font: fontBold,
      color: colorBlack,
    });
    page.drawText(s.list, {
      x: marginX + colCatWidth,
      y: cursorY,
      size: 8.2,
      font: fontRegular,
      color: colorBlack,
    });
    cursorY -= 10;
  }
  cursorY -= 2;

  // ==========================================
  // INTERNSHIP EXPERIENCE
  // ==========================================
  drawSectionHeader('INTERNSHIP EXPERIENCE');

  const internships = [
    {
      role: 'AI Intern',
      company: 'CodeOrbit Tech',
      date: 'Aug 2026 – Present',
      bullets: [
        'Developing and training ML models in Python using Scikit-learn, NumPy, and Pandas.',
        'Handling data collection, cleaning and preprocessing to prepare datasets for model development.',
      ],
    },
    {
      role: 'Java & Full Stack Intern',
      company: 'QuenoXa Global Technologies',
      date: 'Jun 2026 – Jul 2026',
      bullets: [
        'Developed E-Learning Management and Event Ticket Booking systems using Java, Spring Boot, React.js, REST APIs and MySQL.',
        'Designed the database schema and developed REST APIs across application modules.',
      ],
    },
    {
      role: 'Full Stack Intern',
      company: 'Brainery Spot Technology',
      date: 'Dec 2025 – Jan 2026',
      bullets: [
        'Developed frontend, backend and database features using React.js, Spring Boot and MySQL with REST API integration.',
        'Worked in a Git-based workflow for version control and collaborative development.',
      ],
    },
    {
      role: 'Generative AI Intern',
      company: 'AdroitT Technologies (Oracle University)',
      date: 'Mar 2025 – May 2025',
      bullets: [
        'Built a Generative AI application in Python using prompt engineering to improve response quality.',
        'Applied Generative AI techniques to develop AI-powered solutions.',
      ],
    },
  ];

  for (const item of internships) {
    page.drawText(item.role, {
      x: marginX,
      y: cursorY,
      size: 8.5,
      font: fontBold,
      color: colorBlack,
    });
    const rWidth = fontBold.widthOfTextAtSize(item.role, 8.5);
    page.drawText(` — ${item.company}`, {
      x: marginX + rWidth,
      y: cursorY,
      size: 8.5,
      font: fontRegular,
      color: colorBlack,
    });

    const dWidth = fontItalic.widthOfTextAtSize(item.date, 8.2);
    page.drawText(item.date, {
      x: width - marginX - dWidth,
      y: cursorY,
      size: 8.2,
      font: fontItalic,
      color: colorGray,
    });

    cursorY -= 9.5;
    for (const b of item.bullets) {
      page.drawText('•', {
        x: marginX + 4,
        y: cursorY,
        size: 8,
        font: fontRegular,
        color: colorBlack,
      });
      const bLines = wrapText(b, contentWidth - 14, fontRegular, 8.2);
      for (let i = 0; i < bLines.length; i++) {
        page.drawText(bLines[i], {
          x: marginX + 14,
          y: cursorY,
          size: 8.2,
          font: fontRegular,
          color: colorBlack,
        });
        if (i < bLines.length - 1) cursorY -= 9.5;
      }
      cursorY -= 9.5;
    }
    cursorY -= 1.5;
  }

  // ==========================================
  // PROJECTS
  // ==========================================
  drawSectionHeader('PROJECTS');

  const projectsData = [
    {
      title: 'Vaprideen AI — Enterprise AI Operations, Governance & Security Platform (Team Leader)',
      badge: 'Final-Year Project',
      tech: 'Python, Java, Spring Boot, React.js, MongoDB, AWS',
      bullets: [
        'Developed AI model management, monitoring and cost analytics using Spring Boot REST APIs and React.js.',
        'Integrated LLM/RAG with MongoDB for AI risk and security governance.',
        'Implemented risk assessment, policy enforcement and centralized AI activity monitoring.',
      ],
    },
    {
      title: 'Real-Time Auction & Bid Management Platform (Team Leader)',
      badge: '2nd Prize — National-Level Hackathon (Mar 2026)',
      tech: 'React.js, Java, Spring Boot, MongoDB',
      bullets: [
        'Built Spring Boot REST APIs and backend validation logic for product listings, bidding, bid history and winner selection.',
        'Developed a React.js admin dashboard to manage products, auctions, bids and auction status.',
        'Built and demoed the complete platform within the hackathon’s 24-hour window.',
      ],
    },
    {
      title: 'AI-Driven Healthcare Intelligence Platform (Team Member)',
      badge: 'Finalist — National-Level Hackathon (Oct 2025)',
      tech: 'Python, AI/ML, NLP, HTML, CSS, JavaScript',
      bullets: [
        'Designed the end-to-end query-processing pipeline and a user-facing dashboard for AI-driven health responses.',
        'Developed an NLP chatbot for symptom-related queries with context-aware responses.',
        'Implemented an offline response workflow so core chatbot functionality works without continuous internet connectivity.',
      ],
    },
  ];

  for (const proj of projectsData) {
    page.drawText(proj.title, {
      x: marginX,
      y: cursorY,
      size: 8.5,
      font: fontBold,
      color: colorBlack,
    });

    const bWidth = fontItalic.widthOfTextAtSize(proj.badge, 8);
    page.drawText(proj.badge, {
      x: width - marginX - bWidth,
      y: cursorY,
      size: 8,
      font: fontItalic,
      color: colorGray,
    });

    cursorY -= 9.5;
    page.drawText(proj.tech, {
      x: marginX,
      y: cursorY,
      size: 8,
      font: fontItalic,
      color: colorGray,
    });

    cursorY -= 9.5;
    for (const b of proj.bullets) {
      page.drawText('•', {
        x: marginX + 4,
        y: cursorY,
        size: 8,
        font: fontRegular,
        color: colorBlack,
      });
      const bLines = wrapText(b, contentWidth - 14, fontRegular, 8.2);
      for (let i = 0; i < bLines.length; i++) {
        page.drawText(bLines[i], {
          x: marginX + 14,
          y: cursorY,
          size: 8.2,
          font: fontRegular,
          color: colorBlack,
        });
        if (i < bLines.length - 1) cursorY -= 9.5;
      }
      cursorY -= 9.5;
    }
    cursorY -= 1.5;
  }

  // ==========================================
  // ACHIEVEMENTS
  // ==========================================
  drawSectionHeader('ACHIEVEMENTS');

  const achievementsData = [
    { title: 'Gold Medalist', rest: ' — National Jump Rope Championship, Indian Jump Rope Federation', date: 'July 2022' },
    { title: 'Gold Medalist', rest: ' — South India Level Urban Games Championship, World Urban Games', date: 'Aug 2022' },
    { title: 'Silver Medalist', rest: ' — Inter-School Table Tennis Tournament, Thanjavur District Table Tennis Association', date: 'Dec 2022' },
    { title: 'Kalam’s World Records Participant', rest: ' — Non-Stop 24-Hour Continuous Programming Codeathon', date: 'June 2024' },
    { title: 'Winner', rest: ' — Smart India Hackathon (SIH), Internal Level', date: 'Sep 2026' },
    { title: '2nd Prize', rest: ' — 24-Hour National-Level Hackathon, Suguna College of Engineering', date: 'Mar 2026' },
  ];

  for (const a of achievementsData) {
    page.drawText('•', {
      x: marginX + 4,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorBlack,
    });
    page.drawText(a.title, {
      x: marginX + 14,
      y: cursorY,
      size: 8.2,
      font: fontBold,
      color: colorBlack,
    });
    const tWidth = fontBold.widthOfTextAtSize(a.title, 8.2);
    page.drawText(a.rest, {
      x: marginX + 14 + tWidth,
      y: cursorY,
      size: 8.2,
      font: fontRegular,
      color: colorBlack,
    });

    const dWidth = fontRegular.widthOfTextAtSize(a.date, 8);
    page.drawText(a.date, {
      x: width - marginX - dWidth,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorGray,
    });

    cursorY -= 10;
  }
  cursorY -= 1;

  // ==========================================
  // CERTIFICATIONS
  // ==========================================
  drawSectionHeader('CERTIFICATIONS');

  const certsData = [
    { title: 'Cisco Networking Academy & Anudip Foundation — Full Stack Web Development', date: 'Jun 2026' },
    { title: 'AWS — Solutions Architecture Job Simulation', date: 'Oct 2025' },
    { title: 'Forage — GenAI Powered Data Analytics Job Simulation', date: 'Oct 2025' },
    { title: 'IBM — Introduction to Artificial Intelligence', date: 'Sep 2025' },
    { title: 'Linux Foundation — Introduction to DevOps and Site Reliability Engineering', date: 'July 2026' },
    { title: 'HackerRank — Java (Basic), Python (Basic)', date: 'July 2026' },
  ];

  for (const c of certsData) {
    page.drawText('•', {
      x: marginX + 4,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorBlack,
    });
    page.drawText(c.title, {
      x: marginX + 14,
      y: cursorY,
      size: 8.2,
      font: fontRegular,
      color: colorBlack,
    });

    const dWidth = fontRegular.widthOfTextAtSize(c.date, 8);
    page.drawText(c.date, {
      x: width - marginX - dWidth,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorGray,
    });

    cursorY -= 10;
  }

  console.log('Final cursorY:', cursorY);

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(process.cwd(), 'public', 'resume.pdf'), pdfBytes);
  if (fs.existsSync(path.join(process.cwd(), 'dist'))) {
    fs.writeFileSync(path.join(process.cwd(), 'dist', 'resume.pdf'), pdfBytes);
  }
  console.log('Saved resume.pdf successfully! File size:', pdfBytes.length);
}

generateResumePdf().catch((err) => {
  console.error(err);
  process.exit(1);
});
