// FILE: src/pages/SubmissionPage.jsx
import React from "react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import {
  DocumentAddIcon,
  BadgeCheckIcon,
  DocumentTextIcon,
  StarIcon,
  ExternalLinkIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const pulseAnimation = {
  y: [0, 8, 0],
  opacity: [1, 0.7, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

const StepConnector = () => (
  <motion.div className="my-2 flex justify-center" aria-hidden="true">
    <motion.div animate={pulseAnimation}>
      <ChevronDownIcon className="h-5 w-5 text-primary-500 dark:text-primary-400 opacity-70" />
    </motion.div>
  </motion.div>
);

const StepCard = ({ number, title, description, cta, Icon, isInfo = false, custom = 0 }) => (
  <motion.article
    variants={fadeInUp}
    custom={custom}
    className="
      relative overflow-hidden rounded-xl 
      border border-light-divider dark:border-dark-divider
      bg-light-sb dark:bg-dark-sb
      p-6 sm:p-7
      transition-all duration-300 hover:shadow-md
    "
    whileHover={{ scale: 1.01, y: -2 }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/10">
        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-light-pt dark:text-dark-pt mb-1.5">
          {number}. {title}
        </h3>
        <p className="text-base text-light-st dark:text-dark-st mb-4 leading-relaxed">
          {description}
        </p>

        {cta && (
          <motion.a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2 
              rounded-md bg-primary-500 dark:bg-primary-600
              px-4 py-2 text-sm font-medium text-white
              transition-colors hover:bg-primary-600 dark:hover:bg-primary-500
            "
          >
            {cta.text}
            <ExternalLinkIcon className="h-4 w-4" />
          </motion.a>
        )}

        {isInfo && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary-50 dark:bg-primary-900/20 px-3 py-1 text-sm text-primary-600 dark:text-primary-400">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500"></span>
            Informational Step
          </div>
        )}
      </div>
    </div>
  </motion.article>
);

export default function SubmissionPage() {
  return (
    <Section
      id="submission-guidelines"
      role="region"
      aria-labelledby="submission-heading"
      className="
        bg-light-altBg dark:bg-dark-altBg
        text-gray-900 dark:text-gray-100 py-16 sm:py-20 relative
      "
    >
      {/* subtle background gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary-50/40 to-transparent dark:from-primary-900/10 pointer-events-none" />

      <motion.div
        className="container max-w-4xl mx-auto space-y-8 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Heading */}
        <motion.div variants={fadeInUp} custom={0}>
          <Heading
            id="submission-heading"
            title="Submission Guidelines"
            text="Follow this simple process to submit your research work."
            className="text-center"
          />
        </motion.div>

        {/* Intro Note */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="
            rounded-lg border border-light-divider dark:border-dark-divider 
            bg-white/70 dark:bg-dark-sb/60
            p-5 text-center shadow-sm
          "
        >
          <p className="text-base text-light-st dark:text-dark-st max-w-2xl mx-auto">
            Please review the following steps before submission. Ensure that
            your abstract and full paper meet the required formatting and
            content guidelines.
          </p>
        </motion.div>

        {/* Notice */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="
            flex items-start gap-3 rounded-lg border border-yellow-300 
            bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700
            p-4 text-yellow-800 dark:text-yellow-100
          "
        >
          <div className="flex-shrink-0 text-xl">⚠️</div>
          <div>
            <h4 className="font-semibold text-base mb-1">Important Notice</h4>
            <p className="text-sm sm:text-base">
              Submit your <strong>full paper only after</strong> your abstract
              has been accepted and you have received your Paper ID.
            </p>
          </div>
        </motion.div>

        {/* Review Policy */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="
            rounded-lg border border-light-divider dark:border-dark-divider 
            bg-light-sb dark:bg-dark-sb p-6 text-center shadow-sm
          "
        >
          <BadgeCheckIcon className="h-9 w-9 mx-auto mb-3 text-primary-500" />
          <h4 className="text-lg font-semibold text-light-pt dark:text-dark-pt mb-2">
            Single-Blind Peer Review
          </h4>
          <p className="text-base text-light-st dark:text-dark-st max-w-2xl mx-auto">
            All submissions will undergo a single-blind peer review process to
            ensure quality and relevance to the conference themes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative space-y-4 sm:space-y-5 pl-4 border-l border-light-divider dark:border-dark-divider">
          <StepCard
            number="1"
            title="Submit Your Abstract"
            description="Begin by submitting your abstract using the online form. The abstract will be reviewed for academic quality and relevance."
            cta={{
              text: "Submit Abstract",
              href: "https://forms.office.com/r/cE6ev20JbG",
            }}
            Icon={DocumentAddIcon}
            custom={4}
          />

          <StepConnector />

          <StepCard
            number="2"
            title="Receive Your Paper ID"
            description="Upon abstract acceptance, a unique Paper ID will be sent to the corresponding author via email."
            Icon={BadgeCheckIcon}
            isInfo
            custom={5}
          />

          <StepConnector />

          <StepCard
            number="3"
            title="Submit Your Full Paper"
            description="Use your Paper ID to upload your full paper via the submission form. File names must match your Paper ID (e.g., 337.pdf)."
            cta={{
              text: "Submit Full Paper",
              href: "https://docs.google.com/forms/d/e/1FAIpQLSc70LhbRBcy9zqlrk7GKILYTTNMivPkkp08vVPzxNFsErUaUg/viewform?usp=sharing&ouid=108126571489622999115",
            }}
            Icon={DocumentTextIcon}
            custom={6}
          />

          <StepConnector />

          <StepCard
            number="4"
            title="Final Publication"
            description="Accepted papers will be published through the EquinOCS platform. Further upload instructions will be shared via email."
            Icon={StarIcon}
            isInfo
            custom={7}
          />
        </div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeInUp}
          custom={8}
          className="
            text-center rounded-lg border border-light-divider dark:border-dark-divider 
            bg-light-sb dark:bg-dark-sb p-7 shadow-sm
          "
        >
          <h3 className="text-lg font-semibold mb-2 text-light-pt dark:text-dark-pt">
            Ready to Submit?
          </h3>
          <p className="text-base text-light-st dark:text-dark-st mb-4 max-w-2xl mx-auto">
            Join researchers worldwide and contribute to advancing academic
            knowledge.
          </p>
          <motion.a
            href="INSERT_ABSTRACT_GOOGLE_FORM_LINK_HERE"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-md bg-primary-500 dark:bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 dark:hover:bg-primary-500"
          >
            Start Submission
            <ExternalLinkIcon className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Footer Contact Info */}
        <motion.div
          variants={fadeInUp}
          custom={9}
          className="text-sm text-center text-light-st dark:text-dark-st pt-4 border-t border-light-divider dark:border-dark-divider"
        >
          Need help? Contact the conference secretariat at{" "}
          <a
            href="mailto:conference@domain.com"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            conference@domain.com
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
