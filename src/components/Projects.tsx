import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import BeatCode from "../assets/beatCode.png";
import Swiggy from "../assets/swiggy.png";

const projects = [
  {
    title: "Beatcode – Online Coding Platform",
    thumbnail: BeatCode,
    description:
      "A full-stack coding platform where users can write, run, and submit code in multiple languages. Features JWT authentication, Redis-based token invalidation, and Judge0 API integration for real-time code execution.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "Judge0 API", "JWT", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/ayushh002/BeatCode",
  },
  {
    title: "Swiggy – Food Delivery App",
    thumbnail: Swiggy,
    description:
      "A React-based food delivery application that fetches restaurant and menu data from Swiggy's live API, processes deeply nested JSON structures, and manages cart state using Redux for a seamless user experience.",
    tech: ["React.js", "Redux", "JavaScript", "REST APIs", "Tailwind CSS", "Axios", "React Router"],
    github: "https://github.com/ayushh002/swiggy",
  },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
      Featured <span className="gradient-text">Projects</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Some of the projects I've built recently
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
        >
          {/* Thumbnail container - fixed styling */}
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover transition-transform duration-300 "
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Github size={16} /> View on GitHub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-10">
      <a
        href="https://github.com/ayushh002"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground font-medium"
      >
        View More Projects <ExternalLink size={16} />
      </a>
    </div>
  </SectionWrapper>
);

export default Projects;