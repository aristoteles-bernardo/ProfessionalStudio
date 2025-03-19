import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] py-32">
      <div className="container">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8 hover:text-[#5239cc]">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Providing Premium Web Design and Development Services
              to Help Your Business Stand Out.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              My approach to Web Development and Consultancy lets me help you bring your web design vision to life. With a focus on user experience and performance, I create websites that not only look great but also deliver results.
            </p>
            <p className="text-muted-foreground">
              As a full-service web designer and developer, I help clients achieve their business goals through engaging web design and robust development solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[3/4] bg-black/30 rounded-lg overflow-hidden"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
          <div className="grid gap-4">
            {[
              { year: "2021", award: "Awwwards SOTD" },
              { year: "2021", award: "CSS Design Awards" },
              { year: "2020", award: "Awwwards Website of the Month" },
              { year: "2020", award: "CSS Winner" },
              { year: "2019", award: "Awwwards Website of the Day" },
              { year: "2019", award: "CSS Design Awards" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 bg-black/30 rounded border border-white/5"
              >
                <span className="text-muted-foreground">{item.year}</span>
                <span>{item.award}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}