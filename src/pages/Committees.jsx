import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

export default function Committees() {
  return (
    <main>
      <Section id="committees" className="!pt-6 md:!pt-8" aria-labelledby="committees-heading" reveal={false}>
        <div className="container">
          <Heading
            id="committees-heading"
            tag="Committees"
            title="Organizing structure for IConSCEPT 2026"
            text="The committee roster for the 2026 edition will be announced on this page. The institutional framework of the conference is summarized below."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <MotionReveal as="article" className="surface-panel">
              <p className="site-eyebrow">Host Institute</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                {siteContent.brand.hostInstitute}, {siteContent.brand.hostCampus}
              </p>
            </MotionReveal>
            <MotionReveal as="article" className="surface-card" delay={0.06}>
              <p className="site-eyebrow">Organizing Departments</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                {siteContent.brand.organizers}
              </p>
            </MotionReveal>
            <MotionReveal as="article" className="surface-panel" delay={0.12}>
              <p className="site-eyebrow">Technical Sponsor</p>
              <p className="mt-5 text-sm leading-7 text-light-st dark:text-dark-st">
                {siteContent.brand.technicalSponsor}
              </p>
            </MotionReveal>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.committeeGroups.map((group, index) => (
              <MotionReveal key={group.title} as="article" className="surface-card" delay={index * 0.05}>
                <h2 className="font-grotesk text-[2rem] leading-none text-light-pt dark:text-dark-pt">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-light-st dark:text-dark-st">
                  {group.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
