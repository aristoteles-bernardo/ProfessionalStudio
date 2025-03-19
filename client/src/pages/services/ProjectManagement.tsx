import ServiceDetail from "./ServiceDetail";

export default function ProjectManagement() {
  return (
    <ServiceDetail
      title="Project & Product Management"
      description="Strategic project management services that ensure successful delivery of IT initiatives. We combine industry best practices with agile methodologies to drive results."
      steps={[
        {
          title: "Discovery Call",
          description: "We get to know each other better, determine how I can best assist you, and understand the goals for your project.",
          duration: "1"
        },
        {
          title: "Project Planning",
          description: "Define project scope, objectives, and deliverables. Create detailed project plans and timelines.",
          duration: "2"
        },
        {
          title: "Development & Implementation",
          description: "Execute the project plan with regular updates and adjustments based on feedback and progress.",
          duration: "3"
        },
        {
          title: "Monitoring & Control",
          description: "Track progress, manage risks, and ensure quality standards are met throughout the project lifecycle.",
          duration: "2"
        },
        {
          title: "Project Completion",
          description: "Final delivery, documentation, and knowledge transfer to ensure long-term success.",
          duration: "1"
        }
      ]}
    />
  );
}
