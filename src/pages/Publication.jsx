// -----------------------------------------------------------------------------
// FILE: src/pages/Publication.jsx
// PURPOSE: Publication details page — modern, minimal, sleek, and accessible
// -----------------------------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import springer from "../assets/images/springer.jpg";
import springerBottom from "../assets/images/springer_bottom.jpg";
import { DownloadIcon, ExternalLinkIcon } from "@heroicons/react/outline";

/* -------------------------
   Motion variants
   ------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

const fadeInHeader = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* -------------------------
   Small accessible button
   ------------------------- */
function CTAButton({ href = "#", children, variant = "primary", ariaLabel }) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 transition";
  const styles =
    variant === "primary"
      ? "bg-primary-600 text-white hover:bg-primary-700"
      : "bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 hover:shadow-md";
  return (
    <a href={href} className={`${base} ${styles}`} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

/* -------------------------
   Simple Accordion (compact)
   ------------------------- */
function Accordion({ title, children, index }) {
  return (
    <details className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60" aria-labelledby={`acc-${index}`}>
      <summary
        id={`acc-${index}`}
        className="px-5 py-4 cursor-pointer list-none flex items-center justify-between text-sm font-medium text-gray-900 dark:text-white"
      >
        <span>{title}</span>
        <span className="text-xs text-gray-500 dark:text-gray-300 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </details>
  );
}

/* -------------------------
   Main component
   ------------------------- */
export default function Publication() {
  return (
    <Section
      id="publication"
      className="bg-gradient-to-tr from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container max-w-6xl mx-auto space-y-10 px-4 md:px-6"
      >
        {/* Header */}
        <motion.div variants={fadeInHeader} initial="hidden" animate="visible" className="text-center">
          <Heading
            title="Publication Details"
            text="Guidelines and workflow for accepted papers — succinct and clear."
          />
        </motion.div>

        {/* Hero: Logos + Headline (2-column on wide screens) */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Logos column */}
          <div className="lg:col-span-1 flex flex-col items-center gap-6">
            <motion.img
              src={springer}
              alt="Springer logo"
              className="w-36 sm:w-44 md:w-48 h-auto rounded-lg shadow-sm"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
            />
            <motion.img
              src={springerBottom}
              alt="Springer proceedings"
              className="w-36 sm:w-44 md:w-48 h-auto rounded-lg shadow-sm"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
            />
          </div>

          {/* Headline + summary + CTAs */}
          <div className="my-auto lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-subtle">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Springer Proceedings in Complexity
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                All peer-reviewed accepted papers will be considered for publication in the Springer Proceedings (Scopus indexed). At least one author must register and present the paper for it to be processed further.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {/* <CTAButton disable href="/downloads/springer-latex-template.zip" variant="secondary" ariaLabel="Download LaTeX template">
                  <DownloadIcon className="w-4 h-4" />
                  LaTeX Template
                </CTAButton> */}

                <CTAButton href="#workflow" variant="primary" ariaLabel="View publication workflow">
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Workflow
                </CTAButton>
              </div>
            </div>

            {/* Minimal info list (kept short, essential only) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="font-medium">Pages</div>
                <div className="text-xs">6–8 pages (up to 10 in exceptions)</div>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="font-medium">Similarity</div>
                <div className="text-xs">Below 25%</div>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="font-medium">Publication Fee</div>
                <div className="text-xs">No fees for accepted papers</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publication Workflow (zig-zag visual removed here for clarity; compact vertical timeline) */}
        <motion.section id="workflow" variants={fadeUp} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Publication Workflow</h3>

          <div className="relative pl-6">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" aria-hidden="true" />
            <div className="space-y-6">
              {[
                { title: "Submission & Initial Checks", desc: "Format and similarity checks; use the Springer LaTeX template." },
                { title: "Peer Review", desc: "Double-blind peer review by independent experts." },
                { title: "Acceptance Notification", desc: "Authors receive formal acceptance and instructions." },
                { title: "Camera-ready Submission", desc: "Submit final LaTeX files and required forms." },
                { title: "Proceedings & Indexing", desc: "Accepted & presented papers are compiled and indexed." },
              ].map((step, idx) => (
                <motion.div key={step.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="relative">
                  <div className="absolute left-[-0.875rem] top-1">
                    <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-primary-600 dark:border-primary-400" aria-hidden="true" />
                  </div>

                  <div className="ml-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">{step.title}</div>
                    <div className="mt-1">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Compact Accordion: Requirements & Copyright */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Accordion title="Author & Formatting Requirements" index={1}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use Springer LaTeX template (available above).</li>
              <li>Page limit: 6–8 (up to 10 exceptional).</li>
              <li>Similarity must be below 25%.</li>
              <li>At least one author must register and present.</li>
            </ul>
          </Accordion>

          <Accordion title="Post-Acceptance Checklist" index={2}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prepare camera-ready LaTeX files.</li>
              <li>Upload signed copyright and registration proof as instructed.</li>
            </ul>
          </Accordion>
        </motion.div>
      </motion.div>
    </Section>
  );
}
