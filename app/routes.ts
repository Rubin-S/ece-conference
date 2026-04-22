import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/about.tsx"),
  route("call-for-papers", "routes/call-for-papers.tsx"),
  route("important-dates", "routes/important-dates.tsx"),
  route("committees", "routes/committees.tsx"),
  route("registration", "routes/registration.tsx"),
  route("registration/form", "routes/registration-form.tsx"),
  route("guidelines", "routes/guidelines.tsx"),
  route("sponsors", "routes/sponsors.tsx"),
  route("contact-us", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
