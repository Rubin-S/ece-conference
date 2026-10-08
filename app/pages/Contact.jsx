import { Mail, PhoneCall } from "lucide-react";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function Contact() {
  const primaryContacts = siteContent.contacts.slice(0, 2);

  return (
    <main>
      <Section id="contact" className="!pt-6 md:!pt-8" aria-labelledby="contact-heading" reveal={false}>
        <div className="container">
          <Heading
            id="contact-heading"
            tag="Contact"
            title="Official communication channels"
            text="For all conference communication, please use the official email and phone contacts listed below."
          />

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {primaryContacts.map((contact, index) => (
              <MotionReveal
                key={contact.label}
                as="article"
                className="surface-card grid h-full w-full max-w-none grid-cols-[2.5rem,minmax(0,1fr)] gap-x-5 gap-y-3 sm:grid-cols-[3rem,minmax(0,1fr)] sm:gap-x-6"
                delay={index * 0.05}
              >
                <div className="flex items-start justify-center pt-1 text-light-pt">
                  {contact.type === "phone" ? (
                    <PhoneCall className="h-9 w-9" strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <Mail className="h-9 w-9" strokeWidth={1.8} aria-hidden="true" />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="site-eyebrow !flex">{contact.label}</p>
                  {contact.type === "phone" ? (
                    <div className="mt-4 grid gap-2.5 text-[1.05rem] leading-7 text-light-pt">
                      {contact.people.map((person) => (
                        <div
                          key={person.name}
                          className="grid gap-0.5 sm:grid-cols-[max-content,1fr] sm:items-baseline sm:gap-x-3"
                        >
                          <span className="font-medium">{person.name} :</span>
                          <a href={person.href} className="hover:text-primary-600">
                            {person.value}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={contact.href}
                      className="mt-4 block text-[1.05rem] leading-7 text-light-pt hover:text-primary-600"
                    >
                      {contact.value}
                    </a>
                  )}
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1fr]">
            <MotionReveal as="article" className="surface-panel">
              <p className="site-eyebrow">Venue</p>
              <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-light-divider/80 shadow-soft">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6676737725215!2d79.84310747509168!3d10.988437389173518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55112cc3dc97d9%3A0x6b8a0f3ccb72149e!2sNational%20Institute%20of%20Technology%2C%20Puducherry%20Science%20Block!5e0!3m2!1sen!2sin!4v1774534443298!5m2!1sen!2sin"
                    className="h-[20rem] w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="National Institute of Technology Puducherry map"
                  />
              </div>
            </MotionReveal>

            <div className="space-y-6">
              <MotionReveal as="article" id="accommodation" className="surface-card" delay={0.06}>
                <div className="flex items-center justify-between gap-2">
                  <p className="site-eyebrow !text-primary-600">Accommodation</p>
                  <span className="inline-flex rounded-full border border-primary-500/30 bg-primary-500/10 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-primary-700">
                    NITPY Campus
                  </span>
                </div>
                <h3 className="mt-3 text-[1.18rem] font-semibold tracking-[-0.02em] text-light-pt">
                  Hostel Accommodation (Moyor Hostel)
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Room Type</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-light-pt">AC room</p>
                  </div>
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Occupancy</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-light-pt">3 person per room</p>
                  </div>
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Tariff</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-primary-600">300rs per day</p>
                  </div>
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Location</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-light-pt">Moyor Hostel, NITPY</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-light-st">
                  Accommodation within NITPY campus is available at Moyor Hostel for participants and authors.
                </p>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.12}>
                <p className="site-eyebrow">Correspondence</p>
                <p className="mt-5 text-sm leading-7 text-light-st">
                  Updates regarding submission, registration, committees, and brochure release will be published on the
                  official website and communicated through the conference email channels.
                </p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
