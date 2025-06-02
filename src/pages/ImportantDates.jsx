// src/pages/ImportantDates.jsx

import React from "react";
import { motion, scale } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import { DownloadIcon } from "@heroicons/react/outline";

// ——— DATA DEFINITIONS —————————————————————————————————————————————

const IMPORTANT_DATES = [
  {
    title: "Call for Papers Released",
    date: "01 June 2025",
    desc: "Conference call for papers officially opens.",
  },
  {
    title: "Abstract Submission Deadline",
    date: "30 September 2025",
    desc: "Deadline to submit abstracts for review.",
  },
  {
    title: "Paper Submission Deadline",
    date: "15 December 2025",
    desc: "Final date to submit full papers in IEEE format. No extensions allowed.",
  },
  {
    title: "Notification of Acceptance",
    date: "31 January 2026",
    desc: "Authors will be informed of acceptance or rejection decisions.",
  },
  {
    title: "Camera‑Ready Paper Due",
    date: "28 February 2026",
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


// ——— ANIMATION VARIANTS —————————————————————————————————————————————

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hover: {scale: 1.01, transition: { duration: 0.2 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.01, transition: { duration: 0.2 } },
};

// ——— MAIN COMPONENT —————————————————————————————————————————————

export default function ImportantDates() {
  return (
    <Section
      id="important-dates"
      className="
        py-24 md:py-32
        bg-gradient-to-tr from-white via-gray-50 to-blue-50
        dark:from-gray-900 dark:via-gray-800 dark:to-blue-900
        text-gray-900 dark:text-gray-100
      "
      aria-labelledby="important-dates-heading"
    >
      <div className="container max-w-5xl mx-auto space-y-16">
        {/* ——— HEADING ————————————— */}
        <Heading
          id="important-dates-heading"
          title="Important Dates"
          text="Timely milestones to guide your conference journey."
          className="text-center"
        />

        {/* ——— DESKTOP TIMELINE ————————————— */}
        <div className="relative hidden md:block">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-light-divider dark:bg-dark-divider" />

          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {IMPORTANT_DATES.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className={`relative flex w-full ${
                    isLeft ? "justify-end pr-16" : "justify-start pl-16"
                  }`}
                  variants={isLeft ? slideInLeft : slideInRight}
                  whileHover={"hover"}
                >
                  {/* Event Card */}
                  <div
                    className="
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      rounded-2xl shadow-subtle hover:shadow-elevated transition-shadow
                      p-6 max-w-md w-full
                    "
                  >
                    <h3 className="text-xl font-semibold text-light-pt dark:text-dark-pt mb-1">
                      {item.title}
                    </h3>
                    <time className="block text-sm font-medium text-primary-500 mb-3">
                      {item.date}
                    </time>
                    <p className="text-light-st dark:text-dark-st">
                      {item.desc}
                    </p>
                  </div>

                  {/* Number Badge (overlapping the line) */}
                  {/* <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="
                        bg-primary-500 dark:bg-primary-300
                        text-white rounded-full
                        flex items-center justify-center
                        w-10 h-10 shadow-lg
                      "
                    >
                      <span className="text-sm font-semibold">{idx + 1}</span>
                    </div>
                  </div> */}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ——— MOBILE TIMELINE ————————————— */}
        <div className="md:hidden">
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {IMPORTANT_DATES.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative flex items-start w-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Badge */}
                {/* <div className="relative mr-4 mt-1">
                  <div
                    className="
                      bg-primary-500 dark:bg-primary-300
                      text-white rounded-full
                      flex items-center justify-center
                      w-8 h-8 shadow
                    "
                  >
                    <span className="text-xs font-semibold">{idx + 1}</span>
                  </div>
                  <div className="absolute top-8 left-3.5 h-full w-1 bg-light-divider dark:bg-dark-divider" />
                </div> */}

                {/* Event Card */}
                <div
                  className="
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    rounded-2xl shadow-lg
                    p-4 w-full
                  "
                >
                  <h3 className="text-lg font-semibold text-light-pt dark:text-dark-pt mb-1">
                    {item.title}
                  </h3>
                  <time className="block text-sm font-medium text-primary-500 mb-2">
                    {item.date}
                  </time>
                  <p className="text-light-st dark:text-dark-st text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ——— ADD TO CALENDAR CTA ————————————— */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="body mb-4 text-light-st dark:text-dark-st">
            Download all these dates to your calendar so you never miss a
            deadline.
          </p>
          <button
            href="/downloads/important-dates.ics"
            className="
              inline-flex items-center gap-2
              px-6 py-3 bg-primary-500 text-white
              rounded-xl shadow-lg hover:bg-primary-600 transition
            "
            aria-label="Download Calendar File"
          >
            <DownloadIcon className="w-5 h-5" aria-hidden="true" />
            Add to Calendar
          </button>
        </motion.div>
      </div>
    </Section>
  );
}
