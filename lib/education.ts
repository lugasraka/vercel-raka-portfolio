import type {
  Education,
  Certification,
  Award,
  Competition,
} from "@/lib/types";

export const education: Education[] = [
  {
    degree: "MBA",
    field: "Data Science · Analytics · Operations",
    school: "Imperial College London",
    period: "2026 — 2028",
    logo: "/logos/imperial.svg",
    color: "#002147",
  },
  {
    degree: "PhD / Dr. sc.",
    field: "Environmental Engineering",
    school: "ETH Zürich",
    period: "2019 — 2022",
    logo: "/logos/eth.svg",
    color: "#1F407A",
  },
  {
    degree: "MSc (joint)",
    field: "Energy Systems · HVAC · Renewables",
    school: "École Polytechnique & KTH Royal Institute of Technology",
    period: "2016 — 2018",
    logos: ["/logos/polytechnique.svg", "/logos/kth.svg"],
    color: "#002A5C",
  },
  {
    degree: "BSc",
    field: "Chemical Engineering · Industrial Technology",
    school: "Institut Teknologi Bandung (ITB)",
    period: "2010 — 2014",
    logo: "/logos/itb.svg",
    color: "#0B5C2E",
  },
];

export const certifications: Certification[] = [
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud",
    year: "2025",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University / DeepLearning.AI",
    year: "2025",
  },
  {
    name: "AI Product Management",
    issuer: "Duke University",
    year: "2024",
  },
  {
    name: "Digital Product Management",
    issuer: "University of Virginia Darden",
    year: "2025",
  },
  {
    name: "Software Product Management",
    issuer: "University of Alberta",
    year: "2024",
  },
  {
    name: "Google Project Management",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2025",
  },
  {
    name: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    year: "2025",
  },
];

export const awards: Award[] = [
  {
    title: "Dean's Impact Merit-Based MBA Scholarship",
    org: "Imperial College London",
    year: "2025",
  },
  {
    title: "Marie Skłodowska-Curie PhD Fellowship",
    org: "European Commission",
    year: "2019",
  },
  {
    title: "EIT InnoEnergy Full MSc Scholarship",
    org: "EIT InnoEnergy",
    year: "2016",
  },
];

export const competitions: Competition[] = [
  {
    title: "Most Admired Product: Open-source IT Sustainability Checklist",
    event: "Google ClimateAction.tech Hackathon",
    place: "Most Admired Product",
    year: "2025",
    location: "Zürich",
  },
  {
    title: "1st Place — Circular Economy Knowledge Competition",
    event: "Siemens Global Sustainability Meeting",
    place: "1st Place",
    year: "2024",
    location: "Munich",
  },
  {
    title: "Smart Heating & Business Case Solution",
    event: "DENEFF Energy Efficiency Hackathon",
    place: "1st Place",
    year: "2017",
    location: "Berlin",
  },
  {
    title: "Co-Conscious: Responsible E-commerce",
    event: "Entrepreneur for a Week Product Pitch",
    place: "1st Place",
    year: "2016",
    location: "Lisbon",
  },
  {
    title: "Biofuel from Waste — Manufacturing Design",
    event: "South East Asia Chemical Engineering Design Competition",
    place: "1st Place",
    year: "2014",
    location: "South East Asia",
  },
];
