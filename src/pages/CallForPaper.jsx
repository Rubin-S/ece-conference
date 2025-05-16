import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import {
  ClipboardListIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";

// Accordion topic list
const topicsWithDetails = [
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

// Important dates
const dates = [
  { label: "Submission Deadline", date: "15 Feb 2026" },
  { label: "Acceptance Notice", date: "20 Mar 2026" },
  { label: "Camera-Ready Due", date: "05 Apr 2026" },
  { label: "Conference", date: "15–16 May 2026" },
];

// Variants
const listVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export default function CallForPapers() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section
      id="call-for-papers"
      role="region"
      aria-labelledby="cfp-heading"
      className="py-20 md:py-32 bg-light-pb dark:bg-dark-pb"
    >
      <div className="container max-w-5xl mx-auto space-y-16">
        <Heading
          id="cfp-heading"
          title="Call for Papers"
          text="We invite researchers, academicians, and industry professionals to submit original work aligned with our conference theme."
          className="text-center"
        />

        {/* Topics Accordion + Guidelines */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Accordion Card */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={listVariant}
            className="p-8 bg-light-altBg dark:bg-dark-altBg rounded-2xl border border-light-divider dark:border-dark-divider shadow-subtle"
          >
            <h3 className="h3 mb-6 text-light-pt dark:text-dark-pt flex items-center justify-center">
              <ClipboardListIcon className="w-6 h-6 mr-2 text-primary-500" />
              Topics of Interest
            </h3>

            <ul className="space-y-6">
              {topicsWithDetails.map(({ title, desc, color }, index) => {
                const isOpen = activeIndex === index;

                return (
                  <li key={title} className="relative">
                    {/* Divider line except first */}
                    {index !== 0 && (
                      <div className="absolute -top-3 left-6 w-[calc(100%-1.5rem)] h-px bg-light-divider dark:bg-dark-divider" />
                    )}

                    {/* Accordion Button */}
                    <button
                      onClick={() => toggle(index)}
                      className="flex items-center gap-3 w-full text-left group transition"
                      aria-expanded={isOpen}
                    >
                      {/* SVG Bullet */}
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
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="body font-semibold text-light-pt dark:text-dark-pt group-hover:text-primary-600 transition-colors">
                        {title}
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-8 pt-2 pr-2 overflow-hidden"
                        >
                          <p className="body text-light-st dark:text-dark-st">
                            {desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </motion.article>

          {/* Guidelines Card */}
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
                review elsewhere. Follow the official formatting template.
              </p>
              <p>
                All submissions undergo peer review. Accepted papers will be
                presented and included in the proceedings.
              </p>
            </div>
          </motion.article>
        </div>

        {/* Important Dates Timeline */}
        <motion.section
          aria-labelledby="dates-heading"
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariant}
        >
          <h3
            id="dates-heading"
            className="h3 text-center text-light-pt dark:text-dark-pt"
          >
            Important Dates
          </h3>

          <motion.ul
            className="hidden md:flex justify-between gap-6 relative border-t-2 border-primary-500 dark:border-primary-300 pt-10"
            variants={listVariant}
          >
            {dates.map(({ label, date }, idx) => (
              <motion.li
                key={label}
                className="text-center relative"
                variants={itemVariant}
              >
                <div className="absolute top-[-1.75rem] left-1/2 -translate-x-1/2 bg-primary-500 dark:bg-primary-300 text-light-ctaText h-7 w-7 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="body font-semibold text-light-pt dark:text-dark-pt">
                  {label}
                </p>
                <p className="body-2 text-light-st dark:text-dark-st">{date}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Vertical List */}
          <motion.ul
            className="md:hidden relative border-l-2 border-primary-500 dark:border-primary-300 ml-4 space-y-8"
            variants={listVariant}
          >
            {dates.map(({ label, date }, idx) => (
              <motion.li
                key={label}
                className="pl-6 flex items-start"
                variants={itemVariant}
              >
                <span className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-300 text-light-ctaText">
                  {idx + 1}
                </span>
                <div>
                  <p className="body font-semibold text-light-pt dark:text-dark-pt">
                    {label}
                  </p>
                  <p className="body-2 text-light-st dark:text-dark-st">
                    {date}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* CTA Card */}
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
      </div>
    </Section>
  );
}
