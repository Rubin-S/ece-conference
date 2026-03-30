import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

const submissionPortalHref = "https://cmt3.research.microsoft.com/IConSCEPT2023/Submission/Index";

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
          <div className="-mt-6 mb-10 flex justify-center md:-mt-8 md:mb-12">
            <a
              href={submissionPortalHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary min-w-[18rem]"
            >
              Submit your manuscript
            </a>
          </div>

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

            <aside className="space-y-4">
              <MotionReveal as="article" className="surface-card pb-1" delay={0.06}>
                <p className="site-eyebrow">Submission Queries</p>
                <div className="mt-5 space-y-4 text-sm text-light-st">
                  {siteContent.contacts.slice(0, 1).map((contact) => (
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
                <div className="mt-4 border-t border-light-divider/80" />
              </MotionReveal>

              <MotionReveal as="article" delay={0.12}>
                <Link
                  to="/call-for-papers"
                  className="group block w-full max-w-[28rem] rounded-[2rem] border border-light-divider/80 bg-white/80 px-6 py-7 shadow-soft backdrop-blur-sm transition-all duration-200 hover:border-primary-400/70 hover:bg-light-sb/90 md:px-8"
                >
                  <p className="text-[1.2rem] font-semibold leading-8 tracking-[-0.03em] text-light-pt transition-colors duration-200 group-hover:text-primary-600">
                    Guidline, Templates and download
                  </p>
                  <p className="mt-3 text-sm leading-7 text-light-st">
                    Open the call-for-paper page for author guidance, templates, and download resources.
                  </p>
                </Link>
              </MotionReveal>
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
}
