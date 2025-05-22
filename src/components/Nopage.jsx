import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";

const NoPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <main
      role="main"
      aria-labelledby="page-not-found-title"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-light-pb dark:bg-dark-pb"
    >
      {/* Illustration or icon */}
      <div className="mb-8">
        <img
          src="/assets/illustrations/404-robot.svg"
          alt=""
          aria-hidden="true"
          className="w-40 h-40 sm:w-56 sm:h-56"
        />
      </div>

      {/* Heading */}
      <h1
        id="page-not-found-title"
        className="h1 text-primary-600 dark:text-primary-300 mb-4"
      >
        Oops! Page Not Found
      </h1>

      <p className="body text-light-st dark:text-dark-st max-w-lg text-center mb-8">
        We can’t seem to find the page you’re looking for. Try searching below
        or jump back to one of our popular pages.
      </p>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-md flex items-center border border-light-divider dark:border-dark-divider rounded-lg overflow-hidden mb-8 focus-within:ring-2 focus-within:ring-primary-500"
        role="search"
        aria-label="Site search"
      >
        <input
          type="text"
          aria-label="Search the site"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 text-light-pt dark:text-dark-pt bg-transparent placeholder-light-st dark:placeholder-dark-st focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="p-2 bg-primary-500 dark:bg-primary-600 text-light-ctaText hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </form>

      {/* Popular Links */}
      <nav
        aria-label="Popular pages"
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <Link
          to="/"
          className="px-6 py-2 bg-light-ctaBg dark:bg-dark-ctaBg text-light-ctaText dark:text-dark-ctaText rounded transition-colors hover:bg-light-ctaHover dark:hover:bg-dark-ctaHover font-medium"
        >
          Home
        </Link>
        <Link
          to="/call-for-papers"
          className="px-6 py-2 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-100 rounded transition-colors hover:bg-primary-200 dark:hover:bg-primary-600 font-medium"
        >
          Call for Papers
        </Link>
        <Link
          to="/registration"
          className="px-6 py-2 border border-primary-500 text-primary-500 dark:text-primary-300 rounded transition-colors hover:bg-primary-50 dark:hover:bg-primary-800 font-medium"
        >
          Registration
        </Link>
        <Link
          to="/about-us"
          className="px-6 py-2 border border-light-border dark:border-dark-border text-light-pt dark:text-dark-pt rounded transition-colors hover:bg-light-altBg dark:hover:bg-dark-altBg font-medium"
        >
          About Us
        </Link>
      </nav>

      {/* Back to previous */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-light-st dark:text-dark-st hover:underline focus:outline-none"
      >
        ← Go Back
      </button>
    </main>
  );
};

export default NoPage;
