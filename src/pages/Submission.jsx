import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function RegistrationForm() {
  const [form, setForm] = useState({
    correspondingAuthor: "",
    affiliation: "",
    uploadLink: "",
  });
  const [authors, setAuthors] = useState([""]);
  const [showRules, setShowRules] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuthorChange = (index, value) => {
    const updated = [...authors];
    updated[index] = value;
    setAuthors(updated);
  };

  const addAuthor = () => setAuthors([...authors, ""]);

  const inputField =
    "px-4 py-2 rounded-lg border border-light-divider dark:border-dark-divider bg-light-sb dark:bg-dark-sb text-light-pt dark:text-dark-pt placeholder-light-st dark:placeholder-dark-st focus:outline-none focus:ring-2 focus:ring-primary-500";


  return (
    <Section
      id="registration"
      role="form"
      aria-labelledby="registration-heading"
      className="bg-gradient-to-tr from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100"
    >
      <motion.div
        className="container max-w-3xl mx-auto space-y-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp}>
          <Heading
            id="registration-heading"
            title="Registration Form"
            text="Please fill out all required information for the conference registration."
          />
        </motion.div>

        <motion.form
          variants={fadeInUp}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col">
              <span className="body mb-1">Corresponding Author</span>
              <input
                name="correspondingAuthor"
                required
                value={form.correspondingAuthor}
                onChange={handleChange}
                className={inputField}
              />
            </label>

            <label className="flex flex-col">
              <span className="body mb-1">Affiliation</span>
              <input
                name="affiliation"
                required
                value={form.affiliation}
                onChange={handleChange}
                className={inputField}
              />
            </label>
          </div>

          <div>
            <span className="body mb-2 block">All Authors</span>
            <div className="space-y-2">
              {authors.map((author, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => handleAuthorChange(index, e.target.value)}
                    className={inputField}
                    placeholder={`Author ${index + 1}`}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addAuthor}
                className="text-sm text-primary-600 hover:underline flex items-center gap-1"
              >
                <PlusIcon className="w-4 h-4" /> Add Author
              </button>
            </div>
          </div>

          <div>
            <label className="flex flex-col">
              <span className="body mb-1">
                Google Drive Upload Link
                <button
                  type="button"
                  className="ml-2 text-xs underline text-primary-500"
                  onClick={() => setShowRules(true)}
                >
                  Click here to read upload rules
                </button>
              </span>
              <input
                name="uploadLink"
                type="url"
                required
                placeholder="https://drive.google.com/file/d/..."
                value={form.uploadLink}
                onChange={handleChange}
                className={inputField}
              />
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="inline-block bg-primary-500 dark:bg-primary-600 text-light-ctaText dark:text-dark-ctaText px-6 py-3 rounded-xl"
          >
            Submit
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {showRules && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="max-w-md w-full bg-white dark:bg-dark-altBg p-6 rounded-xl shadow-elevated relative"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
              >
                <button
                  onClick={() => setShowRules(false)}
                  className="absolute top-4 right-4 text-neutral-600 dark:text-neutral-300 hover:text-red-500"
                >
                  <XIcon className="w-5 h-5" />
                </button>
                <h4 className="h3 mb-2">Upload Rules</h4>
                <ul className="list-disc pl-5 text-sm text-light-st dark:text-dark-st space-y-1">
                  <li>Only PDFs are accepted</li>
                  <li>Upload to Google Drive and ensure the link is public</li>
                  <li>
                    Rename the file to: CorrespondingAuthorName_IC3DCM2026.pdf
                  </li>
                  <li>Submit the correct link here</li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

// Shared input style utility
