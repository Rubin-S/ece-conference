
// -----------------------------------------------------------------------------
// FILE: src/pages/RegistrationForm.jsx
// Updated registration form: accepts receipt screenshot and saves to Firebase
// -----------------------------------------------------------------------------
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, ClipboardCopyIcon } from "@heroicons/react/outline";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // If the user came from the price page we expect selection in location.state
  const incoming = location.state || {};

  const [form, setForm] = useState({
    correspondingAuthor: "",
    affiliation: "",
    uploadLink: "",
  });
  const [authors, setAuthors] = useState([""]);
  const [showRules, setShowRules] = useState(false);

  // receipt file state
  const [receiptFile, setReceiptFile] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    // Prefill corresponding author if passed from selection (optional)
    if (incoming?.prefill?.correspondingAuthor) {
      setForm((s) => ({ ...s, correspondingAuthor: incoming.prefill.correspondingAuthor }));
    }
  }, [incoming]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAuthorChange = (index, value) => {
    const updated = [...authors];
    updated[index] = value;
    setAuthors(updated);
  };

  const addAuthor = () => setAuthors([...authors, ""]);

  // basic sanitiser for file names
  function sanitizeFileName(name) {
    return name.replace(/[^a-z0-9.-]/gi, "_").slice(0, 180);
  }

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    // enforce max file size ~ 8MB (adjust as needed)
    const maxBytes = 8 * 1024 * 1024;
    if (f.size > maxBytes) {
      setErrorMessage("File is too large — please upload a file smaller than 8 MB.");
      return;
    }

    // allowed types: images (png/jpg/jpeg) and pdf
    const allowed = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
    if (!allowed.includes(f.type)) {
      setErrorMessage("Unsupported file type. Please upload PNG/JPG or PDF.");
      return;
    }

    setErrorMessage("");
    setReceiptFile(f);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // quick visual feedback could be added here (toast)
    } catch (e) {
      console.warn("copy failed", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // basic client-side validation
    if (!form.correspondingAuthor || !form.affiliation) {
      setErrorMessage("Please fill required fields.");
      return;
    }
    if (authors.some((a) => !a)) {
      setErrorMessage("Please fill all author fields or remove empty ones.");
      return;
    }
    if (!form.uploadLink) {
      setErrorMessage("Please provide your Google Drive upload link for the paper.");
      return;
    }
    if (!receiptFile) {
      setErrorMessage("Please attach a screenshot or PDF of the payment receipt.");
      return;
    }

    try {
      setSubmitting(true);

      // upload receipt
      const timestamp = Date.now();
      const filename = `${sanitizeFileName(form.correspondingAuthor || "user")}_${timestamp}_${receiptFile.name}`;
      const { url: receiptURL } = await uploadReceiptFile(receiptFile, filename, setUploadProgress);

      // prepare payload for firestore
      const payload = {
        correspondingAuthor: form.correspondingAuthor,
        affiliation: form.affiliation,
        authors: authors.filter(Boolean),
        paperUploadLink: form.uploadLink,
        receiptURL,
        receiptOriginalFilename: receiptFile.name,
        receivedFromPage: incoming.selection || null,
      };

      const id = await saveRegistration(payload);

      setSuccessMessage(`Registration saved (ID: ${id}). Thank you!`);
      // reset form (optionally keep some fields)
      setForm({ correspondingAuthor: "", affiliation: "", uploadLink: "" });
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

  // The selection passed from the price page (category / mode / price)
  const selection = incoming.selection || null;

  const paymentInfo = useMemo(() => ({
    // placeholders — you'll replace these with real values in the markup below
    accountName: "TBD - IC3DCM",
    accountNo: "TBD",
    bankIfsc: "TBD",
    branch: "TBD",
    upiId: "tbd@upi",
    qrSrc: "/path/to/qr.png",
  }), []);

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

        {/* Selection summary + amount */}
        {selection && (
          <motion.div variants={fadeInUp} className="bg-white dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl p-4 shadow-elevated">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-light-st dark:text-dark-st">Category</div>
                <div className="font-semibold text-lg text-light-pt dark:text-dark-pt">{selection.category} — {selection.mode}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-light-st dark:text-dark-st">Amount to pay</div>
                <div className="font-bold text-2xl text-primary-600 dark:text-primary-300">{selection.price}</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Payment details + QR card */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl p-5 shadow-md space-y-3">
            <h4 className="font-semibold text-lg text-primary-600">Payment Details</h4>
            <p className="text-sm text-light-st dark:text-dark-st">Use the details below to make the payment. After payment, return here and attach the screenshot (or PDF) of the transaction.</p>

            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm text-light-st dark:text-dark-st">Account Name</div>
                <div className="flex items-center gap-2">
                  <div className="font-medium text-light-pt dark:text-dark-pt">{paymentInfo.accountName}</div>
                  <button aria-label="Copy account name" onClick={() => handleCopy(paymentInfo.accountName)} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ClipboardCopyIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-light-st dark:text-dark-st">Account No.</div>
                <div className="flex items-center gap-2">
                  <div className="font-medium text-light-pt dark:text-dark-pt">{paymentInfo.accountNo}</div>
                  <button aria-label="Copy account number" onClick={() => handleCopy(paymentInfo.accountNo)} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ClipboardCopyIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-light-st dark:text-dark-st">Bank & IFSC</div>
                <div className="text-sm font-medium text-light-pt dark:text-dark-pt">{paymentInfo.bankIfsc}</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-light-st dark:text-dark-st">UPI ID</div>
                <div className="flex items-center gap-2">
                  <div className="font-medium text-light-pt dark:text-dark-pt">{paymentInfo.upiId}</div>
                  <button aria-label="Copy UPI ID" onClick={() => handleCopy(paymentInfo.upiId)} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ClipboardCopyIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-xs text-light-st dark:text-dark-st mt-1">Note: You can pay via bank transfer or UPI. Replace the placeholder values in the code with your real details when ready.</div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl p-5 shadow-md flex flex-col items-center">
            <h4 className="font-semibold text-lg text-primary-600 mb-3">Scan to Pay (QR)</h4>
            <div className="w-40 h-40 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Replace src with your QR image */}
              <img src={paymentInfo.qrSrc} alt="Payment QR code" className="object-cover w-full h-full" />
            </div>
            <div className="mt-3 text-sm text-light-st dark:text-dark-st text-center">Open your UPI app and scan the QR. Make sure the amount matches the one shown above.</div>
          </div>
        </motion.div>

        <motion.form variants={fadeInUp} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col">
              <span className="body mb-1">Corresponding Author</span>
              <input name="correspondingAuthor" required value={form.correspondingAuthor} onChange={handleChange} className={inputField} />
            </label>

            <label className="flex flex-col">
              <span className="body mb-1">Affiliation</span>
              <input name="affiliation" required value={form.affiliation} onChange={handleChange} className={inputField} />
            </label>
          </div>

          <div>
            <span className="body mb-2 block">All Authors</span>
            <div className="space-y-2">
              {authors.map((author, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <input type="text" required value={author} onChange={(e) => handleAuthorChange(index, e.target.value)} className={inputField} placeholder={`Author ${index + 1}`} />
                </div>
              ))}
              <button type="button" onClick={addAuthor} className="text-sm text-primary-600 hover:underline flex items-center gap-1">
                <span className="w-4 h-4">+</span> Add Author
              </button>
            </div>
          </div>

          <div>
            <label className="flex flex-col">
              <span className="body mb-1">
                Google Drive Upload Link
                <button type="button" className="ml-2 text-xs underline text-primary-500" onClick={() => setShowRules(true)}>
                  Click here to read upload rules
                </button>
              </span>
              <input name="uploadLink" type="url" required placeholder="https://drive.google.com/file/d/..." value={form.uploadLink} onChange={handleChange} className={inputField} />
            </label>
          </div>

          {/* Receipt upload */}
          <div>
            <label className="flex flex-col">
              <span className="body mb-1">Payment Receipt (screenshot or PDF)</span>
              <input type="file" accept="image/*,application/pdf" onChange={handleFile} className="mt-2" aria-label="Upload payment receipt" />
            </label>

            {receiptPreview && receiptFile && (
              <div className="mt-3 flex items-center gap-3 bg-light-altBg dark:bg-dark-altBg p-3 rounded-lg">
                <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  {receiptFile.type === "application/pdf" ? (
                    <div className="text-sm text-gray-600 dark:text-gray-300">PDF</div>
                  ) : (
                    <img src={receiptPreview} alt="receipt preview" className="object-cover w-full h-full" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-light-st dark:text-dark-st">{receiptFile.name}</div>
                  {uploadProgress !== null && <div className="text-xs mt-1">Uploading: {uploadProgress}%</div>}
                </div>
                <div className="flex gap-2 items-center">
                  <button type="button" onClick={() => setReceiptFile(null)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Remove receipt">
                    <XIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={submitting} className="inline-block bg-primary-500 dark:bg-primary-600 text-light-ctaText dark:text-dark-ctaText px-6 py-3 rounded-xl">
            {submitting ? "Submitting..." : "Submit Registration"}
          </motion.button>

          {errorMessage && <div className="text-sm text-red-600 mt-2">{errorMessage}</div>}
          {successMessage && <div className="text-sm text-green-600 mt-2">{successMessage}</div>}
        </motion.form>

        <AnimatePresence>
          {showRules && (
            <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="max-w-md w-full bg-white dark:bg-dark-altBg p-6 rounded-xl shadow-elevated relative" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
                <button onClick={() => setShowRules(false)} className="absolute top-4 right-4 text-neutral-600 dark:text-neutral-300 hover:text-red-500">
                  <XIcon className="w-5 h-5" />
                </button>
                <h4 className="h3 mb-2">Upload Rules</h4>
                <ul className="list-disc pl-5 text-sm text-light-st dark:text-dark-st space-y-1">
                  <li>Only PDFs are accepted for the paper upload</li>
                  <li>Upload to Google Drive and ensure the link is public</li>
                  <li>Rename the file to: CorrespondingAuthorName_IC3DCM2026.pdf</li>
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
