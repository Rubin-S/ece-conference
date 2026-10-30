import { Link } from "react-router";
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
              <p className="mt-5 text-sm leading-7 text-light-st">
                Pay online through NEFT/RTGS to the official conference account. Please remember to include your Paper ID and Name in the payment remarks.
              </p>
            </MotionReveal>

            <MotionReveal as="article" className="surface-card" delay={0.08}>
              <p className="site-eyebrow">Participant Guidance</p>
              <p className="mt-5 text-sm leading-7 text-light-st">
                Please complete your fee payment and keep your payment receipt (UTR number) ready before filling out the Google Form.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal className="mt-8 flex flex-wrap gap-4" delay={0.12}>
            <a
              href={siteContent.registration.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Open Registration Form
            </a>
            <Link to="/registration#payment-instructions" className="button-secondary">
              Payment &amp; Bank Details
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </main>
  );
}
