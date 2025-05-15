import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Results-driven Customer Service Team Leader with a decade of diverse experience across customer service, account management, and operations. I am skilled in leading cross-functional teams, driving process improvements, and delivering exceptional customer satisfaction. My expertise lies in implementing innovative tools and systems to enhance operational efficiency. I am known for successfully managing projects and leading teams to achieve measurable results, with a strong background spanning stakeholder management, risk compliance, and digital transformation. I am passionate about leveraging data-driven insights and analytical skills to solve complex business challenges and deliver impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

