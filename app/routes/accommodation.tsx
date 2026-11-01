import Accommodation from "../pages/Accommodation";

export function meta() {
  return [{ title: "Accommodation - IConSCEPT 2026" }];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function AccommodationRoute() {
  return <Accommodation />;
}
