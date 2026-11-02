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
              <th className="whitespace-nowrap px-3 py-3 font-semibold text-light-pt">Early IEEE</th>
              <th className="whitespace-nowrap px-3 py-3 font-semibold text-light-pt">Early Non-IEEE</th>
              <th className="whitespace-nowrap px-3 py-3 font-semibold text-light-pt">Standard IEEE</th>
              <th className="whitespace-nowrap px-3 py-3 font-semibold text-light-pt">Standard Non-IEEE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.category} className="border-b border-light-divider/60">
                <td className="px-3 py-4 font-medium text-light-pt">{row.category}</td>
                <td className="whitespace-nowrap px-3 py-4 text-light-st">{row.earlyIEEE}</td>
                <td className="whitespace-nowrap px-3 py-4 text-light-st">{row.earlyNonIEEE}</td>
                <td className="whitespace-nowrap px-3 py-4 text-light-st">{row.standardIEEE}</td>
                <td className="whitespace-nowrap px-3 py-4 text-light-st">{row.standardNonIEEE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MotionReveal>
  );
}

export default function Registration() {
  const { registration } = siteContent;

  return (
    <main>
      <Section id="registration" className="!pt-6 md:!pt-8" aria-labelledby="registration-heading" reveal={false}>
        <div className="container">
          <Heading
            id="registration-heading"
            tag="Registration"
            title="Registration fees for IConSCEPT 2026"
            text={registration.notice}
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <FeesTable title="Indian registration (INR)" rows={registration.indian} />
              <FeesTable title="Foreign registration (USD)" rows={registration.foreign} delay={0.06} />
            </div>

            <aside className="space-y-6">
              <MotionReveal as="article" className="surface-card" delay={0.08}>
                <p className="site-eyebrow">Registration Notes</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                  {registration.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.12}>
                <p className="site-eyebrow">Registration Guidelines</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                  <li>
                    At least one author of each accepted paper must complete author registration for the paper to be included in the conference proceedings.
                  </li>
                  <li>
                    Registration fee covers admission to all technical and keynote sessions, official conference kit, presentation certificate, and conference meals/refreshments.
                  </li>
                  <li>
                    IEEE members must provide their valid IEEE Membership Number during submission to avail the discounted registration rate.
                  </li>
                  <li>
                    Co-authors, researchers, and students who wish to attend technical sessions without presenting may register under the Non-author attendee category.
                  </li>
                </ul>
              </MotionReveal>
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
}
