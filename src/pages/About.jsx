import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function About() {
  return (
    <main>
      <Section id="about-page" className="!pt-6 md:!pt-8" aria-labelledby="about-page-heading" reveal={false}>
        <div className="container">
          <Heading
            id="about-page-heading"
            tag="About IConSCEPT 2026"
            title={siteContent.brand.fullName}
            text="IConSCEPT 2026 is the fourth edition of the conference series hosted at NIT Puducherry and organized around contemporary advances in signal, computation, electronics, power, and telecommunication."
            centered={false}
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <MotionReveal as="article" className="surface-panel">
              <div className="space-y-6 text-justify text-[1rem] leading-8 text-light-st dark:text-dark-st">
                {siteContent.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </MotionReveal>

            <aside className="space-y-6">
              <MotionReveal as="article" className="surface-card" delay={0.06}>
                <p className="site-eyebrow">Conference Profile</p>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
                      Dates
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-light-pt dark:text-dark-pt">
                      {siteContent.brand.dates}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
                      Venue
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-light-pt dark:text-dark-pt">
                      {siteContent.brand.venue}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
                      Organized by
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-light-pt dark:text-dark-pt">
                      {siteContent.brand.organizers}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
                      Technical sponsor
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-light-pt dark:text-dark-pt">
                      {siteContent.brand.technicalSponsor}
                    </dd>
                  </div>
                </dl>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.12}>
                <p className="site-eyebrow">Publication</p>
                <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                  {siteContent.brand.publicationTarget}
                </p>
              </MotionReveal>
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
}
