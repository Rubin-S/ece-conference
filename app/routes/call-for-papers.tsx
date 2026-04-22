import CallForPaper from "../pages/CallForPaper";

export function meta() {
  return [{ title: "Call for Papers" }];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function CallForPaperRoute() {
  return <CallForPaper />;
}
