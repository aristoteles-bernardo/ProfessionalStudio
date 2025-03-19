import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 border-l"
        >
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2 border-4 border-background" />
          <div className="mb-1">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-primary">{experience.company}</p>
            <p className="text-sm text-muted-foreground">{experience.period}</p>
          </div>
          <p className="text-muted-foreground mt-2">{experience.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
