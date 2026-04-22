import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

function FeesTable({ title, rows, delay = 0 }) {
  return (
    <MotionReveal as="article" className="surface-card" delay={delay}>
      <h2 className="text-xl font-semibold text-light-pt">{title}</h2>
      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-light-divider/70">
              <th className="px-3 py-3 font-semibold text-light-pt">Category</th>
              <th className="px-3 py-3 font-semibold text-light-pt">Early IEEE</th>
              <th className="px-3 py-3 font-semibold text-light-pt">Early Non-IEEE</th>
              <th className="px-3 py-3 font-semibold text-light-pt">Standard IEEE</th>
              <th className="px-3 py-3 font-semibold text-light-pt">Standard Non-IEEE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.category} className="border-b border-light-divider/60">
                <td className="px-3 py-4 font-medium text-light-pt">{row.category}</td>
                <td className="px-3 py-4 text-light-st">{row.earlyIEEE}</td>
                <td className="px-3 py-4 text-light-st">{row.earlyNonIEEE}</td>
                <td className="px-3 py-4 text-light-st">{row.standardIEEE}</td>
                <td className="px-3 py-4 text-light-st">{row.standardNonIEEE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MotionReveal>
  );
}

export default function Registration() {
  return (
    <main>
      <Section id="registration" className="!pt-6 md:!pt-8" aria-labelledby="registration-heading" reveal={false}>
        <div className="container">
          <Heading
            id="registration-heading"
            tag="Registration"
            title="Registration fees for IConSCEPT 2026"
            text={siteContent.registration.notice}
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <FeesTable title="Indian registration (INR)" rows={siteContent.registration.indian} />
              <FeesTable title="Foreign registration (USD)" rows={siteContent.registration.foreign} delay={0.06} />
            </div>

            <aside className="space-y-6">
              <MotionReveal as="article" className="surface-card" delay={0.08}>
                <p className="site-eyebrow">Registration Notes</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                  {siteContent.registration.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.14}>
                <p className="site-eyebrow">Online Portal</p>
                <p className="mt-5 text-sm leading-7 text-light-st">
                  {siteContent.registration.portalText}
                </p>
              </MotionReveal>
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
}
