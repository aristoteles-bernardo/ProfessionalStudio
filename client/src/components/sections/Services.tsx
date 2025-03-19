
import { motion } from "framer-motion";
import ServiceCard from "@/components/shared/ServiceCard";
import { GitBranch, LineChart, PenLine } from "lucide-react";

const services = [
  {
    number: "01",
    title: "PROJECT & DESIGN MANAGEMENT",
    description: "I transform ideas into impactful solutions through strategic project and product management. With expertise in agile methodologies, stakeholder alignment, and resource optimization, I deliver results that exceed expectations. Whether launching new products or streamlining complex workflows, I balance technical requirements with business goals to create meaningful outcomes for your organization.",
    icon: PenLine,
    href: "/services/project-management",
    buttonText: "ABOUT MANAGEMENT"
  },
  {
    number: "02",
    title: "BI & DATA ANALYSIS",
    description: "I turn complex data into clear insights that drive business decisions. Through expert business intelligence and data analysis, I help organizations identify trends, uncover opportunities, and solve problems. Using advanced analytical tools and visualization techniques, I transform raw information into strategic recommendations that improve performance and create competitive advantage.",
    icon: LineChart,
    href: "/services/data-analysis",
    buttonText: "ABOUT DATA ANALYSIS"
  },
  {
    number: "03",
    title: "DEVELOPMENT",
    description: "I design, build and manage development of robust, user-centered software solutions across all platforms. From responsive web applications to intuitive mobile experiences, I deliver custom development that meets your specific business needs. With expertise in front-end and back-end technologies, I create scalable, high-performance applications that provide seamless experiences across devices while solving real-world problems for your users and organization.",
    icon: GitBranch,
    href: "/services/development",
    buttonText: "ABOUT DEVELOPMENT"
  }
];

export default function Services() {
  return (
    <section className="section-spacing bg-[#0E0E0E]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
