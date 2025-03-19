import { motion } from "framer-motion";
import { 
  SiPython,
  SiR,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiPlotly,
  SiApache,
  SiGooglecloud,
  SiGit,
  SiGoogle,
  SiCisco,
  SiJupyter,
  SiGoogleanalytics,
  SiMatrix 
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const PowerBiIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=OIRzuzg7UVe4&format=png&color=FFFFFF" 
    alt="Power BI" 
    className="w-8 h-8" 
  />
);

const skillCategories = [
  {
    title: "Technical Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: SiR },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "C#", icon: DiCssdeck },
      { name: "DAX", icon: PowerBiIcon },
      { name: "MATLAB", icon: SiMatrix }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "Dash", icon: SiPlotly },
      { name: "Kivy", icon: SiPython },
      { name: "Apache Hadoop", icon: SiApache }
    ]
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Microsoft Azure", icon: VscAzure },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "AWS", icon: FaAws },
      { name: "Power BI", icon: PowerBiIcon },
      { name: "Git", icon: SiGit }
    ]
  },
  {
    title: "Certifications",
    skills: [
      { name: "Google Project Management", icon: SiGoogle },
      { name: "NSE Network Security", icon: SiCisco },
      { name: "Data Science Specialization", icon: SiJupyter },
      { name: "Google Analytics", icon: SiGoogleanalytics }
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
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg">
                  {skill.icon ? (
                    <skill.icon className="w-8 h-8" />
                  ) : (
                    <span className="w-8 h-8 flex items-center justify-center text-xs font-medium">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}