import React from 'react';
import { motion } from 'motion/react';
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiCode,
  FiShield,
  FiCpu,
  FiLayers,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { FaRocket } from 'react-icons/fa';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:hello@example.com', label: 'Email' },
];

const expertiseAreas = [
  {
    icon: FiShield,
    title: 'Cyber Security',
    description: 'Ethical hacking, network security & threat analysis',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: FiLayers,
    title: 'Web Development',
    description: 'MERN Stack — MongoDB, Express, React & Node.js',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: FiCpu,
    title: 'Prompt Engineering',
    description: 'AI prompt design, LLM optimization & automation',
    color: 'from-primary-500 to-primary-700',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-950 pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-600/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-300">
                Available for freelance work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-dark-950 dark:text-white leading-[1.1]"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Priyanka
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: 'easeInOut' }}
                >
                  <motion.path
                    d="M2 8 Q 75 2, 150 6 T 298 4"
                    stroke="url(#grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.h2
              variants={itemVariants}
              className="mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold text-dark-700 dark:text-dark-200"
            >
              <span className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                <FiCode className="w-6 h-6 text-primary-500" />
                Full Stack Developer
                <span className="text-dark-400 dark:text-dark-500">•</span>
                <FiShield className="w-6 h-6 text-primary-500" />
                Security Enthusiast
              </span>
              <span className="block mt-2 text-base sm:text-lg font-normal text-dark-500 dark:text-dark-400">
                Building secure, modern & AI-powered web experiences
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-dark-600 dark:text-dark-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I specialize in crafting clean, responsive, and pixel-perfect interfaces
              using <span className="text-primary-600 dark:text-primary-400 font-medium">MERN Stack</span>,{' '}
              <span className="text-primary-600 dark:text-primary-400 font-medium">Cybersecurity</span> best practices, and{' '}
              <span className="text-primary-600 dark:text-primary-400 font-medium">Prompt Engineering</span>.
              Let's turn your ideas into secure, stunning digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollTo('projects')}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaRocket className="w-5 h-5" />
                <span>View My Work</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-dark-900 text-dark-900 dark:text-white font-semibold rounded-xl border-2 border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-dark-500 dark:text-dark-400 hidden sm:block">
                Follow me →
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '30+', label: 'Projects Done' },
                { value: '15+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center lg:text-left"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-dark-500 dark:text-dark-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]">
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #22c55e, #16a34a, #15803d, #22c55e)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Ring glow */}
              <div className="absolute inset-4 rounded-full bg-primary-500/20 blur-2xl" />

              {/* Inner circle */}
              <div className="absolute inset-6 rounded-full bg-white dark:bg-dark-950 flex items-center justify-center overflow-hidden border-4 border-white dark:border-dark-950">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 flex items-center justify-center">
                  <span className="text-[120px] xl:text-[140px] font-black text-white select-none">
                    P
                  </span>
                </div>
              </div>

              {/* Floating tech badge — top right */}
              <motion.div
                className="absolute -top-2 -right-2 bg-white dark:bg-dark-900 rounded-2xl p-3 shadow-xl border border-dark-100 dark:border-dark-800 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                  <FiLayers className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-dark-950 dark:text-white">
                    MERN
                  </div>
                  <div className="text-[10px] text-dark-500 dark:text-dark-400">
                    Stack
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                className="absolute -bottom-2 -left-2 bg-white dark:bg-dark-900 rounded-2xl p-3 shadow-xl border border-dark-100 dark:border-dark-800 flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                  <FiShield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-dark-950 dark:text-white">
                    Security
                  </div>
                  <div className="text-[10px] text-dark-500 dark:text-dark-400">
                    Focused
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — middle right */}
              <motion.div
                className="absolute top-1/2 -right-4 bg-white dark:bg-dark-900 rounded-2xl p-3 shadow-xl border border-dark-100 dark:border-dark-800 flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                  <FiCpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-dark-950 dark:text-white">
                    AI Prompt
                  </div>
                  <div className="text-[10px] text-dark-500 dark:text-dark-400">
                    Engineer
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <motion.div
                className="absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-primary-500"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/4 -right-8 w-4 h-4 rounded-full bg-primary-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Education & Expertise Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 lg:mt-24"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-3">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                Education & Expertise
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-950 dark:text-white">
              What I <span className="text-primary-500">Do</span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              A blend of security-first thinking, full-stack development, and AI-driven innovation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg shadow-primary-500/25 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h4 className="text-lg font-bold text-dark-950 dark:text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Accent line */}
                    <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-dark-300 dark:border-dark-700 flex items-start justify-center p-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary-500"
              animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}