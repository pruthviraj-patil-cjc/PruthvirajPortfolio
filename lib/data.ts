/**
 * All portfolio content lives here — edit this file, not the components.
 * Anything marked TODO is a placeholder to replace with your real link.
 */

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`;

// Unsplash photos used by the curved hero band (code / hardware / workspace themes)
export const heroImages = [
  { src: u("photo-1461749280684-dccba630e2f6"), alt: "Code on a monitor" },
  { src: u("photo-1555066931-4365d14bab8c"), alt: "Source code close-up" },
  { src: u("photo-1518770660439-4636190af475"), alt: "Circuit board" },
  { src: u("photo-1498050108023-c5249f4df085"), alt: "Laptop with code editor" },
  { src: u("photo-1515879218367-8466d910aaa4"), alt: "Developer typing code" },
  { src: u("photo-1558494949-ef010cbdcc31"), alt: "Server racks" },
  { src: u("photo-1517694712202-14dd9538aa97"), alt: "Laptop on a desk" },
  { src: u("photo-1526374965328-7f61d4dc18c5"), alt: "Falling digital code" },
  { src: u("photo-1504639725590-34d0984388bd"), alt: "Programming workspace" },
  { src: u("photo-1451187580459-43490279c0fa"), alt: "Global network" },
];

export const profile = {
  name: "Pruthviraj Ubale",
  role: "Java Backend & Full Stack Developer",
  tagline:
    "I build clean, secure backends with Spring Boot — and the interfaces that sit on top of them.",
  location: "Pune, Maharashtra · India",
  status: "Open to fresher roles · Remote / Pune / Hyderabad",
  github: "https://github.com/pruthviraj-patil-cjc",
  // TODO: replace with your real details
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle",
  resume: "/Pruthviraj_Ubale_Resume.pdf", // TODO: drop your PDF into /public
};

export const about = {
  headline: "Backend-first, with an eye for how things feel.",
  paragraphs: [
    "I'm a Computer Science graduate (B.Sc., 2024) focused on the Java ecosystem. I enjoy the part of software nobody sees: modelling data properly, designing REST APIs that are easy to consume, and securing them the right way.",
    "My projects follow real-world patterns — layered architecture, DTOs, validation, role-based security and transactional operations — so what I build is easy to read, test and extend.",
    "I'm looking for a fresher role where I can learn from a strong team, ship to production and grow into a dependable full stack engineer.",
  ],
  stats: [
    { value: "3", label: "Full stack projects" },
    { value: "17", label: "Java version I build on" },
    { value: "REST", label: "API-first mindset" },
    { value: "2024", label: "B.Sc. Computer Science" },
  ],
};

export const skillGroups = [
  {
    title: "Backend",
    accent: "primary",
    items: [
      "Core Java",
      "Advanced Java (Java 8+)",
      "OOP",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "Servlet",
      "JDBC",
      "Multithreading",
    ],
  },
  {
    title: "Data",
    accent: "violet",
    items: ["MySQL", "RDBMS", "Hibernate", "JPA", "Spring Data JPA"],
  },
  {
    title: "Frontend",
    accent: "cyan",
    items: ["React JS", "JavaScript", "HTML5", "CSS3", "Thymeleaf", "Bootstrap"],
  },
  {
    title: "Tools",
    accent: "primary",
    items: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"],
  },
];

export const marquee = [
  "Java",
  "Spring Boot",
  "Hibernate",
  "MySQL",
  "React",
  "REST APIs",
  "JPA",
  "Maven",
  "Git",
  "Spring Security",
  "Postman",
  "JavaScript",
];

export type Project = {
  index: string;
  title: string;
  kicker: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Bank Management System",
    kicker: "Spring Boot · Security · MySQL",
    description:
      "A role-based banking application built as a portfolio project. Customers manage accounts and transactions; admins oversee customers, accounts and loans.",
    highlights: [
      "ADMIN and CUSTOMER roles secured with Spring Security",
      "Deposit, withdraw and fund transfer using @Transactional",
      "Transaction history, profile and admin dashboards",
      "Loan module with simple EMI calculation and approval statuses",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "MySQL",
      "Thymeleaf",
    ],
    image: u("photo-1555066931-4365d14bab8c"),
    github: "https://github.com/pruthviraj-patil-cjc", // TODO: link the exact repo
    featured: true,
  },
  {
    index: "02",
    title: "Student Management System",
    kicker: "Spring Boot · React · MySQL",
    description:
      "Full stack CRUD application: a Spring Boot REST API consumed by a React frontend for managing student records.",
    highlights: [
      "REST endpoints with a clean controller–service–repository split",
      "React UI consuming the API",
    ],
    stack: ["Spring Boot", "MySQL", "React JS", "REST API"],
    image: u("photo-1498050108023-c5249f4df085"),
    github: "https://github.com/pruthviraj-patil-cjc", // TODO
  },
  {
    index: "03",
    title: "Mini CRUD Hub",
    kicker: "Spring Boot · JPA · Hibernate",
    description:
      "A compact backend playground to practise entity mapping, repositories and CRUD operations the Spring Data way.",
    highlights: ["Entity relationships with JPA / Hibernate", "Clean CRUD APIs"],
    stack: ["Spring Boot", "JPA", "Hibernate", "MySQL"],
    image: u("photo-1558494949-ef010cbdcc31"),
    github: "https://github.com/pruthviraj-patil-cjc", // TODO
  },
];

export const journey = [
  {
    period: "2024",
    title: "B.Sc. Computer Science",
    place: "Deogiri College, Chh. Sambhajinagar",
    detail:
      "Foundation in programming, databases and software fundamentals, then specialised in the Java stack through self-driven projects.",
  },
  {
    period: "2024 – Now",
    title: "Full Stack Java — project-driven learning",
    place: "Self-directed · Pune",
    detail:
      "Building production-style applications with Spring Boot, Hibernate and React, version-controlled on GitHub.",
  },
  {
    period: "Next",
    title: "Your team, hopefully.",
    place: "Fresher · Java Backend / Full Stack",
    detail:
      "Looking for a role where I can contribute from week one and keep levelling up.",
  },
];
