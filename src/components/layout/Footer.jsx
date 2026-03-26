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
      className="border-t border-light-divider/80 !py-14 md:!py-16"
      role="contentinfo"
      aria-labelledby="footer-heading"
      reveal={false}
    >
      <div className="container">
        <MotionReveal className="py-2">
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr,0.9fr]">
            <div>
              <p className="site-eyebrow">IConSCEPT 2026</p>
              <h2 id="footer-heading" className="mt-4 font-grotesk text-[2.35rem] leading-none text-light-pt">
                {siteContent.brand.fullName}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-light-st">
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
                      isActive ? "text-primary-600" : "text-light-st hover:text-light-pt",
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
                  className="text-sm text-light-st transition-colors hover:text-light-pt"
                >
                  {contact.value}
                </a>
              ))}
              <p className="pt-3 text-xs font-code uppercase tracking-[0.22em] text-light-muted">
                2026 brochure will be published on this website.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-light-divider/80 pt-5 text-sm text-light-st">
            Copyright {new Date().getFullYear()} {siteContent.brand.shortName}. All rights reserved.
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
};

export default Footer;
