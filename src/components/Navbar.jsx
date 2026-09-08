import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMail,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-lg shadow-lg border-b border-dark-200 dark:border-dark-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-shadow duration-300">
                <HiOutlineSparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-primary-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-dark-950 dark:text-white">
              Portfolio<span className="text-primary-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-2 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? (
                    <FiMoon className="w-5 h-5" />
                  ) : (
                    <FiSun className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Hire me CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:block px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-primary-500/50 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                        : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex items-center justify-center px-4 py-3 mt-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-lg shadow-lg"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}