import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Full Stack Developer", "MERN Stack Developer", "Competitive Programmer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-20 gradient-bg blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-15 gradient-bg blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 gradient-bg blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground">
            Aditya <span className="gradient-text">Prakash</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="text-lg sm:text-xl font-mono text-primary">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            A passionate Computer Science student who enjoys building scalable web applications,
            working with modern technologies, and solving algorithmic challenges.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="/adityaresume.pdf" download className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Download Resume
            </a>
            <a href="#projects" className="px-6 py-3 rounded-lg font-medium border border-border hover:bg-secondary transition-colors text-foreground">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg font-medium border border-border hover:bg-secondary transition-colors text-foreground">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-8 justify-center lg:justify-start">
            <a href="https://github.com/A1Ninj2a" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass hover:scale-110 transition-transform text-foreground">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-prakash-507b37298/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass hover:scale-110 transition-transform text-foreground">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Kumaradityasonpur@gmail.com" className="p-3 rounded-lg glass hover:scale-110 transition-transform text-foreground">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-48 h-48 sm:w-80 sm:h-80 rounded-full overflow-hidden gradient-border">
              <img src={profileImg} alt="Ayush Raj" className="w-full h-full object-cover rounded-full p-1" />
            </div>
            <div className="absolute -inset-4 rounded-full gradient-bg opacity-20 blur-2xl -z-10 animate-float" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
