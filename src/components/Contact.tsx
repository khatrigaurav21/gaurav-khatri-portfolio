import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="max-w-lg mx-auto text-center bg-gray-700 p-6 rounded-lg shadow-lg">
          <p className="mb-4 text-lg">Feel free to reach out for any inquiries, opportunities, or to discuss how my skills can benefit your team.</p>
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:khatri.gaurav@outlook.com" className="text-blue-400 hover:underline">khatri.gaurav@outlook.com</a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> <a href="tel:+61420339500" className="text-blue-400 hover:underline">+61 420 339 500</a>
          </p>
          <p className="mb-4">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kha3gaurav" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/kha3gaurav</a>
          </p>
          {/* Optional: A contact form could be added here if desired */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

