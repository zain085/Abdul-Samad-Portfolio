// All portfolio content lives here. Update this file to change the website.

export const profile = {
  name: "Abdul Samad",
  firstName: "Abdul",
  lastName: "Samad",
  role: "Software Technical Support & SQL Developer",
  location: "Karachi, Pakistan",
  phone: "03141063418",
  phoneLink: "+923141063418",
  email: "sammad2497@gmail.com",
  linkedIn: "https://www.linkedin.com/in/abdul-samad-68b149251",
  github: "https://github.com/abdulsamad2497",
  cv: "/Abdul_Samad_CV.pdf",
  intro:
    "I support business software, solve technical issues, work with SQL data, and help teams keep day-to-day systems running smoothly.",
  summary:
    "Hardworking and adaptable professional with experience across software technical support, SQL development support, and business development. My background combines technical problem-solving with clear client communication and practical business understanding.",
  about: [
    "I currently work in software technical support for HRIS/HRM systems, helping users troubleshoot issues and supporting the Linux environments behind the services.",

    "Previously, I worked at Eyecon Consultant, progressing from SQL Developer Intern to SQL Developer. That experience gave me practical exposure to SQL queries, database support, reporting needs, and day-to-day technical requests.",

    "I also started my professional career in business development, where I developed strong communication, follow-up, and client-handling skills. That combination helps me approach technical problems with both the system and the person using it in mind.",
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Expertise" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    role: "Software Technical Support",
    company: "Linuro Systems",
    detail: "HRIS / HRM Software",
    period: "2026 – Present",
    current: true,
    points: [
      "Provide end-to-end technical support for HRIS/HRM software users, from issue identification through resolution.",
      "Support Linuro system-related tasks to help maintain stable software services and user access.",
      "Coordinate with internal teams to track incidents, document fixes, and improve response turnaround.",
    ],
  },
  {
    role: "SQL Developer",
    company: "Eyecon Consultant",
    detail: "Promoted from SQL Developer Intern",
    period: "2024 – 2026",
    points: [
      "Worked on SQL development tasks including query writing, data support, and basic reporting requirements.",
      "Handled ongoing database-related requests and collaborated with team members to deliver timely updates.",
      "Progressed from internship to a permanent developer role through consistent performance and reliability.",
    ],
  },
  {
    role: "Business Development Executive",
    company: "Harvest Group",
    detail: "",
    period: "Feb 2023 – Sep 2023",
    points: [
      "Conducted cold calls to PMEX brokers to generate leads and build a qualified client pipeline.",
      "Supported trading-related client coordination through updates, communication, and follow-ups.",
      "Maintained clear communication records for organised outreach and consistent client handling.",
    ],
  },
];

export const skills = [
  {
    group: "Technical",
    description: "Core technical capabilities used across support and development work.",
    items: ["SQL Developer", "Database Administrator", "HRIS / HRM Software Support", "POS Software Support", "Web Development", "WordPress Development", "SQA Testing"],
  },
  {
    group: "Business & Communication",
    description: "Practical skills developed through client-facing and business development work.",
    items: ["Business Development", "Cold Calling", "Client Communication"],
  },
  {
    group: "Tools",
    description: "Software and productivity tools used in professional work.",
    items: ["Microsoft Office", "Visual Studio", "Visual Studio Code", "SQL Server Management Studio",],
  },
];

export const education = [
  { title: "Bachelors In Computer Science", school: "IQRA University Main Campus", year: "Present" },
  { title: "Diploma in Software Engineering", school: "Aptech Metro Star Gate Center", year: "2026" },
  { title: "Intermediate", school: "Govt Degree Science Collage Malir", year: "2022" },
  { title: "Matriculation", school: "Elevation Grammar School", year: "2020" },
  { title: "Hifz", school: "Madrasa Rehmania", year: "2018" },
];
