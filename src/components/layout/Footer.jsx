import { NavLink } from "react-router-dom";
import Section from "../common/Section";
import MotionReveal from "../common/MotionReveal";
import { navLinks, siteContent } from "../../content/siteContent";

const quickLinks = [
  { id: "home", label: "Home", to: "/" },
  ...navLinks.filter((link) =>
    ["/about-us", "/call-for-papers", "/important-dates", "/registration", "/contact-us"].includes(link.url)
  ),
];

const Footer = () => {
  return (
    <Section
      className="border-t border-light-divider/60 !py-16 dark:border-dark-divider/60"
      role="contentinfo"
      aria-labelledby="footer-heading"
      reveal={false}
    >
      <div className="container">
        <MotionReveal
          className="rounded-[2.2rem] border border-light-divider/70 bg-white/80 px-6 py-8 shadow-soft backdrop-blur-sm dark:border-dark-divider/70 dark:bg-dark-sb/80 md:px-8 md:py-10"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr,0.9fr]">
            <div>
              <p className="site-eyebrow">IConSCEPT 2026</p>
              <h2 id="footer-heading" className="mt-4 font-grotesk text-[2.35rem] leading-none text-light-pt dark:text-dark-pt">
                {siteContent.brand.fullName}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-light-st dark:text-dark-st">
                Hosted by {siteContent.brand.hostInstitute}, {siteContent.brand.hostCampus}. Organized by the{" "}
                {siteContent.brand.organizers} with {siteContent.brand.technicalSponsor} as technical sponsor.
              </p>
            </div>

            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <p className="site-eyebrow">Navigation</p>
              {quickLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "text-sm transition-colors",
                      isActive
                        ? "text-primary-600 dark:text-primary-300"
                        : "text-light-st hover:text-light-pt dark:text-dark-st dark:hover:text-dark-pt",
                    ].join(" ")
                  }
                >
                  {link.label || link.title}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <p className="site-eyebrow">Contact</p>
              {siteContent.contacts.slice(0, 3).map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="text-sm text-light-st transition-colors hover:text-light-pt dark:text-dark-st dark:hover:text-dark-pt"
                >
                  {contact.value}
                </a>
              ))}
              <p className="pt-3 text-xs font-code uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
                2026 brochure will be published on this website.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-light-divider/70 pt-5 text-sm text-light-st dark:border-dark-divider/70 dark:text-dark-st">
            Copyright {new Date().getFullYear()} {siteContent.brand.shortName}. All rights reserved.
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
};

export default Footer;
