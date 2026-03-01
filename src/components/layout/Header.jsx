import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { SunIcon, MoonIcon, MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useAppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

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

function AnnouncementBar() {
  const announcements = [
    "📅 Abstract Submission Deadline: March 15, 2026",
    "📝 Notification of Acceptance: March 30, 2026",
    "📄 Full Paper Submission: March 20, 2026",
  ];

  return (
    <div className="relative overflow-hidden bg-yellow-50 dark:bg-yellow-900 border-b border-yellow-400 dark:border-yellow-600 backdrop-blur-sm z-30">
      <div className="flex max-w-[100vw]">
        <motion.div
          className="flex gap-16 py-1 whitespace-nowrap pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...announcements, ...announcements].map((item, index) => (
            <span
              key={index}
              className="text-sm font-semibold tracking-wide text-yellow-800 dark:text-yellow-100 flex items-center gap-2"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400 ml-16" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

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
            : "text-light-pt/60 dark:text-dark-pt/60 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20"
        ].join(" ")}
      >
        Templates
        <ChevronDownIcon className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-light-sb/95 dark:bg-dark-sb/95 backdrop-blur-md shadow-elevated border border-light-divider/50 dark:border-dark-divider/50 focus:outline-none z-50 overflow-hidden">
          <div className="py-1">
            <a
              href="/assets/LaTeX_Template.zip"
              download="LaTeX_Template.zip"
              className="block px-4 py-2 text-sm text-light-st dark:text-dark-st hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20 hover:text-light-pt dark:hover:text-dark-pt transition-colors font-sans"
            >
              LaTeX Template
            </a>
            <a
              href="/assets/Microsoft_Word_Proceedings_Templates.zip"
              download="Microsoft_Word_Proceedings_Templates.zip"
              className="block px-4 py-2 text-sm text-light-st dark:text-dark-st hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20 hover:text-light-pt dark:hover:text-dark-pt transition-colors font-sans"
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
    <div className="flex flex-col items-center w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={[
          "rounded-md transition-all duration-200 font-code uppercase tracking-wide",
          "text-sm sm:text-base w-full py-2",
          "text-light-pt/60 dark:text-dark-pt/60 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20 flex items-center justify-center gap-2",
        ].join(" ")}
      >
        Templates
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="flex flex-col w-full bg-light-altBg/30 dark:bg-dark-altBg/30 rounded-md mt-1 mb-2 py-1">
          <a
            href="/assets/LaTeX_Template.zip"
            download="LaTeX_Template.zip"
            className="text-sm text-center py-2 text-light-st dark:text-dark-st hover:text-light-pt dark:hover:text-dark-pt transition-colors font-sans"
          >
            LaTeX Template
          </a>
          <a
            href="/assets/Microsoft_Word_Proceedings_Templates.zip"
            download="Microsoft_Word_Proceedings_Templates.zip"
            className="text-sm text-center py-2 text-light-st dark:text-dark-st hover:text-light-pt dark:hover:text-dark-pt transition-colors font-sans"
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
      <header className="fixed inset-x-0 top-0 z-50 bg-light-sb/70 dark:bg-dark-sb/70 backdrop-blur-sm border-b border-light-divider/50 dark:border-dark-divider/50 w-full">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
          <NavLink
            to="/"
            className="font-grotesk font-bold text-[10px] sm:text-sm md:text-base text-light-pt dark:text-dark-pt whitespace-nowrap"
          >
            IC3DCM
          </NavLink>

          <nav className="hidden lg:flex flex-1 justify-center overflow-x-auto no-scrollbar">
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
              className="p-1.5 rounded-full bg-light-altBg/50 dark:bg-dark-altBg/50 backdrop-blur-sm border border-light-divider/40 dark:border-dark-divider/40 transition hover:scale-105"
            >
              {theme === "light" ? (
                <MoonIcon className="h-3 w-3 text-neon-blue" />
              ) : (
                <SunIcon className="h-3 w-3 text-neon-blue" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="lg:hidden p-1.5 rounded-md bg-light-altBg/50 dark:bg-dark-altBg/50 backdrop-blur-sm border border-light-divider/40 dark:border-dark-divider/40 transition hover:scale-105"
            >
              {mobileOpen ? (
                <XIcon className="h-4 w-4 text-light-pt dark:text-dark-pt" />
              ) : (
                <MenuIcon className="h-4 w-4 text-light-pt dark:text-dark-pt" />
              )}
            </button>
          </div>
        </div>
        <AnnouncementBar />
      </header>


      <nav
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 bg-light-sb/90 dark:bg-dark-sb/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${mobileOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-3 px-4">
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
