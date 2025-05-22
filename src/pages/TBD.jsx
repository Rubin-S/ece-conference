import  { useState } from "react";
import Section from "../components/common/Section";
import { MailIcon } from "@heroicons/react/outline";

const TBDPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Integrate your subscription API here
      setSubscribed(true);
    }
  };

  return (
    <Section
      crosses
      className="!px-0 !py-20"
      role="main"
      aria-labelledby="coming-soon-title"
    >
      <div className="container h-full flex flex-col justify-center items-center text-center px-4">
        {/* Illustration */}
        <img
          src="https://placehold.co/500x500"
          alt=""
          aria-hidden="true"
          className="w-48 h-48 mb-8"
        />

        {/* Title */}
        <h1
          id="coming-soon-title"
          className="h1 text-primary-600 dark:text-primary-300 mb-4"
        >
          Page Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="body text-light-st dark:text-dark-st max-w-xl mb-8">
          We're hard at work building something awesome. Check back soon—or
          subscribe below for updates!
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8" aria-hidden="true">
          <div className="w-full bg-light-divider dark:bg-dark-divider rounded-full h-2">
            <div
              className="bg-primary-500 dark:bg-primary-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: "60%" }}
            />
          </div>
          <p className="text-sm text-light-st dark:text-dark-st mt-2">
            Development progress: <strong>60%</strong>
          </p>
        </div>

        {/* Newsletter Signup */}
        {!subscribed ? (
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
            aria-label="Subscribe for updates"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                flex-1 px-4 py-2 rounded-lg border border-light-divider dark:border-dark-divider
                bg-light-sb dark:bg-dark-sb text-light-pt dark:text-dark-pt
                placeholder-light-st dark:placeholder-dark-st focus:outline-none focus:ring-2 focus:ring-primary-500
              "
            />
            <button
              type="submit"
              className="
                inline-flex items-center justify-center px-6 py-2 rounded-lg
                bg-primary-500 dark:bg-primary-600 text-light-ctaText dark:text-dark-ctaText
                hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors
              "
            >
              <MailIcon className="h-5 w-5 mr-2" />
              Notify Me
            </button>
          </form>
        ) : (
          <p className="body text-light-pt dark:text-dark-pt">
            Thanks for subscribing! We’ll keep you posted.
          </p>
        )}
      </div>
    </Section>
  );
};

export default TBDPage;
