import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            IT Solutions Tailored for
            <span className="text-primary"> Angola</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Professional services in Project Management, Business Intelligence, and Software Development. 
            Bringing innovative IT solutions to help businesses thrive in the digital age.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
