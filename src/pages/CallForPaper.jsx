import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function CallForPaper() {
  return (
    <main>
      <Section
        id="call-for-papers"
        className="!pt-6 md:!pt-8"
        aria-label="Call for papers"
        reveal={false}
      >
        <div className="container">
          <Heading
            title="Conference Tracks"
            text="IConSCEPT 2026 invites papers across the core technical areas. Authors should align their submissions with one of the tracks below."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {siteContent.tracks.map((track, index) => (
              <MotionReveal
                key={track.title}
                as="article"
                delay={0.04 * index}
                className="rounded-[2rem] border border-light-divider/80 bg-white/85 px-6 py-7 shadow-soft backdrop-blur-sm md:px-7"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-600">
                  Track {index + 1}
                </p>
                <h2 className="mt-4 text-[1.18rem] font-semibold leading-7 tracking-[-0.03em] text-light-pt">
                  {track.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-light-st">
                  {track.description}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
