/* ═══════════════════════════════════════════════════════════
   SpyBot AI — Static Portfolio AI Agent
   No backend, no API keys — runs entirely in the browser
   Data sourced from: team-visored.vercel.app & CTFtime
   ═══════════════════════════════════════════════════════════ */

const PORTFOLIO_DATA = window.PORTFOLIO_DATA = {
  name: "Bikash Sarraf",
  alias: "Spydomain",
  location: "Kathmandu, Nepal",
  email: "contactme@bikashkumarsarraf.com.np",
  website: "www.bikashkumarsarraf.com.np",
  college: "Softwarica College of IT and E-Commerce, Gyaneshwor, Kathmandu",
  degree: "Bachelor's in Cyber Security and Ethical Hacking",
  tagline: "Cybersecurity & Ethical Hacking Enthusiast",
  about: "A passionate cybersecurity student with a strong interest in ethical hacking and web security. His journey in technology started with a curiosity about how things work. He enjoys participating in CTF challenges, learning about new security vulnerabilities, and contributing to open-source security tools. His goal is to become a skilled website penetration tester.",

  education: [
    { title: "Bachelor's in Cyber Security and Ethical Hacking", school: "Softwarica College of IT & E-Commerce, Gyaneshwor, Kathmandu", year: "2024 \u2014 Present", gpa: "" },
    { title: "+2 Science (Biology)", school: "Xavier International College, Kalopul, Kathmandu", year: "2022 \u2014 2024", gpa: "3.08" },
    { title: "SEE", school: "Shree Sharaswasti English Boarding School, Lipanimal-3, Bara, Nepal", year: "2022", gpa: "3.10" }
  ],

  skills: {
    languages: [
      { name: "HTML/CSS", level: 75 },
      { name: "Python", level: 70 },
      { name: "JavaScript/Node.js", level: 65 },
      { name: "React.js", level: 55 },
      { name: "C", level: 50 },
      { name: "Bash Scripting", level: 65 },
      { name: "MySQL/PHP", level: 45 }
    ],
    security: [
      { name: "OSINT", level: 70 },
      { name: "Penetration Testing", level: 60 },
      { name: "Web Application Security", level: 65 },
      { name: "Network Security", level: 55 },
      { name: "Bug Bounty", level: 45 },
      { name: "Session Hijacking", level: 50 }
    ]
  },

  projects: [
    { name: "Keylogger", tech: "Python", desc: "A Python-based keylogger for educational purposes", link: "github.com/Spydomain/keylogger" },
    { name: "Bike Rental Nepal", tech: "Node.js + React", desc: "Full-stack bike rental platform", link: "github.com/Spydomain/front" },
    { name: "CVE-2023-22809 Exploits", tech: "Python", desc: "Automated exploits for CVE-2023-22809 vulnerability", link: "github.com/Spydomain/CVE-2023-22809-automated-python-exploits" },
    { name: "ClipboardAI", tech: "Bash", desc: "Sends copied text to LLAMA and pops up instant offline answers", link: "github.com/Spydomain/ClipboardAI" },
    { name: "NotesVista", tech: "MERN Stack", desc: "Modern note-taking application", link: "notesvista.netlify.app" },
    { name: "NebullaComms", tech: "Node.js, React (MERN Stack)", desc: "Modern communication application supporting chats, audio & video calls, and more", link: "nebullacomms.netlify.app" },
    { name: "FGE Identification Test Platform", tech: "Flutter", desc: "Test-taking app for French Army", link: "army-testgit-45113358-666ec.web.app" },
    { name: "CVE-2021-22555 PoC", tech: "Python", desc: "Proof of Concept for CVE-2021-22555 vulnerability", link: "github.com/Spydomain/CVE-2021-22555-Poc" },
    { name: "CVE-2017-1000112 PoC", tech: "Python", desc: "Proof of Concept for CVE-2017-1000112 vulnerability", link: "github.com/Spydomain/CVE-2017-1000112-PoC" },
    { name: "CVE-2022-0435 PoC", tech: "Python", desc: "Proof of Concept for CVE-2022-0435 vulnerability", link: "github.com/Spydomain/CVE-2022-0435-Poc" },
    { name: "Team Visored Website", tech: "HTML, CSS, JavaScript", desc: "Developed and manages the official Team Visored website with live CTFtime data sync", link: "team-visored.vercel.app" }
  ],

  certifications: [
    "Cisco Ethical Hacker",
    "TryHackMe Pre-Security",
    "TryHackMe Cyber Security 101",
    "TryHackMe Advent of Cyber 2022",
    "TryHackMe Advent of Cyber 2023",
    "TryHackMe Advent of Cyber 2024",
    "Certified Cybersecurity Educator Professional (CCEP)",
    "Google Cybersecurity Professional Certificate",
    "CompTIA PenTest+ (PT0-002) Course Completed (Coursera)",
    "Certified API Security Analyst",
    "APIsec Certified Practitioner",
    "Certified Red Team Operations Management (CRTOM)",
    "Certified C++ Practitioner Professional (CCPP)",
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "Hack The Box Mini Pro Labs: Mythical",
    "Hack The Box Mini Pro Labs: Puppet"
  ],

  achievements: [
    "2nd Place \u2014 Pentester Nepal CTF (2026) as team Visored",
    "8th Place \u2014 HackAstra Finale CTF by Herald College",
    "9th Place \u2014 Trinity Technology Solo CTF",
    "18th Place (Global) \u2014 Hack\u0905\u0938\u094d\u0924\u094d\u0930 CTF (May 2026) as Visored \u2014 Team Visored's Best CTFtime Rank",
    "18th Place \u2014 HackAstra CTF & Qualified for Finals",
    "63rd Place \u2014 CSAW CTF Qualification Round 2026 (5,179 pts \u2014 Highest Single-Event Score)",
    "69th Place \u2014 Midnight CTF",
    "71st Place \u2014 DefCamp CTF (D-CTF) 2026 Quals",
    "76th Place \u2014 K17 CTF 2026 (3,722 pts)",
    "Team Visored Captain and Active Member",
    "Former Blue Lock Eleven CTF Team Member",
    "TryHackMe: Reached Top 1% and a 500+ Day Streak",
    "HackerOne Bug Bounty Program (Valid Bug Submission — Marked Duplicate)",
    "TryHackMe Lab Creator (Ganheist Room)"
  ],

  teams: {
    current: {
      name: "Team Visored",
      role: "captain and active member",
      website: "https://team-visored.vercel.app/",
      linkedin: "https://www.linkedin.com/company/team-visored",
      ctftime: "https://ctftime.org/team/447690",
      email: "teamVisored@proton.me",
      description: "Team Visored is a competitive cyber security and CTF team from Nepal. A small group of nerds trying to hack. They follow the weird request, the loose permission, the line of code that does not belong. CTFtime verified, based in Nepal.",
      tagline: "See beyond the signal",
      season: "2026",
      activeMembers: 5
    },
    former: {
      name: "Blue Lock Eleven",
      role: "former member",
      website: "https://bluelockeleven.team/"
    }
  },

  /* Current Team Visored members — 5 active operators, CTFtime 2026 season */
  teamMembers: [
    {
      handle: "MonsterDuckky",
      num: "01",
      role: "Pwn // Web & OSINT Operator",
      specializations: ["Web Application Security", "OSINT & Threat Intelligence"],
      ctftime: "https://ctftime.org/user/269092",
      status: "active"
    },
    {
      handle: "Spydomain",
      num: "02",
      realName: "Bikash Sarraf",
      role: "Web Application Security // Cryptography & Architecture Operator",
      specializations: ["Web Application Security", "Cryptography & Cryptanalysis", "Digital Forensics & Incident Response"],
      ctftime: "https://ctftime.org/user/272387",
      portfolio: "https://bikashkumarsarraf.com.np",
      status: "active"
    },
    {
      handle: "hellospyder",
      num: "03",
      role: "Cryptography // Forensics Operator",
      specializations: ["Cryptography", "Digital Forensics"],
      ctftime: "https://ctftime.org/user/272391",
      status: "active"
    },
    {
      handle: "Skai",
      num: "04",
      role: "Threat Recon // OSINT Operator",
      specializations: ["Threat Recon", "OSINT"],
      ctftime: "https://ctftime.org/user/273012",
      status: "active"
    },
    {
      handle: "ItsPratyh",
      num: "05",
      role: "Binary & Reversing // CTF Operator",
      specializations: ["Binary Exploitation", "Reverse Engineering"],
      ctftime: "https://ctftime.org/user/273625",
      status: "active"
    }
  ],

  /* CTFtime live data — Team Visored 2026 season — ctftime.org/team/447690 */
  ctf: {
    ctftimeUrl: "https://ctftime.org/team/447690",
    season: 2026,
    stats: {
      totalPoints: 17696,
      totalFinishes: 7,
      bestRank: 18,
      bestScore: 5179,
      bestScoreEvent: "CSAW CTF Qualification Round 2026",
      bestRankEvent: "Hack\u0905\u0938\u094d\u0924\u094d\u0930",
      nationalRanking: "Unranked (Pending 2026 Rating)",
      country: "Nepal"
    },
    results: [
      {
        title: "Hack\u0905\u0938\u094d\u0924\u094d\u0930",
        date: "May 29\u201330, 2026",
        place: 18,
        points: 5057,
        profile: "Visored",
        url: "https://ctftime.org/event/3270/",
        note: "Best global rank achieved by Team Visored"
      },
      {
        title: "CSAW CTF Qualification Round 2026",
        date: "Sep 18\u201320, 2026",
        place: 63,
        points: 5179,
        profile: "Team Visored",
        url: "https://ctftime.org/event/3355/",
        note: "Highest points scored in a single event \u2014 5,179 pts"
      },
      {
        title: "DefCamp Capture the Flag (D-CTF) 2026 Quals",
        date: "Sep 18\u201320, 2026",
        place: 71,
        points: 704,
        profile: "Team Visored",
        url: "https://ctftime.org/event/3392/"
      },
      {
        title: "K17 CTF 2026",
        date: "Sep 11\u201313, 2026",
        place: 76,
        points: 3722,
        profile: "Team Visored",
        url: "https://ctftime.org/event/3145/"
      },
      {
        title: "07CTF 2026",
        date: "Sep 19\u201320, 2026",
        place: 110,
        points: 200,
        profile: "Team Visored",
        url: "https://ctftime.org/event/3365/"
      },
      {
        title: "PwnSec CTF 2026",
        date: "Sep 12\u201313, 2026",
        place: 130,
        points: 1124,
        profile: "TeamVisored",
        url: "https://ctftime.org/event/3159/"
      },
      {
        title: "NullOrigin CTF Qualifiers",
        date: "Sep 18, 2026",
        place: 229,
        points: 1710,
        profile: "Team Visored",
        url: "https://ctftime.org/event/3346/"
      }
    ],
    upcoming: [
      {
        title: "SunshineCTF 2026",
        date: "Sep 26\u201328, 2026",
        url: "https://ctftime.org/event/3399/"
      },
      {
        title: "Pointer Overflow CTF - 2026",
        date: "Sep 27 \u2013 Dec 6, 2026",
        url: "https://ctftime.org/event/3020/"
      },
      {
        title: "Securinets CTF Quals 2026",
        date: "Oct 3\u20134, 2026",
        url: "https://ctftime.org/event/3364/"
      }
    ]
  },

  social: {
    github: "github.com/Spydomain",
    linkedin: "linkedin.com/in/bikash-sarraf-683787320",
    instagram: "instagram.com/bikash.sarraf.399",
    tryhackme: "tryhackme.com/p/bikashsarraf",
    hackthebox: "app.hackthebox.com/users/2178446",
    medium: "medium.com/@spydomain1"
  },

  interests: ["CTF challenges", "security vulnerabilities", "open-source security tools", "ethical hacking", "web security", "penetration testing", "bug bounty"],

  funFacts: [
    "Bikash has achieved a 500+ days streak on TryHackMe, placing him in the Top 1% globally!",
    "His alias 'Spydomain' reflects his passion for OSINT and digital reconnaissance.",
    "He's built 11 projects spanning Python, Node.js, React, Flutter, Bash, and JavaScript!",
    "He holds 16 cybersecurity certifications \u2014 including CRTOM, CCPP, HTB Mythical, HTB Puppet, and Oracle Cloud AI!",
    "He won 2nd place in Pentester Nepal CTF (2026) with team Visored!",
    "He placed 8th in HackAstra Finale CTF and 9th in Trinity Technology Solo CTF!",
    "He is captain and an active member of Team Visored and a former Blue Lock Eleven team member.",
    "His ClipboardAI project works completely offline using LLAMA!",
    "He built a CVE exploit tool (CVE-2023-22809) for educational purposes.",
    "He created a custom lab challenge 'Ganheist' on TryHackMe!",
    "Team Visored achieved 18th place globally in Hack\u0905\u0938\u094d\u0924\u094d\u0930 CTF \u2014 their best CTFtime rank!",
    "Team Visored scored 5,179 points in CSAW CTF 2026 \u2014 their highest single-event score!",
    "He developed and manages the Team Visored website with live CTFtime data sync!",
    "Team Visored has 5 active operators and has completed 7 verified CTF events in 2026!"
  ]
};

