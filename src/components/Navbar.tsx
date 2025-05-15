import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold hover:text-blue-300 transition-colors duration-300">Gaurav Khatri</a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-300 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-blue-300 transition-colors duration-300">Skills</a>
          <a href="#experience" className="hover:text-blue-300 transition-colors duration-300">Experience</a>
          <a href="#projects" className="hover:text-blue-300 transition-colors duration-300">Projects</a>
          <a href="#education" className="hover:text-blue-300 transition-colors duration-300">Education</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

