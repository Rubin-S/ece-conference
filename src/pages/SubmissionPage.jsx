import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function SubmissionPage() {
  return (
    <main>
      <Section id="submission" className="!pt-6 md:!pt-8" aria-labelledby="submission-heading" reveal={false}>
        <div className="container">
          <Heading
            id="submission-heading"
            tag="Paper Submission"
            title="Submission instructions for IConSCEPT 2026"
            text={siteContent.submission.portalStatus}
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <MotionReveal as="article" className="surface-panel">
              <p className="site-eyebrow">Author Checklist</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                <li>{siteContent.submission.paperFormat}</li>
                <li>{siteContent.submission.paperLength}</li>
                  {siteContent.submission.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
            </MotionReveal>

            <aside className="space-y-6">
              <MotionReveal as="article" className="surface-card" delay={0.06}>
                <p className="site-eyebrow">Submission Queries</p>
                <div className="mt-5 space-y-4 text-sm text-light-st">
                  {siteContent.contacts.slice(0, 2).map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="block border-t border-light-divider/70 py-4 first:border-t-0 first:pt-0 hover:text-light-pt"
                    >
                      <span className="font-semibold text-light-pt">{contact.label}</span>
                      <br />
                      {contact.value}
                    </a>
                  ))}
                </div>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.12}>
                <p className="site-eyebrow">2026 Brochure</p>
                <p className="mt-5 text-sm leading-7 text-light-st">
                  The official brochure and author kit for the 2026 edition will be released on this website.
                </p>
              </MotionReveal>
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
}
