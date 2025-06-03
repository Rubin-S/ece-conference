// ConferencePage.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { BackgroundCircles, BottomLine } from "../components/design/Hero";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import nitpy from "../assets/logo/NITPY.png";
import PDT from "../assets/logo/PolitecnicoDiTorino.svg";

// Flip animation for countdown
const flipVariants = {
  initial: { rotateX: 0 },
  flip: { transition: { duration: 0.6, ease: "easeInOut" } },
};

export function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      setFlipKey((k) => k + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
    { label: "sec", value: timeLeft.seconds },
  ];

  return (
    <main className="flex items-center justify-center z-1 mb-16 sm:mb-24 px-4">
      <section
        aria-label="Countdown Timer"
        className="grid grid-cols-2 xs:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
      >
        {timeUnits.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-black/50 select-none w-full"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${label}-${flipKey}`}
                variants={flipVariants}
                initial="initial"
                animate="flip"
                exit="initial"
                className="font-mono text-4xl sm:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400"
                aria-live="polite"
                aria-label={`${value} ${label}`}
              >
                {value.toString().padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            <span className="mt-1 text-sm sm:text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}

// Dummy speaker data
const speakers = new Array(6).fill(null).map((_, i) => ({
  id: i + 1,
  name: "TBD",
  college: "TBD",
  description: "TBD",
  image: "https://placehold.co/150",
  backgroundUrl: "https://via.placeholder.com/600x400",
}));

// Motion variants
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function ConferencePage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const stop = useCallback((e) => e.stopPropagation(), []);
  const handleNavigation = (e) => {
    e.stopPropagation();
    navigate("/call-for-papers");
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <Section
        id="hero"
        className="pt-24 -mt-[7.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        role="region"
        aria-label="Hero section"
      >
        <div className="container relative px-4">
          <header className="text-center mb-20 md:mb-24">
            <motion.div
              className="flex justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={nitpy}
                alt="NIT Puducherry"
                className="h-14 sm:h-20"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src={PDT}
                alt="Politecnico di Torino"
                className="h-14 sm:h-20"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
            >
              International Conference on
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
            >
              Data-Driven Approaches to Dynamical Systems and Computational
              Modeling
            </motion.h2>

            <motion.p
              className="my-6 flex justify-center items-center gap-2 text-primary-600 dark:text-primary-400 text-xl sm:text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
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
              className="bg-white dark:bg-gray-800 border rounded-2xl shadow-xl p-6 sm:p-8 max-w-lg mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <address className="not-italic text-sm sm:text-base">
                <h3 className="flex justify-center items-center gap-1 text-lg mb-1">
                  <MdLocationPin className="text-primary-600 dark:text-primary-400" />{" "}
                  Conference Venue
                </h3>
                <p className="font-medium">
                  National Institute of Technology Puducherry (NITPY)
                </p>
                <p>Karaikal, Puducherry, India</p>
                <p className="italic">
                  (Virtual participation option is available)
                </p>
              </address>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="./assets/CONFERENCE.pdf"
                download
                target="_blank"
                className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
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
                className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Conference Schedule
              </motion.button>
            </div>

            {!isOpen && <BackgroundCircles />}
          </header>

          <Countdown targetDate="2026-05-14T00:00:00" />

          <LayoutGroup>
            <motion.div
              layoutId="overviewCard"
              onClick={() => setIsOpen(!isOpen)}
              className={
                isOpen
                  ? "fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-700/80"
                  : "relative max-w-3xl mx-auto z-20"
              }
            >
              <motion.div
                layout
                className={`relative ${
                  isOpen
                    ? "bg-light-pb dark:bg-dark-pb p-8"
                    : "bg-gradient-blue animate-gradient-shift p-8"
                } border rounded-2xl`}
              >
                {isOpen && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-2xl"
                    aria-label="Close overview"
                  >
                    &times;
                  </button>
                )}
                <h3 className="text-xl font-bold mb-4">Conference Overview</h3>
                <p className="mb-4">
                  The International Conference on Data-Driven Approaches to
                  Dynamical Systems and Computational Modeling brings together
                  researchers from across the globe—both in-person at NIT
                  Puducherry and virtually—to explore cutting-edge topics in
                  modeling complex systems.
                </p>
                {isOpen && (
                  <>
                    <p className="mb-4">
                      From high-resolution simulations and machine
                      learning–augmented strategies to uncertainty
                      quantification and real-time systems, the conference spans
                      applications across robotics, climate, healthcare, and
                      more.
                    </p>
                    <motion.button
                      onClick={(e) => {
                        stop(e);
                        setIsOpen(false);
                        handleNavigation(e);
                      }}
                      className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Conference Schedule
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>
          </LayoutGroup>
        </div>
        <BottomLine />
      </Section>

      {/* Keynote Section */}
      <Section id="speakers" className="py-20 md:py-32">
        <div className="container px-4">
          <Heading
            title="Keynote Speakers"
            className="text-center mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((spk, i) => (
              <motion.article
                key={spk.id}
                role="group"
                aria-labelledby={`speaker-${spk.id}-name`}
                className="relative overflow-hidden rounded-2xl border bg-no-repeat bg-cover p-0.5 group"
                style={{ backgroundImage: `url(${spk.backgroundUrl})` }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                custom={i}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <GradientLight />
                <div
                  className="absolute inset-0"
                  style={{ clipPath: "url(#benefits)" }}
                />
                <ClipPath />
                <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl">
                  <motion.img
                    src={spk.image}
                    alt={spk.name}
                    className="w-28 h-28 rounded-full object-cover border-4 mb-4 shadow-md group-hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  />
                  <h3
                    id={`speaker-${spk.id}-name`}
                    className="text-lg font-semibold mb-2"
                  >
                    {spk.name}
                  </h3>
                  <p className="mb-1">{spk.college}</p>
                  <p className="text-sm text-gray-500">{spk.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
