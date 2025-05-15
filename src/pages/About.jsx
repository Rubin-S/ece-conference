import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import {
  GlobeAltIcon,
  AcademicCapIcon,
  UsersIcon,
} from "@heroicons/react/outline";

export default function About() {
  return (
    <>
      {/* Hero Callout */}
      <section
        className="w-full py-20 bg-gradient-blue text-light-ctaText dark:bg-gradient-shift dark:text-dark-ctaText"
        aria-labelledby="about-hero"
      >
        <div className="container text-center">
          <h2 id="about-hero" className="h1 mb-4">
            About Our Conference
          </h2>
          <p className="body max-w-2xl mx-auto">
            A unique collaboration between NIT Puducherry, India and Politecnico
            di Torino, Italy—driving innovation in data-driven dynamical systems
            and computational modeling.
          </p>
        </div>
      </section>

      {/* Core Content */}
      <Section id="about" className="py-20 md:py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Narrative */}
          <div className="space-y-8">
            <Heading
              title="Who We Are"
              className="text-primary-600 dark:text-primary-300"
            />
            <p className="body text-light-st dark:text-dark-st">
              The{" "}
              <strong className="text-light-pt dark:text-dark-pt">
                International Conference on Data-Driven Dynamical Systems
              </strong>{" "}
              is spearheaded by two pillars of engineering excellence:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <AcademicCapIcon className="h-6 w-6 text-primary-500 mr-3" />
                <span className="body text-light-pt dark:text-dark-pt">
                  <strong>NIT Puducherry:</strong> An Institute of National
                  Importance, driving interdisciplinary research in India.
                </span>
              </li>
              <li className="flex items-start">
                <GlobeAltIcon className="h-6 w-6 text-primary-500 mr-3" />
                <span className="body text-light-pt dark:text-dark-pt">
                  <strong>Politecnico di Torino:</strong> Italy’s premier
                  technical university, leading in computational modeling.
                </span>
              </li>
            </ul>

            <button
              className="mt-6 inline-block bg-primary-500 dark:bg-primary-600 text-light-ctaText dark:text-dark-ctaText px-6 py-3 rounded-xl transition-transform hover:scale-105"
              onClick={() => window.location.assign("/organizers")}
              aria-label="Meet our organizers"
            >
              Meet the Organizers
            </button>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Global Collaboration",
                icon: GlobeAltIcon,
                text: "Bringing together experts from 20+ countries.",
              },
              {
                title: "Interdisciplinary Research",
                icon: AcademicCapIcon,
                text: "Bridging mathematics, physics, and data science.",
              },
              {
                title: "Annual Gathering",
                icon: UsersIcon,
                text: "100+ participants sharing cutting-edge papers.",
              },
              {
                title: "Innovative Methods",
                icon: GlobeAltIcon,
                text: "Showcasing the latest in data-driven modeling.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 bg-light-altBg dark:bg-dark-altBg rounded-2xl border border-light-divider dark:border-dark-divider shadow-subtle hover:shadow-elevated transition-shadow"
              >
                <card.icon className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="h3 mb-2 text-light-pt dark:text-dark-pt">
                  {card.title}
                </h3>
                <p className="body text-light-st dark:text-dark-st">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="container mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { label: "Institutions", value: "2", icon: UsersIcon },
              { label: "Countries", value: "20+", icon: GlobeAltIcon },
              { label: "Papers", value: "100+", icon: AcademicCapIcon },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <stat.icon className="h-10 w-10 text-neon-purple-500 mx-auto" />
                <p className="h2 text-primary-600 dark:text-primary-300">
                  {stat.value}
                </p>
                <p className="body text-light-st dark:text-dark-st">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
