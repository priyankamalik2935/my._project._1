import React from 'react';
import { motion } from 'motion/react';
import {
  FiBriefcase,
  FiShield,
  FiCode,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiAward,
  FiLayers,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

const experiences = [
  {
    type: 'education',
    title: 'Cyber Security & Web Development',
    company: 'Hartron Advance Skill Centre',
    location: 'India',
    period: 'March 2026 — Present',
    duration: '1.5+ Years',
    icon: FiShield,
    color: 'from-primary-500 to-primary-700',
    description:
      'Comprehensive training in cyber security fundamentals and modern full-stack web development with a focus on the MERN stack.',
    highlights: [
      'Ethical Hacking & Network Security',
      'MERN Stack Development',
      'Penetration Testing Basics',
      'Real-world Project Implementation',
    ],
    tags: ['Cyber Security', 'MERN Stack', 'Web Development'],
    isCurrent: true,
  },
  {
    type: 'work',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'September 2026 — Present',
    duration: 'Ongoing',
    icon: FiBriefcase,
    color: 'from-primary-500 to-primary-700',
    description:
      'Working as an independent freelance developer delivering secure, modern, and responsive web applications for clients across various domains.',
    highlights: [
      'Custom Web Application Development',
      'Secure Authentication Systems',
      'Responsive UI/UX Implementation',
      'Client Communication & Delivery',
    ],
    tags: ['Freelance', 'Full Stack', 'Client Projects'],
    isCurrent: true,
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

function ExperienceCard({ exp, index }) {
  const Icon = exp.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex flex-col lg:flex-row gap-6 lg:gap-8 ${
        isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative flex-1 p-6 lg:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
      >
        {/* Hover glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Current badge */}
        {exp.isCurrent && (
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300">
              Current
            </span>
          </div>
        )}

        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0`}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg lg:text-xl font-bold text-dark-950 dark:text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {exp.company}
              </p>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4 text-xs text-dark-500 dark:text-dark-400">
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar className="w-3.5 h-3.5" />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold">
              <FiAward className="w-3.5 h-3.5" />
              {exp.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed mb-5">
            {exp.description}
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-2 mb-5">
            {exp.highlights.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2 text-xs text-dark-700 dark:text-dark-300"
              >
                <FiCheckCircle className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-200 dark:border-dark-800">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-[11px] font-medium text-dark-700 dark:text-dark-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Empty spacer for the timeline layout on desktop */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
}

export default function Exp() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-950 py-20 lg:py-28"
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
              My Journey
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-950 dark:text-white"
          >
            Experience & <span className="text-primary-500">Education</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            A blend of continuous learning, hands-on training, and real-world
            freelance experience.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-primary-500/40 to-transparent" />

          {/* Timeline dots */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 lg:space-y-20"
          >
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative">
                {/* Timeline dot - desktop only */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.2,
                      type: 'spring',
                      stiffness: 300,
                    }}
                    className="relative"
                  >
                    <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-40" />
                    <span className="relative flex w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-950 shadow-lg" />
                  </motion.div>
                </div>

                <ExperienceCard exp={exp} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Summary stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { value: '1.5+', label: 'Years Training', icon: FiAward },
            { value: '4+', label: 'Tech Stacks', icon: FiLayers },
            { value: '2', label: 'Active Roles', icon: FiBriefcase },
            { value: '100%', label: 'Dedication', icon: FiCheckCircle },
          ].map(({ value, label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group p-4 lg:p-5 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 text-center transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-primary-500" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-500">
                {value}
              </div>
              <div className="text-xs text-dark-500 dark:text-dark-400 mt-1">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
