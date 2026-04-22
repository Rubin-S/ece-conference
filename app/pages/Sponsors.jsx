import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

function SponsorStatus({ children }) {
  return (
    <span className="inline-flex rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[0.64rem] font-code uppercase tracking-[0.2em] text-primary-700">
      {children}
    </span>
  );
}

export default function Sponsors() {
  const { brand, sponsorsPage } = siteContent;

  return (
    <main>
      <Section id="sponsors" className="!pt-6 md:!pt-8" aria-labelledby="sponsors-heading" reveal={false}>
        <div className="container">
          <header className="sr-only">
            <h1 id="sponsors-heading">{sponsorsPage.intro.title}</h1>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <MotionReveal
              as="article"
              className="rounded-[1.4rem] border border-light-divider/80 bg-light-sb/95 p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="site-eyebrow">{sponsorsPage.technicalSponsor.role}</p>
                  <h2 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[2.15rem]">
                    {sponsorsPage.technicalSponsor.name}
                  </h2>
                </div>
                <SponsorStatus>{sponsorsPage.technicalSponsor.status}</SponsorStatus>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[8rem_minmax(0,1fr)] md:items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-[1.2rem] border border-light-divider/80 bg-white p-4">
                  <img
                    src={sponsorsPage.technicalSponsor.logo}
                    alt={sponsorsPage.technicalSponsor.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm leading-7 text-light-st">{sponsorsPage.technicalSponsor.description}</p>
                  <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-muted">
                    Publication pathway
                  </p>
                  <p className="mt-2 text-sm leading-7 text-light-pt">{brand.publicationTarget}</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal as="aside" className="surface-panel" delay={0.06}>
              <p className="site-eyebrow">Conference Support</p>
              <dl className="mt-5 space-y-5">
                {sponsorsPage.institutionalSupport.map((item) => (
                  <div key={item.title}>
                    <dt className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted">
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-light-pt">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
