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
              Project Manager & Full Stack Developer with expertise in Business Intelligence.
            </p>
          </motion.div>
        </div>

        <div className="prose prose-invert max-w-3xl">
          <p className="text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
