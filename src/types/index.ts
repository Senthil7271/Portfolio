export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  status?: "active" | "standby" | "processing";
  specs?: Record<string, string>;
}

export interface TeslaInspiration {
  invention: string;
  historicalContext: string;
  metaphor: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  hardware: string[];
  software: string[];
  metrics: ProjectMetric[];
  architectureDiagram?: string;
  pipelineStages?: PipelineStage[];
  interactiveType: "fpga-pipeline" | "rtos-scheduler" | "knn-pipeline" | "wafer-inspection";
  teslaInspiration: TeslaInspiration;
  githubUrl?: string;
  demoVideoUrl?: string;
  featured: boolean;
  abstract: string;
  technicalChallenges: string[];
  implementationDetails: string[];
  keyTakeaways: string[];
}

export interface GitHubRepo {
  name: string;
  displayName: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  category: "FPGA & Hardware" | "Embedded & RTOS" | "Edge AI" | "VLSI & SoC Design";
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Research" | "Academic";
  responsibilities: string[];
  metrics: string[];
  technologies: string[];
  accentColor?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organization: string;
  award: string;
  date: string;
  category: "Winner" | "Runner-Up" | "Finalist" | "Semifinalist";
  description: string;
  verificationBadge?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  items: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    relatedProjects: string[];
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: "NPTEL" | "EduSkills" | "Coursera";
  year?: string;
  verificationUrl?: string;
}
