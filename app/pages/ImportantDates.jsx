import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

function StatusBadge({ status }) {
  const classes =
    status === "Confirmed"
      ? "border-primary-400/40 bg-primary-400/12 text-primary-300"
      : "border-highlight-500/40 bg-highlight-500/12 text-highlight-300";

  return (
    <span className={`rounded-full border px-3 py-1 text-[0.64rem] font-code uppercase tracking-[0.2em] ${classes}`}>
      {status}
    </span>
  );
}

export default function ImportantDates() {
  return (
    <main>
      <Section id="important-dates" className="!pt-6 md:!pt-8" aria-labelledby="important-dates-heading" reveal={false}>
        <div className="container">
          <Heading
            id="important-dates-heading"
            tag="Important Dates"
            title="Schedule for IConSCEPT 2026"
            text="The conference dates, submission milestones, and registration deadlines currently published for IConSCEPT 2026 are listed below."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.importantDates2026.map((item, index) => (
              <MotionReveal key={item.label} as="article" className="surface-card" delay={index * 0.05}>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-base font-semibold leading-6 text-light-pt">
                    {item.label}
                  </h2>
                  <StatusBadge status={item.status} />
                </div>
                <p className="mt-6 text-lg font-semibold text-primary-600">{item.value}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
