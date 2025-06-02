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
  const [flipKey, setFlipKey] = useState(0); // to trigger animation on change

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
    <main className=" flex items-center justify-center mb-20 z-1">
      <section
        aria-label="Countdown Timer"
        className="grid grid-flow-col gap-6 auto-cols-max mx-auto"
      >
        {timeUnits.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:shadow-black/50 cursor-default select-none"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${label}-${flipKey}`}
                variants={flipVariants}
                initial="initial"
                animate="flip"
                exit="initial"
                className="font-mono text-7xl sm:text-8xl md:text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 drop-shadow-md"
                aria-live="polite"
                aria-label={`${value} ${label}`}
              >
                {value.toString().padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            <span className="mt-2 text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}


// Dummy speaker data
const speakers = [
  {
    id: 1,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 5,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 6,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
];

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
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

  const toggleOpen = () => setIsOpen((o) => !o);

  return (
    <main>
      {/* Hero Section */}
      <Section
        id="hero"
        className="pt-24 -mt-[7.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        role="region"
        aria-label="Hero section"
      >
        <div className="container relative">
          <header className="relative z-10 max-w-4xl mx-auto text-center mb-20 md:mb-24">
            <motion.div
              className="flex justify-center gap-4 p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src={nitpy}
                alt="NIT Puducherry"
                className="h-16 sm:h-20"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src={PDT}
                alt="Department"
                className="h-16 sm:h-20"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4"
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
              className="my-6 flex text-primary-600 dark:text-primary-400 justify-center items-center gap-2 text-xl sm:text-3xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <title>Calendar Icon</title>
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
              className="bg-white dark:bg-gray-800 border rounded-2xl shadow-xl p-8 max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              role="region"
              aria-labelledby="venue-heading"
            >
              <address className="not-italic text-sm sm:text-base">
                <h3
                  id="venue-heading"
                  className="flex justify-center items-center gap-1 text-lg mb-1"
                >
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

            <div className="flex justify-center gap-4">
              <motion.a
                href="./assets/CONFERENCE.pdf"
                download
                target="_blank"
                onClick={stop}
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
          </header>
          <Countdown targetDate="2026-05-14T00:00:00" />

          {/* <FlipCountdown /> */}

          <LayoutGroup>
            <motion.div
              layoutId="overviewCard"
              onClick={toggleOpen}
              className={
                isOpen
                  ? "fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 bg-slate-500"
                  : "relative max-w-3xl mx-auto z-20"
              }
            >
              <motion.div
                layout
                onClick={isOpen ? (e) => e.stopPropagation() : undefined}
                className={`relative ${
                  isOpen
                    ? "bg-light-pb dark:bg-dark-pb p-8 md:p-12"
                    : "bg-gradient-blue animate-gradient-shift p-8 md:p-12"
                } border rounded-2xl`}
              >
                {isOpen && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOpen();
                    }}
                    aria-label="Close overview"
                    className="absolute top-4 right-4 text-2xl"
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
                        toggleOpen();
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

      {!isOpen && <BackgroundCircles />}

      {/* Keynote Speakers Section */}
      <Section
        id="features"
        role="region"
        aria-labelledby="keynote-speakers-heading"
        className="py-20 md:py-32"
      >
        <div className="container">
          <Heading
            id="keynote-speakers-heading"
            className="text-center mb-12 md:mb-16"
            title="Keynote Speakers"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((spk, index) => (
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
                custom={index}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <GradientLight />
                <div
                  className="absolute inset-0"
                  style={{ clipPath: "url(#benefits)" }}
                />
                <ClipPath />
                <div className="relative z-10 flex flex-col items-center text-center px-6 py-8">
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
                  <p className="mb-2">{spk.college}</p>
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
