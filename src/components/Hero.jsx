import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import Section from "./common/Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import nitpy from "../assets/logo/NITPY.png";
import PDT from "../assets/logo/PolitecnicoDiTorino.svg";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const stop = useCallback((e) => e.stopPropagation(), []);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  const handleNavigation = (e) => {
    e.stopPropagation();
    navigate("/call-for-papers");
    window.scrollTo(0, 0);
  };

  const handleSubmissionNavigation = (e) => {
    e.stopPropagation();
    navigate("/submission");
    window.scrollTo(0, 0);
  };

  const toggleOpen = () => setIsOpen((o) => !o);

  return (
    <Section
      id="hero"
      className="pt-12 -mt-[7.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      role="region"
      aria-label="Hero section"
    >
      <div className="container relative">
        {/* Heading Section */}
        <header className="relative z-10 max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <motion.div
            className="flex flex-row items-center justify-center gap-4 p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src={nitpy}
              alt="NIT Puducherry Logo"
              className="h-16 sm:h-20 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
              src={PDT}
              alt="Department Logo"
              className="h-16 sm:h-20 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 max-w-5xl "
          >
            <motion.h1
              variants={fadeUp}
              className=" text-primary-900 dark:text-primary-100 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-snug mb-4"
            >
              International Conference on
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grotesk font-semibold text-light-pt/90 dark:text-dark-pt mb-6 "
            >
              Data-Driven Approaches to Dynamical Systems and Computational
              Modeling
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className=" bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-2xl shadow-xl
              p-8
              flex flex-col mx-auto"
              role="region"
              aria-labelledby="venue-heading"
            >
              <address
                className="not-italic text-sm sm:text-base leading-relaxed text-light-st dark:text-dark-st"
                role="contentinfo"
                aria-label="Conference Venue Address"
              >
                <h3
                  id="venue-heading"
                  className="flex justify-center text-primary-700 dark:text-primary-300 font-semibold text-base sm:text-lg mb-1"
                >
                  <MdLocationPin
                    className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  Conference Venue
                </h3>
                <p className="font-medium text-light-pt dark:text-dark-pt">
                  National Institute of Technology Puducherry (NITPY)
                </p>
                <p className="text-light-st dark:text-dark-st">
                  Karaikal, Puducherry, India
                </p>
                <p className="italic text-light-muted dark:text-dark-muted">
                  (Virtual participation option is available)
                </p>
              </address>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="my-6 flex items-center justify-center gap-3 text-xl sm:text-3xl font-semibold text-primary-700 dark:text-primary-300 tracking-wide"
              role="contentinfo"
              aria-label="Conference Dates"
            >
              {/* Calendar SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                role="img"
                aria-hidden="true"
              >
                <title>Calendar Icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              {/* Conference Dates */}
              <span>
                <time dateTime="2026-05-15">
                  14<sup>th</sup>
                </time>{" "}
                –{" "}
                <time dateTime="2026-05-16">
                  16<sup>th</sup>
                </time>{" "}
                May 2026
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-3xl rounded-2xl border border-amber-300 bg-gradient-to-r from-amber-50 via-white to-amber-100 p-5 text-left shadow-xl dark:border-amber-700 dark:from-amber-900/30 dark:via-dark-sb dark:to-amber-900/20"
              role="note"
              aria-label="Full paper submission announcement"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                    Author Notice
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-light-pt dark:text-dark-pt sm:text-xl">
                    Full paper submission is now open.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-light-st dark:text-dark-st sm:text-base">
                    Authors are requested to proceed with full paper submission
                    through the official conference submission page.
                  </p>
                </div>
                <motion.button
                  onClick={(e) => {
                    stop(e);
                    handleSubmissionNavigation(e);
                  }}
                  className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-amber-600 dark:bg-amber-400 dark:text-gray-900 dark:hover:bg-amber-300"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Submit Full Paper
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4" role="group">
            <motion.a
              href="./assets/CONFERENCE.pdf"
              download
              target="_blank"
              onClick={stop}
              className="px-5 py-2 rounded-lg bg-black text-white font-normal shadow-md hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Download Brochure
            </motion.a>

            <motion.button
              onClick={(e) => {
                stop(e);
                handleNavigation(e);
              }}
              className="px-5 py-2 rounded-lg bg-black text-white font-normal shadow-md hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200 "
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Conference Schedule
            </motion.button>
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

              {isOpen && (
                <p className="body text-light-st dark:text-dark-st leading-relaxed mb-4">
                  Through a blend of keynote lectures, technical sessions, and
                  hands-on workshops, the conference fosters interdisciplinary
                  collaboration across mathematics, engineering, and computer
                  science. Participants will examine emerging trends—such as
                  stochastic modeling for uncertainty quantification, big-data
                  analytics for system optimization, and real-time simulation
                  frameworks—and discuss how these innovations can be applied to
                  real-world challenges in robotics, climate modeling,
                  biomedical engineering, and beyond.
                </p>
              )}

              {isOpen && (
                <motion.button
                  onClick={(e) => {
                    stop(e);
                    toggleOpen();
                    handleNavigation(e);
                  }}
                  className="px-5 py-2 rounded-lg bg-black text-white font-normal shadow-md hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200 "
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Conference Schedule
                </motion.button>
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
