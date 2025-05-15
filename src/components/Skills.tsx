import React from 'react';

const Skills: React.FC = () => {
  const leadershipSkills = [
    'Proven ability to inspire and lead high-performing teams, fostering collaboration and continuous improvement.',
  ];

  const processInnovationSkills = [
    'Expertise in identifying inefficiencies and implementing data-driven solutions to optimize workflows and enhance outcomes.',
    'Slack Bot Development',
    'UI/UX Implementation',
  ];

  const projectManagementSkills = [
    'Proficient in planning, coordinating, and executing projects, delivering measurable results within deadlines and budgets.',
    'Agile Methodologies',
  ];

  const customerExperienceSkills = [
    'Focused on achieving top-tier customer satisfaction through tailored strategies and cutting-edge tools.',
  ];

  const stakeholderCollaborationSkills = [
    'Strong ability to manage cross-functional communication and relationships with internal and external stakeholders.',
  ];

  const businessAnalysisTechnicalSkills = [
    'Data Analysis (Certificate in Data Analytics)',
    'Tableau',
    'Power BI',
    'Risk Compliance',
    'Digital Transformation',
    'CRM Systems',
    'Telbet',
    'MS Office Suite',
  ];

  const SkillCategory: React.FC<{ title: string; skills: string[]; bgColor?: string }> = ({ title, skills, bgColor = 'bg-blue-500' }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className={`text-2xl font-semibold mb-3 text-white ${bgColor} p-2 rounded-t-md -m-6 mb-6`}>{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Key Skills & Strengths</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Leadership & Team Management" skills={leadershipSkills} bgColor="bg-indigo-600" />
          <SkillCategory title="Process Improvement & Innovation" skills={processInnovationSkills} bgColor="bg-purple-600" />
          <SkillCategory title="Project Management" skills={projectManagementSkills} bgColor="bg-pink-600" />
          <SkillCategory title="Customer Experience Enhancement" skills={customerExperienceSkills} bgColor="bg-red-600" />
          <SkillCategory title="Stakeholder Collaboration" skills={stakeholderCollaborationSkills} bgColor="bg-orange-600" />
          <SkillCategory title="Business Analysis & Technical Skills" skills={businessAnalysisTechnicalSkills} bgColor="bg-yellow-500" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

