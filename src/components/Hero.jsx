import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import Button from "./common/Button";
import Section from "./common/Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.stopPropagation();
    navigate("/call-for-papers");
    window.scrollTo(0, 0);
  };

  const toggleOpen = () => setIsOpen((o) => !o);

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
      <div className="container relative">
        {/* Heading Section */}
        <header className="relative z-10 max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <h1 className="h2 mb-4 text-light-pt/90 dark:text-dark-pt">
            International Conference on
          </h1>
          <h2 className="h1 mb-6 text-primary-900 dark:text-primary-100">
            Data-Driven Approaches to Dynamical Systems and Computational
            Modeling
          </h2>
          <p className="h3 mb-8 text-light-pt/75 dark:text-dark-st">
            15th-16th May 2026
          </p>
          <div className="flex flex-wrap justify-center gap-4" role="group">
            <Button
              href="./assets/CONFERENCE.pdf"
              download
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              Download Brochure
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation(e);
              }}
              
            >
              Conference Schedule
            </Button>
          </div>
          {/* Animated Background */}
          {!isOpen && (
            <div className="relative z-[-1]">
              <BackgroundCircles />
            </div>
          )}
        </header>

        {/* Overview Card / Overlay */}
        <LayoutGroup>
          <motion.div
            layoutId="overviewCard"
            onClick={toggleOpen}
            className={`
              ${
                isOpen
                  ? "fixed inset-0 z-50 overflow-auto flex items-center justify-center p-6 md:p-12 cursor-pointer bg-slate-500"
                  : "relative max-w-3xl mx-auto cursor-pointer z-20"
              }
            `}
          >
            <motion.div
              layout
              onClick={isOpen ? (e) => e.stopPropagation() : undefined}
              className={`
                cursor-pointer
                ${
                  isOpen
                    ? "bg-light-pb dark:bg-dark-pb rounded-lg p-8 md:p-12 max-w-5xl w-full"
                    : "rounded-2xl  p-8 md:p-12  bg-gradient-blue animate-gradient-shift"
                }
                bg-light-altBg dark:bg-dark-altBg
                border border-light-divider dark:border-dark-divider
                shadow-subtle transition-shadow
                ${
                  !isOpen
                    ? "group-hover:shadow-elevated group-hover:scale-[1.02]"
                    : ""
                }
              `}
            >
              {isOpen && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOpen();
                  }}
                  aria-label="Close overview"
                  className="absolute top-4 right-4 text-light-st dark:text-dark-st text-2xl focus:outline-none z-10"
                >
                  &times;
                </button>
              )}

              <h3
                id="conference-overview-heading"
                className="h2 mb-4 text-light-pt dark:text-dark-pt"
              >
                Conference Overview
              </h3>

              <p className="body text-light-st dark:text-dark-st leading-relaxed mb-4">
                The International Conference on Data-Driven Approaches to
                Dynamical Systems and Computational Modeling brings together
                leading researchers, scientists, and practitioners from around
                the globe—both in-person at NIT Puducherry and virtually—to
                explore the latest breakthroughs in modeling complex systems.
                Over two days (15–16 May 2026), attendees will dive deep into
                data-driven methodologies, from high-resolution simulations of
                physical and biological processes to machine learning–augmented
                control strategies for dynamical systems.
              </p>

              {isOpen && (<p className="body text-light-st dark:text-dark-st leading-relaxed mb-4">
                Through a blend of keynote lectures, technical sessions, and
                hands-on workshops, the conference fosters interdisciplinary
                collaboration across mathematics, engineering, and computer
                science. Participants will examine emerging trends—such as
                stochastic modeling for uncertainty quantification, big-data
                analytics for system optimization, and real-time simulation
                frameworks—and discuss how these innovations can be applied to
                real-world challenges in robotics, climate modeling, biomedical
                engineering, and beyond.
              </p>)}

              {isOpen && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOpen();
                    handleNavigation(e);
                  }}
                  className= "dark:text-ctaText"
                >
                  Go to Call for Papers
                </Button>
              )}
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Decorative Bottom Line */}
      <BottomLine />
    </Section>
  );
}
