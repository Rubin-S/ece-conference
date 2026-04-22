import Committees from "../pages/Committees";

export function meta() {
  return [{ title: "Committees" }];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function CommitteesRoute() {
  return <Committees />;
}
