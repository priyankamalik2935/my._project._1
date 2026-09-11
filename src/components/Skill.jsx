import React from 'react';
import { motion } from 'motion/react';
import {
  FiShield,
  FiLock,
  FiTerminal,
  FiLayers,
  FiDatabase,
  FiServer,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiCode,
  FiGitBranch,
  FiCloud,
  FiCheckCircle,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Cyber Security',
    icon: FiShield,
    color: 'from-primary-500 to-primary-700',
    skills: [
      { name: 'Ethical Hacking', level: 90, icon: FiTerminal },
      { name: 'Network Security', level: 85, icon: FiLock },
      { name: 'Threat Analysis', level: 82, icon: FiShield },
      { name: 'Penetration Testing', level: 78, icon: FiCheckCircle },
    ],
  },
  {
    title: 'Web Development (MERN)',
    icon: FiLayers,
    color: 'from-primary-500 to-primary-700',
    skills: [
      { name: 'MongoDB', level: 88, icon: FiDatabase },
      { name: 'Express.js', level: 85, icon: FiServer },
      { name: 'React.js', level: 92, icon: FiCode },
      { name: 'Node.js', level: 87, icon: FiCloud },
    ],
  },
  {
    title: 'Prompt Engineering',
    icon: FiCpu,
    color: 'from-primary-500 to-primary-700',
    skills: [
      { name: 'AI Prompt Design', level: 90, icon: FiMessageSquare },
      { name: 'LLM Optimization', level: 85, icon: FiZap },
      { name: 'AI Automation', level: 82, icon: FiCpu },
      { name: 'Model Fine-tuning', level: 75, icon: FiGitBranch },
    ],
  },
];

const techStack = [
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

// Skill bar WITHOUT percentage text
function SkillBar({ name, level, icon: Icon }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-primary-500" />
        <span className="text-sm font-medium text-dark-800 dark:text-dark-100">
          {name}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-dark-100 dark:bg-dark-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skill() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-950 py-20 lg:py-28"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-600/5 rounded-full blur-3xl" />

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
              My Skills
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-950 dark:text-white"
          >
            Expertise & <span className="text-primary-500">Skills</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            A powerful combination of security-first thinking, full-stack
            development, and AI-driven innovation.
          </motion.p>
        </motion.div>

        {/* Skill categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative p-6 lg:p-7 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-dark-950 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-5">
                    {category.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech stack row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 lg:mt-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-center text-sm font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400 mb-6"
          >
            Tech Stack I Work With
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {techStack.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
              >
                <Icon
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                />
                <span className="text-sm font-semibold text-dark-800 dark:text-dark-100">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}