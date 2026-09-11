import React from 'react';
import { motion } from 'motion/react';
import {
  FiGithub,
  FiExternalLink,
  FiShoppingCart,
  FiMessageCircle,
  FiShoppingBag,
  FiLink,
  FiArrowUpRight,
  FiUsers,
  FiShield,
  FiBookOpen,
  FiLock,
  FiActivity,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiRedux,
  SiWeb3Dotjs,
  SiTailwindcss,
  SiJsonwebtokens,
} from 'react-icons/si';

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'Learning Project • MERN Stack',
    icon: FiShoppingCart,
    description:
      'A full-featured e-commerce application built while learning the MERN stack. Includes secure authentication, complete CRUD operations for products, shopping cart, and order management system.',
    features: [
      'User Authentication (JWT)',
      'Product CRUD Operations',
      'Shopping Cart System',
      'Order Management',
    ],
    tech: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
    github: 'https://github.com/yourusername/ecommerce-mern',
    demo: 'https://ecommerce-demo.vercel.app',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Real-Time Chat App',
    subtitle: 'Learning Project • MERN + Socket.IO',
    icon: FiMessageCircle,
    description:
      'A modern real-time chat application supporting instant messaging, live online user status, and typing indicators powered by Socket.IO.',
    features: [
      'Real-time Messaging',
      'Online Users Status',
      'Typing Indicator',
      'Message Notifications',
    ],
    tech: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#ffffff' },
    ],
    github: 'https://github.com/yourusername/realtime-chat',
    demo: 'https://chat-demo.vercel.app',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Real-Time E-Commerce',
    subtitle: 'Learning Project • MERN + Redux + Socket.IO',
    icon: FiShoppingBag,
    description:
      'An advanced e-commerce application with live product updates, real-time cart synchronization, and a powerful admin dashboard for managing everything.',
    features: [
      'Live Product Updates',
      'Real-time Cart Sync',
      'Admin Dashboard',
      'Redux State Management',
    ],
    tech: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#ffffff' },
    ],
    github: 'https://github.com/yourusername/realtime-ecommerce',
    demo: 'https://realtime-ecommerce-demo.vercel.app',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Blockchain Basics',
    subtitle: 'Bonus Learning Project • Web3',
    icon: FiLink,
    description:
      'An introduction to Web3 development covering wallet connections, smart contract fundamentals, and building a simple decentralized application (DApp).',
    features: [
      'Wallet Connection',
      'Smart Contract Basics',
      'DApp Introduction',
      'Web3 Integration',
    ],
    tech: [
      { name: 'Web3.js', icon: SiWeb3Dotjs, color: '#F16822' },
      { name: 'Solidity', icon: SiWeb3Dotjs, color: '#F16822' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
    github: 'https://github.com/yourusername/blockchain-basics',
    demo: 'https://blockchain-demo.vercel.app',
    accent: 'from-primary-500 to-primary-700',
    isBonus: true,
  },
  {
    title: 'Hartron LMS Dashboard',
    subtitle: 'Freelance Project • Hartron India',
    icon: FiBookOpen,
    description:
      'Contributed to the Learning Management System dashboard for Hartron India. Built with MERN stack, it powers course management, student tracking, and content delivery for thousands of learners.',
    features: [
      'Course Management System',
      'Student Progress Tracking',
      'Secure Authentication',
      'Content Delivery Platform',
    ],
    tech: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
    github: 'https://github.com/yourusername/hartron-lms',
    demo: 'https://dashboard.hartronindia.com',
    accent: 'from-primary-500 to-primary-700',
    isFreelance: true,
  },
  {
    title: 'Cyber Security & Penetration Testing',
    subtitle: 'Security Project • Web App Testing',
    icon: FiShield,
    description:
      'Hands-on cybersecurity project focused on web application penetration testing. Involves vulnerability assessment, ethical hacking techniques, and security auditing of web applications.',
    features: [
      'Web App Penetration Testing',
      'Vulnerability Assessment',
      'Security Auditing',
      'Ethical Hacking Techniques',
    ],
    tech: [
      { name: 'Kali Linux', icon: FiLock, color: '#557C94' },
      { name: 'Burp Suite', icon: FiActivity, color: '#FF6633' },
      { name: 'OWASP', icon: FiShield, color: '#22c55e' },
      { name: 'Nmap', icon: FiActivity, color: '#4682B4' },
    ],
    github: 'https://github.com/yourusername/cybersecurity-pentest',
    demo: 'https://github.com/yourusername/cybersecurity-pentest',
    accent: 'from-primary-500 to-primary-700',
    isSecurity: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
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

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  // Determine badge color
  let badgeLabel = null;
  let badgeClass = 'bg-primary-500';
  if (project.isBonus) {
    badgeLabel = 'Bonus';
    badgeClass = 'bg-primary-500';
  } else if (project.isFreelance) {
    badgeLabel = 'Freelance';
    badgeClass = 'bg-primary-600';
  } else if (project.isSecurity) {
    badgeLabel = 'Security';
    badgeClass = 'bg-primary-700';
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Badge */}
      {badgeLabel && (
        <div
          className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full ${badgeClass} text-white text-[10px] font-bold uppercase tracking-wider shadow-lg`}
        >
          {badgeLabel}
        </div>
      )}

      {/* Hover glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card header with icon */}
      <div className="relative p-6 lg:p-7 pb-5">
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          <span className="text-xs font-mono font-semibold text-dark-400 dark:text-dark-500">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1.5">
          {project.subtitle}
        </p>
        <h3 className="text-xl font-bold text-dark-950 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Features list */}
      <div className="relative px-6 lg:px-7 pb-5">
        <ul className="grid grid-cols-2 gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-1.5 text-xs text-dark-600 dark:text-dark-400"
            >
              <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="relative px-6 lg:px-7 pb-5">
        <div className="flex flex-wrap gap-2">
          {project.tech.map(({ name, icon: TechIcon, color }) => (
            <div
              key={name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700"
            >
              <TechIcon className="w-3.5 h-3.5" style={{ color }} />
              <span className="text-[10px] font-medium text-dark-700 dark:text-dark-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="relative mt-auto px-6 lg:px-7 py-5 border-t border-dark-200 dark:border-dark-800 bg-dark-50/50 dark:bg-dark-950/40 flex items-center gap-3">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-dark-900 dark:bg-dark-800 text-white text-xs font-semibold hover:bg-dark-800 dark:hover:bg-dark-700 transition-colors duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FiGithub className="w-4 h-4" />
          <span>Code</span>
        </motion.a>

        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FiExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Project() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-50 dark:bg-dark-950 py-20 lg:py-28"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-600/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-4"
          >
            <HiOutlineSparkles className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
              My Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-950 dark:text-white"
          >
            Featured <span className="text-primary-500">Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            A selection of projects showcasing my expertise in full-stack
            development, real-time systems, cybersecurity, and Web3 technology.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 lg:mt-20 text-center"
        >
          <motion.a
            variants={itemVariants}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-dark-900 border-2 border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 text-dark-900 dark:text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary-500/10"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}