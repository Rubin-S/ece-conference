import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";

const NoPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <main
      role="main"
      aria-labelledby="page-not-found-title"
      className="flex min-h-screen flex-col items-center justify-center bg-light-pb px-4 py-12"
    >
      <div className="mb-8">
        <img
          src="/assets/illustrations/404-robot.svg"
          alt=""
          aria-hidden="true"
          className="h-40 w-40 sm:h-56 sm:w-56"
        />
      </div>

      <h1 id="page-not-found-title" className="mb-4 h1 text-primary-600">
        Oops! Page Not Found
      </h1>

      <p className="body mb-8 max-w-lg text-center text-light-st">
        We can&apos;t seem to find the page you&apos;re looking for. Try searching below or jump back to one of our
        popular pages.
      </p>

      <form
        onSubmit={handleSearch}
        className="mb-8 flex w-full max-w-md items-center overflow-hidden rounded-lg border border-light-divider bg-white focus-within:ring-2 focus-within:ring-primary-500"
        role="search"
        aria-label="Site search"
      >
        <input
          type="text"
          aria-label="Search the site"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="flex-1 bg-transparent px-4 py-2 text-light-pt placeholder-light-st focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="bg-primary-500 p-2 text-white transition-colors hover:bg-primary-600"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </form>

      <nav aria-label="Popular pages" className="mb-12 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="rounded bg-light-pt px-6 py-2 font-medium text-light-pb transition-colors hover:bg-primary-600"
        >
          Home
        </Link>
        <Link
          to="/call-for-papers"
          className="rounded bg-primary-100 px-6 py-2 font-medium text-primary-700 transition-colors hover:bg-primary-200"
        >
          Call for Papers
        </Link>
        <Link
          to="/registration"
          className="rounded border border-primary-500 px-6 py-2 font-medium text-primary-500 transition-colors hover:bg-primary-50"
        >
          Registration
        </Link>
        <Link
          to="/about-us"
          className="rounded border border-light-border px-6 py-2 font-medium text-light-pt transition-colors hover:bg-light-altBg"
        >
          About Us
        </Link>
      </nav>

      <button
        onClick={() => navigate(-1)}
        className="text-sm text-light-st hover:underline focus:outline-none"
      >
        &larr; Go Back
      </button>
    </main>
  );
};

export default NoPage;
