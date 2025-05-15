import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: 'MBA (Finance)',
      institution: 'Sikkim Manipal University',
      year: '2013'
    },
    {
      id: 2,
      degree: 'Master of Commerce (Business Administration)',
      institution: 'Rajasthan University',
      year: '2012'
    },
    {
      id: 3,
      degree: 'Bachelor of Commerce',
      institution: 'Rajasthan University',
      year: '2009'
    }
  ];

  const certificationData = [
    {
      id: 1,
      name: 'Certificate in Data Analytics',
      year: '2024'
    },
    {
      id: 2,
      name: 'Future Leaders Program',
      institution: 'Illion Australia',
      year: '2021'
    },
    {
      id: 3,
      name: 'National Employment Police Check',
      details: 'Valid until February 2025'
    }
  ];

  return (
    <section id="education" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Education</h3>
            {educationData.map(edu => (
              <div key={edu.id} className="mb-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-blue-600">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution} - {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Certifications & Licenses</h3>
            {certificationData.map(cert => (
              <div key={cert.id} className="mb-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-green-600">{cert.name}</h4>
                {cert.institution && <p className="text-gray-600">{cert.institution} - {cert.year}</p>}
                {!cert.institution && cert.year && <p className="text-gray-600">{cert.year}</p>}
                {cert.details && <p className="text-gray-500 text-sm">{cert.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

