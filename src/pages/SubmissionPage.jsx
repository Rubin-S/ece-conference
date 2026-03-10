import React from "react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import {
  BadgeCheckIcon,
  DocumentTextIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const highlights = [
  {
    title: "Direct Springer Submission",
    description:
      "Authors should submit manuscripts through the official Springer Meteor portal for IC3DCM.",
    Icon: ExternalLinkIcon,
  },
  {
    title: "Peer Review Process",
    description:
      "All manuscripts will be evaluated through the conference review process for quality, originality, and relevance.",
    Icon: BadgeCheckIcon,
  },
  {
    title: "Manuscript Readiness",
    description:
      "Please ensure your paper is complete, accurate, and aligned with the conference scope before uploading.",
    Icon: DocumentTextIcon,
  },
];

export default function SubmissionPage() {
  return (
    <Section
      id="submission-guidelines"
      role="region"
      aria-labelledby="submission-heading"
      className="bg-light-altBg dark:bg-dark-altBg py-16 text-gray-900 dark:text-gray-100 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10" />

      <motion.div
        className="container relative z-10 mx-auto max-w-5xl space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp} custom={0}>
          <Heading
            id="submission-heading"
            title="Paper Submission"
            text="Submit your manuscript directly through the official Springer submission system for IC3DCM."
            className="text-center"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={1}
          className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]"
        >
          <div className="overflow-hidden rounded-2xl border border-light-divider bg-white shadow-sm dark:border-dark-divider dark:bg-dark-sb">
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-8 text-white sm:px-8">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                Official Submission Portal
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Submit on Springer Meteor
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                The conference accepts paper submissions exclusively through
                Springer&apos;s Meteor platform. Authors are encouraged to
                upload the final manuscript version intended for peer review.
              </p>
              <motion.a
                href="https://meteor.springer.com/IC3DCM"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Submit Your Paper
                <ExternalLinkIcon className="h-4 w-4" />
              </motion.a>
            </div>

            <div className="space-y-4 px-6 py-6 sm:px-8">
              <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-100">
                <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed sm:text-base">
                  Use the Springer portal link above to complete your
                  submission directly. No separate abstract or form submission
                  is required on this page.
                </p>
              </div>

              <p className="text-sm leading-relaxed text-light-st dark:text-dark-st sm:text-base">
                Before submitting, verify that author details, manuscript
                metadata, and uploaded files are accurate. A well-prepared
                submission helps the review process proceed without delay.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-light-divider bg-light-sb p-6 shadow-sm dark:border-dark-divider dark:bg-dark-sb sm:p-7">
            <h3 className="text-lg font-semibold text-light-pt dark:text-dark-pt">
              Submission Notes
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-light-st dark:text-dark-st sm:text-base">
              <p>
                Please submit papers that align with the conference themes and
                present original scholarly work.
              </p>
              <p>
                Authors should follow the applicable Springer submission
                requirements shown in the portal, including manuscript details
                and supporting information.
              </p>
              <p>
                For assistance regarding conference-related queries, authors may
                contact the organizing team through the official contact page.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={2}
          className="grid gap-5 md:grid-cols-3"
        >
          {highlights.map(({ title, description, Icon }, index) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              custom={index + 3}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-light-divider bg-light-sb p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-dark-divider dark:bg-dark-sb"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/10">
                <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-light-pt dark:text-dark-pt">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-light-st dark:text-dark-st sm:text-base">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={6}
          className="rounded-2xl border border-light-divider bg-white/80 p-7 text-center shadow-sm backdrop-blur-sm dark:border-dark-divider dark:bg-dark-sb/80"
        >
          <h3 className="text-xl font-semibold text-light-pt dark:text-dark-pt">
            Ready to Proceed?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-light-st dark:text-dark-st sm:text-base">
            Access the Springer Meteor system to submit your paper for IC3DCM.
            The portal will guide you through the required submission fields.
          </p>
          <motion.a
            href="https://meteor.springer.com/IC3DCM"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500"
          >
            Open Submission Portal
            <ExternalLinkIcon className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
