"use client";
import { motion } from "framer-motion";

const IMPORTANT_DATES = [
  {
    title: "Call for Papers Released",
    date: "01 June 2025",
    desc: "Conference call for papers officially opens.",
  },
  {
    title: "Abstract Submission Deadline",
    date: "30 January 2026",
    desc: "Deadline to submit abstracts for review.",
  },
  {
    title: "Paper Submission Deadline",
    date: "15 February 2026",
    desc: "Final date to submit full papers in IEEE format. No extensions allowed.",
  },
  {
    title: "Notification of Acceptance",
    date: "30 March 2026",
    desc: "Authors will be informed of acceptance or rejection decisions.",
  },
  {
    title: "Camera-Ready Paper Due",
    date: "15 April 2026",
    desc: "Final versions of accepted papers due for proceedings.",
  },
  {
    title: "Early Bird Registration Deadline",
    date: "15 March 2026",
    desc: "Discounted registration deadline for early participants.",
  },
  {
    title: "Regular Registration Deadline",
    date: "15 April 2026",
    desc: "Final date for regular author and participant registration.",
  },
  {
    title: "Conference Dates",
    date: "14–16 May 2026",
    desc: "Main conference held at NIT Puducherry with hybrid options.",
  },
];

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ImportantDates() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-white via-sky-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-20 px-4 sm:px-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-300">
          Important Dates
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light text-gray-600 dark:text-gray-300">
          Keep track of the key milestones for the conference.
        </p>
      </motion.header>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto before:absolute before:inset-y-0 before:left-1/2 before:w-[2px] before:-translate-x-1/2 before:bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent">
        {IMPORTANT_DATES.map((event, i) => (
          <motion.div
            key={event.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeSlide}
            className={`relative flex flex-col sm:flex-row items-center sm:justify-between mb-16 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
          >
            {/* Content Box */}
            <div
              className={`w-full sm:w-[46%] bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md transition-transform hover:scale-[1.02] hover:shadow-xl duration-300 ${i % 2 === 0
                  ? "sm:text-left text-center"
                  : "sm:text-right text-center"
                }`}
            >
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">
                {event.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                {event.date}
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Connector Dot */}
            <span className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 border-4 border-white dark:border-gray-900 shadow-md" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
