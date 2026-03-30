import { useState } from "react";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";
import { siteContent } from "../content/siteContent";

function getAffiliationLines(affiliation) {
  if (Array.isArray(affiliation)) {
    return affiliation;
  }

  return String(affiliation)
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function createPlaceholderMember(role, affiliation = "IConSCEPT 2026") {
  return {
    role,
    name: "TBD",
    designation: "Committee member to be announced",
    affiliation,
    image: siteContent.committeePage.placeholderImage,
    alt: `${role} placeholder portrait`,
    isPlaceholder: true,
  };
}

function MemberImage({ member, className, imgClassName, loading = "lazy" }) {
  const fallbackImage = siteContent.committeePage.placeholderImage;
  const [imageSrc, setImageSrc] = useState(member.image || fallbackImage);

  return (
    <div className={className}>
      <img
        src={imageSrc}
        alt={member.alt || `${member.name} portrait`}
        loading={loading}
        className={imgClassName}
        onError={() => {
          setImageSrc((currentImage) => (currentImage === fallbackImage ? currentImage : fallbackImage));
        }}
      />
    </div>
  );
}

function SpotlightMember({ member }) {
  const affiliationLines = getAffiliationLines(member.affiliation);
  const hasMeta = Boolean(member.designation) || affiliationLines.length > 0;

  return (
    <article className="grid gap-5 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start">
      <MemberImage
        member={member}
        className="mx-auto w-40 shrink-0 overflow-hidden md:mx-0"
        imgClassName="h-40 w-40 object-cover"
        loading="eager"
      />

      <div className="min-w-0">
        <h2 className="text-[1.45rem] font-medium leading-none text-[#4c5968] md:text-[1.75rem]">{member.role}</h2>
        <p className="mt-3 text-[1rem] font-medium leading-tight text-[#234f90] md:text-[1.1rem]">
          {member.name}
        </p>
        {hasMeta ? (
          <>
            <div className="mt-3 h-px w-full bg-[#234f90]/55" />
            {member.designation ? (
              <p className="mt-4 text-[0.9rem] font-medium leading-6 text-[#4c5968]">{member.designation}</p>
            ) : null}
            {affiliationLines.length > 0 ? (
              <div className="mt-1 space-y-0.5 text-[0.9rem] leading-7 text-[#243242]">
                {affiliationLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </article>
  );
}

function GalleryMember({ member }) {
  const affiliationLines = getAffiliationLines(member.affiliation);
  const hasMeta = Boolean(member.designation) || affiliationLines.length > 0;

  return (
    <article className="w-40 text-center md:w-44">
      <MemberImage
        member={member}
        className="mx-auto w-40 overflow-hidden md:w-44"
        imgClassName="h-40 w-40 object-cover md:h-44 md:w-44"
      />

      <div className="mt-4">
        <p className="text-[0.9rem] font-medium leading-tight text-[#4c5968] md:text-[0.98rem]">{member.name}</p>
        {hasMeta ? (
          <>
            {member.designation ? (
              <p className="mt-1 text-[0.88rem] font-normal leading-6 text-[#4c5968]">{member.designation}</p>
            ) : null}
            {affiliationLines.length > 0 ? (
              <div className="mt-0.5 space-y-0.5 text-[0.86rem] leading-6 text-[#4d5b6c]">
                {affiliationLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </article>
  );
}

function TrackChair({ member }) {
  const affiliationLines = getAffiliationLines(member.affiliation);
  const hasMeta = Boolean(member.designation) || affiliationLines.length > 0;

  return (
    <div className="flex items-center gap-4">
      <MemberImage
        member={member}
        className="h-20 w-20 shrink-0 overflow-hidden rounded-full"
        imgClassName="h-20 w-20 object-cover"
      />

      <div className="min-w-0">
        <p className="text-[0.95rem] font-medium italic leading-tight text-[#3f4d5e]">{member.name}</p>
        {hasMeta ? (
          <>
            {member.designation ? (
              <p className="mt-1.5 text-[0.86rem] leading-6 text-[#3f4d5e]">{member.designation}</p>
            ) : null}
            {affiliationLines.length > 0 ? (
              <div className="mt-0.5 space-y-0.5 text-[0.84rem] leading-6 text-[#4d5b6c]">
                {affiliationLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

function CommitteeGallery({ section, delay }) {
  const members = section.members.length > 0 ? section.members : [createPlaceholderMember(section.title)];

  return (
    <MotionReveal as="section" delay={delay} className="mt-16">
      <h2 className="text-center text-[1.5rem] font-medium italic leading-none text-[#4c5968] md:text-[1.9rem]">
        {section.title}
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-10">
        {members.map((member, index) => (
          <GalleryMember key={`${section.title}-${member.name}-${index}`} member={member} />
        ))}
      </div>
    </MotionReveal>
  );
}

function TechnicalProgramCommittee({ committee, delay }) {
  return (
    <MotionReveal as="section" delay={delay} className="mt-16 bg-[#fff1e2] px-4 py-8 md:px-6 lg:px-8">
      <h2 className="text-center text-[1.5rem] font-medium italic leading-none text-[#4c5968] md:text-[1.9rem]">
        {committee.title}
      </h2>

      <div className="mt-8 hidden lg:grid lg:grid-cols-[1.05fr_2.1fr_1.05fr]">
        <div className="bg-[#35a8d4] px-6 py-6 text-center text-[0.9rem] font-normal text-black">
          {committee.headers.track}
        </div>
        <div className="border-l border-white bg-[#8ec9e4] px-6 py-6 text-center text-[0.9rem] font-normal text-black">
          {committee.headers.chairs}
        </div>
        <div className="border-l border-white bg-[#a9d3e6] px-6 py-6 text-center text-[0.9rem] font-normal text-black">
          {committee.headers.members}
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {committee.tracks.map((track, index) => (
          <article
            key={`${track.title}-${index}`}
            className="rounded-[1.8rem] border border-[#f1e5d6] bg-white px-5 py-6 md:px-6 lg:px-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_2.1fr_1.05fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted lg:hidden">
                  {committee.headers.track}
                </p>
                <p className="mt-2 text-[1rem] italic leading-8 text-black md:text-[1.1rem]">{track.title}</p>
              </div>

              <div>
                <p className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted lg:hidden">
                  {committee.headers.chairs}
                </p>
                <div className="mt-2 grid gap-6 md:grid-cols-2">
                  {track.chairs.map((chair, chairIndex) => (
                    <TrackChair key={`${track.title}-${chair.name}-${chairIndex}`} member={chair} />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted lg:hidden">
                  {committee.headers.members}
                </p>
                <ol className="mt-2 list-decimal space-y-1.5 pl-6 text-[0.86rem] italic leading-7 text-[#243242]">
                  {track.members.map((committeeMember) => (
                    <li key={committeeMember}>{committeeMember}</li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </div>
    </MotionReveal>
  );
}

export default function Committees() {
  const { committeePage } = siteContent;
  const spotlightSections = committeePage.sections.filter((section) => section.layout === "spotlight");
  const gallerySections = committeePage.sections.filter((section) => section.layout === "gallery");

  return (
    <main className="bg-white">
      <Section
        id="committees"
        className="!pt-6 md:!pt-8"
        customPaddings="pt-6 pb-16 md:pt-8 md:pb-20"
        aria-labelledby="committees-heading"
        reveal={false}
      >
        <div className="container">
          <header className="sr-only">
            <h1 id="committees-heading">Committees</h1>
          </header>

          <div className="mt-8 space-y-12">
            <MotionReveal as="section" className="border-t border-light-divider/80 pt-6 md:pt-8" delay={0.02}>
              <div className="grid gap-x-8 gap-y-12 xl:grid-cols-2">
                {committeePage.featuredMembers.map((member) => (
                  <SpotlightMember key={member.role} member={member} />
                ))}
              </div>
            </MotionReveal>

            {spotlightSections.map((section, index) => {
              const members = section.members.length > 0 ? section.members : [createPlaceholderMember(section.title)];

              return (
                <MotionReveal
                  key={section.title}
                  as="section"
                  className="border-t border-light-divider/80 pt-8"
                  delay={0.08 + index * 0.04}
                >
                  <div className="grid gap-x-8 gap-y-12 xl:grid-cols-2">
                    {members.map((member, memberIndex) => (
                      <SpotlightMember key={`${section.title}-${member.name}-${memberIndex}`} member={member} />
                    ))}
                  </div>
                </MotionReveal>
              );
            })}
          </div>

          {gallerySections.map((section, index) => (
            <CommitteeGallery key={section.title} section={section} delay={0.28 + index * 0.05} />
          ))}

          <TechnicalProgramCommittee committee={committeePage.technicalProgramCommittee} delay={0.46} />
        </div>
      </Section>
    </main>
  );
}
