export const projects = [
  {
    title: "JobTrack",
    type: "Job application tracker",
    description:
      "A web app for organising job applications, tracking progress, managing notes, and keeping the right CV attached to each opportunity.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    live: "https://keepjobtrack.vercel.app/",
    github: "https://github.com/AmityTobi/job-application-tracker",
  },
  {
    title: "Freelance Project Tracker",
    type: "Project management",
    description:
      "A project tracker for managing freelance clients, projects, tasks, and progress from one simple interface.",
    stack: ["React", "TypeScript"],
    live: "https://freelance-project-tracker.netlify.app/",
    github: "https://github.com/AmityTobi/freelance-project-tracker",
  },
  {
    title: "Evently",
    type: "Event platform",
    description:
      "A responsive event experience built collaboratively with reusable components for discovering events, viewing details, and managing tickets.",
    stack: ["React", "Tailwind CSS"],
    live: "https://evently-tailwind-css-and-react.vercel.app/",
    github: null,
  },
] as const;

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Git",
  "Responsive Design",
  "Accessibility",
] as const;

export const links = {
  email: "mailto:amityekoyi@gmail.com",
  github: "https://github.com/AmityTobi",
  linkedin: "https://www.linkedin.com/in/amity-ekoyi/",
} as const;