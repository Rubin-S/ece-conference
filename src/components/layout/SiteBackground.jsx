import { memo } from "react";

const SiteBackground = memo(function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,215,189,0.62),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(245,236,224,0.82),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,244,238,0.72))]" />
    </div>
  );
});

export default SiteBackground;
