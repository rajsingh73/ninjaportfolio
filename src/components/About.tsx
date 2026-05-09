import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const About = () => (
  <SectionWrapper id="about">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
      About <span className="gradient-text">Me</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Get to know me a little better
    </p>

    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I'm <span className="text-foreground font-semibold">Aditya Prakash</span>, a Computer Science & Engineering student
          passionate about full stack development and modern technologies. I love building real-world
          applications that solve meaningful problems and continuously push myself to learn and grow.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a strong foundation in data structures, algorithms, and web technologies, I strive to
          write clean, efficient code and deliver polished user experiences. I'm always exploring new
          tools and frameworks to stay ahead in the ever-evolving tech landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: GraduationCap, title: "B.Tech CSE", desc: "Lovely Professional University" },
          { icon: MapPin, title: "Punjab, India", desc: "Currently Based" },
          { icon: Calendar, title: "Since Aug 2023", desc: "CGPA: 6.87" },
          { icon: Code2, title: "Full Stack", desc: "MERN Stack Developer" },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
            <Icon className="text-primary mb-2 group-hover:scale-110 transition-transform" size={24} />
            <h3 className="font-semibold text-foreground text-sm">{title}</h3>
            <p className="text-muted-foreground text-xs">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
