import MotionReveal from "./MotionReveal";
import { siteContent } from "../../content/siteContent";

export default function ReviewStatusNoticeCard({ className = "", delay = 0 }) {
  const { reviewStatusNotice } = siteContent;

  if (!reviewStatusNotice) {
    return null;
  }

  return (
    <MotionReveal
      as="article"
      id="review-update"
      className={`rounded-[2rem] border border-primary-500/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(246,251,253,0.95)_100%)] p-6 shadow-soft md:p-8 ${className}`}
      delay={delay}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-light-divider/70 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(40,184,226,0.8)]" />
          <span className="inline-flex items-center rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-0.5 text-[0.72rem] font-semibold uppercase tracking-wider text-primary-700">
            Official Announcement
          </span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary-700/80">
          Paper Review Update
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-[1.18rem] font-semibold tracking-[-0.02em] text-light-pt md:text-[1.35rem]">
          {reviewStatusNotice.title}
        </h2>

        <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-light-st">
          <p className="font-semibold text-light-pt">{reviewStatusNotice.salutation}</p>
          <p>{reviewStatusNotice.paragraphs[0]}</p>
          <p>{reviewStatusNotice.paragraphs[1]}</p>
          <div className="rounded-[1.2rem] border border-primary-200 bg-primary-50/70 p-4 sm:p-5">
            <p className="font-medium text-primary-950">
              We would like to inform you that the review decisions (acceptance or rejection) will be communicated, as and when it is completed for your paper, on or before{" "}
              <strong className="font-bold text-primary-700 underline underline-offset-4">
                November 2, 2026
              </strong>
              . Details regarding the registration process will be provided alongside the acceptance notification.
            </p>
          </div>
          <p>{reviewStatusNotice.paragraphs[3]}</p>
        </div>

        <div className="mt-6 border-t border-light-divider/70 pt-5 text-sm text-light-st">
          <p className="font-medium text-light-pt">{reviewStatusNotice.signoff}</p>
          <p className="mt-1 font-semibold text-primary-900">{reviewStatusNotice.committee}</p>
          <p className="text-xs font-code uppercase tracking-wider text-primary-700">
            {reviewStatusNotice.conference}
          </p>
        </div>
      </div>
    </MotionReveal>
  );
}
