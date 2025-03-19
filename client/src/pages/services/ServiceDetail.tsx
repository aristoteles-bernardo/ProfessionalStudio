
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface Section {
  title: string;
  content?: string;
  items?: string[];
}

interface ServiceDetailProps {
  title: string;
  subtitle?: string;
  description: string;
  sections: Section[];
}

export default function ServiceDetail({ title, subtitle, description, sections }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-[#0E0E0E] py-32">
      <div className="container max-w-4xl">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8 hover:text-[#ddab22]">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {subtitle && <h2 className="text-2xl text-[#ddab22] mb-6">{subtitle}</h2>}
            <p className="text-lg text-muted-foreground">{description}</p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/5 p-8 rounded-lg hover:border-[#ddab22]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-medium mb-4">{section.title}</h3>
                {section.content && (
                  <p className="text-muted-foreground mb-4">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
