import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAppContext } from "../../context/AppContext";

const NAV_ITEMS = [
  { id: "0", title: "Call for Papers", url: "/call-for-papers" },
  { id: "1", title: "Registration", url: "/registration" },
  { id: "2", title: "Committees", url: "/committees" },
  { id: "3", title: "About Us", url: "/about-us" },
  { id: "4", title: "Publications", url: "/publications" },
  { id: "5", title: "Sponsors", url: "/sponsors" },
  { id: "6", title: "Contact Us", url: "/contact-us" },
];

export default function Header() {
  const { theme, toggleTheme } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstLinkRef = useRef(null);

  // Lock scroll when menu open
  useEffect(() => {
    mobileOpen ? disablePageScroll() : enablePageScroll();
    return () => enablePageScroll();
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Focus first link when mobile menu opens
  useEffect(() => {
    if (mobileOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [mobileOpen]);

  const renderNavLinks = ({ isMobile = false }) =>
    NAV_ITEMS.map(({ id, title, url }, idx) => {
      const sizeClasses = isMobile
        ? "text-[10px] sm:text-xs whitespace-nowrap w-full py-1.5"
        : "text-[8px] md:text-[10px] lg:text-xs xl:text-sm whitespace-nowrap px-1 md:px-2 py-1";

      return (
        <NavLink
          key={id}
          to={url}
          end
          className={({ isActive }) =>
            [
              "rounded-md transition-all duration-200 font-code uppercase tracking-wide",
              sizeClasses,
              isActive
                ? "text-light-pt dark:text-dark-pt bg-light-pa/50 dark:bg-dark-pa dark:bg-opacity-20"
                : "text-light-pt/60 dark:text-dark-pt/60 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20",
            ].join(" ")
          }
          onClick={() => isMobile && setMobileOpen(false)}
          ref={idx === 0 && isMobile ? firstLinkRef : undefined}
        >
          {title}
        </NavLink>
      );
    });

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50 overflow-hidden
        bg-light-sb/70 dark:bg-dark-sb/70 backdrop-blur-sm
        border-b border-light-divider/50 dark:border-dark-divider/50
        max-w-full
      "
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-grotesk font-bold text-sm sm:text-base text-light-pt dark:text-dark-pt whitespace-nowrap"
        >
          International Conference
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-2 overflow-x-auto">
            {renderNavLinks({ isMobile: false })}
          </div>
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="
              p-1 rounded-full
              bg-light-altBg/50 dark:bg-dark-altBg/50
              backdrop-blur-sm
              border border-light-divider/40 dark:border-dark-divider/40
              transition-transform hover:scale-105
            "
          >
            {theme === "light" ? (
              <MoonIcon className="h-3 w-3 text-neon-blue" />
            ) : (
              <SunIcon className="h-3 w-3 text-neon-blue" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="
              lg:hidden p-1 rounded-md
              bg-light-altBg/50 dark:bg-dark-altBg/50
              backdrop-blur-sm
              border border-light-divider/40 dark:border-dark-divider/40
              transition-transform hover:scale-105
            "
          >
            {mobileOpen ? (
              <XIcon className="h-4 w-4 text-light-pt dark:text-dark-pt" />
            ) : (
              <MenuIcon className="h-4 w-4 text-light-pt dark:text-dark-pt" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <nav
        id="mobile-menu"
        className={`
          lg:hidden fixed inset-0 z-40
          bg-light-sb/80 dark:bg-dark-sb/80 backdrop-blur-sm
          transform transition-transform duration-300
          ${mobileOpen ? "translate-y-0" : "-translate-y-full invisible"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-2">
          {renderNavLinks({ isMobile: true })}
        </div>
      </nav>
    </header>
  );
}
