
import ServiceDetail from "./ServiceDetail";

export default function Development() {
  return (
    <ServiceDetail
      title="Software Development"
      subtitle="Building Cross-Platform Solutions That Drive Results"
      description="With expertise in multiple programming languages and frameworks, I develop custom software solutions that work seamlessly across web and mobile platforms. My engineering background and hands-on experience enable me to create robust applications that solve real business challenges."
      sections={[
        {
          title: "My Approach",
          content: "I follow a development methodology that prioritizes both technical excellence and business value, focusing on:",
          items: [
            "User-Centered Design: Creating intuitive interfaces that enhance user experience",
            "Scalable Architecture: Building systems that can grow with your business needs",
            "Quality Assurance: Implementing rigorous testing to ensure reliability and performance",
            "Agile Development: Adopting flexible workflows that accommodate evolving requirements",
            "Security by Design: Incorporating best practices to protect your data and users"
          ]
        },
        {
          title: "Services Offered",
          items: [
            "Web Application Development: Building responsive, feature-rich web applications",
            "Mobile App Development: Creating native and cross-platform mobile solutions",
            "Custom Software Development: Designing bespoke systems tailored to your business processes",
            "API Development & Integration: Connecting your software with third-party services and platforms",
            "Database Design & Management: Structuring data for optimal performance and scalability",
            "Legacy System Modernization: Updating outdated systems with current technologies"
          ]
        },
        {
          title: "Technical Expertise",
          content: "My technical toolkit includes:",
          items: [
            "Languages: Python, Java, C++, C#",
            "Frameworks: Django, Flask, Dash, Kivy",
            "Mobile Development: Cross-platform and native app development",
            "Cloud Integration: Microsoft Azure, Google Cloud Services, Amazon AWS",
            "Database Management: MSSQL, MySQL, PostgreSQL",
            "Version Control: Git"
          ]
        },
        {
          title: "Industry Experience",
          content: "At Tupuca, I served as a Senior Systems Analyst coordinating IT services and developing solutions. As CEO & CTO of Alio Analytics, I've led the development of innovative web applications and digital solutions. My experience at Bantu Corporation included developing Java-based educational software tailored to specific demographic needs."
        },
        {
          title: "Software Development Philosophy",
          content: "I believe in creating technology that not only meets technical specifications but truly addresses human needs. Every line of code I write is aimed at delivering tangible value, whether it's improving efficiency, enhancing user experience, or opening new business opportunities."
        }
      ]}
    />
  );
}
