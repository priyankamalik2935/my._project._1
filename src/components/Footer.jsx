import React from 'react';
import { motion } from 'motion/react';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiHeart,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/priyankamalik2935', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:salonymalik2008@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Full Stack Development',
  'Cyber Security',
  'Prompt Engineering',
  'UI/UX Design',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="pt-20 lg:pt-24 pb-14 lg:pb-16 border-b border-dark-200 dark:border-dark-800"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-5"
            >
              <HiOutlineSparkles className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                Let's Work Together
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-950 dark:text-white mb-5 leading-tight"
            >
              Have a project in{' '}
              <span className="text-primary-500">mind?</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-600 dark:text-dark-400 mb-8 max-w-xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="mailto:salonymalik2008@gmail.com"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiMail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-dark-900 text-dark-900 dark:text-white font-semibold rounded-xl border-2 border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-2 group mb-5"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-shadow duration-300">
                  <HiOutlineSparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-dark-950 dark:text-white">
                Portfolio<span className="text-primary-500">.</span>
              </span>
            </a>

            <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
              Full Stack Developer passionate about building secure, modern,
              and AI-powered web experiences.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark-950 dark:text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group inline-flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark-950 dark:text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="inline-flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400">
                    <span className="w-1 h-1 rounded-full bg-primary-500" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark-950 dark:text-white mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:salonymalik2008@gmail.com"
                  className="group flex items-start gap-3 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                    <FiMail className="w-4 h-4 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="pt-1.5 break-all">
                    salonymalik2008@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919812217688"
                  className="group flex items-start gap-3 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                    <FiPhone className="w-4 h-4 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="pt-1.5">+91 9812217688</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-dark-600 dark:text-dark-400">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-4 h-4 text-primary-500" />
                  </div>
                  <span className="pt-1.5">Haryana, India</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-dark-200 dark:border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-dark-500 dark:text-dark-400 text-center sm:text-left">
            © {currentYear} Priyanka. Built with{' '}
            <FiHeart className="inline w-3.5 h-3.5 text-primary-500 fill-primary-500 mx-0.5" />{' '}
            using React & Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 text-xs font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Top</span>
            <FiArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}