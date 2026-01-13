// ConferencePage.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { MdLocationPin } from "react-icons/md";

// --- Component Imports (Update paths as needed) ---
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { BackgroundCircles, BottomLine } from "../components/design/Hero";

// --- Asset Imports (Update paths as needed) ---
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

// --- Animation Variants ---
// Stagger container for the Hero
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Controls the delay between each child animating in
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
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

// --- Speaker Data ---
const speakers = [
  {
    id: 1,
    name: "Dr. Shaobo He",
    college:
      "Professor, School of Automation and Electronic Information, Xiangtan University",
    title: "Discrete memristive spiking neural network.",
    description: "Full bio and abstract for Dr. Shaobo He coming soon.",
    image: shaobo,
  },
  {
    id: 2,
    name: "Dr. Palaniappan Ramu",
    college: "Professor, Department of Engineering Design, IIT Madras",
    title: "Data Visualization for multi criteria decision making",
    description: "Full bio and abstract for Dr. Palaniappan Ramu coming soon.",
    image: palani,
  },
  {
    id: 3,
    name: "Dr. Lamberto Rondoni",
    college: "Professor, DISMA, Politecnico di Torino",
    title: "Data Driven Approaches...",
    description: "Full bio and abstract for Dr. Lamberto Rondoni coming soon.",
    image: lamberto,
  },
  {
    id: 4,
    name: "Dr. Edwin Geo Varuvel",
    college: "Professor, Dept. Mechanical Engineering, Istinye University",
    title: "TBD",
    description: "Full bio and abstract for Dr. Edwin Geo Varuvel coming soon.",
    image: edwin,
  },
  {
    id: 5,
    name: "Dr. R. Merino Martinez",
    college:
      "Professor, Dept. Aeroacoustics and aircraft noise, Technische Universiteit Delft",
    title: "TBD",
    description: "Full bio and abstract for Dr. R. Merino Martinez coming soon.",
    image: mertono,
  },
  {
    id: 6,
    name: "Aninda Bhattacharya",
    college: "Product Director - Data Science at ABB",
    title: "TBD",
    description: "Full bio and abstract for Aninda Bhattacharya coming soon.",
    image: Aninda,
  },
];

// --- Co-located Countdown Component ---
const flipVariants = {
  initial: { rotateX: 0 },
  flip: { transition: { duration: 0.6, ease: "easeInOut" } },
};

