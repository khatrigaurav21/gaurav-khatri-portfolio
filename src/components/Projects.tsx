import React from 'react';

const projectData = [
  {
    id: 1,
    title: 'Telephone System Overhaul',
    company: 'Betfair',
    objective: 'To enhance communication efficiency across the customer service team by creating and implementing a new telephone system.',
    responsibilities: 'Spearheaded the project, defined scope, gathered requirements, evaluated solutions, managed vendor communication, planned system configuration and implementation, and focused on smooth transition and user training.',
    skills: ['Project Management', 'Stakeholder Management', 'Process Improvement', 'Vendor Management', 'Change Management', 'Requirements Elicitation'],
    outcome: 'Anticipated to significantly improve communication efficiency, call routing, reduce wait times, improve call quality, and enhance reporting capabilities.'
  },
  {
    id: 2,
    title: 'Slack Bot Development for Troubleshooting',
    company: 'Betfair',
    objective: 'To reduce issue resolution time and improve team autonomy by designing and implementing a Slack bot as a troubleshooting guide.',
    responsibilities: 'Led the initiative, identified frequent issues, gathered knowledge, defined bot’s conversational flow and UI/UX, oversaw development and integration, planned and executed testing, and developed training materials.',
    skills: ['Project Management', 'Process Improvement', 'Innovation', 'Knowledge Management', 'UI/UX Implementation', 'Stakeholder Collaboration', 'Problem-Solving'],
    outcome: 'Resulted in a 20% reduction in resolution time for common issues and empowered team members, increasing autonomy and efficiency.'
  },
  {
    id: 3,
    title: 'Telbet UI Improvements',
    company: 'Betfair',
    objective: 'To streamline daily tasks and improve user experience for the customer service team by driving UI changes in the Telbet system.',
    responsibilities: 'Leading the initiative, identifying UI pain points via user feedback and observation, collaborating with team for requirements, translating needs into design improvements, documenting changes, liaising with development, conducting usability testing, and communicating changes.',
    skills: ['Project Management', 'UI/UX Implementation', 'Process Improvement', 'Stakeholder Collaboration', 'Usability Testing'],
    outcome: 'Expected to improve workflow efficiency, reduce cognitive load, and boost productivity and user satisfaction with the Telbet system.'
  },
  {
    id: 4,
    title: 'Credit Risk Management System Development',
    company: 'Royal Bank of Scotland',
    objective: 'To enhance risk assessment accuracy and streamline the credit approval process.',
    responsibilities: 'Directed the development and implementation, led a team of 15 analysts, managed project lifecycle, defined scope, gathered and analyzed business requirements, translated them into functional specifications, oversaw testing, QA, and rollout including user training.',
    skills: ['Project Management', 'Risk Management', 'Business Analysis', 'Stakeholder Management', 'Team Leadership', 'System Implementation'],
    outcome: 'Enhanced risk assessment accuracy by 30%, leading to more informed credit decisions and a streamlined credit approval process.'
  },
  {
    id: 5,
    title: 'Performance Analytics Dashboard Development',
    company: 'Illion',
    objective: 'To enhance operational efficiency and provide actionable insights for data-driven decision-making.',
    responsibilities: 'Designed and deployed the dashboard, collaborated with departments to identify KPIs and data sources, managed data integration, conducted UAT with stakeholders, and provided training and support to end-users.',
    skills: ['Data Analysis & Visualization (Tableau, Power BI)', 'Dashboard Development', 'Project Management', 'Stakeholder Management', 'Requirements Elicitation', 'Business Process Improvement'],
    outcome: 'Boosted operational efficiency by 20% and provided actionable insights for data-driven decision-making.'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Key Projects</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-1"><strong>Company:</strong> {project.company}</p>
              <p className="text-md font-medium text-gray-700 mb-2"><strong>Objective:</strong> {project.objective}</p>
              <p className="text-gray-600 mb-3 leading-relaxed"><strong>Key Responsibilities:</strong> {project.responsibilities}</p>
              <p className="text-md font-medium text-green-600 mb-3"><strong>Outcome:</strong> {project.outcome}</p>
              <div>
                <h4 className="text-sm font-semibold mb-1 text-gray-700">Skills Demonstrated:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

