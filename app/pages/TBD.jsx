import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function TBDPage() {
  return (
    <main>
      <Section id="sponsors" className="!pt-6 md:!pt-8" aria-labelledby="sponsors-heading" reveal={false}>
        <div className="container max-w-5xl">
          <Heading
            id="sponsors-heading"
            tag="Sponsors and Partners"
            title="Technical sponsorship and institutional partnerships"
            text="IConSCEPT 2026 welcomes collaboration from technical sponsors, academic partners, and industry participants."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.sponsorNotes.map((note, index) => (
              <MotionReveal key={note} as="article" className="surface-panel" delay={index * 0.08}>
                <p className="text-sm leading-7 text-light-st">{note}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
