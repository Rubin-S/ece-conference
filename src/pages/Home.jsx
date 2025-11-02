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
import springer from "../assets/images/springer.jpg";
import springerBottom from "../assets/images/springer_bottom.jpg";

import shaobo from "../assets/speakers/shaobo.png";
import palani from "../assets/speakers/Palani.jpeg";
import lamberto from "../assets/speakers/Lamberto-Rondoni.jpg";
import edwin from "../assets/speakers/Edwin.jpg";
import mertono from "../assets/speakers/mertono.png";
import Aninda from "../assets/speakers/aninda.jpg";


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
      setTimeLeft(calculateTimeLeft());
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
    <div className="flex items-center justify-center px-4">
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
    </div>
  );
}

const speakers = [
  {
    id: 1,
    name: "Dr. Shaobo He",
    college:
      "Professor, School of Automation and Electronic Information, Xiangtan University",
    title: "Discrete memristive spiking neural network.",
    description: "",
    image: shaobo,
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    name: "Dr. Palaniappan Ramu",
    college: "Professor, Department of Engineering Design, IIT Madras",
    title: "Data Visualization for multi criteria decision making",
    description: "",
    image: palani,
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    name: "Dr. Lamberto Rondoni",
    college: "Professor, DISMA, Politecnico di Torino",
    title: "Data Driven Approaches...",
    description: "",
    image: lamberto,
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    name: "Dr. Edwin Geo Varuvel",
    college: "Professor, Dept. Mechanical Engineering, Istinye University",
    title: "TBD",
    description: "",
    image: edwin,
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 5,
    name: "Dr. R. Merino Martinez",
    college: "Professor, Dept. Aeroacoustics and aircraft noise, Technische Universiteit Delft",
    title: "TBD",
    description: "",
    image: mertono,
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 6,
    name: "Aninda Bhattacharya",
    college: "Product Director - Data Science at ABB",
    title: "TBD",
    description: "",
    image: Aninda,
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
];

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
const detailFade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ConferencePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const navigate = useNavigate();
  const stop = useCallback((e) => e.stopPropagation(), []);
  const handleNavigation = (e) => {
    stop(e);
    navigate("/call-for-papers");
    window.scrollTo(0, 0);
  };

  return (
    <main>
      {/* Hero */}
      <Section
        id="hero"
        className="pb-16"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        role="region"
        aria-label="Hero section"
      >
        <BackgroundCircles />
        <div className="container relative px-4 text-center">
          <motion.div
            className="flex justify-center gap-4 mb-2"
            variants={fadeUp}
            initial="initial"
            animate="animate"
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2"
          >
            Data-Driven Approaches to Dynamical Systems and Computational
            Modeling
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="my-2 flex justify-center items-center gap-2 text-primary-600 dark:text-primary-400 text-xl sm:text-2xl font-semibold"
          >
            <MdLocationPin className="w-6 h-6" />
            <span>
              <time dateTime="2026-05-14">
                14<sup>th</sup>
              </time>{" "}
              –{" "}
              <time dateTime="2026-05-16">
                16<sup>th</sup>
              </time>{" "}
              May 2026
            </span>
          </motion.p>
<motion.div className="flex flex-col gap-6 mx-auto w-full max-w-7xl px-4">
  {/* Row: Springer (1.5x) | Venue (1x) */}
  <div className="flex w-full items-stretch gap-6">
    {/* Springer (3 parts) */}
    <motion.div
      variants={fadeUp}
      className="flex-[3] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-5 sm:p-6 flex flex-col justify-between h-full min-h-[220px]"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        {/* small logos column */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <motion.img
            src={springer}
            alt="Springer Logo"
            className="w-16 sm:w-20 h-auto"
            whileHover={{ scale: 1.02 }}
          />
          <motion.img
            src={springerBottom}
            alt="Springer Proceedings"
            className="w-16 sm:w-20 h-auto"
            whileHover={{ scale: 1.02 }}
          />
        </div>

        {/* description fills remaining space */}
        <div className="flex-1 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Accepted papers will be published in <p className="text-blue-700 font-semibold">Springer Proceedings in Physics <span className="text-red-700">(Scopus Indexed)</span></p>. At least one author must register and present the paper (virtual or in-person). There is no publication fee; revised papers must use the official template provided by Springer.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Venue (2 parts) */}
   <motion.div
  variants={fadeUp}
  className="flex-[2] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
             rounded-2xl shadow-xl p-5 sm:p-8 flex flex-col justify-center items-center 
             h-full min-h-[220px] text-center"
>
  <address className="not-italic space-y-2">
    <h3 className="flex justify-center items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
      <MdLocationPin className="text-primary-600 dark:text-primary-400 text-xl" />
      Conference Venue
    </h3>
    <p className="font-medium text-gray-700 dark:text-gray-200">
      National Institute of Technology Puducherry (NITPY)
    </p>
    <p className="text-gray-600 dark:text-gray-400">Karaikal, Puducherry, India</p>
    <p className="italic text-sm text-gray-500 dark:text-gray-400">
      (Virtual participation option is available)
    </p>
  </address>
</motion.div>

  </div>

  {/* Buttons - horizontal and centered */}
  <div className="w-full flex justify-center gap-4 mt-1">
    <motion.a
      href="./assets/CONFERENCE.pdf"
      download
      target="_blank"
      rel="noreferrer"
      className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      Download Brochure
    </motion.a>

    <motion.a
      href="#speakers"
      className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      Keynote Speakers
    </motion.a>

    <motion.button
      onClick={handleNavigation}
      className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      Conference Schedule
    </motion.button>
  </div>
</motion.div>

        </div>
      </Section>
      {/* Countdown */}
      <Section id="countdown" className="pt-12 pb-16">
        <Countdown targetDate="2026-05-14T00:00:00" />
      </Section>
      {/* Organizers */}
      <Section id="organizers" className="pt-8 pb-20">
        <motion.div
          className="container px-4 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: {} }}
        >
          <motion.div variants={detailFade} className="mb-12">
            <Heading
              title="Organizing Committee"
              text="Meet the key organizers driving this conference forward."
            />
          </motion.div>
          <div className="grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              variants={detailFade}
              custom={1}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-xl p-6"
            >
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                Organizing Secretaries
              </h3>
              <ul className="space-y-2 text-left text-sm">
                <li>
                  <strong>Dr. Naveen Raj R</strong> – NIT Puducherry
                </li>
                <li>
                  <strong>Dr. Santo Banerjee</strong> – Managing Editor, EPJ
                  Plus & Politecnico di Torino
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={detailFade}
              custom={2}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-xl p-6"
            >
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                Co-Organizing Secretaries
              </h3>
              <ul className="space-y-2 text-left text-sm">
                <li>
                  <strong>Dr. Satishkumar P</strong> – NIT Puducherry
                </li>
                <li>
                  <strong>Dr. Lamberto Rondoni</strong> – Politecnico di Torino,
                  Italy
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Section>
      {/* Overview */}
      <Section id="overview" className="py-24">
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
              className={`relative ${isOpen
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
                researchers from across the globe to explore cutting-edge
                topics.
              </p>
              {isOpen && (
                <>
                  <p className="mb-4">
                    From high-resolution simulations and machine
                    learning–augmented strategies to uncertainty quantification
                    and real-time systems, the conference spans robotics,
                    climate, healthcare, and more.
                  </p>
                  <motion.button
                    onClick={handleNavigation}
                    className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Conference Schedule
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </Section>
      {/* Speakers */}
      <Section id="speakers" className="py-32">
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
                className="relative overflow-hidden rounded-2xl border bg-no-repeat bg-cover p-0.5 group cursor-pointer"
                style={{ backgroundImage: `url(${spk.backgroundUrl})` }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                custom={i}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setSelectedSpeaker(spk)}
              >
                <GradientLight />
                <div
                  className="absolute inset-0"
                  style={{ clipPath: "url(#benefits)" }}
                />
                <ClipPath />
                <div className="relative z-10 flex flex-col h-full items-center text-center px-6 py-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl">
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
                  <p className="text-sm p-0.5 m-1 w-full rounded-full font-semibold bg-gradient-neon">
                    <strong className="p-3 bg-white min-h-18 flex rounded-full justify-center items-center dark:bg-gray-900">
                      Title: {spk.title}
                    </strong>
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {spk.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {selectedSpeaker && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 max-w-xl w-full p-6 rounded-2xl shadow-xl relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 text-xl font-bold"
                  aria-label="Close speaker details"
                >
                  &times;
                </button>
                <div className="text-center">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-sm font-medium mb-2">
                    {selectedSpeaker.college}
                  </p>
                  <p className="text-sm p-0.5 m-3 w-full rounded-full font-semibold bg-gradient-neon">
                    <strong className="p-3 bg-white min-h-18 flex rounded-full justify-center items-center dark:bg-gray-900">
                      Title: {selectedSpeaker.title}
                    </strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line max-h-[300px] overflow-y-auto">
                    {selectedSpeaker.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
      <BottomLine />
    </main>
  );
}
