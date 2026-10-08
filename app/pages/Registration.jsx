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
              <MotionReveal as="article" id="accommodation" className="surface-card" delay={0.08}>
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
                  Accommodation within NITPY campus is available at Moyor Hostel for conference participants and authors.
                </p>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.12}>
                <p className="site-eyebrow">Registration Notes</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                  {siteContent.registration.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.16}>
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
