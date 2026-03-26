import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import MotionReveal from "../components/common/MotionReveal";
import Section from "../components/common/Section";

export default function CallForPaper() {
  const guidelineItems = [
    "Submission Guidelines",
    "Copyright Transfer",
    "Oral Presentation Guidelines",
    "Poster Presentation Guidelines",
  ];

  const submissionGuidelineDetails = [
    "Full-length research papers should be 4 to 6 pages.",
    "Manuscripts must follow the IEEE double-column format.",
    "All papers must be written in English.",
    "Submit the final manuscript as a PDF through Microsoft CMT.",
  ];

  const templateItems = [
    { label: "Call For Paper", href: "/YusufResumeNITPY.pdf", showDownload: false },
    { label: "Paper Template (MS Word)", href: "/EDTM-2026_Final_conference-template-A4.docx" },
    { label: "Paper Template (LaTeX)", href: "/IEEE-LaTex-EDTM-2026.zip" },
    {
      label: "Submission Portal",
      href: "https://cmt3.research.microsoft.com/IConSCEPT2023/Submission/Index",
      showDownload: false,
    },
  ];

  return (
    <main>
      <Section
        id="call-for-papers"
        className="!pt-6 md:!pt-8"
        aria-labelledby="call-for-papers-heading"
        reveal={false}
      >
        <div className="container">
          <Heading
            id="call-for-papers-heading"
            tag="Call for Papers"
          />

          <MotionReveal className="-mt-4 mb-8 grid gap-4 lg:grid-cols-2" delay={0.08}>
            <div className="flex justify-center">
              <a
                href="/YusufResumeNITPY.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-primary min-w-[15rem]"
              >
                Call for paper
              </a>
            </div>
            <div className="flex justify-center">
              <Link to="/submission" className="button-secondary min-w-[18rem]">
                submit your manuscript
              </Link>
            </div>
          </MotionReveal>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <MotionReveal
              as="article"
              className="rounded-[2rem] border border-light-divider/80 bg-white/80 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8"
            >
              <p className="text-[1.85rem] font-semibold tracking-[-0.03em] text-light-pt">
                Guidelines
              </p>
              <ul className="mt-8 space-y-7 text-[1.02rem] leading-8 text-light-st md:text-[1.1rem]">
                {guidelineItems.map((item, index) => (
                  <li
                    key={item}
                    className={[index === 0 ? "group cursor-default" : ""].filter(Boolean).join(" ")}
                  >
                    <div className="flex gap-3">
                      <span className="font-semibold text-light-pt">{index + 1}.</span>
                      <span
                        className={
                          index === 0
                            ? "transition-colors duration-200 group-hover:text-light-pt group-hover:underline group-hover:underline-offset-4"
                            : ""
                        }
                      >
                        {item}
                      </span>
                    </div>
                    {index === 0 ? (
                      <div className="ml-10 mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:max-h-64 group-hover:opacity-100">
                        <ul className="w-[min(30rem,calc(100vw-5rem))] list-disc space-y-2 rounded-[1.4rem] border border-light-divider/80 bg-light-sb/95 px-6 py-4 text-[0.92rem] leading-6 text-light-st shadow-soft">
                          {submissionGuidelineDetails.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </MotionReveal>

            <MotionReveal
              as="article"
              className="rounded-[2rem] border border-light-divider/80 bg-white/80 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8"
              delay={0.06}
            >
              <p className="text-[1.85rem] font-semibold tracking-[-0.03em] text-light-pt">
                Templates &amp; Downloads
              </p>
              <ul className="mt-8 space-y-7 text-[1.02rem] leading-8 text-light-st md:text-[1.1rem]">
                {templateItems.map((item, index) => (
                  <li key={item.label} className="flex items-start justify-between gap-4">
                    <div className="flex gap-3">
                      <span className="font-semibold text-light-pt">{index + 1}.</span>
                      <span>{item.label}</span>
                    </div>
                    {item.showDownload !== false ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="shrink-0 font-semibold text-light-pt underline underline-offset-4 transition-colors duration-200 hover:text-primary-600"
                      >
                        Download
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
