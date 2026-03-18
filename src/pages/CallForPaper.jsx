import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function CallForPaper() {
  return (
    <main>
      <Section id="call-for-papers" className="!pt-6 md:!pt-8" aria-labelledby="call-for-papers-heading" reveal={false}>
        <div className="container">
          <Heading
            id="call-for-papers-heading"
            tag="Call for Papers"
            title="Original contributions invited for IConSCEPT 2026"
            text={siteContent.submission.scope}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <MotionReveal as="article" className="surface-panel">
              <p className="site-eyebrow">Paper Preparation</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st dark:text-dark-st">
                <li>{siteContent.submission.paperFormat}</li>
                <li>{siteContent.submission.paperLength}</li>
                {siteContent.submission.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </MotionReveal>

            <MotionReveal as="article" className="surface-card" delay={0.06}>
              <p className="site-eyebrow">Author Information</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                The official submission portal and the 2026 brochure will be announced on this website.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal className="mt-8 flex flex-wrap gap-4" delay={0.16}>
            <Link to="/submission" className="button-primary">
              Submission Page
            </Link>
            <Link to="/important-dates" className="button-secondary">
              Important Dates
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </main>
  );
}
