// -----------------------------------------------------------------------------
// FILE: src/pages/RegistrationForm.jsx
// Updated registration form: modern sleek payment info (no QR/UPI, copy-friendly)
// -----------------------------------------------------------------------------
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { XIcon, ClipboardCopyIcon, CheckIcon } from "@heroicons/react/outline";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { useLocation } from "react-router-dom";
import { uploadReceiptFile, saveRegistration } from "../lib/firebase";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function RegistrationForm() {
  const location = useLocation();
  const incoming = location.state || {};

  const [form, setForm] = useState({
    correspondingAuthor: "",
    affiliation: "",
    paperId: "",
  });
  const [authors, setAuthors] = useState([""]);
  const [receiptFile, setReceiptFile] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedField, setCopiedField] = useState("");

  useEffect(() => {
    if (receiptFile) {
      const url = URL.createObjectURL(receiptFile);
      setReceiptPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setReceiptPreview(null);
    }
  }, [receiptFile]);

  useEffect(() => {
    if (incoming?.prefill?.correspondingAuthor) {
      setForm((s) => ({
        ...s,
        correspondingAuthor: incoming.prefill.correspondingAuthor,
      }));
    }
  }, [incoming]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAuthorChange = (index, value) => {
    const updated = [...authors];
    updated[index] = value;
    setAuthors(updated);
  };

  const addAuthor = () => setAuthors([...authors, ""]);

  function sanitizeFileName(name) {
    return name.replace(/[^a-z0-9.-]/gi, "_").slice(0, 180);
  }

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const maxBytes = 8 * 1024 * 1024;
    if (f.size > maxBytes) {
      setErrorMessage("File is too large — please upload a file smaller than 8 MB.");
      return;
    }
    const allowed = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
    if (!allowed.includes(f.type)) {
      setErrorMessage("Unsupported file type. Please upload PNG/JPG or PDF.");
      return;
    }
    setErrorMessage("");
    setReceiptFile(f);
  };

  const handleCopy = async (text, field = "") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field || "all");
      setTimeout(() => setCopiedField(""), 1500);
    } catch (e) {
      console.warn("copy failed", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!form.correspondingAuthor || !form.affiliation) {
      setErrorMessage("Please fill required fields.");
      return;
    }
    if (authors.some((a) => !a)) {
      setErrorMessage("Please fill all author fields or remove empty ones.");
      return;
    }
    if (!form.paperId) {
      setErrorMessage("Please provide your Paper ID.");
      return;
    }
    if (!receiptFile) {
      setErrorMessage("Please attach a screenshot or PDF of the payment receipt.");
      return;
    }

    try {
      setSubmitting(true);
      const timestamp = Date.now();
      const filename = `${sanitizeFileName(
        form.correspondingAuthor || "user"
      )}_${timestamp}_${receiptFile.name}`;
      const { url: receiptURL } = await uploadReceiptFile(
        receiptFile,
        filename,
        setUploadProgress
      );

      const payload = {
        correspondingAuthor: form.correspondingAuthor,
        affiliation: form.affiliation,
        authors: authors.filter(Boolean),
        paperId: form.paperId,
        receiptURL,
        receiptOriginalFilename: receiptFile.name,
        receivedFromPage: incoming.selection || null,
      };

      const id = await saveRegistration(payload);
      setSuccessMessage(`Registration saved (ID: ${id}). Thank you!`);
      setForm({ correspondingAuthor: "", affiliation: "", paperId: "" });
      setAuthors([""]);
      setReceiptFile(null);
      setUploadProgress(null);
    } catch (err) {
      console.error(err);
      setErrorMessage("Upload failed — please try again. " + (err.message || ""));
    } finally {
      setSubmitting(false);
    }
  };

  const inputField =
    "px-4 py-2 rounded-lg border border-light-divider dark:border-dark-divider bg-light-sb dark:bg-dark-sb text-light-pt dark:text-dark-pt placeholder-light-st dark:placeholder-dark-st focus:outline-none focus:ring-2 focus:ring-primary-500";

  const selection = incoming.selection || null;

  const paymentInfo = useMemo(
    () => ({
      accountName: "NITPY WORKSHOP / CONFERENCE",
      accountNo: "37854338444",
      bankIfsc: "SBIN0070848",
      bankName: "STATE BANK OF INDIA",
      branch: "NITPY KARAIKAL BRANCH",
      micr: "609002106",
      swift: "SBININBB228",
    }),
    []
  );

  return (
    <Section
      id="registration"
      role="form"
      aria-labelledby="registration-heading"
      className="bg-gradient-to-tr from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100"
    >
      <motion.div
        className="container max-w-3xl mx-auto space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp}>
          <Heading
            id="registration-heading"
            title="Registration Form"
            text="Please fill out required fields, make payment using the details below, then upload the payment screenshot."
          />
        </motion.div>

        {selection && (
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl p-4 shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-light-st dark:text-dark-st">
                  Category
                </div>
                <div className="font-semibold text-lg text-light-pt dark:text-dark-pt">
                  {selection.category} — {selection.mode}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-light-st dark:text-dark-st">
                  Amount to pay
                </div>
                <div className="font-bold text-2xl text-primary-600 dark:text-primary-300">
                  {selection.price}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Sleek Payment Details */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl p-6 shadow-md">
            <h4 className="font-semibold text-lg text-primary-600 mb-2">
              Payment Details
            </h4>
            <p className="text-sm text-light-st dark:text-dark-st mb-4">
              Use the details below to make the payment. You can copy any field
              or all details at once. After payment, upload your receipt below.
            </p>

            <div className="divide-y divide-light-divider dark:divide-dark-divider text-sm">
              {[
                ["Account Name", paymentInfo.accountName],
                ["Account Number", paymentInfo.accountNo],
                ["Bank", paymentInfo.bankName],
                ["Branch", paymentInfo.branch],
                ["IFSC Code", paymentInfo.bankIfsc],
                ["MICR Code", paymentInfo.micr],
                ["SWIFT Code", paymentInfo.swift],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 group"
                >
                  <span className="font-medium text-light-pt dark:text-dark-pt">
                    {label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-light text-right break-all">
                      {value}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(value, label)}
                      className="p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-light-hover dark:hover:bg-dark-hover transition"
                      aria-label={`Copy ${label}`}
                    >
                      {copiedField === label ? (
                        <CheckIcon className="w-4 h-4 text-green-600" />
                      ) : (
                        <ClipboardCopyIcon className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    [
                      `Account Name: ${paymentInfo.accountName}`,
                      `Account Number: ${paymentInfo.accountNo}`,
                      `Bank: ${paymentInfo.bankName}`,
                      `Branch: ${paymentInfo.branch}`,
                      `IFSC: ${paymentInfo.bankIfsc}`,
                      `MICR: ${paymentInfo.micr}`,
                      `SWIFT: ${paymentInfo.swift}`,
                    ].join("\n"),
                    "all"
                  )
                }
                className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-medium transition"
              >
                {copiedField === "all" ? "✓ Details Copied" : "Copy All Details"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.form
          variants={fadeInUp}
          className="space-y-6"
          onSubmit={handleSubmit}
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
                    onChange={(e) =>
                      handleAuthorChange(index, e.target.value)
                    }
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
                <span className="w-4 h-4">+</span> Add Author
              </button>
            </div>
          </div>

          <div>
            <label className="flex flex-col">
              <span className="body mb-1">Paper ID</span>
              <input
                name="paperId"
                required
                placeholder="Enter your Paper ID (e.g., IC3DCM-1234)"
                value={form.paperId}
                onChange={handleChange}
                className={inputField}
              />
            </label>
          </div>

          <div>
            <label className="flex flex-col">
              <span className="body mb-1">
                Payment Receipt (screenshot or PDF)
              </span>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFile}
                className="mt-2"
                aria-label="Upload payment receipt"
              />
            </label>

            {receiptPreview && receiptFile && (
              <div className="mt-3 flex items-center gap-3 bg-light-altBg dark:bg-dark-altBg p-3 rounded-lg">
                <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  {receiptFile.type === "application/pdf" ? (
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      PDF
                    </div>
                  ) : (
                    <img
                      src={receiptPreview}
                      alt="receipt preview"
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-light-st dark:text-dark-st">
                    {receiptFile.name}
                  </div>
                  {uploadProgress !== null && (
                    <div className="text-xs mt-1">
                      Uploading: {uploadProgress}%
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setReceiptFile(null)}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                  aria-label="Remove receipt"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={submitting}
            className="inline-block bg-primary-500 dark:bg-primary-600 text-light-ctaText dark:text-dark-ctaText px-6 py-3 rounded-xl"
          >
            {submitting ? "Submitting..." : "Submit Registration"}
          </motion.button>

          {errorMessage && (
            <div className="text-sm text-red-600 mt-2">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-sm text-green-600 mt-2">{successMessage}</div>
          )}
        </motion.form>
      </motion.div>
    </Section>
  );
}
