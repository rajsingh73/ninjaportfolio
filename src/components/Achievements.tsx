import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    icon: Trophy,
    title: "100+ Coding Problems Solved",
    description: "Consistently solving problems across platforms to strengthen DSA fundamentals.",
    link: "https://codolio.com/profile/ayushh002",
  },
  {
    icon: Star,
    title: "5-Star Rating on HackerRank",
    description: "Achieved top rating in problem solving on HackerRank.",
    link: "https://www.hackerrank.com/profile/ayushraj569935",
  },
];

const Achievements = () => (
  <SectionWrapper id="achievements">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
      <span className="gradient-text">Achievements</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Milestones and recognitions
    </p>

    <div className="max-w-3xl mx-auto space-y-6">
      {achievements.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5 block"
        >
          <div className="p-3 rounded-xl gradient-bg flex-shrink-0">
            <item.icon size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Achievements;
