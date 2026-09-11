import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skill from'./components/Skill.jsx';
import Project from './components/Project.jsx';
import Experience from './components/Exp.jsx';
import Contact from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';



export default function App() {
  return (
    <ThemeProvider>
       <SmoothScroll offset={80} duration={700}>
      <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Skill/>
        <Project/>
        <Experience/>
        <Contact/>
        <Footer/>

        
      </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}