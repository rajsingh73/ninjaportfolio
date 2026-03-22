import { motion } from "framer-motion";
import { Code, Server, Database, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    skills: ["React.js", "Node.js", "Express.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Teamwork", "Time Management", "Adaptability"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
      My <span className="gradient-text">Skills</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Technologies and tools I work with
    </p>

    <div className="grid sm:grid-cols-2 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg gradient-bg">
              <cat.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
