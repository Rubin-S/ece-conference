import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

const CONFERENCE_START = "2026-12-17T00:00:00+05:30";

function getCountdownParts(targetDate) {
  const target = new Date(targetDate).getTime();
  if (Number.isNaN(target)) {
    return { days: "--", hours: "--", minutes: "--", seconds: "--" };
  }

  const diff = Math.max(target - Date.now(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function useCountdown(targetDate) {
  const [parts, setParts] = useState(() => getCountdownParts(targetDate));

  useEffect(() => {
    setParts(getCountdownParts(targetDate));

    const id = window.setInterval(() => {
      setParts(getCountdownParts(targetDate));
    }, 1000);

    return () => window.clearInterval(id);
  }, [targetDate]);

  return parts;
}

const FactCard = ({ label, detail, delay = 0 }) => (
  <MotionReveal
    as="article"
    delay={delay}
    className="rounded-[1.6rem] border border-light-divider/60 bg-white/24 px-4 py-4 text-left backdrop-blur-[10px] dark:border-dark-divider/60 dark:bg-dark-sb/22"
  >
    <p className="text-[0.64rem] font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
      {label}
    </p>
    <p className="mt-3 text-sm font-semibold leading-6 text-light-pt dark:text-dark-pt">{detail}</p>
  </MotionReveal>
);

const CountdownGrid = memo(function CountdownGrid() {
  const countdown = useCountdown(CONFERENCE_START);
  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <div className="mx-auto mt-10 max-w-[62rem]">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {countdownItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.4rem] border border-light-divider/60 bg-white/22 px-4 py-4 text-center backdrop-blur-[10px] dark:border-dark-divider/60 dark:bg-dark-sb/20"
          >
            <p className="tabular-nums text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-none tracking-tight text-light-pt dark:text-dark-pt">
              {item.value}
            </p>
            <p className="mt-3 text-[0.66rem] font-code uppercase tracking-[0.24em] text-light-muted dark:text-dark-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default function Home() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 28]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 44]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.03]);

  return (
    <main>
      <Section
        id="home-hero"
        className="overflow-hidden !pt-6 md:!pt-8"
        aria-labelledby="home-hero-heading"
        reveal={false}
      >
        <div className="container">
          <section ref={heroRef} className="relative py-8">
            <motion.div className="relative z-10" style={{ y: heroY }}>
              <div className="flex flex-wrap justify-center gap-3">
                {siteContent.brand.heroFacts.map((fact, index) => (
                  <MotionReveal
                    key={fact.label}
                    as="span"
                    delay={index * 0.05}
                    className="rounded-full border border-light-divider/60 bg-white/18 px-4 py-2 text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted backdrop-blur-[10px] dark:border-dark-divider/60 dark:bg-dark-sb/18 dark:text-dark-muted"
                  >
                    {fact.detail}
                  </MotionReveal>
                ))}
              </div>

              <motion.div
                className="mx-auto mt-10 max-w-[72rem] text-center"
                style={{ y: titleY, scale: titleScale }}
              >
                <MotionReveal delay={0.04}>
                  <p className="text-[0.74rem] font-code uppercase tracking-[0.34em] text-light-muted dark:text-dark-muted">
                    2026 International Conference on
                  </p>
                </MotionReveal>

                <MotionReveal delay={0.08}>
                  <h1 id="home-hero-heading" className="mt-6 h1 text-light-pt dark:text-dark-pt">
                    <span className="block text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
                      Signal Processing, Computation, Electronics,
                    </span>
                    <span className="mt-3 block text-[clamp(3.3rem,7vw,6.4rem)] leading-[0.95]">
                      Power and Telecommunication
                    </span>
                  </h1>
                </MotionReveal>

                <MotionReveal delay={0.12}>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <span className="rounded-full border border-light-divider/60 bg-white/18 px-4 py-2 text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted backdrop-blur-[10px] dark:border-dark-divider/60 dark:bg-dark-sb/18 dark:text-dark-muted">
                      December 17-18, 2026
                    </span>
                    <span className="rounded-full border border-light-divider/60 bg-white/18 px-4 py-2 text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted backdrop-blur-[10px] dark:border-dark-divider/60 dark:bg-dark-sb/18 dark:text-dark-muted">
                      Countdown to opening day
                    </span>
                  </div>
                </MotionReveal>
              </motion.div>

              <CountdownGrid />

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
                <MotionReveal
                  delay={0.16}
                  className="space-y-6 text-justify text-[1rem] leading-8 text-light-st dark:text-dark-st"
                >
                  {siteContent.aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </MotionReveal>

                <aside className="space-y-4">
                  {siteContent.brand.profile.map((item, index) => (
                    <FactCard
                      key={item.label}
                      label={item.label}
                      detail={item.detail}
                      delay={0.1 + index * 0.06}
                    />
                  ))}

                  <MotionReveal
                    as="article"
                    delay={0.34}
                    className="rounded-[1.8rem] border border-light-divider/60 bg-white/22 px-5 py-5 backdrop-blur-[10px] dark:border-dark-divider/60 dark:bg-dark-altBg/20"
                  >
                    <p className="text-[0.64rem] font-code uppercase tracking-[0.24em] text-light-muted dark:text-dark-muted">
                      2026 brochure
                    </p>
                    <p className="mt-3 text-sm leading-6 text-light-st dark:text-dark-st">
                      The official 2026 brochure will be published on this website.
                    </p>
                  </MotionReveal>
                </aside>
              </div>

              <MotionReveal className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start" delay={0.2}>
                <Link to="/call-for-papers" className="button-primary">
                  View Call for Papers
                </Link>
                <Link to="/important-dates" className="button-secondary">
                  Important Dates
                </Link>
              </MotionReveal>
            </motion.div>
          </section>
        </div>
      </Section>
    </main>
  );
}
