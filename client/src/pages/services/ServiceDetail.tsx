import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export interface ServiceDetailProps {
  title: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
    duration?: string;
  }>;
}

export default function ServiceDetail({ title, description, steps }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-[#0E0E0E] py-32">
      <div className="container">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground mb-12">{description}</p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-start`}
            >
              <div className="w-full md:w-1/2 bg-black/30 p-8 rounded-lg border border-white/5">
                <div className="text-sm text-muted-foreground mb-2">
                  {step.duration && `${step.duration} HOURS`}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="w-full md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
