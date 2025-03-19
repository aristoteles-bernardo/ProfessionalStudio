
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="container py-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Aristoteles
          </h1>
          <div className="relative aspect-[3/4] bg-black/30 rounded-lg overflow-hidden max-w-md mx-auto mb-8">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Bernardo
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold italic mb-6">
              A website that leaves a lasting impression!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6"
          >
            <p className="text-muted-foreground text-lg">
              Hi, I'm Aristoteles Bernardo - a technology professional specializing in data analysis, 
              project management, and systems development. I'm passionate about creating impactful 
              solutions and helping organizations leverage data for better decision-making.
            </p>
            
            <div className="flex gap-6">
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
      </div>
    </section>
  );
}
