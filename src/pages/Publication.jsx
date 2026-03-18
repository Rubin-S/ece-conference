import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

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
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                {siteContent.publication.overview}
              </p>
              <p className="mt-4 text-sm leading-7 text-light-st dark:text-dark-st">
                {siteContent.publication.continuity}
              </p>
            </MotionReveal>

            <MotionReveal as="article" className="surface-card" delay={0.06}>
              <p className="site-eyebrow">Notes</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st dark:text-dark-st">
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
