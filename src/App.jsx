import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <Hero />

        {/* ABOUT */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 bg-dark-50 dark:bg-dark-900/40"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-dark-950 dark:text-white">
            About Section
          </h2>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-dark-950 dark:text-white">
            Projects Section
          </h2>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 bg-dark-50 dark:bg-dark-900/40"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-dark-950 dark:text-white">
            Skills Section
          </h2>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-dark-950 dark:text-white">
            Contact Section
          </h2>
        </section>
      </div>
    </ThemeProvider>
  );
}