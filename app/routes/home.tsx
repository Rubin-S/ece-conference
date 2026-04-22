import Home from "../pages/Home";

export function meta() {
  return [
    { title: "IConSCEPT 2026 | NIT Puducherry" },
    { name: "description", content: "Official website of IConSCEPT 2026 at NIT Puducherry, Karaikal, India." },
  ];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function HomeRoute() {
  return <Home />;
}