/* ── Helper: ordinal suffix ── */
function getOrdinalSuffix(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

/* ── Intent Detection ── */
const INTENTS = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'sup', 'greetings', 'howdy', 'yo', 'namaste', 'hola'],
    responses: () => [
      `Hey there! \uD83D\uDC4B I'm **SpyBot**, Bikash's AI assistant. Ask me about his **skills**, **projects**, **certifications**, **CTF results**, or anything else.`,
      `Hello! \uD83D\uDD12 Welcome to Spydomain's portfolio. I'm his AI agent \u2014 ask me anything about Bikash Sarraf!`,
      `Namaste! \uD83D\uDE4F I'm SpyBot. Want to know about Bikash's **hacking skills**, **Team Visored CTF results**, **projects**, or **certifications**? Just ask!`
    ]
  },
  {
    id: 'who',
    keywords: ['who', 'about', 'tell me about', 'introduce', 'yourself', 'bikash', 'spydomain', 'whoami', 'who is', 'who are'],
    responses: () => [
      `**${PORTFOLIO_DATA.name}** (aka **${PORTFOLIO_DATA.alias}**) is a ${PORTFOLIO_DATA.tagline} from ${PORTFOLIO_DATA.location}. \uD83D\uDEE1\uFE0F\n\n${PORTFOLIO_DATA.about}\n\n\uD83D\uDCCD Based in **${PORTFOLIO_DATA.location}**\n\uD83C\uDF93 Studying at **${PORTFOLIO_DATA.college}**\n\uD83D\uDEA9 Captain and active member of **${PORTFOLIO_DATA.teams.current.name}**; former member of **${PORTFOLIO_DATA.teams.former.name}**\n\uD83C\uDDF3\uD83C\uDDF5 Representing **Nepal** on CTFtime`
    ]
  },
  {
    id: 'education',
    keywords: ['education', 'study', 'college', 'university', 'school', 'degree', 'gpa', 'academic', 'qualification', 'learn', 'student'],
    responses: () => {
      const eduList = PORTFOLIO_DATA.education.map(e =>
        `\uD83D\uDCDA **${e.title}**${e.gpa ? ` (GPA: ${e.gpa})` : ''}\n   ${e.school} \u2014 ${e.year}`
      ).join('\n\n');
      return [`Here's Bikash's education background:\n\n${eduList}`];
    }
  },
  {
    id: 'skills',
    keywords: ['skill', 'language', 'technology', 'tech', 'programming', 'code', 'python', 'javascript', 'react', 'node', 'bash', 'html', 'css', 'php', 'mysql', 'c lang'],
    responses: () => {
      const langs = PORTFOLIO_DATA.skills.languages.map(s => `  ${s.name}: **${s.level}%**`).join('\n');
      const sec = PORTFOLIO_DATA.skills.security.map(s => `  ${s.name}: **${s.level}%**`).join('\n');
      return [`\uD83D\uDCBB **Programming & Languages:**\n${langs}\n\n\uD83D\uDD10 **Security Skills:**\n${sec}\n\nHis strongest language is **HTML/CSS (75%)** and in security, **OSINT (70%)** leads!`];
    }
  },
  {
    id: 'hacking',
    keywords: ['hack', 'security', 'pentest', 'penetration', 'osint', 'bug bounty', 'exploit', 'vulnerability', 'offensive', 'defensive', 'cyber', 'infosec', 'session hijack'],
    responses: () => {
      const sec = PORTFOLIO_DATA.skills.security.map(s => `  \uD83C\uDFAF ${s.name}: **${s.level}%**`).join('\n');
      return [`Bikash's cybersecurity skills are impressive! \uD83D\uDD12\n\n${sec}\n\nHe actively practices on **TryHackMe** and **HackTheBox**, participates in **CTF challenges**, and has built real-world exploit tools like his **CVE-2023-22809** automated exploits.`];
    }
  },
  {
    id: 'projects',
    keywords: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'app', 'application', 'tool', 'github'],
    responses: () => {
      const projList = PORTFOLIO_DATA.projects.map((p, i) =>
        `**${i+1}. ${p.name}** (${p.tech})\n   ${p.desc}\n   \uD83D\uDD17 ${p.link}`
      ).join('\n\n');
      return [`Bikash has built **${PORTFOLIO_DATA.projects.length} amazing projects**: \uD83D\uDE80\n\n${projList}`];
    }
  },
  {
    id: 'specific_project',
    keywords: ['keylogger', 'bike rental', 'cve', 'clipboardai', 'clipboard', 'notesvista', 'notes', 'nebulla', 'comms', 'fge', 'army'],
    responses: (input) => {
      const lower = input.toLowerCase();
      let project = null;
      if (lower.includes('keylog')) project = PORTFOLIO_DATA.projects[0];
      else if (lower.includes('bike') || lower.includes('rental')) project = PORTFOLIO_DATA.projects[1];
      else if (lower.includes('cve') || lower.includes('exploit')) project = PORTFOLIO_DATA.projects[2];
      else if (lower.includes('clipboard') || lower.includes('llama')) project = PORTFOLIO_DATA.projects[3];
      else if (lower.includes('notes') || lower.includes('vista')) project = PORTFOLIO_DATA.projects[4];
      else if (lower.includes('nebulla') || lower.includes('comms')) project = PORTFOLIO_DATA.projects[5];
      else if (lower.includes('fge') || lower.includes('army') || lower.includes('flutter')) project = PORTFOLIO_DATA.projects[6];
      if (project) {
        return [`**${project.name}** \uD83D\uDEE0\uFE0F\n\n\uD83D\uDCCB **Tech:** ${project.tech}\n\uD83D\uDCDD **Description:** ${project.desc}\n\uD83D\uDD17 **Link:** ${project.link}`];
      }
      return null;
    }
  },
  {
    id: 'certifications',
    keywords: ['cert', 'certification', 'certified', 'badge', 'tryhackme', 'hackthebox', 'htb', 'mythical', 'puppet', 'cisco', 'google', 'comptia', 'ccep', 'api security', 'crtom', 'ccpp', 'oracle'],
    responses: () => {
      const certList = PORTFOLIO_DATA.certifications.map(c => `  \u2705 ${c}`).join('\n');
      return [`Bikash holds **${PORTFOLIO_DATA.certifications.length} certifications**: \uD83C\uDFC5\n\n${certList}\n\nThat's an impressive collection!`];
    }
  },
  {
    id: 'teams',
    keywords: ['team visored', 'visored', 'blue lock eleven', 'blue lock', 'captain', 'ctf team', 'current team', 'former team', 'which team', 'what team', 'team website'],
    responses: () => {
      const { current, former } = PORTFOLIO_DATA.teams;
      return [`Bikash is the **${current.role}** of **${current.name}**. He is a **${former.role}** of **${former.name}**.\n\n**Team Visored** \uD83D\uDEA9\n\u2022 ${current.description}\n\u2022 Tagline: *"${current.tagline}"*\n\u2022 Season: **${current.season}** | Active Operators: **${current.activeMembers}**\n\u2022 \uD83C\uDF10 Website: ${current.website}\n\u2022 \uD83D\uDCBC LinkedIn: ${current.linkedin}\n\u2022 \uD83C\uDFAF CTFtime: ${current.ctftime}\n\u2022 \uD83D\uDCE7 Email: ${current.email}\n\n**Former Team:** ${former.name}\n\uD83C\uDF10 Website: ${former.website}`];
    }
  },
  {
    id: 'team_members',
    keywords: ['member', 'operator', 'squad', 'monsterduckky', 'hellospyder', 'skai', 'itspratyh', 'teammate', 'roster', 'lineup'],
    responses: () => {
      const memberList = PORTFOLIO_DATA.teamMembers.map(m =>
        `  **${m.num}. ${m.handle}**${m.realName ? ` (${m.realName})` : ''}\n     \uD83C\uDFAF Role: ${m.role}\n     \uD83D\uDD27 Skills: ${m.specializations.join(', ')}\n     \uD83D\uDD17 CTFtime: ${m.ctftime}${m.portfolio ? `\n     \uD83C\uDF10 Portfolio: ${m.portfolio}` : ''}`
      ).join('\n\n');
      return [`**Team Visored** has **5 active operators** in the 2026 season: \uD83D\uDEA9\n\n${memberList}\n\nAll verified on CTFtime: https://ctftime.org/team/447690`];
    }
  },
  {
    id: 'achievements',
    keywords: ['achievement', 'trophy', 'award', 'rank', 'place', 'contest', 'competition', 'hackastra', 'trinity', 'midnight', 'hackerone', 'bug bounty', 'streak', 'ganheist'],
    responses: () => {
      const achList = PORTFOLIO_DATA.achievements.map(a => `  \uD83C\uDFC6 ${a}`).join('\n');
      return [`Bikash has **${PORTFOLIO_DATA.achievements.length} CTF & Security Achievements**: \uD83D\uDEA9\n\n${achList}`];
    }
  },
  {
    id: 'ctf_results',
    keywords: ['ctf', 'ctftime', 'capture the flag', 'result', 'placement', 'finish', 'hackastra', 'hack astra', 'csaw', 'defcamp', 'k17', '07ctf', 'pwnsec', 'nullorigin', 'ctf record', 'ctf history', 'visored ctf'],
    responses: () => {
      const { stats, results } = PORTFOLIO_DATA.ctf;
      const resultList = results.map((r) => {
        const medal = r.place <= 20 ? '\uD83E\uDD47' : r.place <= 100 ? '\uD83E\uDD48' : '\uD83E\uDD49';
        return `  ${medal} **${r.title}** (${r.date})\n     Place: **${r.place}${getOrdinalSuffix(r.place)}** | Points: **${r.points.toLocaleString()} pts** | Profile: ${r.profile}${r.note ? `\n     \u2139\uFE0F ${r.note}` : ''}`;
      }).join('\n\n');
      return [`**Team Visored CTFtime Results \u2014 2026 Season** \uD83C\uDFAF\n\n\uD83D\uDCCA **Stats:** ${stats.totalFinishes} verified finishes | ${stats.totalPoints.toLocaleString()} total points | Best rank: **${stats.bestRank}th** (${stats.bestRankEvent})\n\n${resultList}\n\n\uD83D\uDD17 Full archive: https://ctftime.org/team/447690`];
    }
  },
  {
    id: 'upcoming_ctf',
    keywords: ['upcoming', 'next ctf', 'future ctf', 'upcoming ctf', 'registered', 'sunshine', 'pointer overflow', 'securinets', 'next competition', 'upcoming competition'],
    responses: () => {
      const { upcoming } = PORTFOLIO_DATA.ctf;
      const upList = upcoming.map((u) =>
        `  \uD83D\uDD52 **${u.title}**\n     Date: ${u.date}\n     \uD83D\uDD17 ${u.url}`
      ).join('\n\n');
      return [`**Team Visored Upcoming CTFs** \uD83D\uDEA9\n\n${upList}\n\nTrack live: https://ctftime.org/team/447690`];
    }
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'message', 'talk', 'mail'],
    responses: () => [
      `Here's how to reach Bikash: \uD83D\uDCEC\n\n\uD83D\uDCE7 **Email:** ${PORTFOLIO_DATA.email}\n\uD83C\uDF10 **Website:** ${PORTFOLIO_DATA.website}\n\uD83D\uDCBC **LinkedIn:** ${PORTFOLIO_DATA.social.linkedin}\n\uD83D\uDC19 **GitHub:** ${PORTFOLIO_DATA.social.github}\n\nOr use the **Contact** page to send a direct message!`
    ]
  },
  {
    id: 'social',
    keywords: ['social', 'instagram', 'linkedin', 'github', 'medium', 'hackthebox', 'htb', 'thm', 'follow'],
    responses: () => {
      const links = Object.entries(PORTFOLIO_DATA.social).map(([k, v]) =>
        `  ${k === 'github' ? '\uD83D\uDC19' : k === 'linkedin' ? '\uD83D\uDCBC' : k === 'instagram' ? '\uD83D\uDCF8' : k === 'tryhackme' ? '\uD83D\uDD12' : k === 'hackthebox' ? '\uD83D\uDCE6' : '\u270D\uFE0F'} **${k}:** ${v}`
      ).join('\n');
      return [`Bikash's social profiles: \uD83C\uDF10\n\n${links}`];
    }
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'country', 'city', 'live', 'based', 'from', 'nepal', 'kathmandu'],
    responses: () => [
      `Bikash is based in **${PORTFOLIO_DATA.location}** \uD83D\uDCCD\uD83C\uDDF3\uD83C\uDDF5\n\nHe studies at **${PORTFOLIO_DATA.college}** in the Gyaneshwor area of Kathmandu.`
    ]
  },
  {
    id: 'experience',
    keywords: ['experience', 'job', 'intern', 'career', 'employ'],
    responses: () => [
      `Bikash is currently a **student** focusing on building his skills and portfolio. \uD83C\uDF93\n\nWhile he doesn't have formal work experience yet, he has:\n- \uD83D\uDE80 Built **11 real-world projects**\n- \uD83C\uDFC5 Earned **16 certifications**\n- \uD83D\uDD12 Active on **TryHackMe** & **HackTheBox**\n- \uD83D\uDEE0\uFE0F Created actual **CVE exploit tools**\n- \uD83D\uDEA9 Captain of **Team Visored** (CTFtime 2026 season)\n- \uD83C\uDF10 Developed and manages the **Team Visored website**\n\nHe's actively seeking cybersecurity opportunities!`
    ]
  },
  {
    id: 'fun_fact',
    keywords: ['fun', 'fact', 'interesting', 'random', 'cool', 'trivia', 'surprise', 'tell me something', 'did you know'],
    responses: () => {
      const fact = PORTFOLIO_DATA.funFacts[Math.floor(Math.random() * PORTFOLIO_DATA.funFacts.length)];
      return [`\uD83C\uDFB2 **Fun Fact:** ${fact}`];
    }
  },
  {
    id: 'capabilities',
    keywords: ['what can you', 'help', 'what do you', 'how to', 'guide', 'assist', 'options', 'menu'],
    responses: () => [
      `I'm **SpyBot** \uD83E\uDD16 \u2014 Bikash's AI assistant! Here's what I can tell you:\n\n\uD83D\uDC64 **About Bikash** \u2014 Who he is\n\uD83C\uDF93 **Education** \u2014 Academic background\n\uD83D\uDCBB **Skills** \u2014 Programming & security\n\uD83D\uDE80 **Projects** \u2014 What he's built\n\uD83C\uDFC5 **Certifications** \u2014 His credentials\n\uD83D\uDEA9 **Team Visored** \u2014 Current CTF team & members\n\uD83C\uDFAF **CTF Results** \u2014 All 7 verified finishes (2026)\n\uD83D\uDD52 **Upcoming CTFs** \u2014 Next competitions\n\uD83D\uDCEC **Contact** \u2014 How to reach him\n\uD83C\uDF10 **Social** \u2014 Social media profiles\n\uD83C\uDFB2 **Fun facts** \u2014 Interesting tidbits\n\nJust ask in natural language!`
    ]
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'thx', 'appreciated', 'awesome', 'great', 'nice', 'cool', 'good'],
    responses: () => [
      `You're welcome! \uD83D\uDE0A Feel free to ask anything else about Bikash!`,
      `Glad I could help! \uD83D\uDD12 Need anything else?`,
      `Anytime! Ask away if you have more questions about Spydomain! \uD83D\uDEE1\uFE0F`
    ]
  },
  {
    id: 'bye',
    keywords: ['bye', 'goodbye', 'see ya', 'later', 'cya', 'exit', 'quit'],
    responses: () => [
      `Goodbye! \uD83D\uDC4B Thanks for visiting Bikash's portfolio. Stay safe in cyberspace! \uD83D\uDD12`,
      `See you later! \uD83D\uDEE1\uFE0F Remember \u2014 hack the planet (ethically)! \uD83D\uDE0E`
    ]
  }
];

