
import { motion } from "framer-motion";
import ServiceCard from "@/components/shared/ServiceCard";
import { GitBranch, LineChart, PenLine } from "lucide-react";

const services = [
  {
    number: "01",
    title: "WEB DESIGN",
    description: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    icon: PenLine,
    href: "/services/web-design",
    buttonText: "ABOUT WEBDESIGN"
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    description: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    icon: GitBranch,
    href: "/services/development",
    buttonText: "ABOUT WEBFLOW"
  },
  {
    number: "03",
    title: "CONTENT & SEO",
    description: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    icon: LineChart,
    href: "/services/seo",
    buttonText: "ABOUT SEO"
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
