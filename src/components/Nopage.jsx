import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
  return (
    <div className="min-h-screen bg-light-pb flex flex-col justify-center items-center px-5 text-center">
      <h1 className="text-[6rem] font-bold text-light-pa leading-none">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-light-pt mt-4">
        Page Not Found
      </h2>
      <p className="text-light-st max-w-md mt-2">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-light-ctaBg text-light-ctaText px-6 py-3 rounded transition-colors hover:bg-light-ctaHover font-medium"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Nopage;
