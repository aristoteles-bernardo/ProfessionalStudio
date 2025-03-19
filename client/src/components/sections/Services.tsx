import ServiceCard from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";
import { LineChart, GitBranch, Briefcase } from "lucide-react";

const services = [
  {
    title: "Project & Product Management",
    description: "Expert project management services with a focus on IT and software development projects. Certified in Google Project Management and experienced in leading complex initiatives.",
    icon: Briefcase
  },
  {
    title: "Business Intelligence & Data Analysis",
    description: "Comprehensive BI solutions using Power BI, Alteryx, and IBM Cognos Analytics. Expertise in data modeling, visualization, and predictive analytics.",
    icon: LineChart
  },
  {
    title: "Software Development",
    description: "Full-stack development services using modern technologies. Specialized in web applications, GIS solutions, and enterprise software development.",
    icon: GitBranch
  }
];

export default function Services() {
  return (
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive IT solutions tailored to meet your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
