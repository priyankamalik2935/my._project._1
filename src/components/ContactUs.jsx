import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'salonymalik2008@gmail.com',
    href: 'mailto:salonymalik2008@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9812217688',
    href: 'tel:+919812217688',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Haryana, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/priyankamalik2935',
    label: 'GitHub',
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: FiTwitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission — replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-950 dark:text-white"
          >
            Contact <span className="text-primary-500">Me</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to say hello? I'd love to hear from
            you. Let's build something amazing together.
          </motion.p>
        </motion.div>

        {/* Grid: contact info + form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {/* LEFT — Contact info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? motion.a : motion.div;
              const wrapperProps = href
                ? {
                    href,
                    whileHover: { y: -4 },
                    transition: { type: 'spring', stiffness: 300 },
                  }
                : { whileHover: { y: -4 } };

              return (
                <Wrapper
                  key={label}
                  {...wrapperProps}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400 mb-1">
                      {label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-dark-950 dark:text-white break-all">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social section */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400 mb-4">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/25 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Available
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">Open for Freelance</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  Currently accepting new projects. Response time within 24
                  hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="relative p-6 lg:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 shadow-sm">
              {/* Success overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm flex items-center justify-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-center px-6"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <FiCheckCircle className="w-8 h-8 text-primary-500" />
                    </div>
                    <h4 className="text-xl font-bold text-dark-950 dark:text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-dark-400">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              <h3 className="text-xl lg:text-2xl font-bold text-dark-950 dark:text-white mb-2">
                Send me a message
              </h3>
              <p className="text-sm text-dark-600 dark:text-dark-400 mb-6">
                Fill out the form below and I'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 dark:text-dark-500 pointer-events-none" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-sm text-dark-950 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 dark:text-dark-500 pointer-events-none" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-sm text-dark-950 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 dark:text-dark-500 pointer-events-none" />
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-sm text-dark-950 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-sm text-dark-950 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{
                    scale: loading ? 1 : 1.02,
                    y: loading ? 0 : -2,
                  }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <>
                      <motion.span
                        className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}