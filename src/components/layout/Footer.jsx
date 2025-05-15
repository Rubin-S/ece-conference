import React from "react";
import Section from "../common/Section";
import { socials } from "../../assets/socials/socials";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { id: 0, label: "Home", to: "/" },
    { id: 1, label: "Call for Papers", to: "/call-for-papers" },
    { id: 2, label: "Registration", to: "/registration" },
    { id: 3, label: "About Us", to: "/about-us" },
    { id: 4, label: "Contact", to: "/contact-us" },
  ];

  return (
    <Section
      crosses
      className="!px-0 !py-12 bg-light-sb dark:bg-dark-sb border-t border-light-divider dark:border-dark-divider"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo + Copyright */}
        <div className="text-center md:text-left">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <NavLink to="/" className="inline-block mb-4">
            <span className="font-grotesk font-bold text-xl text-light-pt dark:text-dark-pt">
              International Conference
            </span>
          </NavLink>
          <p className="caption text-light-st dark:text-dark-st">
            © {new Date().getFullYear()} International Conference. All rights
            reserved.
          </p>
        </div>

        {/* Quick Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center space-y-2 md:items-start"
        >
          {quickLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) =>
                [
                  "caption transition-colors",
                  isActive
                    ? "text-primary-600 dark:text-primary-300"
                    : "text-light-st dark:text-dark-st hover:text-light-pt dark:hover:text-dark-pt",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.title}
              className="
                flex items-center justify-center w-10 h-10
                bg-light-altBg dark:bg-dark-altBg
                rounded-full transition-colors
                hover:bg-light-divider dark:hover:bg-dark-divider
                focus:outline-none focus:ring-2 focus:ring-primary-500
              "
            >
              <img
                src={item.iconUrl}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
              />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
