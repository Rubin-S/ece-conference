import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

const previousEditionYears = [
  {
    year: "2023",
    href: "https://ieeexplore.ieee.org/xpl/conhome/10169135/proceeding",
  },
  {
    year: "2024",
    href: "https://ieeexplore.ieee.org/xpl/conhome/10625767/proceeding",
  },
  {
    year: "2025",
    href: "https://ieeexplore.ieee.org/xpl/conhome/11436094/proceeding",
  },
];

export default function Publication() {
  return (
    <main>
      <Section id="publication" className="!pt-6 md:!pt-8" aria-labelledby="publication-heading" reveal={false}>
        <div className="container">
          <Heading
            id="publication-heading"
            tag="Publication"
            title="IEEE Xplore publication pathway"
            text={siteContent.publication.overview}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <MotionReveal as="article" className="surface-panel lg:col-span-2">
              <p className="site-eyebrow">Publication Statement</p>
              <p className="mt-5 text-sm leading-7 text-light-st">
                {siteContent.publication.overview}
              </p>
              <p className="mt-4 text-sm leading-7 text-light-st">
                The{" "}
                <span className="group relative inline-block cursor-default">
                  <span className="text-primary-600 underline underline-offset-4 transition-colors duration-200 group-hover:text-primary-700">
                    previous editions
                  </span>
                  <span className="invisible pointer-events-none absolute left-0 top-[calc(100%-0.2rem)] z-10 min-w-[8rem] rounded-[1.2rem] border border-light-divider/80 bg-light-sb/95 px-4 py-3 text-[0.92rem] leading-6 text-light-st shadow-soft opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
                    {previousEditionYears.map(({ year, href }) => (
                      <a
                        key={year}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-primary-600 transition-colors duration-200 hover:text-primary-700 hover:underline hover:underline-offset-4"
                      >
                        {year}
                      </a>
                    ))}
                  </span>
                </span>{" "}
                of the conference series were published in IEEE Xplore, and the 2026 edition continues that publication pathway.
              </p>
            </MotionReveal>

            <MotionReveal as="article" className="surface-card" delay={0.06}>
              <p className="site-eyebrow">Notes</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                {siteContent.publication.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
