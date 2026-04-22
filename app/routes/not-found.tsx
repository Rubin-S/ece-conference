import Nopage from "../components/Nopage";

export function meta() {
  return [{ title: "404 - Page Not Found" }];
}

export default function NotFoundRoute() {
  return <Nopage />;
}
