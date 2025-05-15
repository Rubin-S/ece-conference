import React from "react";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import {
  CalendarIcon,
  ClipboardListIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";

const CallForPapers = () => {
  const topics = [
    "Data-driven techniques for dynamical systems",
    "Computational modeling in physical & biological systems",
    "Machine learning applications in system dynamics",
    "Modeling & simulation of engineering systems",
    "Nonlinear dynamics & chaos theory",
    "Big-data analytics for control & optimization",
    "Stochastic processes in dynamical systems",
    "Applications in robotics, climate modeling, & beyond",
  ];

  const dates = [
    { label: "Submission Deadline", date: "15 Feb 2026" },
    { label: "Acceptance Notice", date: "20 Mar 2026" },
    { label: "Camera-Ready Due", date: "05 Apr 2026" },
    { label: "Conference", date: "15–16 May 2026" },
  ];

  return (
    <Section
      id="call-for-papers"
      role="region"
      aria-labelledby="cfp-heading"
      className="py-20 md:py-32 bg-light-pb dark:bg-dark-pb"
    >
      <div className="container max-w-4xl mx-auto space-y-16">
        <Heading
          id="cfp-heading"
          title="Call for Papers"
          text="We invite researchers, academicians, and industry professionals to submit original work aligned with our conference theme."
          className="text-center"
        />

        {/* Topics & Guidelines Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <article className="p-6 bg-light-altBg dark:bg-dark-altBg rounded-2xl border border-light-divider dark:border-dark-divider shadow-subtle">
            <h3 className="h3 mb-4 text-light-pt dark:text-dark-pt flex items-center">
              <ClipboardListIcon className="w-6 h-6 mr-2 text-primary-500" />
              Topics of Interest
            </h3>
            <ul className="list-disc list-inside space-y-2 body text-light-st dark:text-dark-st">
              {topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>

          <article className="p-6 bg-light-altBg dark:bg-dark-altBg rounded-2xl border border-light-divider dark:border-dark-divider shadow-subtle">
            <h3 className="h3 mb-4 text-light-pt dark:text-dark-pt flex items-center">
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
          </article>
        </div>

        {/* Important Dates Timeline */}
        <section aria-labelledby="dates-heading" className="space-y-6">
          <h3
            id="dates-heading"
            className="h3 text-center text-light-pt dark:text-dark-pt"
          >
            Important Dates
          </h3>
          <ul className="relative border-l-2 border-primary-500 dark:border-primary-300 ml-4 space-y-8">
            {dates.map(({ label, date }, idx) => (
              <li key={label} className="pl-6 flex items-center">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-300 text-light-ctaText">
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
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Card */}
        <aside
          className="p-8 bg-gradient-neon rounded-2xl text-center"
          aria-labelledby="submit-cta"
        >
          <h3 id="submit-cta" className="h2 mb-4 text-light-ctaText">
            Ready to Submit?
          </h3>
          <p className="body text-light-ctaText mb-6">
            Our submission portal will open soon—stay tuned!
          </p>
          <Button
            disable
            href="/submission"
            className="bg-light-ctaBg text-light-ctaText hover:bg-light-ctaHover dark:bg-dark-ctaBg dark:hover:bg-dark-ctaHover"
            aria-label="Submission portal coming soon"
          >
            Portal Coming Soon
          </Button>
        </aside>
      </div>
    </Section>
  );
};

export default CallForPapers;