const FALLBACK_RESPONSES = [
  `Hmm, I'm not sure about that. Try asking about Bikash's **skills**, **projects**, **certifications**, **CTF results**, or his **team**! \uD83E\uDD14`,
  `I didn't quite catch that. I can tell you about Bikash's **CTF results**, **Team Visored**, **skills**, **certs**, or **contact info**. What would you like to know?`,
  `I'm specifically trained on Bikash's portfolio. Ask me about his **projects**, **certifications**, **skills**, **CTF achievements**, or **background**! \uD83D\uDD12`,
  `That's outside my knowledge! I know all about **Bikash Sarraf (Spydomain)** \u2014 his skills, projects, Team Visored CTF results, and more. What would you like to explore?`
];

const SUGGESTED_QUESTIONS = [
  "Who is Bikash?",
  "What are his skills?",
  "Show me his projects",
  "What certifications does he have?",
  "Tell me a fun fact",
  "How can I contact him?",
  "What's his education?",
  "What hacking skills does he have?",
  "What team does Bikash belong to?",
  "Show Team Visored CTF results",
  "Who are the Team Visored members?",
  "What upcoming CTFs is Team Visored in?"
];

/* ── Matching Engine ── */
function detectIntent(input) {
  const lower = input.toLowerCase().trim();

  // Specific routing for team members query
  if (/\b(member|operator|squad|roster|lineup|monsterduckky|hellospyder|skai|itspratyh)\b/.test(lower)) {
    return INTENTS.find(intent => intent.id === 'team_members').responses(input)[0];
  }

  // CTF results routing (before team routing to catch CTF-specific queries)
  if (/\b(ctftime|ctf result|ctf record|ctf history|placement|hackastra|hack astra|csaw|defcamp|k17|pwnsec|nullorigin|07ctf)\b/.test(lower)
      && !/\b(upcoming|next|future|registered|sunshine|securinets|pointer overflow)\b/.test(lower)) {
    return INTENTS.find(intent => intent.id === 'ctf_results').responses(input)[0];
  }

  // Upcoming CTF routing
  if (/\b(upcoming|next ctf|future ctf|sunshine|pointer overflow|securinets)\b/.test(lower)) {
    return INTENTS.find(intent => intent.id === 'upcoming_ctf').responses(input)[0];
  }

  // Team info routing (no achievements match, no member match)
  if (/\b(visored|blue lock|captain|ctf team|current team|former team|which team|what team|team website|team linkedin)\b/.test(lower)
      && !/\b(achievement|rank|place|won|result|score|point)\b/.test(lower)
      && !/\b(member|operator|squad|monsterduckky|hellospyder|skai|itspratyh)\b/.test(lower)) {
    return INTENTS.find(intent => intent.id === 'teams').responses(input)[0];
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (lower.includes(kw)) {
        // Longer keyword matches are more specific
        score += kw.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  if (bestMatch && bestScore > 0) {
    const responses = bestMatch.responses(input);
    if (responses && responses.length > 0) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

/* ── Simple Markdown-like formatting ── */
function formatResponse(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/https:\/\/[^\s<]+/g, url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

/* ── UI Builder ── */
function initSpyBot() {
  // Create chatbot UI
  const chatHTML = `
    <div class="spybot-fab" id="spybot-fab" title="Chat with SpyBot AI">
      <i class="fas fa-robot"></i>
      <span class="fab-pulse"></span>
    </div>
    <div class="spybot-panel" id="spybot-panel">
      <div class="spybot-header">
        <div class="spybot-header-left">
          <div class="spybot-avatar"><i class="fas fa-robot"></i></div>
          <div>
            <h4>SpyBot AI</h4>
            <span class="spybot-status"><span class="status-dot"></span> Online</span>
          </div>
        </div>
        <button class="spybot-close" id="spybot-close" aria-label="Close chat"><i class="fas fa-times"></i></button>
      </div>
      <div class="spybot-messages" id="spybot-messages"></div>
      <div class="spybot-suggestions" id="spybot-suggestions"></div>
      <div class="spybot-input-area">
        <input type="text" id="spybot-input" placeholder="Ask me about Bikash..." autocomplete="off" />
        <button id="spybot-send" aria-label="Send message"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.id = 'spybot-container';
  container.innerHTML = chatHTML;
  document.body.appendChild(container);

  // Elements
  const fab = document.getElementById('spybot-fab');
  const panel = document.getElementById('spybot-panel');
  const closeBtn = document.getElementById('spybot-close');
  const messages = document.getElementById('spybot-messages');
  const input = document.getElementById('spybot-input');
  const sendBtn = document.getElementById('spybot-send');
  const suggestions = document.getElementById('spybot-suggestions');

  let isOpen = false;
  let hasGreeted = false;

  function toggleChat() {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    fab.classList.toggle('hidden', isOpen);
    if (isOpen && !hasGreeted) {
      hasGreeted = true;
      showGreeting();
    }
    if (isOpen) {
      setTimeout(() => input.focus(), 300);
    }
  }

  fab.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  function showGreeting() {
    addBotMessage(`Hey! \uD83D\uDC4B I'm **SpyBot**, Bikash's AI assistant.\n\nI can tell you about his **skills**, **projects**, **certifications**, **Team Visored CTF results**, and more. Ask me anything!`);
    showSuggestions();
  }

  function showSuggestions() {
    const priority = ["What team does Bikash belong to?", "Show Team Visored CTF results", "Who are the Team Visored members?"];
    const rest = SUGGESTED_QUESTIONS.filter(q => !priority.includes(q));
    const shuffled = [...priority, ...rest.sort(() => 0.5 - Math.random()).slice(0, 2)];
    suggestions.innerHTML = shuffled.map(q =>
      `<button class="suggestion-chip">${q}</button>`
    ).join('');

    suggestions.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        input.value = chip.textContent;
        handleSend();
      });
    });
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'spybot-msg user';
    msg.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
    messages.appendChild(msg);
    scrollToBottom();
  }

  function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'spybot-msg bot';
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    msg.appendChild(bubble);
    messages.appendChild(msg);

    // Typing animation
    bubble.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
    scrollToBottom();

    const delay = Math.min(400 + text.length * 3, 1500);
    setTimeout(() => {
      bubble.innerHTML = formatResponse(text);
      bubble.classList.add('revealed');
      scrollToBottom();
    }, delay);
  }

  function scrollToBottom() {
    setTimeout(() => {
      messages.scrollTop = messages.scrollHeight;
    }, 50);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = '';
    suggestions.innerHTML = '';

    const response = detectIntent(text);
    setTimeout(() => {
      addBotMessage(response);
      // Show new suggestions after response
      setTimeout(() => showSuggestions(), 1000);
    }, 200);
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  });

  sendBtn.addEventListener('click', handleSend);
}

/* ═══════════════════════════════════════════════════════════
   SpyBot Live CTF Sync — Auto-fetches latest data from
   team-visored.vercel.app/achievements every 5 minutes.
   Extracts window.__CTFTIME_INLINE__ baked into the page.
   Falls back to localStorage cache, then static data.
   ═══════════════════════════════════════════════════════════ */

(function initCTFSync() {
  const SOURCE_URL = 'https://team-visored.vercel.app/achievements';
  const CACHE_KEY  = 'spybot_ctf_live_cache';
  const POLL_MS    = 5 * 60 * 1000; // 5 minutes
  let   lastSyncAt = 0;
  let   pollTimer  = null;

  /* ── Parse the baked inline JSON from the achievements page HTML ── */
  function extractInlineData(html) {
    // The page bakes: window.__CTFTIME_INLINE__={...};
    const match = html.match(/window\.__CTFTIME_INLINE__\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
    if (!match) return null;
    try { return JSON.parse(match[1]); } catch (e) { return null; }
  }

  /* ── Map CTFtime inline payload → PORTFOLIO_DATA.ctf shape ── */
  function mapPayload(data) {
    if (!data || !Array.isArray(data.results)) return null;

    const results = data.results.map(r => ({
      title:   r.title   || '',
      date:    formatRange(r.start, r.finish),
      place:   Number(r.place)  || 0,
      points:  Number(r.points) || 0,
      profile: r.profile_name   || 'Team Visored',
      url:     r.url            || ''
    }));

    const upcoming = Array.isArray(data.upcoming) ? data.upcoming.map(u => ({
      title: u.title || '',
      date:  formatRange(u.start, u.finish),
      url:   u.url   || ''
    })) : [];

    const validRanked = results.filter(r => r.place > 0);
    const bestRankItem  = validRanked.length
      ? validRanked.reduce((a, b) => a.place < b.place ? a : b)
      : null;
    const bestScoreItem = results.reduce((a, b) => b.points > a.points ? b : a, results[0] || {});

    const totalPoints  = results.reduce((sum, r) => sum + r.points, 0);
    const totalFinishes = results.length;

    return {
      ctftimeUrl:  SOURCE_URL,
      season:      data.season || new Date().getFullYear(),
      syncedAt:    data.synced_at || new Date().toISOString(),
      stats: {
        totalPoints,
        totalFinishes,
        bestRank:        bestRankItem  ? bestRankItem.place  : null,
        bestScore:       bestScoreItem ? bestScoreItem.points : null,
        bestRankEvent:   bestRankItem  ? bestRankItem.title  : null,
        bestScoreEvent:  bestScoreItem ? bestScoreItem.title : null,
        nationalRanking: data.ranking  ? (data.ranking.country_place
          ? '#' + data.ranking.country_place
          : 'Unranked (Pending ' + (data.season || '') + ' Rating)') : null,
        country: 'Nepal'
      },
      results,
      upcoming
    };
  }

  /* ── ISO range → readable date string ── */
  function formatRange(start, finish) {
    if (!start) return '';
    try {
      const s = new Date(start);
      const f = finish ? new Date(finish) : null;
      const opts = { month: 'short', day: 'numeric', timeZone: 'UTC' };
      const year = s.getUTCFullYear();
      if (!f || s.toDateString() === f.toDateString()) {
        return s.toLocaleDateString('en-US', { ...opts, year: 'numeric', timeZone: 'UTC' });
      }
      if (s.getUTCMonth() === f.getUTCMonth()) {
        return `${s.toLocaleDateString('en-US', opts)}\u2013${f.getUTCDate()}, ${year}`;
      }
      return `${s.toLocaleDateString('en-US', opts)} \u2013 ${f.toLocaleDateString('en-US', opts)}, ${year}`;
    } catch (e) { return start; }
  }

  /* ── Apply fresh CTF data to PORTFOLIO_DATA ── */
  function applyData(ctf) {
    if (!ctf) return;
    PORTFOLIO_DATA.ctf = ctf;

    // Keep achievements array in sync with top CTFtime results
    const ctfAchievements = ctf.results
      .filter(r => r.place > 0)
      .sort((a, b) => a.place - b.place)
      .slice(0, 5)
      .map(r => `${r.place}${getOrdinalSuffix(r.place)} Place \u2014 ${r.title} (${ctf.season}) \u2014 ${r.points.toLocaleString()} pts`);

    // Replace any previous CTFtime-sourced achievements (keep non-CTFtime ones)
    const staticAch = PORTFOLIO_DATA.achievements.filter(a => !a.match(/^\d+\w+ Place \u2014.*\(\d{4}\)/));
    PORTFOLIO_DATA.achievements = [...staticAch, ...ctfAchievements];

    // Refresh fun facts with latest stats
    if (ctf.stats.bestRank && ctf.stats.bestRankEvent) {
      const factKey = 'ctftime_best_rank';
      const newFact = `Team Visored achieved **${ctf.stats.bestRank}${getOrdinalSuffix(ctf.stats.bestRank)} place** globally in ${ctf.stats.bestRankEvent} \u2014 their best CTFtime rank!`;
      const existing = PORTFOLIO_DATA.funFacts.findIndex(f => f.includes('best CTFtime rank'));
      if (existing >= 0) PORTFOLIO_DATA.funFacts[existing] = newFact;
      else PORTFOLIO_DATA.funFacts.push(newFact);
    }

    console.log(`[SpyBot Sync] \u2705 CTF data updated \u2014 ${ctf.results.length} results, ${ctf.upcoming.length} upcoming | synced: ${ctf.syncedAt}`);
  }

  /* ── Save to localStorage ── */
  function saveCache(ctf) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), ctf })); } catch(e) {}
  }

  /* ── Load from localStorage ── */
  function loadCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { ts, ctf } = JSON.parse(raw);
      // Cache is valid for 1 hour
      if (Date.now() - ts < 60 * 60 * 1000) return ctf;
    } catch(e) {}
    return null;
  }

  /* ── Main fetch & sync ── */
  async function syncCTF() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch(SOURCE_URL, {
        signal: controller.signal,
        cache: 'no-store',
        headers: { 'Accept': 'text/html' }
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      const raw  = extractInlineData(html);
      if (!raw) throw new Error('Inline data not found in page');
      const ctf = mapPayload(raw);
      if (!ctf) throw new Error('Failed to map payload');
      applyData(ctf);
      saveCache(ctf);
      lastSyncAt = Date.now();
    } catch (err) {
      // CORS or network error — try localStorage cache
      if (err.name !== 'AbortError') {
        console.warn('[SpyBot Sync] Live fetch failed:', err.message, '— using cache/static data');
        const cached = loadCache();
        if (cached) { applyData(cached); console.log('[SpyBot Sync] \uD83D\uDCBE Using cached CTF data'); }
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  /* ── Poll scheduler ── */
  function schedulePoll() {
    clearTimeout(pollTimer);
    const ms = document.visibilityState === 'hidden' ? POLL_MS * 3 : POLL_MS;
    pollTimer = setTimeout(async () => { await syncCTF(); schedulePoll(); }, ms);
  }

  /* ── Boot ── */
  function boot() {
    // 1. Load localStorage cache instantly (0ms latency for user)
    const cached = loadCache();
    if (cached) { applyData(cached); }

    // 2. Fetch live data in background after page settles
    const kickoff = () => syncCTF().then(schedulePoll);
    if ('requestIdleCallback' in window) {
      requestIdleCallback(kickoff, { timeout: 3000 });
    } else {
      setTimeout(kickoff, 1500);
    }

    // 3. Re-sync when tab becomes visible again after being hidden
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (Date.now() - lastSyncAt > POLL_MS) syncCTF().then(schedulePoll);
        else schedulePoll();
      } else {
        schedulePoll();
      }
    });

    // 4. Re-sync on network reconnect
    window.addEventListener('online', () => syncCTF().then(schedulePoll));
  }

  // Expose for debugging in console
  window.__spybotSync = { sync: syncCTF, getCache: loadCache };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
