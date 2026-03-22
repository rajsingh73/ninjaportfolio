import { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Initialize EmailJS once on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key is missing");
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Get credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error("EmailJS service or template ID missing");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    // Prepare template parameters (adjust names to match your EmailJS template)
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      // You can add more fields like to_name, reply_to, etc.
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-foreground">Let's talk</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="space-y-4">
            {[
              { icon: Mail, label: "ayushraj569935@gmail.com", href: "mailto:ayushraj569935@gmail.com" },
              { icon: Phone, label: "+91-7903944904", href: "tel:+917903944904" },
              { icon: Github, label: "github.com/ayushh002", href: "https://github.com/ayushh002" },
              { icon: Linkedin, label: "linkedin.com/in/ayushraj002", href: "https://www.linkedin.com/in/ayushraj002/" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={18} />
                </div>
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            { name: "name", type: "text", placeholder: "Your Name" },
            { name: "email", type: "email", placeholder: "Your Email" },
            { name: "subject", type: "text", placeholder: "Subject" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required
              value={form[field.name as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
            />
          ))}
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === "sending" ? (
              <><Loader2 size={18} className="animate-spin" /> Sending...</>
            ) : status === "sent" ? (
              "Message Sent! ✓"
            ) : status === "error" ? (
              "Failed to send. Try again."
            ) : (
              <><Send size={18} /> Send Message</>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;