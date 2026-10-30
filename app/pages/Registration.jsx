import { useState } from "react";
import { Check, Copy, ExternalLink, FileText, Info, Landmark } from "lucide-react";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else if (typeof document !== "undefined") {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy ${label}`}
      aria-label={`Copy ${label}`}
      className="inline-flex items-center gap-1 rounded-md border border-light-divider/80 bg-white px-2 py-0.5 text-[0.66rem] font-medium text-primary-700 shadow-sm transition-colors duration-150 hover:border-primary-400 hover:bg-primary-50/50 hover:text-primary-800"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-600" aria-hidden="true" />
          <span className="font-semibold text-emerald-700">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3 text-primary-500" aria-hidden="true" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

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
  const registrationUrl =
    registration.registrationLink ||
    "https://docs.google.com/forms/d/e/1FAIpQLSekR3Q0mhBFzEZg1mdKN9e5LvxIz_IdXpDRhPSuesdS-XTurQ/viewform?usp=sharing&ouid=106347403567360263070";

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

          <div className="mb-6 -mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#payment-instructions"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 transition-colors hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-800"
            >
              <span>Jump to Payment &amp; Registration Link</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <FeesTable title="Indian registration (INR)" rows={registration.indian} />
              <FeesTable title="Foreign registration (USD)" rows={registration.foreign} delay={0.06} />
            </div>

            <aside className="space-y-6">
              <MotionReveal as="article" id="accommodation" className="surface-card scroll-mt-28" delay={0.08}>
                <div className="flex items-center justify-between gap-2">
                  <p className="site-eyebrow !text-primary-600">Accommodation</p>
                  <span className="inline-flex rounded-full border border-primary-500/30 bg-primary-500/10 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-primary-700">
                    NITPY Campus
                  </span>
                </div>
                <h3 className="mt-3 text-[1.18rem] font-semibold tracking-[-0.02em] text-light-pt">
                  Hostel Accommodation (Moyar Hostel)
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Room Type</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-light-pt">AC room</p>
                  </div>
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Occupancy</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-light-pt">Triple Sharing</p>
                  </div>
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Tariff</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-primary-600">INR 300 per day</p>
                  </div>
                  <div className="rounded-[1rem] border border-light-divider/80 bg-light-sb/60 p-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-wider text-light-muted">Location</p>
                    <p className="mt-1 text-[0.92rem] font-semibold text-light-pt">Moyar Hostel, NITPY</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-light-st">
                  Accommodation within NITPY campus is available at Moyar Hostel for conference participants and authors.
                </p>
              </MotionReveal>

              <MotionReveal as="article" className="surface-card" delay={0.12}>
                <p className="site-eyebrow">Registration Notes</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-light-st">
                  {registration.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </MotionReveal>
            </aside>
          </div>

          {/* Dedicated Payment & Registration Section */}
          <div id="payment-instructions" className="mt-14 scroll-mt-28 border-t border-light-divider/80 pt-10 md:mt-18 md:pt-14">
            <MotionReveal>
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="site-eyebrow !text-primary-600">Payment &amp; Registration</p>
                  <h2 className="text-[1.85rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[2.2rem]">
                    Instruction for Payment of Registration Fees
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-light-st sm:text-[0.95rem]">
                    Follow the bank transfer details below to complete payment via NEFT/RTGS, then submit your registration details using the official form.
                  </p>
                </div>
                <div className="mt-2 shrink-0 md:mt-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-[0.7rem] font-code uppercase tracking-wider text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Registration Open
                  </span>
                </div>
              </div>
            </MotionReveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
              {/* Left Column: Bank Account Details Card */}
              <MotionReveal as="article" className="surface-card !py-0 flex flex-col" delay={0.06}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-light-divider/80 bg-white p-5 shadow-soft sm:p-7">
                  <div className="flex items-center justify-between border-b border-light-divider/70 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                        <Landmark className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.01em] text-light-pt">
                          Bank Account Details
                        </h3>
                        <p className="text-xs text-light-st">State Bank of India &bull; NITPY Karaikal Branch</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-[0.66rem] font-code uppercase tracking-wider text-primary-700">
                      NEFT / RTGS
                    </span>
                  </div>

                  <div className="mt-5 flex-1 space-y-2.5">
                    {/* Name of Account */}
                    <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-4 py-2.5">
                      <p className="text-[0.66rem] font-code uppercase tracking-wider text-light-muted">
                        Name of the Account
                      </p>
                      <p className="mt-0.5 text-[0.92rem] font-semibold text-light-pt sm:text-[0.98rem]">
                        NITPY WORKSHOP / CONFERENCE
                      </p>
                    </div>

                    {/* Account Number & IFSC side-by-side */}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <div className="rounded-xl border border-primary-200/90 bg-primary-50/50 px-4 py-2.5">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[0.66rem] font-code uppercase tracking-wider text-primary-800 font-semibold">
                            Account Number
                          </p>
                          <CopyButton text="41445247710" label="Account Number" />
                        </div>
                        <p className="mt-1 font-code text-base font-bold tracking-wider text-primary-950 sm:text-[1.12rem]">
                          41445247710
                        </p>
                      </div>

                      <div className="rounded-xl border border-primary-200/90 bg-primary-50/50 px-4 py-2.5">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[0.66rem] font-code uppercase tracking-wider text-primary-800 font-semibold">
                            IFS Code
                          </p>
                          <CopyButton text="SBIN0070848" label="IFS Code" />
                        </div>
                        <p className="mt-1 font-code text-base font-bold tracking-wider text-primary-950 sm:text-[1.12rem]">
                          SBIN0070848
                        </p>
                      </div>
                    </div>

                    {/* Bank & Branch & Account Type */}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-3.5 py-2">
                        <p className="text-[0.64rem] font-code uppercase tracking-wider text-light-muted">Bank</p>
                        <p className="mt-0.5 text-xs font-semibold text-light-pt">STATE BANK OF INDIA</p>
                      </div>
                      <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-3.5 py-2">
                        <p className="text-[0.64rem] font-code uppercase tracking-wider text-light-muted">Branch</p>
                        <p className="mt-0.5 text-xs font-semibold text-light-pt">NITPY KARAIKAL BRANCH</p>
                      </div>
                      <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-3.5 py-2">
                        <p className="text-[0.64rem] font-code uppercase tracking-wider text-light-muted">Account Type</p>
                        <p className="mt-0.5 text-xs font-semibold text-light-pt">Savings</p>
                      </div>
                    </div>

                    {/* MICR & SWIFT */}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-3.5 py-2">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[0.64rem] font-code uppercase tracking-wider text-light-muted">MICR Code</p>
                          <CopyButton text="609002106" label="MICR Code" />
                        </div>
                        <p className="mt-0.5 font-code text-xs font-semibold text-light-pt">609002106</p>
                      </div>
                      <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-3.5 py-2">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[0.64rem] font-code uppercase tracking-wider text-light-muted">SWIFT Code</p>
                          <CopyButton text="SBININBB228" label="SWIFT Code" />
                        </div>
                        <p className="mt-0.5 font-code text-xs font-semibold text-light-pt">SBININBB228</p>
                      </div>
                    </div>

                    {/* Bank Address */}
                    <div className="rounded-xl border border-light-divider/70 bg-light-sb/60 px-4 py-2">
                      <p className="text-[0.64rem] font-code uppercase tracking-wider text-light-muted">Bank Address</p>
                      <p className="mt-0.5 text-xs font-medium text-light-pt">
                        Thiruvettakudy, Karaikal – 609 609, India
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Right Column: Instructions & Registration Link Card */}
              <MotionReveal as="article" className="surface-card !py-0 flex flex-col" delay={0.08}>
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-primary-500/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,251,254,0.95)_100%)] p-5 shadow-soft sm:p-7">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-light-divider/70 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                          <FileText className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold tracking-[-0.01em] text-light-pt">
                            Registration Link
                          </h3>
                          <p className="text-xs text-light-st">For Conference Registration, please click below</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[0.66rem] font-code uppercase tracking-wider text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Active Form
                      </span>
                    </div>

                    {/* Mandatory Remark Box (Requested by user) */}
                    <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-amber-950">
                      <div className="flex items-start gap-2.5">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                        <div className="text-xs leading-5">
                          <p className="font-bold uppercase tracking-wider text-[0.68rem] font-code text-amber-900">
                            Payment Remark Requirement
                          </p>
                          <p className="mt-1">
                            Pay Online though NEFT/RTGS (Preferably Bank Account Transfer) in the account given below.
                          </p>
                          <p className="mt-1.5 font-semibold text-amber-950">
                            While making online payment, authors are requested to mention their{" "}
                            <span className="underline decoration-amber-600 decoration-2 underline-offset-2">Paper ID</span> and{" "}
                            <span className="underline decoration-amber-600 decoration-2 underline-offset-2">Name</span> in{" "}
                            <strong className="text-amber-900">Payment Remark</strong> to enable us to trace your payment in the Bank Statement.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Registration Instructions Checklist */}
                    <div className="rounded-xl border border-light-divider/70 bg-white/90 p-3.5 text-xs leading-5 text-light-st">
                      <p className="font-semibold text-light-pt uppercase tracking-wider text-[0.66rem] font-code">
                        Before Submitting the Form
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          <span>Ensure your NEFT/RTGS payment transfer is successful.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          <span>Keep transaction reference (UTR) number &amp; payment screenshot ready.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          <span>Upload the transaction proof and author information in the form.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Clean, Non-wrapping Action Button */}
                  <div className="mt-5 border-t border-light-divider/70 pt-4">
                    <a
                      href={registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-center gap-2 rounded-full border border-primary-500 bg-primary-500 px-5 py-3.5 text-center text-[0.82rem] font-semibold text-white shadow-soft transition-all duration-200 ease-smooth hover:border-primary-600 hover:bg-primary-600 hover:shadow-md"
                    >
                      <span className="truncate">Click here to Register for the ICONSCEPT 2026</span>
                      <ExternalLink className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
