import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function RegistrationPortal() {
  return (
    <main>
      <Section
        id="registration-portal"
        className="!pt-6 md:!pt-8"
        aria-labelledby="registration-portal-heading"
        reveal={false}
      >
        <div className="container max-w-4xl">
          <Heading
            id="registration-portal-heading"
            tag="Registration Portal"
            title="Online registration portal"
            text={siteContent.registration.portalText}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <MotionReveal as="article" className="surface-panel">
              <p className="site-eyebrow">Payment Instructions</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                Payment instructions will be published together with the official registration portal.
              </p>
            </MotionReveal>

            <MotionReveal as="article" className="surface-card" delay={0.08}>
              <p className="site-eyebrow">Participant Guidance</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                Participants may consult the registration page for the tentative fee schedule and official contact channels.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal className="mt-8 flex flex-wrap gap-4" delay={0.12}>
            <Link to="/registration" className="button-primary">
              Back to Registration
            </Link>
            <Link to="/contact-us" className="button-secondary">
              Contact Organizers
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </main>
  );
}
