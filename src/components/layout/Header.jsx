import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { navLinks, siteContent } from "../../content/siteContent";

const desktopNavLink =
  "whitespace-nowrap border-b border-transparent px-1 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors 2xl:text-[0.72rem]";

const mobileNavLink =
  "border-b border-light-divider/70 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-light-pt transition-colors dark:border-dark-divider/70 dark:text-dark-pt";

export default function Header() {
  const { theme, toggleTheme } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-[92rem] rounded-[1.8rem] border border-light-divider/70 bg-light-pb/92 shadow-soft backdrop-blur-md dark:border-dark-divider/70 dark:bg-dark-pb/92">
        <div className="grid items-center gap-4 px-5 py-4 md:px-6 xl:grid-cols-[auto,minmax(0,1fr),auto]">
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-3 xl:max-w-[15rem] 2xl:max-w-[16.5rem]"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src={siteContent.brand.logo}
              alt="NIT Puducherry"
              className="h-10 w-10 shrink-0 rounded-full border border-light-divider/70 bg-white/90 p-1 object-contain dark:border-dark-divider/70 dark:bg-white"
            />
            <div className="min-w-0">
              <p className="truncate font-grotesk text-[1.08rem] leading-none text-light-pt dark:text-dark-pt md:text-[1.2rem] 2xl:text-[1.28rem]">
                {siteContent.brand.shortName}
              </p>
              <p className="mt-1 hidden text-[0.6rem] font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted md:block">
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
                      ? "border-primary-500 text-light-pt dark:border-primary-300 dark:text-dark-pt"
                      : "text-light-muted hover:border-light-pt hover:text-light-pt dark:text-dark-muted dark:hover:border-dark-pt dark:hover:text-dark-pt",
                  ].join(" ")
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center justify-end gap-2 xl:ml-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-light-divider/70 p-2.5 text-light-pt transition-colors hover:border-light-pt dark:border-dark-divider/70 dark:text-dark-pt dark:hover:border-dark-pt"
            >
              {theme === "light" ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="rounded-full border border-light-divider/70 p-2.5 text-light-pt transition-colors hover:border-light-pt dark:border-dark-divider/70 dark:text-dark-pt dark:hover:border-dark-pt xl:hidden"
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
          <div className="overflow-hidden border-t border-light-divider/70 px-5 pb-4 pt-2 dark:border-dark-divider/70">
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
                      isActive
                        ? "text-primary-600 dark:text-primary-300"
                        : "text-light-pt hover:text-primary-600 dark:text-dark-pt dark:hover:text-primary-300",
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
    </motion.header>
  );
}
