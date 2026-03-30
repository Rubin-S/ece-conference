import { NavLink } from "react-router-dom";
import Section from "../common/Section";
import MotionReveal from "../common/MotionReveal";
import { navLinks, siteContent } from "../../content/siteContent";

const quickLinks = [
  { id: "home", label: "Home", to: "/" },
  ...navLinks
    .filter((link) =>
      ["/about-us", "/call-for-papers", "/important-dates", "/registration", "/contact-us"].includes(link.url)
    )
    .map((link) => ({
      id: link.id,
      label: link.title,
      to: link.url,
    })),
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
          <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.9fr)] lg:gap-12">
            <div className="max-w-lg">
              <h2 id="footer-heading" className="sr-only">Footer</h2>
              <p className="site-eyebrow">IConSCEPT 2026</p>
              <div className="mt-5 space-y-2.5 text-sm leading-7 text-light-st">
                <p>
                  Hosted by {siteContent.brand.hostInstitute}, {siteContent.brand.hostCampus}.
                </p>
                <p>
                  Organized by the {siteContent.brand.organizers}.
                </p>
                <p>
                  Technical sponsor: {siteContent.brand.technicalSponsor}.
                </p>
              </div>
            </div>

            <nav className="flex flex-col gap-3 self-start" aria-label="Footer navigation">
              <p className="site-eyebrow">Navigation</p>
              {quickLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    [
                      "text-sm transition-colors",
                      isActive ? "text-primary-600" : "text-light-st hover:text-light-pt",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex max-w-sm flex-col gap-3 self-start">
              <p className="site-eyebrow">Contact</p>
              {siteContent.contacts.slice(0, 1).map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="text-sm text-light-st transition-colors hover:text-light-pt"
                >
                  {contact.value}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-light-divider/80 pt-5 text-sm text-light-st">
            Copyright &copy; {siteContent.brand.shortName}. All rights reserved.
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
};

export default Footer;
