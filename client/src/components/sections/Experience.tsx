import ExperienceTimeline from "@/components/shared/ExperienceTimeline";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "CEO & CTO",
    company: "Alio Analytics",
    period: "Jan 2020 - Present",
    description: "Leading web development, business intelligence, GIS, and digital marketing initiatives."
  },
  {
    title: "Senior Systems Analyst",
    company: "Mitrelli Group, GIS Geodata",
    period: "Feb 2022 - Present",
    description: "Managing specifications, design, and implementation of solutions. Coordinating with ministries and authorities."
  },
  {
    title: "Senior Systems Analyst",
    company: "Tupuca",
    period: "Feb 2020 - Jan 2022",
    description: "Coordinated IT Department, developed BI reports and implemented efficient work procedures."
  }
];

export default function Experience() {
  return (
    <section className="section-spacing bg-[#0E0E0E]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Track record of success in leading technology initiatives
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
}