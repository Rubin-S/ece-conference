import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import iconsceptLogo from "../../assets/logo/IConSECPT.png";
import { navLinks, siteContent } from "../../content/siteContent";

const desktopNavLink =
  "whitespace-nowrap rounded-full border px-3 py-2 text-[0.67rem] font-medium uppercase tracking-[0.14em] transition-all duration-200 ease-smooth 2xl:text-[0.71rem]";

const mobileNavLink =
  "rounded-[1rem] border px-4 py-3 text-[0.76rem] font-medium uppercase tracking-[0.18em] transition-all duration-200 ease-smooth";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        isHome
          ? "border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,10,16,0.96)_0%,rgba(7,10,16,0.78)_60%,rgba(7,10,16,0.16)_100%)] backdrop-blur-sm"
          : "border-b border-light-divider/80 bg-light-pb",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="grid items-center gap-4 px-5 py-3 md:px-6 xl:grid-cols-[auto,minmax(0,1fr),auto]">
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-3 xl:max-w-[15rem] 2xl:max-w-[16.5rem]"
            onClick={() => setMobileOpen(false)}
          >
            <span
              className={[
                "flex shrink-0 items-center justify-center rounded-full border px-3 py-2 transition-all duration-200 ease-smooth",
                isHome
                  ? "border-[#9fe3ff]/45 bg-[linear-gradient(180deg,rgba(248,252,255,0.96)_0%,rgba(232,242,248,0.9)_100%)] shadow-[0_12px_30px_rgba(6,18,28,0.24)]"
                  : "border-primary-400/60 bg-[linear-gradient(180deg,#fbfdff_0%,#eef6fb_100%)] shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
              ].join(" ")}
            >
              <img
                src={iconsceptLogo}
                alt="IConSCEPT 2026 logo"
                className="h-12 w-auto object-contain md:h-[3.15rem]"
              />
            </span>
          </NavLink>

          <nav className="hidden min-w-0 items-center justify-center gap-3 xl:flex 2xl:gap-5">
            {navLinks.map(({ id, title, url }) => (
              <NavLink
                key={id}
                to={url}
                end
                className={({ isActive }) =>
                  [
                    desktopNavLink,
                    isActive
                      ? isHome
                        ? "border-[#9fe3ff]/45 bg-[rgba(159,227,255,0.14)] text-[#f4fbff] shadow-[0_12px_30px_rgba(6,18,28,0.18)]"
                        : "border-primary-400/60 bg-light-altBg text-primary-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                      : isHome
                        ? "border-transparent text-white hover:border-white/12 hover:bg-white/8 hover:text-[#9fe3ff]"
                        : "border-transparent text-light-muted hover:border-light-divider/80 hover:bg-light-sb hover:text-light-pt",
                  ].join(" ")
                }
              >
                {id === "contact" ? "CONTACT US" : title}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center justify-end gap-2 xl:ml-0">
            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className={[
                "p-2.5 transition-colors xl:hidden",
                isHome ? "text-white hover:text-[#9fe3ff]" : "text-light-pt hover:text-primary-600",
              ].join(" ")}
            >
              {mobileOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div
          className={[
            "grid overflow-hidden transition-all duration-200 ease-smooth xl:hidden",
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          ].join(" ")}
        >
          <div
            className={[
              "overflow-hidden px-5 pb-4 pt-2",
              isHome ? "border-t border-white/10 bg-[rgba(8,12,18,0.96)] backdrop-blur-sm" : "bg-light-pb",
            ].join(" ")}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ id, title, url }) => (
                <NavLink
                  key={id}
                  to={url}
                  end
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      mobileNavLink,
                      isActive
                        ? isHome
                          ? "border-[#9fe3ff]/35 bg-[rgba(159,227,255,0.12)] text-[#9fe3ff]"
                          : "border-primary-400/45 bg-light-altBg text-primary-700"
                        : isHome
                          ? "border-white/10 text-white hover:border-white/16 hover:bg-white/6 hover:text-[#9fe3ff]"
                          : "border-light-divider/70 text-light-pt hover:border-primary-300/50 hover:bg-light-sb hover:text-primary-600",
                    ].join(" ")
                  }
                >
                  {id === "contact" ? "CONTACT US" : title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
