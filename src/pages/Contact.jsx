import React, { useState } from "react";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath.jsx";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up your API
    setSubmitted(true);
  };

  return (
    <Section
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
      crosses
      className="!px-0 !py-20 bg-light-pb dark:bg-dark-pb"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Heading */}
        <div className="lg:col-span-2 text-center mb-8">
          <Heading
            id="contact-heading"
            title="Get in Touch"
            text="Whether you have a question about the conference, want to collaborate, or just say hello—our team is here to help."
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* Info Card */}
        <article
          className="
            relative overflow-hidden rounded-2xl border-2
            border-light-border dark:border-dark-border
            bg-no-repeat bg-cover p-0.5
            md:max-w-sm mx-auto lg:mx-0
          "
          style={{ backgroundImage: "url(/assets/office-bg.jpg)" }}
          aria-labelledby="contact-info-heading"
        >
          <GradientLight />

          <div
            className="absolute inset-0 bg-light-pb dark:bg-dark-pb"
            style={{ clipPath: "url(#benefits)" }}
          />
          <ClipPath />

          <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
            <h3
              id="contact-info-heading"
              className="h3 mb-2 text-light-pt dark:text-dark-pt"
            >
              Dr. Naveen Raj
            </h3>
            <p className="body mb-4 text-light-st dark:text-dark-st">
              Organizing Secretary
            </p>

            <ul className="space-y-4 text-left w-full">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary-500 mr-3" />
                <span className="body text-light-pt dark:text-dark-pt">
                  +91-73584-55415
                </span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-primary-500 mr-3" />
                <a
                  href="mailto:naveenraj.r@nitpy.ac.in"
                  className="body text-primary-600 dark:text-primary-300 hover:underline"
                >
                  naveenraj.r@nitpy.ac.in
                </a>
              </li>
              <li className="flex items-center">
                <LocationMarkerIcon className="h-5 w-5 text-primary-500 mr-3" />
                <address className="not-italic body text-light-st dark:text-dark-st">
                  NIT Puducherry, Karaikal, India
                </address>
              </li>
            </ul>
          </div>
        </article>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 md:max-w-lg mx-auto lg:mx-0"
          aria-labelledby="contact-form-heading"
        >
          <h3
            id="contact-form-heading"
            className="h3 mb-4 text-light-pt dark:text-dark-pt"
          >
            Send Us a Message
          </h3>

          {submitted ? (
            <p className="body text-primary-600 dark:text-primary-300">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="body mb-1 text-light-pt dark:text-dark-pt">
                    Your Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="
                      px-4 py-2 rounded-lg border border-light-divider dark:border-dark-divider
                      bg-light-sb dark:bg-dark-sb text-light-pt dark:text-dark-pt
                      placeholder-light-st dark:placeholder-dark-st
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                    "
                  />
                </label>
                <label className="flex flex-col">
                  <span className="body mb-1 text-light-pt dark:text-dark-pt">
                    Your Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="
                      px-4 py-2 rounded-lg border border-light-divider dark:border-dark-divider
                      bg-light-sb dark:bg-dark-sb text-light-pt dark:text-dark-pt
                      placeholder-light-st dark:placeholder-dark-st
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                    "
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="body mb-1 text-light-pt dark:text-dark-pt">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="
                    px-4 py-2 rounded-lg border border-light-divider dark:border-dark-divider
                    bg-light-sb dark:bg-dark-sb text-light-pt dark:text-dark-pt
                    placeholder-light-st dark:placeholder-dark-st
                    focus:outline-none focus:ring-2 focus:ring-primary-500
                  "
                />
              </label>

              <button
                type="submit"
                className="
                  inline-block bg-primary-500 dark:bg-primary-600
                  text-light-ctaText dark:text-dark-ctaText
                  px-6 py-3 rounded-xl transition-transform hover:scale-105
                "
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </Section>
  );
};

export default ContactUs;
