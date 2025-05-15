import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; // Assuming you named the component file Experience.tsx
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import TableauDashboard from './components/TableauDashboard';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center text-center p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">Gaurav Khatri</h1>
            <p className="text-2xl md:text-3xl mb-6 animate-fade-in-up delay-200">Customer Service Team Leader & Project Manager</p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Results-driven professional with a decade of diverse experience across customer service, account management, and operations. Skilled in leading cross-functional teams, driving process improvements, and delivering exceptional customer satisfaction. Adept at implementing innovative tools and systems to enhance operational efficiency.
            </p>
            <a 
              href="#projects" 
              className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg animate-fade-in-up delay-600"
            >
              Explore My Work
            </a>
          </div>
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TableauDashboard />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Gaurav Khatri. All rights reserved.</p>        
      </footer>
    </div>
  );
};

export default App;

