import Button from "./common/Button";
import Section from "./common/Section";
import { useNavigate } from "react-router-dom";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/call-for-papers");
    window.scrollTo(0, 0);
  };

  return (
    <Section
      id="hero"
      className="pt-48 -mt-[7.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      role="region"
      aria-label="Hero section"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Heading Section */}
        <header
          className="relative z-10 max-w-4xl mx-auto text-center mb-20 md:mb-24"
          aria-label="Conference introduction"
        >
          <h1 className="h2 mb-4 md:mb-6 text-light-pt/90 dark:text-dark-pt">
            International Conference on
          </h1>

          <h2 className="h1 mb-6 text-primary-900 dark:text-primary-100">
            Data-Driven Approaches to Dynamical Systems and Computational
            Modeling
          </h2>

          <p className="h3 mb-8 text-light-pt/75 dark:text-dark-st">
            15th – 16th May 2026
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4"
            role="group"
            aria-label="Conference actions"
          >
            <Button
              href="./assets/CONFERENCE.pdf"
              download
              target="_blank"
              aria-label="Download conference brochure PDF"
              className="bg-light-ctaBg text-light-ctaText hover:bg-light-ctaHover dark:bg-dark-ctaBg dark:text-dark-ctaText dark:hover:bg-dark-ctaHover"
            >
              Download Brochure
            </Button>

            <Button
              onClick={handleNavigation}
              aria-label="View conference schedule"
              className="bg-primary-500 text-light-ctaText hover:bg-primary-600 dark:bg-primary-600 dark:text-dark-ctaText dark:hover:bg-primary-700"
            >
              Conference Schedule
            </Button>
          </div>
        </header>

        {/* Overview Section */}
        <section
          className="relative max-w-xl mx-auto xl:mb-24"
          aria-labelledby="conference-overview-heading"
        >
          <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="bg-light-altBg dark:bg-dark-altBg rounded-[1rem] overflow-hidden border border-light-divider dark:border-dark-divider">
              <div className="aspect-[33/60] md:aspect-[688/490] lg:aspect-[1024/490] relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                  <h3
                    id="conference-overview-heading"
                    className="h2 mb-4 md:mb-8 text-light-pt dark:text-dark-pt"
                  >
                    Conference Overview
                  </h3>
                  <p className="body max-w-3xl leading-snug text-light-st dark:text-dark-st">
                    This conference aims to bring together leading researchers,
                    scientists, and practitioners in the fields of dynamical
                    systems, computational modeling, and data-driven approaches.
                    The event will provide a platform for discussing
                    cutting-edge methodologies, trends, and innovations in
                    modeling complex systems across various disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Background */}
          <BackgroundCircles />
        </section>
      </div>

      {/* Decorative Bottom Line */}
      <BottomLine />
    </Section>
  );
};

export default Hero;
