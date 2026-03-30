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
    <article className="grid gap-5 rounded-[1.7rem] border border-[#eadfce] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(250,246,239,0.94)_100%)] px-5 py-5 shadow-[0_22px_45px_-38px_rgba(92,74,42,0.38)] md:grid-cols-[10rem_minmax(0,1fr)] md:items-start md:px-6">
      <MemberImage
        member={member}
        className="mx-auto w-40 shrink-0 overflow-hidden rounded-[1.3rem] border border-[#e8dcc9] bg-[#f8f2e8] p-1.5 md:mx-0"
        imgClassName="h-40 w-40 rounded-[0.95rem] object-cover object-top"
        loading="eager"
      />

      <div className="min-w-0">
        <p className="inline-flex rounded-full border border-[#d8c3a2] bg-[#f7efe2] px-3 py-1 text-[0.68rem] font-code uppercase tracking-[0.22em] text-[#94682e]">
          {member.role}
        </p>
        <p className="mt-4 text-[1.08rem] font-semibold leading-tight tracking-[-0.02em] text-[#234f90] md:text-[1.22rem]">
          {member.name}
        </p>
        {hasMeta ? (
          <>
            <div className="mt-4 h-px w-full bg-[#d7c8b2]" />
            {member.designation ? (
              <p className="mt-4 text-[0.92rem] font-medium leading-6 text-[#4c5968]">{member.designation}</p>
            ) : null}
            {affiliationLines.length > 0 ? (
              <div className="mt-1.5 space-y-0.5 text-[0.9rem] leading-7 text-[#243242]">
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
    <article className="flex w-40 flex-col rounded-[1.5rem] border border-[#ece2d3] bg-white/95 p-4 text-center shadow-[0_20px_38px_-34px_rgba(92,74,42,0.42)] md:w-44 md:p-[1.125rem]">
      <MemberImage
        member={member}
        className="mx-auto w-full overflow-hidden rounded-[1.15rem] border border-[#eadfce] bg-[#f8f2e8] p-1.5"
        imgClassName="h-40 w-full rounded-[0.85rem] object-cover object-top md:h-44"
      />

      <div className="mt-4 flex flex-1 flex-col">
        <div className="min-h-[3.9rem]">
          <p className="text-[0.92rem] font-semibold leading-tight text-[#31475f] md:text-[0.98rem]">{member.name}</p>
        </div>
        {hasMeta ? (
          <>
            <div className="mt-1.5 min-h-[2rem]">
              {member.designation ? (
                <p className="text-[0.86rem] font-medium leading-6 text-[#5a6570]">{member.designation}</p>
              ) : null}
            </div>
            <div className="mt-1 min-h-[5rem]">
              {affiliationLines.length > 0 ? (
                <div className="space-y-0.5 text-[0.84rem] leading-6 text-[#4d5b6c]">
                  {affiliationLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </article>
  );
}

function CommitteeGallery({ section, delay }) {
  const members = section.members.length > 0 ? section.members : [createPlaceholderMember(section.title)];

  return (
    <MotionReveal
      as="section"
      delay={delay}
      className="mt-16 overflow-hidden rounded-[2rem] border border-light-divider/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,244,236,0.9)_100%)] px-5 py-10 shadow-[0_26px_60px_-48px_rgba(92,74,42,0.38)] md:px-8 md:py-12 lg:px-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[1.45rem] font-medium italic leading-none text-[#4c5968] md:text-[1.85rem]">
          {section.title}
        </h2>
        <div className="mx-auto mt-5 h-px w-24 bg-[#dbc9af]" />
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-8 px-1 md:gap-x-10 md:gap-y-10 md:px-3">
        {members.map((member, index) => (
          <GalleryMember key={`${section.title}-${member.name}-${index}`} member={member} />
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
    <main>
      <Section
        id="committees"
        className="!pt-6 md:!pt-8"
        customPaddings="pt-6 pb-16 md:pt-8 md:pb-20"
        aria-labelledby="committees-heading"
        reveal={false}
      >
        <div className="container">
          <header className="sr-only">
            <h1 id="committees-heading">{committeePage.intro.title}</h1>
          </header>

          <div className="mt-8 space-y-12">
            <MotionReveal
              as="section"
              className="overflow-hidden rounded-[2rem] border border-light-divider/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(250,246,239,0.92)_100%)] px-4 py-8 shadow-[0_26px_60px_-48px_rgba(92,74,42,0.38)] md:px-6 lg:px-8"
              delay={0.06}
            >
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.68rem] font-code uppercase tracking-[0.24em] text-[#a9793f]">Leadership</p>
                <h2 className="mt-3 text-[1.45rem] font-medium italic leading-none text-[#4c5968] md:text-[1.9rem]">
                  Institutional Leadership
                </h2>
                <div className="mx-auto mt-5 h-px w-24 bg-[#dbc9af]" />
              </div>

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
                  className="overflow-hidden rounded-[2rem] border border-light-divider/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(250,246,239,0.92)_100%)] px-4 py-8 shadow-[0_26px_60px_-48px_rgba(92,74,42,0.38)] md:px-6 lg:px-8"
                  delay={0.12 + index * 0.04}
                >
                  <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-[1.45rem] font-medium italic leading-none text-[#4c5968] md:text-[1.9rem]">
                      {section.title}
                    </h2>
                    <div className="mx-auto mt-5 h-px w-24 bg-[#dbc9af]" />
                  </div>

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
        </div>
      </Section>
    </main>
  );
}
