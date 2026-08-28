import { memo, useEffect, useState } from "react";
import { Link } from "react-router";
import { BellIcon, CalendarIcon, DownloadIcon, LocationMarkerIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import heroImage from "../assets/images/hero.jpeg";
import ieeeLogoIcon from "../assets/images/ieee_logo_icon.webp";
import { siteContent } from "../content/siteContent";

const CONFERENCE_START = "2026-12-17T00:00:00+05:30";
const CONFERENCE_END = "2026-12-18T23:59:59+05:30";

const HERO_TICKER_ITEMS = [
  {
    label: "Venue",
    value: "NIT Puducherry, Karaikal, UT of Puducherry, India",
  },
];

const HERO_ORGANIZER_UNITS = [
  "Department of ECE",
  "Department of EEE",
  "Department of CSE",
];

const HERO_SUPPORT_PANEL =
  "flex h-full flex-col justify-between rounded-[1.3rem] border border-white/10 bg-[rgba(8,12,18,0.46)] px-5 py-5 backdrop-blur-sm md:px-6";

const HERO_SUPPORT_HEADING =
  "text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#8fc6d8]";

const HERO_SUPPORT_TEXT = "text-[0.9rem] font-medium leading-6 text-[#d7e4eb]";

const CONFERENCE_BROCHURE = {
  href: encodeURI("/iconscept 2026-v2.pdf"),
  filename: "IConSCEPT-2026-Brochure.pdf",
};

const BROCHURE_BUTTON_CLASS =
  "announcement-highlight inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-primary-500 bg-primary-500 px-3.5 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_22px_rgba(22,151,191,0.28)] hover:border-primary-600 hover:bg-primary-600";

function BrochureDownloadLink({ className, children }) {
  return (
    <a href={CONFERENCE_BROCHURE.href} download={CONFERENCE_BROCHURE.filename} className={className}>
      {children}
    </a>
  );
}

const HOME_ANNOUNCEMENTS = [
  {
    text: "Submission is now open.",
    href: "https://cmt3.research.microsoft.com/IConSCEPT2026/Submission/Index",
    linkLabel: "Click here",
  },
  {
    text: "Last date for paper submission has been extended to 30.09.2026.",
  },
];

const HOME_ANNOUNCEMENT_LOOP = Array.from({ length: 4 }, () => HOME_ANNOUNCEMENTS).flat();

const HOME_QUICK_INFO = [
  { icon: OfficeBuildingIcon, text: "NIT Puducherry" },
  { icon: LocationMarkerIcon, text: "Karaikal, India" },
  { icon: CalendarIcon, text: "December 17-18, 2026" },
];

const HOME_IMPORTANT_DATES = siteContent.importantDates2026.filter(({ label }) =>
  [
    "Last date for paper submission",
    "Notification of acceptance",
    "Registration opens",
    "Final (Camera-ready) paper submission",
    "Early bird registration deadline",
    "Author registration deadline",
    "Non-author registration deadline",
  ].includes(label),
);

const HOME_CONFERENCE_TRACKS = [
  { id: "Track-1", title: "Communication" },
  { id: "Track-2", title: "Microelectronics and VLSI" },
  { id: "Track-3", title: "Energy Conservation Systems" },
  { id: "Track-4", title: "Power Systems, Automation and Control" },
  { id: "Track-5", title: "Data Learning (AI/ML/DL)" },
  { id: "Track-6", title: "Data Computing" },
];

function getOrdinalSuffix(day) {
  const remainder = day % 100;

  if (remainder >= 11 && remainder <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function getHeroDateCard(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return {
      startDay: "--",
      startSuffix: "",
      endDay: "--",
      endSuffix: "",
      month: "DECEMBER",
      year: "2026",
    };
  }

  return {
    startDay: start.getDate(),
    startSuffix: getOrdinalSuffix(start.getDate()),
    endDay: end.getDate(),
    endSuffix: getOrdinalSuffix(end.getDate()),
    month: new Intl.DateTimeFormat("en-IN", { month: "long" }).format(start).toUpperCase(),
    year: new Intl.DateTimeFormat("en-IN", { year: "numeric" }).format(start),
  };
}

const HERO_DATE_CARD = getHeroDateCard(CONFERENCE_START, CONFERENCE_END);

const DateOrdinal = ({ day, suffix }) => (
  <span className="inline-flex items-start">
    <span>{day}</span>
    {suffix ? <sup className="ml-0.5 text-[0.42em] font-semibold leading-none">{suffix}</sup> : null}
  </span>
);

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

const CountdownGrid = memo(function CountdownGrid({ compact = false, inverse = false }) {
  const countdown = useCountdown(CONFERENCE_START);
  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <div className={compact ? "grid grid-cols-4 gap-3" : "grid gap-3 sm:grid-cols-2 xl:grid-cols-4"}>
      {countdownItems.map((item) => (
        <div
          key={item.label}
          className={
            compact
              ? "min-w-0 rounded-[0.9rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-2.5 py-3 text-center"
              : "rounded-[1.2rem] border border-light-divider/80 bg-light-sb/75 px-4 py-4 text-left"
          }
        >
          <p
            className={
              compact
                ? [
                    "tabular-nums text-[1rem] font-semibold leading-none tracking-tight md:text-[1.25rem]",
                    inverse ? "text-[#f3fbff]" : "text-light-pt",
                  ].join(" ")
                : "tabular-nums text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none tracking-tight text-light-pt"
            }
          >
            {item.value}
          </p>
          <p
            className={
              compact
                ? [
                    "mt-2 text-[0.5rem] font-semibold uppercase tracking-[0.18em]",
                    inverse ? "text-[#8fc6d8]" : "text-light-st",
                  ].join(" ")
                : "mt-3 text-[0.64rem] font-code uppercase tracking-[0.26em] text-light-muted"
            }
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
});

export default function Home() {
  return (
    <main>
      <Section
        id="home-hero"
        className="overflow-hidden"
        customPaddings="py-0"
        aria-labelledby="home-hero-heading"
        reveal={false}
      >
        <section className="relative overflow-hidden border-b border-light-divider/80">
          <div aria-hidden="true" className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center 55%" }}
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(98deg,rgba(5,8,14,0.76)_0%,rgba(5,8,14,0.58)_34%,rgba(5,8,14,0.34)_62%,rgba(5,8,14,0.42)_100%),linear-gradient(180deg,rgba(5,8,14,0.28)_0%,rgba(5,8,14,0.1)_28%,rgba(5,8,14,0.5)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_26%_34%,rgba(8,12,18,0.12)_0%,rgba(8,12,18,0.56)_38%,rgba(8,12,18,0)_72%)]"
          />

          <div className="container relative z-10">
            <div className="flex min-h-[31rem] flex-col pb-4 pt-20 md:min-h-[35rem] md:pb-8 md:pt-24 lg:min-h-[39rem] lg:pb-10 lg:pt-[7.15rem]">
              <div className="mx-auto flex w-full max-w-[64rem] flex-1 flex-col">
                <div className="flex flex-1 items-center">
                  <div className="grid w-full gap-7 md:grid-cols-[9.5rem,minmax(0,1fr)] md:items-center lg:grid-cols-[10.25rem,minmax(0,1fr)] lg:gap-9">
                    <MotionReveal
                      as="div"
                      delay={0.08}
                      className="w-full max-w-[9.5rem] self-center rounded-[1.3rem] border border-white/10 bg-[rgba(8,12,18,0.46)] px-4 py-4 text-white backdrop-blur-sm md:max-w-[10.25rem] md:px-5 md:py-5"
                    >
                      <p className="flex flex-wrap items-start gap-2 text-[1.25rem] font-semibold tracking-[-0.04em] text-[#f2fbff] md:text-[1.55rem]">
                        <DateOrdinal day={HERO_DATE_CARD.startDay} suffix={HERO_DATE_CARD.startSuffix} />
                        <span className="text-white/56">-</span>
                        <DateOrdinal day={HERO_DATE_CARD.endDay} suffix={HERO_DATE_CARD.endSuffix} />
                      </p>
                      <div className="mt-4 h-px w-full bg-white/10" />
                      <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8fc6d8] md:text-[0.86rem]">
                        {HERO_DATE_CARD.month}
                      </p>
                      <p className="mt-2 text-[1.5rem] font-semibold leading-none tracking-[-0.04em] text-[#f6fcff] md:text-[1.9rem]">
                        {HERO_DATE_CARD.year}
                      </p>
                    </MotionReveal>

                    <div className="max-w-[35rem]">
                      <MotionReveal delay={0.16} className="max-w-[23rem]">
                        <p className="text-[clamp(1.08rem,1.8vw,1.55rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-[#a7def0]">
                          <DateOrdinal day="4" suffix={HERO_DATE_CARD.startSuffix} /> <br/>International Conference on
                        </p>
                      </MotionReveal>

                      <MotionReveal delay={0.2}>
                        <h1
                          id="home-hero-heading"
                          className="mt-3 max-w-[24ch] font-sans text-[clamp(1.45rem,3vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white"
                        >
                          <span className="block md:whitespace-nowrap">Signal Processing, Computation,</span>
                          <span className="block md:whitespace-nowrap">Electronics, Power and Telecommunication</span>
                        </h1>
                      </MotionReveal>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 pt-6 md:grid-cols-3 md:gap-5 md:pt-8 lg:gap-6 lg:pt-10">
                  <MotionReveal
                    as="article"
                    delay={0.24}
                    className={`${HERO_SUPPORT_PANEL} h-auto w-fit justify-self-start`}
                  >
                    <p className={HERO_SUPPORT_HEADING}>
                      Organized by
                    </p>
                    <div className="mt-4 inline-grid grid-cols-[3.5rem_auto] items-center gap-x-4 gap-y-3">
                      <div className="flex w-14 justify-center">
                        <img
                          src={siteContent.brand.logo}
                          alt={siteContent.brand.hostInstitute}
                          className="h-14 w-fit shrink-0 rounded-full border border-white/10 bg-white/90 p-1.5 object-contain"
                        />
                      </div>
                      <div className="space-y-0.5 text-[0.9rem] font-medium leading-5 text-[#d7e4eb]">
                        {HERO_ORGANIZER_UNITS.map((unit) => (
                          <p key={unit}>{unit}</p>
                        ))}
                      </div>
                      <p className="text-center text-[0.95rem] font-semibold leading-none tracking-[-0.01em] text-[#eef7fb]">
                        NIT
                      </p>
                      <p className="text-[0.95rem] font-semibold leading-none tracking-[-0.01em] text-[#eef7fb]">
                        Puducherry
                      </p>
                    </div>
                  </MotionReveal>

                  <MotionReveal
                    as="article"
                    delay={0.26}
                    className="flex h-full flex-col items-center justify-center px-2 text-center"
                  >
                    <p className={HERO_SUPPORT_HEADING}>
                      Countdown
                    </p>
                    <div className="mt-4 w-full">
                      <CountdownGrid compact inverse />
                    </div>
                  </MotionReveal>

                  <MotionReveal
                    as="article"
                    delay={0.28}
                    className={HERO_SUPPORT_PANEL}
                  >
                    <p className={HERO_SUPPORT_HEADING}>
                      Technical sponsor
                    </p>
                    <div className="mt-4 flex items-center gap-5">
                      <div className="flex h-16 w-24 shrink-0 items-center justify-center self-center rounded-[1rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-3">
                        <img
                          src={ieeeLogoIcon}
                          alt="IEEE logo"
                          className="mx-auto max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.95rem] font-semibold leading-none tracking-[-0.01em] text-[#eef7fb]">
                          IEEE
                        </p>
                        <p className={`mt-2 ${HERO_SUPPORT_TEXT}`}>
                          {siteContent.brand.technicalSponsor}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/10 bg-[rgba(8,12,18,0.9)] backdrop-blur-sm">
            <div className="container py-2.5 md:py-3">
              <div className="mx-auto flex max-w-[64rem] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-sans text-white">
                {HERO_TICKER_ITEMS.map((item) => (
                  <span key={item.label} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8fc6d8]">
                      {item.label}
                    </span>
                    <span className="text-[0.82rem] font-medium leading-6 tracking-[0.01em] text-[#d7e4eb] md:text-[0.88rem]">
                      {item.value}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Section>

      <section
        aria-label="Conference announcements"
        className="border-y border-light-divider/80 bg-white"
      >
        <div className="container flex flex-col gap-3 py-3 md:flex-row md:items-center md:gap-5">
          <div className="flex shrink-0 items-center justify-between gap-3 md:justify-start">
            <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary-600">
              <BellIcon className="h-4 w-4" />
              <span>Announcements</span>
            </div>
            <BrochureDownloadLink className={`${BROCHURE_BUTTON_CLASS} md:hidden`}>
              <DownloadIcon className="h-4 w-4" aria-hidden="true" />
              <span>Download brochure</span>
            </BrochureDownloadLink>
          </div>

          <div className="announcement-marquee min-w-0 flex-1 overflow-hidden">
            <div className="announcement-marquee-track">
              {[0, 1].map((copyIndex) => (
                <div
                  key={copyIndex}
                  className="announcement-marquee-group"
                  aria-hidden={copyIndex === 1 ? "true" : undefined}
                >
                  {HOME_ANNOUNCEMENT_LOOP.map((announcement, announcementIndex) => (
                    <span
                      key={`${copyIndex}-${announcementIndex}-${announcement.text}`}
                      className="flex shrink-0 items-center gap-3 whitespace-nowrap text-[0.88rem] font-medium text-light-pt"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>
                        {announcement.text}
                        {announcement.href ? (
                          <>
                            {" "}
                            <a
                              href={announcement.href}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-primary-600 underline underline-offset-4 hover:text-primary-700"
                            >
                              {announcement.linkLabel}
                            </a>
                          </>
                        ) : null}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <BrochureDownloadLink className={`${BROCHURE_BUTTON_CLASS} hidden md:inline-flex`}>
            <DownloadIcon className="h-4 w-4" aria-hidden="true" />
            <span>Download brochure</span>
          </BrochureDownloadLink>
        </div>
      </section>

      <Section customPaddings="pt-10 pb-12 md:pt-12 md:pb-14 lg:pt-14 lg:pb-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-10">
            <MotionReveal className="border-t border-light-divider/80 pt-6 md:pt-7">
              <div className="space-y-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-600">
                      Conference Tracks
                    </p>
                    <h2 className="mt-3 max-w-[18ch] text-[1.55rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.9rem]">
                      Areas open for paper submission
                    </h2>
                  </div>
                  <Link
                    to="/guidelines"
                    className="inline-flex items-center justify-center self-start rounded-full border border-primary-500 bg-primary-500 px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:border-primary-600 hover:bg-primary-600 md:self-auto"
                  >
                    View Gudilines
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {HOME_CONFERENCE_TRACKS.map(({ id, title }) => (
                    <div
                      key={id}
                      className="rounded-[1.1rem] border border-light-divider/80 bg-light-sb/70 px-4 py-4"
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-600">
                        {id}
                      </p>
                      <p className="mt-2 text-[1rem] font-semibold leading-6 tracking-[-0.02em] text-light-pt">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>

            <MotionReveal as="aside" delay={0.06} className="border-t border-light-divider/80 pt-6 md:pt-7">
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.55rem]">
                {siteContent.brand.shortName}
              </h2>
              <div className="mt-5 space-y-4">
                {HOME_QUICK_INFO.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-light-st">
                    <Icon className="h-5 w-5 shrink-0 text-primary-600" />
                    <span className="text-[0.95rem] font-medium leading-6">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-light-divider/80 pt-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-600">
                  Important Dates
                </p>
                <div className="mt-4 space-y-3">
                  {HOME_IMPORTANT_DATES.map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 px-4 py-3"
                    >
                      <p className="text-[0.82rem] font-medium leading-5 text-light-st">{label}</p>
                      <p className="mt-1 text-[1rem] font-semibold tracking-[-0.02em] text-light-pt">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
