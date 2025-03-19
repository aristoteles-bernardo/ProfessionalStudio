import ExperienceTimeline from "@/components/shared/ExperienceTimeline";

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
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track record of success in leading technology initiatives
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}
