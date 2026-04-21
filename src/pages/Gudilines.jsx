import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

const topCardClass =
  "rounded-[2.2rem] border border-light-divider/80 bg-white/85 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8 md:py-8";

const wideCardClass =
  "rounded-[2.4rem] border border-light-divider/80 bg-light-sb/80 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8 md:py-8";

const bulletListClass = "mt-6 space-y-5 text-sm leading-7 text-light-st";

export default function Gudilines() {
  const {
    intro,
    authorGuidelines,
    publicationGuidelines,
    publicationRequirementsIntro,
    publicationRequirements,
    publicationRequirementsClosing,
    cmtNotice,
  } = siteContent.guidelines;

  return (
    <main>
      <Section id="gudilines" className="!pt-6 md:!pt-8" aria-labelledby="gudilines-heading" reveal={false}>
        <div className="container">
          <Heading
            id="gudilines-heading"
            title="Guidelines"
            text={intro}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <MotionReveal as="article" className={topCardClass}>
              <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.7rem]">
                Author Guidelines
              </h2>
              <ul className={bulletListClass}>
                {authorGuidelines.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <div>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/registration" className="button-secondary">
                  View registration fees
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal as="article" className={topCardClass} delay={0.06}>
              <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.7rem]">
                Submission Guidelines
              </h2>
              <ul className={bulletListClass}>
                {publicationGuidelines.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <div>
                      <p>{item.detail}</p>
                      {item.templates?.length ? (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {item.templates.map((template) => (
                            <a
                              key={template.href}
                              href={template.href}
                              download
                              className="inline-flex items-center justify-center rounded-full border border-primary-300/70 bg-white/90 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary-700 transition-colors duration-200 hover:border-primary-500 hover:text-primary-800"
                            >
                              {template.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {/* <Link to="/call-for-papers" className="button-secondary">
                  View conference tracks
                </Link> */}
              </div>
            </MotionReveal>
          </div>

          <MotionReveal as="article" className={`${wideCardClass} mt-6`} delay={0.1}>
            <p className="text-[1.45rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.7rem]">Publication Requirements</p>
            <p className="mt-5 text-sm leading-7 text-light-st">{publicationRequirementsIntro}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-light-st">
              {publicationRequirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-light-st">{publicationRequirementsClosing}</p>
          </MotionReveal>

          <MotionReveal as="article" className={`${wideCardClass} mt-6`} delay={0.14}>
            {/* <p className="site-eyebrow">Microsoft CMT Notice</p> */}
            <p className=" text-sm leading-7 text-light-st">{cmtNotice}</p>
          </MotionReveal>
        </div>
      </Section>
    </main>
  );
}
