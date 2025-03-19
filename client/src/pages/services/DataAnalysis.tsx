
import ServiceDetail from "./ServiceDetail";

export default function DataAnalysis() {
  return (
    <ServiceDetail
      title="BI & Data Analysis"
      subtitle="Transforming Data into Strategic Insights"
      description="With specialized training in Google Advanced Data Analytics and extensive practical experience, I help organizations harness the full power of their data to drive informed decision-making and business growth."
      sections={[
        {
          title: "My Approach",
          content: "I combine technical expertise with business acumen to deliver meaningful insights that directly impact your bottom line. My data analysis methodology focuses on:",
          items: [
            "Data Integration: Consolidating information from disparate sources to create a single source of truth",
            "Advanced Analytics: Applying statistical techniques to uncover patterns and relationships",
            "Intuitive Visualization: Creating clear, actionable dashboards that make complex data accessible",
            "Predictive Modeling: Developing forecasts to anticipate future trends and opportunities",
            "Performance Measurement: Establishing KPIs that align with strategic objectives"
          ]
        },
        {
          title: "Services Offered",
          items: [
            "Business Intelligence Implementation: Setting up robust BI ecosystems tailored to your organization",
            "Custom Dashboard Development: Creating interactive, real-time reporting solutions using Power BI, Alteryx, and Cognos",
            "Data Pipeline Construction: Building efficient ETL processes for reliable data flow",
            "Statistical Analysis: Performing in-depth examination of business data to identify insights",
            "Training & Knowledge Transfer: Empowering your team to leverage analytical tools effectively"
          ]
        },
        {
          title: "Technical Expertise",
          content: "My technical toolkit includes:",
          items: [
            "Languages: Python, R, DAX",
            "Platforms: Microsoft Power Platform, Dataflows",
            "Visualization Tools: Power BI, Alteryx, IBM Cognos Analytics",
            "Cloud Services: Microsoft Azure, Google Cloud Services, AWS",
            "Database Management: MSSQL, MySQL, PostgreSQL"
          ]
        },
        {
          title: "Industry Experience",
          content: "At Tupuca, I specialized in interpreting complex datasets, developing predictive models, and creating comprehensive reporting systems that drove business strategy. My experience spans from establishing data foundations to implementing sophisticated analytical solutions that deliver measurable ROI."
        },
        {
          title: "Certifications",
          items: [
            "Google Advanced Data Analytics Specialization",
            "Google Data Analytics Specialization"
          ]
        }
      ]}
    />
  );
}
