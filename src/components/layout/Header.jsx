import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navLinks, siteContent } from "../../content/siteContent";

const desktopNavLink =
  "whitespace-nowrap border-b border-transparent px-1 py-1.5 text-[0.67rem] font-medium uppercase tracking-[0.14em] transition-colors 2xl:text-[0.71rem]";

const mobileNavLink =
  "border-b py-3 text-[0.76rem] font-medium uppercase tracking-[0.18em] transition-colors";

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
            <img
              src={siteContent.brand.logo}
              alt="NIT Puducherry"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <p
                className={[
                  "truncate font-grotesk text-[1.08rem] leading-none md:text-[1.2rem] 2xl:text-[1.28rem]",
                  isHome ? "text-white" : "text-light-pt",
                ].join(" ")}
              >
                {siteContent.brand.shortName}
              </p>
              <p
                className={[
                  "mt-1 hidden text-[0.6rem] font-code uppercase tracking-[0.22em] md:block",
                  isHome ? "text-white/80" : "text-light-muted",
                ].join(" ")}
              >
                NIT Puducherry
              </p>
            </div>
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
                        ? "border-[#9fe3ff] text-[#f4fbff]"
                        : "border-primary-500 text-light-pt"
                      : isHome
                        ? "text-white hover:border-[#9fe3ff]/65 hover:text-[#9fe3ff]"
                        : "text-light-muted hover:border-light-pt hover:text-light-pt",
                  ].join(" ")
                }
              >
                {title}
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
            <nav className="flex flex-col">
              {navLinks.map(({ id, title, url }) => (
                <NavLink
                  key={id}
                  to={url}
                  end
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      mobileNavLink,
                      isHome ? "border-white/10" : "border-light-divider/70",
                      isActive
                        ? isHome
                          ? "text-[#9fe3ff]"
                          : "text-primary-600"
                        : isHome
                          ? "text-white hover:text-[#9fe3ff]"
                          : "text-light-pt hover:text-primary-600",
                    ].join(" ")
                  }
                >
                  {title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
