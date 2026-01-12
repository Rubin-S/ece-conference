import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import {
  ClipboardListIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";
import { title } from "framer-motion/client";

// ———— DATA CONSTANTS —————————————————————————————————————————

const TOPICS = [
  {
    title: "Data-driven techniques for dynamical systems",
    desc: "Techniques leveraging data rather than analytical models to derive system behavior.",
    color: "bg-primary-500",
  },
  {
    title: "Computational modeling in physical & biological systems",
    desc: "Modeling real-world processes to predict, simulate, and study complex systems.",
    color: "bg-neon-blue-500",
  },
  {
    title: "Machine learning applications in system dynamics",
    desc: "Using ML to understand, predict, and optimize dynamic system behavior.",
    color: "bg-neon-green-500",
  },
  {
    title: "Modeling & simulation of engineering systems",
    desc: "Design and simulate engineering mechanisms digitally before physical execution.",
    color: "bg-primary-700",
  },
  {
    title: "Nonlinear dynamics & chaos theory",
    desc: "Exploring systems sensitive to initial conditions and nonlinear influence.",
    color: "bg-pink-500",
  },
  {
    title: "Big-data analytics for control & optimization",
    desc: "Extracting actionable insights from large datasets to optimize system performance.",
    color: "bg-purple-500",
  },
  {
    title: "Stochastic processes in dynamical systems",
    desc: "Incorporating randomness into system modeling to better reflect real-world behavior.",
    color: "bg-primary-400",
  },
  {
    title: "Applications in robotics, climate modeling, & beyond",
    desc: "Using computational tools to enhance robotics, environmental systems, and more.",
    color: "bg-yellow-400",
  },
];

const DATES = [
  {
    title: "Call for Papers Released",
    date: "01 June 2025",
  },
  {
    title: "Abstract Submission Deadline",
    date: "30 September 2025",
  },
  {
    title: "Paper Submission Deadline",
    date: "15 December 2025",
  },
  {
    title: "Notification of Acceptance",
    date: "31 January 2026",
  },
  {
    title: "Camera‑Ready Paper Due",
    date: "28 February 2026",
  },
  {
    title: "Early Bird Registration Deadline",
    date: "15 March 2026",
  },
  {
    title: "Regular Registration Deadline",
    date: "15 April 2026",
  },
  {
    title: "Conference Dates",
    date: "14–16 May 2026",
  },
];

// ———— ACCORDION ITEM ——————————————————————————————————————

const accordionVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AccordionItem = memo(function AccordionItem({
  index,
  title,
  desc,
  color,
  isOpen,
  onToggle,
}) {
  return (
    <motion.li key={title} variants={accordionVariants} className="relative">
      {index !== 0 && (
        <div className="absolute -top-3 left-6 right-0 h-px bg-light-divider dark:bg-dark-divider" />
      )}

      <button
        onClick={() => onToggle(index)}
        className="flex items-center gap-3 w-full text-left group transition"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 shrink-0 ${color}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="8" />
          <path
            d="M9 12l2 2 4-4"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="body font-semibold text-light-pt dark:text-dark-pt group-hover:text-primary-600 transition-colors">
          {title}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-8 pt-2 pr-2 overflow-hidden"
          >
            <p className="body text-light-st dark:text-dark-st">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
});

// ———— TIMELINE —————————————————————————————————————————————

const timelineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const timelineItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Timeline = memo(function Timeline() {
  return (
    <>
      {/* Desktop */}
      <motion.div
        className="hidden md:grid grid-cols-2 gap-y-16 gap-x-6 relative pt-10"
        viewport={{ once: true }}
        variants={timelineContainer}
      >
        {DATES.map(({ title, date }, idx) => (
          <motion.div
            key={title}
            variants={timelineItem}
            className="relative text-center"
          >
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-primary-500 dark:bg-primary-300 text-light-ctaText h-7 w-7 rounded-full flex items-center justify-center font-bold text-sm z-10">
              {idx + 1}
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-light-divider dark:border-dark-divider">
              <p className="body font-semibold text-light-pt dark:text-dark-pt">
                {title}
              </p>
              <p className="body-2 text-light-st dark:text-dark-st mt-1">
                {date}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile */}
      <motion.ul
        className="md:hidden relative border-l-2 border-primary-500 dark:border-primary-300 ml-4 space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={timelineContainer}
      >
        {DATES.map(({ title, date }, idx) => (
          <motion.li
            key={title}
            variants={timelineItem}
            className="pl-6 flex items-start relative"
          >
            <span className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-300 text-light-ctaText">
              {idx + 1}
            </span>
            <div>
              <p className="body font-light text-light-pt dark:text-dark-pt">
                {title}
              </p>
              <p className="body-2 text-light-st dark:text-dark-st">{date}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
});

// ———— CTA —————————————————————————————————————————————————

const CTA = memo(function CTA() {
  return (
    <motion.aside
      className="p-8 bg-gradient-neon rounded-2xl text-center relative overflow-hidden"
      aria-labelledby="submit-cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
      <h3 id="submit-cta" className="h2 mb-4 text-light-ctaText relative">
        Ready to Submit?
      </h3>
      <p className="body text-light-ctaText mb-6 relative">
        Our submission portal will open soon—stay tuned!
      </p>
      <Button
        disable
        href="/submission"
        className="relative"
        aria-label="Submission portal coming soon"
      >
        Portal Coming Soon
      </Button>
    </motion.aside>
  );
});

// ———— PAGE COMPONENT ————————————————————————————————————

export default function CallForPapers() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = useCallback(
    (idx) => setActiveIndex((prev) => (prev === idx ? null : idx)),
    []
  );

  return (
    <Section
      id="call-for-papers"
      role="region"
      aria-labelledby="cfp-heading"
      className="
        py-20 md:py-32
        bg-gradient-to-tr from-white via-gray-50 to-blue-50
        dark:from-gray-900 dark:via-gray-800 dark:to-blue-900
        text-gray-900 dark:text-gray-100
      "
    >
      <motion.div
        className="container max-w-5xl mx-auto space-y-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="lg:col-span-2 text-center mb-8"
          variants={fadeInUp}
        >
          <Heading
            id="cfp-heading"
            title="Call for Papers"
            text="We invite researchers, academicians, and industry professionals to submit original work aligned with our conference theme."
            className="text-center"
          />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Topics Accordion */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="p-8 bg-light-altBg dark:bg-dark-altBg rounded-2xl border border-light-divider dark:border-dark-divider shadow-subtle"
          >
            <h3 className="h3 mb-6 text-light-pt dark:text-dark-pt flex items-center justify-center">
              <ClipboardListIcon className="w-6 h-6 mr-2 text-primary-500" />
              Topics of Interest
            </h3>
            <ul className="space-y-6">
              {TOPICS.map((t, i) => (
                <AccordionItem
                  key={t.title}
                  index={i}
                  isOpen={activeIndex === i}
                  onToggle={handleToggle}
                  {...t}
                />
              ))}
            </ul>
          </motion.article>

          {/* Submission Guidelines */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-light-altBg dark:bg-dark-altBg rounded-2xl border border-light-divider dark:border-dark-divider shadow-subtle"
          >
            <h3 className="h3 mb-4 text-light-pt dark:text-dark-pt flex items-center justify-center">
              <PresentationChartLineIcon className="w-6 h-6 mr-2 text-primary-500" />
              Submission Guidelines
            </h3>
            <div className="space-y-4 body text-light-st dark:text-dark-st">
              <p>
                Submit original, unpublished manuscripts (in English) not under
                review elsewhere. All papers must adhere to the official
                formatting guidelines.
              </p>
              <p>Paper submission in LaTeX format</p>
              <p>
                All submissions will undergo peer review. Accepted papers will
                be presented at the conference and included in the official
                proceedings.
              </p>
            </div>
          </motion.article>
        </div>

        {/* Important Dates */}
        {/*<section aria-labelledby="dates-heading" className="space-y-6">
          <h3
            id="dates-heading"
            className="h3 text-center text-light-pt dark:text-dark-pt"
          >
            Important Dates
          </h3>
          <Timeline />
        </section>*/}

        {/* Call To Action */}
        <CTA />
      </motion.div>
    </Section>
  );
}
