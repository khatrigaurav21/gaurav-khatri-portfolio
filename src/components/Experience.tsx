import React from 'react';

interface ExperienceItemProps {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, location, role, duration, responsibilities }) => (
  <div className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
    <h3 className="text-xl font-semibold text-blue-600">{role}</h3>
    <p className="text-md font-medium text-gray-700">{company} - {location}</p>
    <p className="text-sm text-gray-500 mb-2">{duration}</p>
    <ul className="list-disc list-inside space-y-1 text-gray-600">
      {responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);

const ProfessionalExperience: React.FC = () => {
  const experiences = [
    {
      company: 'Betfair',
      location: 'Darwin, NT',
      role: 'Customer Service Team Lead',
      duration: 'November 2024 - Present',
      responsibilities: [
        'Spearheading a project to create and implement a new telephone system, enhancing communication efficiency.',
        'Leading the development of a Slack bot as a troubleshooting guide, reducing resolution time for common issues by 20%.',
        'Driving UI changes in Telbet to streamline daily tasks and improve user experience.',
        'Monitoring racing markets and ensuring real-time backend updates for data integrity and compliance.',
        'Coaching and mentoring a team of customer service representatives, achieving a 15% improvement in key performance metrics.',
      ],
    },
    {
      company: 'Sportsbet',
      location: 'Darwin, NT',
      role: 'Customer Service Advisor',
      duration: 'March 2023 - November 2024',
      responsibilities: [
        'Analyzed customer feedback and implemented process improvements, leading to a 15% increase in first-call resolution rates.',
        'Collaborated with cross-functional teams to optimize service protocols, reducing average handling time by 20%.',
        'Contributed to a 10% improvement in customer satisfaction scores through strategic enhancements in service delivery.',
      ],
    },
    {
      company: 'Illion',
      location: 'Melbourne, VIC',
      role: 'Account Manager',
      duration: 'October 2018 - October 2021',
      responsibilities: [
        'Orchestrated digital transformation initiatives, resulting in a 25% increase in digital transactions and a 15% improvement in customer satisfaction.',
        'Designed a performance analytics dashboard, boosting operational efficiency by 20%.',
        'Strengthened client retention by 30% through strategic account management and tailored solutions.',
      ],
    },
    {
      company: 'Royal Bank of Scotland',
      location: 'Delhi, India',
      role: 'Unit Lead',
      duration: 'July 2012 - July 2018',
      responsibilities: [
        'Directed the development of a Credit Risk Management System, enhancing risk assessment accuracy by 30%.',
        'Reduced fraud-related losses by 40% through the implementation of a robust fraud detection system.',
        'Managed a team of 15 analysts, ensuring 95% on-time project delivery and fostering a culture of innovation.',
      ],
    },
  ];

  return (
    <section id="experience" className="p-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Professional Experience</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;

