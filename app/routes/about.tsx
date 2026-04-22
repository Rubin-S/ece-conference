import About from "../pages/About";

export function meta() {
  return [
    { title: "About Us" },
  ];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function AboutRoute() {
  return <About />;
}
