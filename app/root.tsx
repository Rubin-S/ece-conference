import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SiteBackground from "./components/layout/SiteBackground";
import appStylesHref from "./app.css?url";

export function links() {
  return [
    { rel: "stylesheet", href: appStylesHref },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap",
    },
    { rel: "icon", type: "image/svg+xml", href: "/conference.svg" },
    { rel: "canonical", href: "https://www.iconscept.in/" },
  ];
}

export function meta() {
  return [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { title: "IConSCEPT 2026 | NIT Puducherry" },
    {
      name: "description",
      content: "Official website of IConSCEPT 2026, the 2026 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication at NIT Puducherry, Karaikal, India.",
    },
    {
      name: "keywords",
      content: "IConSCEPT 2026, NIT Puducherry conference, signal processing conference, electronics conference, power conference, telecommunication conference, IEEE Madras Section",
    },
    { name: "author", content: "IConSCEPT 2026 Organizing Committee" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.iconscept.in/" },
    { property: "og:title", content: "IConSCEPT 2026 | NIT Puducherry" },
    {
      property: "og:description",
      content: "Fourth edition of the International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication at NIT Puducherry.",
    },
    { property: "og:image", content: "" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.iconscept.in/" },
    { name: "twitter:title", content: "IConSCEPT 2026 | NIT Puducherry" },
    {
      name: "twitter:description",
      content: "Official website for IConSCEPT 2026 at NIT Puducherry, Karaikal, India.",
    },
    { name: "twitter:image", content: "" },
  ];
}

export default function Root() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="relative min-h-screen overflow-x-clip">
          <SiteBackground />
          <div className="relative z-10">
            <Navbar />
            <div className={isHome ? "" : "pt-28 md:pt-32"}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
