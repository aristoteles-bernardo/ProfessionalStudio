
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="container py-12 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aristoteles Bernardo</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Hi, I'm Aristoteles Bernardo - a technology professional specializing in data analysis, 
            project management, and systems development. I'm passionate about creating impactful 
            solutions and helping organizations leverage data for better decision-making.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
