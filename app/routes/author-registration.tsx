import AuthorRegistration from "../pages/AuthorRegistration";

export function meta() {
  return [{ title: "Author Registration Portal - IConSCEPT 2026" }];
}

export function headers() {
  return {
    "Cache-Control": "no-store, max-age=0",
  };
}

export default function AuthorRegistrationRoute() {
  return <AuthorRegistration />;
}
