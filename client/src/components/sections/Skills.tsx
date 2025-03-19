import SkillBadge from "@/components/shared/SkillBadge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Technical Languages",
    skills: ["Python", "R", "Java", "C++", "C#", "DAX", "MATLAB"]
  },
  {
    title: "Frameworks",
    skills: ["Django", "Flask", "Dash", "Kivy", "Apache Hadoop"]
  },
  {
    title: "Cloud & Tools",
    skills: ["Microsoft Azure", "Google Cloud", "AWS", "Power BI", "Git"]
  },
  {
    title: "Certifications",
    skills: [
      "Google Project Management",
      "NSE Network Security",
      "Data Science Specialization",
      "Google Analytics"
    ]
  }
];

export default function Skills() {
  return (
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technical skills and professional certifications
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
