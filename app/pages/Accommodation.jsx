import {
  Bed,
  Building2,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Train,
} from "lucide-react";
import { Link } from "react-router";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function Accommodation() {
  const { accommodation } = siteContent;
  const bookingUrl = accommodation.bookingUrl || "https://nitpy.ac.in/accomodation";

  return (
    <main>
      <Section id="accommodation" className="!pt-6 md:!pt-8" aria-labelledby="accommodation-heading" reveal={false}>
        <div className="container">
          <Heading
            id="accommodation-heading"
            tag="Accommodation"
            title="Accommodation for IConSCEPT 2026"
            text="Official on-campus hostel accommodation and travel guidance for conference participants, authors, and delegates visiting NIT Puducherry."
          />

          {/* Quick jump navigation */}
          <div className="mb-8 -mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#hostel-details"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 transition-colors hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-800"
            >
              <span>Campus Hostel</span>
              <span aria-hidden="true">&darr;</span>
            </a>
            <a
              href="#guidelines"
              className="inline-flex items-center gap-1.5 rounded-full border border-light-divider/80 bg-light-sb px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-light-pt transition-colors hover:border-primary-400 hover:bg-light-altBg"
            >
              <span>Guidelines &amp; Policies</span>
              <span aria-hidden="true">&darr;</span>
            </a>
            <a
              href="#how-to-reach"
              className="inline-flex items-center gap-1.5 rounded-full border border-light-divider/80 bg-light-sb px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-light-pt transition-colors hover:border-primary-400 hover:bg-light-altBg"
            >
              <span>How to Reach</span>
              <span aria-hidden="true">&darr;</span>
            </a>
            <a
              href="#support"
              className="inline-flex items-center gap-1.5 rounded-full border border-light-divider/80 bg-light-sb px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-light-pt transition-colors hover:border-primary-400 hover:bg-light-altBg"
            >
              <span>Contact Helpdesk</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>

          {/* Main Grid: Hostel Accommodation & Guidelines */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
            {/* Left Column: Campus Hostel Accommodation Card */}
            <div id="hostel-details" className="space-y-6 scroll-mt-28">
              <MotionReveal as="article" className="surface-card !py-0">
                <div className="rounded-[1.6rem] border border-light-divider/80 bg-white p-6 shadow-soft sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-light-divider/70 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                        <Building2 className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="site-eyebrow !text-primary-600">Campus Accommodation</p>
                        <h2 className="text-xl font-semibold tracking-[-0.01em] text-light-pt sm:text-2xl">
                          Hostel Accommodation (Moyar Hostel)
                        </h2>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      NITPY Campus
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-2xl border border-light-divider/80 bg-light-sb/60 p-3.5">
                      <p className="text-[0.68rem] font-medium uppercase tracking-wider text-light-muted">Room Type</p>
                      <p className="mt-1 text-base font-semibold text-light-pt">AC Room</p>
                    </div>
                    <div className="rounded-2xl border border-light-divider/80 bg-light-sb/60 p-3.5">
                      <p className="text-[0.68rem] font-medium uppercase tracking-wider text-light-muted">Occupancy</p>
                      <p className="mt-1 text-base font-semibold text-light-pt">Triple Sharing</p>
                    </div>
                    <div className="rounded-2xl border border-primary-200/90 bg-primary-50/50 p-3.5">
                      <p className="text-[0.68rem] font-medium uppercase tracking-wider text-primary-800 font-semibold">Tariff</p>
                      <p className="mt-1 text-base font-bold text-primary-700">INR 300 / day</p>
                    </div>
                    <div className="rounded-2xl border border-light-divider/80 bg-light-sb/60 p-3.5">
                      <p className="text-[0.68rem] font-medium uppercase tracking-wider text-light-muted">Location</p>
                      <p className="mt-1 text-sm font-semibold text-light-pt truncate" title="Moyar Hostel, NITPY">Moyar Hostel</p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="mt-6 space-y-3 text-sm leading-7 text-light-st">
                    <p>
                      NIT Puducherry extends hostel accommodation within the institute campus at <strong>Moyar Hostel</strong> for registered conference participants, student authors, researchers, and faculty delegates attending <strong>IConSCEPT 2026</strong>.
                    </p>
                    <p>
                      The rooms are comfortable, well-ventilated, and equipped with air conditioning on a triple-sharing basis at a heavily subsidized tariff of <strong>INR 300 per day</strong>.
                    </p>
                  </div>

                  {/* Amenities Checklist */}
                  <div className="mt-6 rounded-2xl border border-light-divider/70 bg-light-sb/40 p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider font-code text-light-pt">
                      Key Facilities &amp; Amenities
                    </h3>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 text-xs leading-5 text-light-st">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                        <span>Air-conditioned rooms with individual beds</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                        <span>High-speed campus Wi-Fi access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                        <span>Walking distance to Science Block (Venue)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                        <span>24/7 Security &amp; Power Backup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                        <span>Clean drinking water (RO purification)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                        <span>Campus dining hall &amp; institute cafeteria</span>
                      </li>
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-light-divider/70 pt-6">
                    <div>
                      <p className="text-xs font-medium text-light-pt">Ready to secure your stay?</p>
                      <p className="text-[0.72rem] text-light-st">Bookings are confirmed on a first-come, first-served basis.</p>
                    </div>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary-500 bg-primary-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-soft transition-all duration-200 ease-smooth hover:border-primary-600 hover:bg-primary-600 hover:shadow-md"
                    >
                      <span>Book NITPY Accommodation</span>
                      <ExternalLink className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Right Column: Guidelines & Policies */}
            <aside id="guidelines" className="space-y-6 scroll-mt-28">
              <MotionReveal as="article" className="surface-card !py-0" delay={0.06}>
                <div className="rounded-[1.6rem] border border-light-divider/80 bg-white p-6 shadow-soft sm:p-7">
                  <div className="flex items-center gap-3 border-b border-light-divider/70 pb-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                      <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="site-eyebrow">Regulations</p>
                      <h3 className="text-lg font-semibold tracking-[-0.01em] text-light-pt">
                        Booking Guidelines &amp; Policies
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-4 text-xs leading-6 text-light-st">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <div>
                        <strong className="text-light-pt">First-Come, First-Served Allotment:</strong> Hostel accommodation is limited and allotted strictly based on room availability and booking sequence.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <div>
                        <strong className="text-light-pt">Conference Registration Verification:</strong> Accommodation is provided for registered authors, co-authors, and delegates. Please keep your Paper ID and registration receipt ready.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <div>
                        <strong className="text-light-pt">Valid Photo ID Mandatory:</strong> Guests must present a valid government-issued photo ID (Aadhaar, Passport, or Voter ID) and student/faculty ID card during check-in.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <div>
                        <strong className="text-light-pt">Tariff &amp; Payment:</strong> Room charges (INR 300 per day) must be settled through the official NITPY booking link or at the hostel reception as instructed.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <div>
                        <strong className="text-light-pt">Campus Decorum:</strong> All occupants are expected to adhere to institute hostel norms, maintain quiet hours, and follow security directives.
                      </div>
                    </li>
                  </ul>
                </div>
              </MotionReveal>

              {/* Alternative Private Lodging Info Card */}
              <MotionReveal as="article" className="surface-card !py-0" delay={0.1}>
                <div className="rounded-[1.6rem] border border-light-divider/80 bg-white p-6 shadow-soft sm:p-7">
                  <div className="flex items-center gap-3 border-b border-light-divider/70 pb-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-light-divider/80 bg-light-sb text-light-pt">
                      <Bed className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="site-eyebrow">Alternative Options</p>
                      <h3 className="text-lg font-semibold tracking-[-0.01em] text-light-pt">
                        Hotels in Karaikal Town
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-light-st">
                    Participants preferring independent private hotel lodging, family rooms, or suite accommodation can explore several reputable hotels located in <strong>Karaikal town</strong> (~10 to 12 km from NIT Puducherry campus).
                  </p>

                  <div className="mt-4 rounded-xl border border-light-divider/70 bg-light-sb/50 p-3.5 text-xs text-light-st">
                    <p className="font-semibold text-light-pt">Commute between Karaikal Town &amp; Campus:</p>
                    <p className="mt-1">
                      Frequent local buses, auto-rickshaws, and private taxis connect Karaikal town directly to Thiruvettakudy (NITPY Campus).
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </aside>
          </div>

          {/* Section: How to Reach NIT Puducherry */}
          <div id="how-to-reach" className="mt-14 scroll-mt-28 border-t border-light-divider/80 pt-10 md:mt-18 md:pt-14">
            <MotionReveal>
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="site-eyebrow !text-primary-600">Travel &amp; Directions</p>
                  <h2 className="text-[1.85rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[2.2rem]">
                    How to Reach NIT Puducherry
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-light-st sm:text-[0.95rem]">
                    National Institute of Technology Puducherry is situated at Thiruvettakudy, Karaikal – 609 609. The campus is well connected by rail, road, and air.
                  </p>
                </div>
                <div className="mt-2 shrink-0 md:mt-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-3.5 py-1 text-[0.7rem] font-code uppercase tracking-wider text-primary-700">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    Thiruvettakudy, Karaikal
                  </span>
                </div>
              </div>
            </MotionReveal>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* By Train */}
              <MotionReveal as="article" className="surface-card !py-0 flex flex-col" delay={0.04}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-light-divider/80 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex items-center gap-3 border-b border-light-divider/70 pb-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                      <Train className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-light-pt">By Train</h3>
                      <p className="text-[0.68rem] text-light-st">Nearest railway stations</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-3 text-xs leading-5 text-light-st">
                    <li>
                      <strong className="text-light-pt">Karaikal (KIK):</strong> ~12 km from campus. Direct trains from Chennai, Bengaluru, and Tiruchirappalli.
                    </li>
                    <li>
                      <strong className="text-light-pt">Nagore (NCR):</strong> ~15 km from campus. Connected to southern railway networks.
                    </li>
                    <li>
                      <strong className="text-light-pt">Mayiladuthurai Junction (MV):</strong> ~40 km from campus. Major junction with frequent superfast trains from across India.
                    </li>
                  </ul>
                </div>
              </MotionReveal>

              {/* By Air */}
              <MotionReveal as="article" className="surface-card !py-0 flex flex-col" delay={0.08}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-light-divider/80 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex items-center gap-3 border-b border-light-divider/70 pb-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                      <Plane className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-light-pt">By Air</h3>
                      <p className="text-[0.68rem] text-light-st">Nearby airports</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-3 text-xs leading-5 text-light-st">
                    <li>
                      <strong className="text-light-pt">Tiruchirappalli International Airport (TRZ):</strong> ~140 km from campus. Flights from major Indian cities &amp; international hubs. Direct taxi/bus available (~3 hrs).
                    </li>
                    <li>
                      <strong className="text-light-pt">Chennai International Airport (MAA):</strong> ~280 km from campus. Connected via express trains and buses (~6 hrs).
                    </li>
                  </ul>
                </div>
              </MotionReveal>

              {/* By Road */}
              <MotionReveal as="article" className="surface-card !py-0 flex flex-col" delay={0.12}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-light-divider/80 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex items-center gap-3 border-b border-light-divider/70 pb-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-primary-600">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-light-pt">By Road &amp; Bus</h3>
                      <p className="text-[0.68rem] text-light-st">Interstate &amp; local transit</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-3 text-xs leading-5 text-light-st">
                    <li>
                      <strong className="text-light-pt">Interstate Buses:</strong> Regular express buses operate to Karaikal from Chennai, Pondicherry, Bengaluru, Coimbatore, Madurai, and Trichy.
                    </li>
                    <li>
                      <strong className="text-light-pt">Local Commute:</strong> Auto-rickshaws and taxis are readily available from Karaikal New Bus Stand and Railway Station directly to NITPY Campus.
                    </li>
                  </ul>
                </div>
              </MotionReveal>
            </div>
          </div>

          {/* Section: Support & Inquiries */}
          <div id="support" className="mt-14 scroll-mt-28 border-t border-light-divider/80 pt-10 md:mt-18 md:pt-14">
            <MotionReveal as="article" className="surface-card !py-0">
              <div className="rounded-[1.6rem] border border-primary-500/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,251,254,0.95)_100%)] p-6 shadow-soft sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <p className="site-eyebrow !text-primary-600">Assistance</p>
                    <h3 className="text-xl font-semibold tracking-[-0.01em] text-light-pt sm:text-2xl">
                      Have Questions Regarding Accommodation?
                    </h3>
                    <p className="max-w-2xl text-xs leading-6 text-light-st sm:text-sm">
                      For any special requests, room allocation inquiries, or arrival schedule coordination, please reach out to the IConSCEPT organizing committee.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs text-light-st">
                      <a href="mailto:iconscept@nitpy.ac.in" className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-800">
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>iconscept@nitpy.ac.in</span>
                      </a>
                      <span className="text-light-divider">&bull;</span>
                      <a href="tel:+919566453837" className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-800">
                        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>+91 9566453837</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact-us"
                      className="button-primary text-xs !py-2.5 !px-5"
                    >
                      Contact Team
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
