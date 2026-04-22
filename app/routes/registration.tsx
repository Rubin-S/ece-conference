import Registration from "../pages/Registration";

export function meta() {
  return [{ title: "Registration" }];
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export default function RegistrationRoute() {
  return <Registration />;
}
