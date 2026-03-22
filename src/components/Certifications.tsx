import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certs = [
  { title: "UI/UX Design Thinking & Figma", link: "https://drive.google.com/file/d/1FwlEpG8GRubpruIDpI11rQuIiXG9VGD8/view" },
  { title: "Cloud Computing – NPTEL", link: "https://drive.google.com/file/d/1j-cxTxJgf3wywwU0AnRctvcgQzgclpBG/view" },
  { title: "ChatGPT Prompt Engineering – Infosys", link: "https://drive.google.com/file/d/1FxlS78RKUllM_iThgyy-0hrKGFH_nCXg/view" },
  { title: "Oracle Generative AI Certification", link: "https://drive.google.com/file/d/1KwjjscOI6CQUeg8ZrvG4XLQAZtt3xxOE/view" },
];

const Certifications = () => (
  <SectionWrapper id="certifications">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
      <span className="gradient-text">Certifications</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Professional certifications and training
    </p>

    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {certs.map((cert, i) => (
        <motion.a
          key={cert.title}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="p-2 rounded-lg gradient-bg flex-shrink-0 mt-0.5">
            <Award size={20} className="text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              View Certificate <ExternalLink size={12} />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
