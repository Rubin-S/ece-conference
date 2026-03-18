import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function Contact() {
  return (
    <main>
      <Section id="contact" className="!pt-6 md:!pt-8" aria-labelledby="contact-heading" reveal={false}>
        <div className="container">
          <Heading
            id="contact-heading"
            tag="Contact"
            title="Official communication channels"
            text="For all conference communication, please use the official email contacts listed below."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.contacts.map((contact, index) => (
              <MotionReveal key={contact.label} as="article" className="surface-card" delay={index * 0.05}>
                <p className="site-eyebrow">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="mt-5 block text-sm leading-7 text-light-pt hover:text-primary-600 dark:text-dark-pt dark:hover:text-primary-300"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">{contact.value}</p>
                )}
              </MotionReveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1fr]">
            <MotionReveal as="article" className="surface-panel">
              <p className="site-eyebrow">Venue</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">{siteContent.brand.venue}</p>
            </MotionReveal>

            <MotionReveal as="article" className="surface-card" delay={0.08}>
              <p className="site-eyebrow">Correspondence</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                Updates regarding submission, registration, committees, and brochure release will be published on the
                official website and communicated through the conference email channels.
              </p>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
