export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  kind: "ai-pm" | "research";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  topLinks?: Array<{ label: string; href: string }>;
  body: string;
};

export type Experience = {
  slug: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  logo?: string;
  logoDisplay?: "mark" | "wordmark";
  color?: string;
};

export type Education = {
  degree: string;
  field: string;
  school: string;
  period: string;
  note?: string;
  logo?: string;
  logos?: string[];
  logoDisplay?: "mark" | "wordmark";
  color?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  link?: string;
};

export type Award = {
  title: string;
  org: string;
  year?: string;
};

export type Competition = {
  title: string;
  event: string;
  place: string;
  year: string;
  location?: string;
};
