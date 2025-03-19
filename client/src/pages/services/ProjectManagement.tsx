
import ServiceDetail from "./ServiceDetail";

export default function ProjectManagement() {
  return (
    <ServiceDetail
      title="Project & Product Management"
      subtitle="Transforming Ideas into Impactful Solutions"
      description="With extensive experience in project management and a Google Project Management Professional Certificate, I deliver strategic leadership that drives success across the entire project lifecycle."
      sections={[
        {
          title: "My Approach",
          content: "I combine rigorous methodology with practical experience to ensure your projects are delivered on time, within budget, and exceeding expectations. My project management philosophy centers on:",
          items: [
            "Strategic Planning: Developing comprehensive project roadmaps aligned with business objectives",
            "Stakeholder Management: Building consensus and maintaining clear communication across all levels",
            "Risk Mitigation: Identifying potential issues early and implementing effective contingency plans",
            "Resource Optimization: Maximizing efficiency through careful allocation of time, budget, and personnel"
          ]
        },
        {
          title: "Services Offered",
          items: [
            "Project Lifecycle Management: End-to-end oversight from initiation to closure",
            "Agile Implementation: Adapting methodologies to suit your organization's needs",
            "Product Development Strategy: Guiding products from concept to market",
            "Team Leadership: Coordinating cross-functional teams to achieve shared goals",
            "Process Improvement: Streamlining workflows to increase productivity"
          ]
        },
        {
          title: "Industry Experience",
          content: "My experience coordinating with government ministries, managing vendor relationships, and leading technical teams at organizations like Mitrelli Group and Tupuca has equipped me with the versatility to handle projects across various sectors, with particular expertise in technology implementation and digital transformation initiatives."
        },
        {
          title: "Certifications",
          items: [
            "Google Project Management Professional Certificate",
            "Project Management Skills for Leaders",
            "Managing Project Stakeholders",
            "Budgeting and Scheduling Projects"
          ]
        }
      ]}
    />
  );
}
