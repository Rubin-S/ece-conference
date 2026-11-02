import { Link } from "react-router";
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

          {/* Public Information on Registration Process */}
          <div className="mt-12 border-t border-light-divider/80 pt-10">
            <MotionReveal as="article" className="surface-card !py-0">
              <div className="rounded-[1.6rem] border border-primary-500/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,251,254,0.95)_100%)] p-6 shadow-soft sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <p className="site-eyebrow !text-primary-600">Author Registration Process</p>
                    <h3 className="text-xl font-semibold tracking-[-0.01em] text-light-pt sm:text-2xl">
                      Registration &amp; Fee Payment Procedure
                    </h3>
                    <p className="max-w-2xl text-xs leading-6 text-light-st sm:text-sm">
                      Paper review decisions will be communicated to authors on or before <strong>November 2, 2026</strong>. The official payment instructions (NEFT/RTGS bank details, SBI UPI QR Code) and the private registration submission form are provided directly to authors of accepted papers alongside the acceptance notification.
                    </p>
                    <p className="text-xs text-light-st">
                      For any questions regarding registration fee slabs or author eligibility, please reach out to the organizing team at{" "}
                      <a href="mailto:iconscept@nitpy.ac.in" className="font-semibold text-primary-700 hover:text-primary-800">
                        iconscept@nitpy.ac.in
                      </a>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/important-dates"
                      className="button-secondary text-xs !py-2.5 !px-5"
                    >
                      Important Dates
                    </Link>
                    <Link
                      to="/contact-us"
                      className="button-primary text-xs !py-2.5 !px-5"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
