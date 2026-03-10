import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useAppContext } from "../../context/AppContext";

const NAV_ITEMS = [
  { id: "0", title: "About Us", url: "/about-us" },
  { id: "1", title: "Call for Papers", url: "/call-for-papers" },
  { id: "2", title: "Publications", url: "/publications" },
  { id: "3", title: "Registration", url: "/registration" },
  { id: "4", title: "Submission", url: "/submission" },
  { id: "5", title: "Committees", url: "/committees" },
  { id: "6", title: "Important Dates", url: "/important-dates" },
  { id: "7", title: "Sponsors", url: "/sponsors" },
  { id: "8", title: "Contact Us", url: "/contact-us" },
];

function TemplatesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={[
          "flex items-center gap-1 rounded-md border-x-0.5 shadow-sm shadow-gray transition-all duration-200 font-code uppercase tracking-wider",
          "text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm px-2 py-1 whitespace-nowrap",
          isOpen
            ? "text-light-pt dark:text-dark-pt bg-light-pa/50 dark:bg-dark-pa dark:bg-opacity-20"
            : "text-light-pt/60 dark:text-dark-pt/60 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20",
        ].join(" ")}
      >
        Templates
        <ChevronDownIcon
          className={`h-3 w-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-md border border-light-divider/50 bg-light-sb/95 shadow-elevated backdrop-blur-md focus:outline-none dark:border-dark-divider/50 dark:bg-dark-sb/95 z-50">
          <div className="py-1">
            <a
              href="/assets/LaTeX_Template.zip"
              download="LaTeX_Template.zip"
              className="block px-4 py-2 text-sm text-light-st transition-colors font-sans hover:bg-neon-blue/10 hover:text-light-pt dark:text-dark-st dark:hover:bg-neon-blue/20 dark:hover:text-dark-pt"
            >
              LaTeX Template
            </a>
            <a
              href="/assets/Microsoft_Word_Proceedings_Templates.zip"
              download="Microsoft_Word_Proceedings_Templates.zip"
              className="block px-4 py-2 text-sm text-light-st transition-colors font-sans hover:bg-neon-blue/10 hover:text-light-pt dark:text-dark-st dark:hover:bg-neon-blue/20 dark:hover:text-dark-pt"
            >
              MS Word Template
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileTemplates() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={[
          "rounded-md transition-all duration-200 font-code uppercase tracking-wide",
          "text-sm sm:text-base w-full py-2",
          "flex items-center justify-center gap-2 text-light-pt/60 hover:bg-neon-blue/10 dark:text-dark-pt/60 dark:hover:bg-neon-blue/20",
        ].join(" ")}
      >
        Templates
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-1 mb-2 flex w-full flex-col rounded-md bg-light-altBg/30 py-1 dark:bg-dark-altBg/30">
          <a
            href="/assets/LaTeX_Template.zip"
            download="LaTeX_Template.zip"
            className="py-2 text-center text-sm text-light-st transition-colors font-sans hover:text-light-pt dark:text-dark-st dark:hover:text-dark-pt"
          >
            LaTeX Template
          </a>
          <a
            href="/assets/Microsoft_Word_Proceedings_Templates.zip"
            download="Microsoft_Word_Proceedings_Templates.zip"
            className="py-2 text-center text-sm text-light-st transition-colors font-sans hover:text-light-pt dark:text-dark-st dark:hover:text-dark-pt"
          >
            MS Word Template
          </a>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { theme, toggleTheme } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (mobileOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    return () => enablePageScroll();
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-light-divider/50 bg-light-sb/70 backdrop-blur-sm dark:border-dark-divider/50 dark:bg-dark-sb/70">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="font-grotesk text-[10px] font-bold whitespace-nowrap text-light-pt dark:text-dark-pt sm:text-sm md:text-base"
          >
            IC3DCM
          </NavLink>

          <nav className="hidden flex-1 justify-center overflow-x-auto no-scrollbar lg:flex">
            <div className="flex space-x-1 sm:space-x-2">
              {NAV_ITEMS.map(({ id, title, url }) => (
                <NavLink
                  key={id}
                  to={url}
                  end
                  className={({ isActive }) =>
                    [
                      "rounded-md border-x-0.5 shadow-sm shadow-gray transition-all duration-200 font-code uppercase tracking-wider",
                      "text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm px-2 py-1 whitespace-nowrap",
                      isActive
                        ? "text-light-pt dark:text-dark-pt bg-light-pa/50 dark:bg-dark-pa dark:bg-opacity-20"
                        : "text-light-pt/60 dark:text-dark-pt/60 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20",
                    ].join(" ")
                  }
                >
                  {title}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="hidden lg:block">
              <TemplatesDropdown />
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="rounded-full border border-light-divider/40 bg-light-altBg/50 p-1.5 transition backdrop-blur-sm hover:scale-105 dark:border-dark-divider/40 dark:bg-dark-altBg/50"
            >
              {theme === "light" ? (
                <MoonIcon className="h-3 w-3 text-neon-blue" />
              ) : (
                <SunIcon className="h-3 w-3 text-neon-blue" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="rounded-md border border-light-divider/40 bg-light-altBg/50 p-1.5 transition backdrop-blur-sm hover:scale-105 dark:border-dark-divider/40 dark:bg-dark-altBg/50 lg:hidden"
            >
              {mobileOpen ? (
                <XIcon className="h-4 w-4 text-light-pt dark:text-dark-pt" />
              ) : (
                <MenuIcon className="h-4 w-4 text-light-pt dark:text-dark-pt" />
              )}
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-light-sb/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out dark:bg-dark-sb/90 lg:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-3 px-4">
          {NAV_ITEMS.map(({ id, title, url }, idx) => (
            <NavLink
              key={id}
              to={url}
              end
              className={({ isActive }) =>
                [
                  "rounded-md transition-all duration-200 font-code uppercase tracking-wide",
                  "text-sm sm:text-base w-full text-center py-2",
                  isActive
                    ? "text-light-pt dark:text-dark-pt bg-light-pa/50 dark:bg-dark-pa dark:bg-opacity-20"
                    : "text-light-pt/60 dark:text-dark-pt/60 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20",
                ].join(" ")
              }
              onClick={() => setMobileOpen(false)}
              ref={idx === 0 ? firstLinkRef : undefined}
            >
              {title}
            </NavLink>
          ))}
          <MobileTemplates />
        </div>
      </nav>
    </>
  );
}