function Countdown({ targetDate }) {
  const calculateTimeLeft = useCallback(() => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setFlipKey((k) => k + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

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

// --- Co-located InfoSection Component ---
function InfoSection({
  fadeUp,
  buttonVariants,
  handleNavigation,
  className = "",
}) {
  return (
    <motion.div
      className={`flex flex-col gap-6 mx-auto w-full max-w-7xl px-4 ${className}`}
      variants={fadeUp} // This whole block will fade up as part of the stagger
    >
      {/* Row: Springer (1.5x) | Venue (1x) */}
      <div className="flex flex-col lg:flex-row w-full items-stretch gap-6">
        {/* Springer (3 parts) */}
        <div className="flex-[3] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-5 sm:p-6 flex flex-col justify-center h-full min-h-[220px]">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
            {/* small logos column */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <motion.img
                src={springer}
                alt="Springer Logo"
                className="w-11/12 sm:w-20 h-auto"
                whileHover={{ scale: 1.02 }}
              />
              <motion.img
                src={springerBottom}
                alt="Springer Proceedings"
                className="w-11/12 sm:w-20 h-auto"
                whileHover={{ scale: 1.02 }}
              />
            </div>
            {/* description */}
            <div className="flex-1 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center sm:text-left">
              <p>
                Accepted papers will be published in{" "}
                <strong className="text-blue-700 font-semibold">
                  Springer Proceedings in Physics{" "}
                  <span className="text-red-700">(Scopus Indexed)</span>
                </strong>
                . At least one author must register and present the paper
                (virtual or in-person). There is no publication fee; revised
                papers must use the official template provided by Springer.
              </p>
            </div>
          </div>
        </div>

        {/* Venue (2 parts) */}
        <div
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
            <p className="text-gray-600 dark:text-gray-400">
              Karaikal, Puducherry, India
            </p>
            <p className="italic text-sm text-gray-500 dark:text-gray-400">
              (Virtual participation option is available)
            </p>
          </address>
        </div>
      </div>

      {/* Buttons - horizontal and centered */}
      <div className="w-full flex flex-col sm:flex-row justify-center gap-4 mt-1">
        <motion.a
          href="./assets/CONFERENCE.pdf" // Update this path
          download
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto text-center px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          Download Brochure
        </motion.a>
        <motion.a
          href="#speakers"
          className="w-full sm:w-auto text-center px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          Keynote Speakers
        </motion.a>
        <motion.button
          onClick={handleNavigation}
          className="w-full sm:w-auto text-center px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          Conference Schedule
        </motion.button>
      </div>
    </motion.div>
  );
}

// --- Co-located SpeakerCard Component (Simplified Design) ---
function SpeakerCard({ speaker, onClick, variants, custom }) {
  return (
    <motion.article
      role="group"
      aria-labelledby={`speaker-${speaker.id}-name`}
      className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg group cursor-pointer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      custom={custom}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className="relative z-10 flex flex-col h-full items-center text-center px-6 py-8">
        <motion.img
          src={speaker.image}
          alt={speaker.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 dark:border-gray-800 mb-4 shadow-md group-hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        />
        <h3
          id={`speaker-${speaker.id}-name`}
          className="text-lg font-semibold mb-2"
        >
          {speaker.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {speaker.college}
        </p>
        <div className="text-sm p-3 w-full rounded-lg font-semibold bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <strong className="text-gray-700 dark:text-gray-300">
            Title: {speaker.title}
          </strong>
        </div>
      </div>
    </motion.article>
  );
}

// --- Co-located SpeakerModal Component ---
function SpeakerModal({ speaker, onClose }) {
  return (
    <AnimatePresence>
      {speaker && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 max-w-xl w-full p-6 rounded-2xl shadow-xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl font-bold"
              aria-label="Close speaker details"
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-100 dark:border-gray-800 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
              <p className="text-sm font-medium mb-4 text-gray-600 dark:text-gray-400">
                {speaker.college}
              </p>
              <div className="text-sm p-3 m-3 w-full rounded-lg font-semibold bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-700 dark:text-gray-300">
                  Title: {speaker.title}
                </strong>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line max-h-[300px] overflow-y-auto text-left px-2">
                {speaker.description ||
                  "Full abstract and biography coming soon."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Co-located AnnouncementBar Component ---
function AnnouncementBar() {
  // Update your dates here
  const announcements = [
    "📅 Abstract Submission Deadline: March 15, 2026",
    "📝 Notification of Acceptance: April 10, 2026",
    "📄 Full Paper Submission: April 25, 2026",
    "📢 Registration Opens: February 20, 2026"
  ];

  return (
    <div className="relative overflow-hidden bg-yellow-50 dark:bg-yellow-900 border-b border-yellow-400 dark:border-yellow-600 backdrop-blur-sm z-30">
      <div className="flex max-w-[100vw]">
        <motion.div
          className="flex gap-16 py-3 whitespace-nowrap pr-16"
          // We animate x from 0% to -50% to create a seamless loop
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here (higher = slower)
          }}
        >
          {/* Render the items twice to ensure seamless looping */}
          {[...announcements, ...announcements].map((item, index) => (
            <span
              key={index}
              className="text-sm font-semibold tracking-wide text-yellow-800 dark:text-yellow-100 flex items-center gap-2"
            >
              {item}
              {/* Separator dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400 ml-16" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function ConferencePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = useCallback(() => {
    navigate("/call-for-papers"); // Update this path as needed
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <main className="relative">

      <AnnouncementBar />

      {/*
        SECTION 1: CONSOLIDATED HERO
        Whitespace: Generous top padding, standard bottom padding.
        Animation: Staggered children for a guided visual flow.
      */}
      <Section
        id="hero"// Tightened bottom padding
        crosses
        crossesOffset="lg:translate-y-[1rem]"
        customPaddings
        role="region"
        aria-label="Hero section"
      >
        <BackgroundCircles />
        <motion.div
          className="container relative px-4 text-center"
          variants={staggerContainer} // Apply stagger parent
          initial="initial"
          animate="animate" // Animate on load
        >
          {/* --- Title Block --- */}
          <motion.div
            className="mb-2 flex justify-center gap-4"
            variants={fadeUp} // Stagger child 1
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
            variants={fadeUp} // Stagger child 2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3"
          >
            International Conference on
          </motion.h1>
          <motion.h2
            variants={fadeUp} // Stagger child 3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
          >
            Data-Driven Approaches to Dynamical Systems and Computational
            Modeling
          </motion.h2>
          <motion.p
            variants={fadeUp} // Stagger child 4
            className="flex justify-center items-center gap-2 text-primary-600 dark:text-primary-400 text-xl sm:text-2xl font-semibold"
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

          {/*
            --- Info/CTA Block ---
            This is now INSIDE the hero section, separated by a deliberate margin.
            It will animate in as the last staggered child.
          */}
          <InfoSection
            className="mt-4" // Deliberate margin to prevent clustering
            fadeUp={fadeUp} // Pass variant to be used as Stagger child 5
            buttonVariants={buttonVariants}
            handleNavigation={handleNavigation}
          />
        </motion.div>
      </Section>

      {/* SECTION 2: COUNTDOWN
          Whitespace: Harmonized to py-16
      */}
      <Section id="countdown" className="py-16">
        <Countdown targetDate="2026-05-14T00:00:00" />
      </Section>

      {/* SECTION 3: ORGANIZERS
          Whitespace: Harmonized to py-16
      */}
      <Section id="organizers" className="py-16">
        <motion.div
          className="container px-4 text-center "
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
                  <strong>Dr. Santo Banerjee</strong> – Politecnico di Torino, Italy
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={detailFade}
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
                        <motion.div
              variants={detailFade}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-xl p-6"
            >
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                Publishing Secretaries
              </h3>
              <ul className="space-y-2 text-left text-sm">
                <li>
                  <strong>Dr. Praveen R</strong> – NIT Puducherry
                </li>
                <li>
                  <strong>Dr. Vani V</strong> – NIT Puducherry
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* SECTION 4: OVERVIEW
          Whitespace: Harmonized to py-16
      */}
      <Section id="overview" className="py-16">
        <LayoutGroup>
          <motion.div
            layoutId="overviewCard"
            onClick={() => setIsOpen(!isOpen)}
            className="relative max-w-3xl mx-auto z-20 cursor-pointer"
          >
            <motion.div
              layout
              className="bg-gradient-blue animate-gradient-shift p-8 border rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4">Conference Overview</h3>
              <p className="mb-4">
                The International Conference on Data-Driven Approaches to
                Dynamical Systems and Computational Modeling brings together
                researchers from across the globe...
              </p>
              <p className="font-semibold text-primary-300">Click to read more</p>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-700/80"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  layoutId="overviewCard"
                  className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-2xl"
                    aria-label="Close overview"
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-bold mb-4">
                    Conference Overview
                  </h3>
                  <p className="mb-4">
                    The International Conference on Data-Driven Approaches to
                    Dynamical Systems and Computational Modeling brings
                    together researchers from across the globe to explore
                    cutting-edge topics.
                  </p>
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </Section>

      {/* SECTION 5: SPEAKERS
          Whitespace: Harmonized to py-16
      */}
      <Section id="speakers" className="py-16">
        <div className="container px-4">
          <Heading
            title="Keynote Speakers"
            className="text-center mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((spk, i) => (
              <SpeakerCard
                key={spk.id}
                speaker={spk}
                onClick={() => setSelectedSpeaker(spk)}
                variants={cardVariants}
                custom={i}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Modal is now a separate component call */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />

      <BottomLine />
    </main>
  );
}