import ImportantDates from "../pages/ImportantDates";

export function meta() {
  return [{ title: "Important Dates" }];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function ImportantDatesRoute() {
  return <ImportantDates />;
}
