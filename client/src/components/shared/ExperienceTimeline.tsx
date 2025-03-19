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
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 h-full w-px bg-white/10 -translate-x-1/2" />

      <div className="space-y-24">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />

            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
              <div className="bg-black/30 p-6 rounded-lg border border-white/5">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{experience.title}</h3>
                  <p className="text-primary">{experience.company}</p>
                  <p className="text-sm text-muted-foreground">{experience.period}</p>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}