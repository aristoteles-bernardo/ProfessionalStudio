import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background section-spacing">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Transforming Ideas into
            <span className="block mt-2">Digital Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional services in Project Management, Business Intelligence, and Software Development. 
            Bringing innovative IT solutions to help businesses thrive in the digital age.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="gap-2 text-base px-8">
                Let's Work Together
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}