import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Aditya Prakash. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://github.com/A1Ninj2a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/aditya-prakash-507b37298/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:Kumaradityasonpur@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
