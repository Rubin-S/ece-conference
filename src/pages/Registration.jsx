// src/pages/Registration.jsx
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { ClockIcon } from "@heroicons/react/outline";
import Button from "../components/common/Button";
import {
  ClipboardCopyIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

// ——— DATA DEFINITIONS —————————————————————————————————————————————————————

const FEES = [
  {
    category: "Indian Student",
    physical: "₹8,000",
    virtual: "₹6,000",
  },
  {
    category: "Indian Faculty / Researcher",
    physical: "₹10,000",
    virtual: "₹8,000",
  },
  {
    category: "Foreign Student",
    physical: "₹12,500",
    virtual: "₹10,000",
  },
  {
    category: "Foreign Delegate",
    physical: "₹20,000",
    virtual: "₹16,000",
  },
  {
    category: "Industry Professional",
    physical: "₹24,000",
    virtual: "₹20,000",
  },
];


const INCLUDES = [
  {
    title: "Physical Mode Includes",
    items: [
      "Access to all technical sessions (in‑person)",
      "Printed conference proceedings",
      "Coffee breaks & Lunch",
      "Invitation to Conference Dinner",
      "Certificate of Participation",
    ],
    color: "bg-primary-500",
  },
  {
    title: "Virtual Mode Includes",
    items: [
      "Live‐stream of all keynotes & sessions",
      "E‑proceedings (PDF)",
      "Access to recorded sessions for 3 months",
      "Digital Certificate",
    ],
    color: "bg-neon-blue-500",
  },
  {
    title: "Virtual‑Only Participation",
    items: [
      "Access to keynote sessions only (live & recorded)",
      "E‑certificate of participation",
    ],
    color: "bg-neon-green-500",
  },
];

const ACCOMMODATION = {
  title: "Accommodation Options",
  description:
    "For on‑campus stays, please book early!",
  options: [
    {
      name: "On‑Campus Hostel",
      details: [
        "TBD",
      ],
    },
  ],
};

const PAYMENTS = [
  {
    method: "Bank Transfer",
    details: [
      { label: "Account Name", value: "TBD" },
      { label: "Account No.", value: "TBD" },
      { label: "Bank & IFSC", value: "TBD" },
      { label: "Branch", value: "TBD" },
    ],
    color: "bg-pink-500",
    copyable: ["TBD", "TBD"],
  },
  {
    method: "UPI (Scan QR)",
    details: [
      { label: "UPI ID", value: "TBD" },
      { label: "Scan QR to pay", value: "" }, // QR code will be an <img> placeholder
    ],
    color: "bg-purple-500",
    copyable: ["TBD"],
  },
  {
    method: "Credit / Debit Card",
    details: [
      { label: "Secure Payment via Stripe", value: "" },
    ],
    color: "bg-yellow-500",
    copyable: [],
  },
];

// ——— VARIANTS FOR ANIMATIONS ——————————————————————————————————————————————————

const fadeInItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

const tableRowHover = {
  hover: {
    scale: 1.01,
    backgroundColor: "#BDBDC4",
    transition: { duration: 0.2 },
  },
};

const accordionVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  hover: {
    scale: 1.01,
    transition: { duration: 0.2 },
  },
};

// ——— HELPER COMPONENTS —————————————————————————————————————————————————————

/**
 * FeeTable: Responsive table that turns into stacked cards on mobile.
 */
const FeeTable = React.memo(function FeeTable() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Desktop Table */}
      <table className="hidden md:table w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-primary-500 text-white">
            <th className="p-4 text-left rounded-tl-lg">Category</th>
            <th className="p-4 text-center">Physical Fee</th>
            <th className="p-4 text-center">Virtual Fee</th>
            <th className="p-4 rounded-tr-lg" />
          </tr>
        </thead>
        <tbody>
          {FEES.map((row, idx) => (
            <motion.tr
              key={row.category}
              className="border-b border-gray-200 dark:border-gray-700 cursor-pointer"
              variants={tableRowHover}
              whileHover="hover"
            >
              <td className="p-4 font-medium text-light-pt dark:text-dark-pt">
                {row.category}
              </td>
              <td className="p-4 text-center text-light-st dark:text-dark-st">
                {row.physical}
              </td>
              <td className="p-4 text-center text-light-st dark:text-dark-st">
                {row.virtual}
              </td>
              <td className="p-4 text-center">
                <button
                  aria-label={`Register as ${row.category}`}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
                >
                  Register
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-6">
        {FEES.map((row, idx) => (
          <motion.div
            key={row.category}
            className="bg-light-altBg dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl shadow-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-lg text-primary-500">
                {row.category}
              </h4>
              <button
                aria-label={`Register as ${row.category}`}
                className="px-3 py-1 bg-primary-500 text-white rounded-md text-sm hover:bg-primary-600 transition"
              >
                Register
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex flex-col">
                <span className="font-medium text-light-st dark:text-dark-st">
                  Physical:
                </span>
                <span className="text-light-pt dark:text-dark-pt">
                  {row.physical}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-light-st dark:text-dark-st">
                  Virtual:
                </span>
                <span className="text-light-pt dark:text-dark-pt">
                  {row.virtual}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

/**
 * IncludeAccordionItem: One collapsible card for “Includes” sections.
 */
const IncludeAccordionItem = React.memo(function IncludeAccordionItem({
  title,
  items,
  color,
  isOpen,
  onToggle,
  idx,
}) {
  return (
    <motion.div 
        className="border border-light-divider dark:border-dark-divider rounded-2xl overflow-hidden"
        variants={accordionVariant}
        whileHover="hover"
      >
      <button
        onClick={() => onToggle(idx)}
        className={`
          w-full flex justify-between items-center p-4
          bg-light-altBg dark:bg-dark-altBg
          hover:bg-light-divider dark:hover:bg-dark-divider
          transition
        `}
        aria-expanded={isOpen}
        aria-controls={`include-panel-${idx}`}
        id={`include-button-${idx}`}
      >
        <span className="font-semibold text-lg text-light-pt dark:text-dark-pt">
          {title}
        </span>
        <span className={`p-2 rounded-full ${color} text-white`}>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`include-panel-${idx}`}
            role="region"
            aria-labelledby={`include-button-${idx}`}
            variants={accordionVariant}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pl-6 pr-4 pb-4 bg-white dark:bg-gray-800"
          >
            <ul className="list-disc list-inside space-y-2 mt-2">
              {items.map((it, i) => (
                <li key={i} className="text-light-st dark:text-dark-st">
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

/**
 * AccommodationCard: Simple card listing accommodation options
 */
const AccommodationCard = React.memo(function AccommodationCard() {
  return (
    <motion.div
      className="bg-gradient-to-tr from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 border border-light-divider dark:border-dark-divider rounded-2xl shadow-2xl p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInItem(0.1)}
      role="region"
      aria-labelledby="accommodation-heading"
    >
      <h3
        id="accommodation-heading"
        className="text-2xl font-semibold text-primary-500 mb-4"
      >
        {ACCOMMODATION.title}
      </h3>
      <p className="mb-4 text-light-st dark:text-dark-st">
        {ACCOMMODATION.description}
      </p>
      <div className="space-y-4">
        {ACCOMMODATION.options.map((opt, idx) => (
          <div
            key={opt.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
          >
            <h4 className="font-medium text-lg text-primary-600 dark:text-primary-300 mb-2">
              {opt.name}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-light-st dark:text-dark-st">
              {opt.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

/**
 * PaymentAccordionItem: A collapsible card for each payment method
 */
const PaymentAccordionItem = React.memo(function PaymentAccordionItem({
  method,
  details,
  color,
  copyable,
  isOpen,
  onToggle,
  idx,
}) {
  const handleCopy = useCallback((text) => {
    navigator.clipboard.writeText(text);
    // Optionally show a tooltip or toast here
  }, []);

  return (
    <div className="border border-light-divider dark:border-dark-divider rounded-2xl overflow-hidden">
      <button
        onClick={() => onToggle(idx)}
        className={`
          w-full flex justify-between items-center p-4
          bg-light-altBg dark:bg-dark-altBg
          hover:bg-light-divider dark:hover:bg-dark-divider
          transition
        `}
        aria-expanded={isOpen}
        aria-controls={`payment-panel-${idx}`}
        id={`payment-button-${idx}`}
      >
        <span className="font-semibold text-lg text-light-pt dark:text-dark-pt">
          {method}
        </span>
        <span className={`p-2 rounded-full ${color} text-white`}>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`payment-panel-${idx}`}
            role="region"
            aria-labelledby={`payment-button-${idx}`}
            variants={accordionVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pl-6 pr-4 pb-4 bg-white dark:bg-gray-800"
          >
            <ul className="space-y-3 mt-2">
              {details.map((d, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center text-light-st dark:text-dark-st"
                >
                  <span>{d.label}:</span>
                  {d.value ? (
                    <div className="flex items-center space-x-2">
                      <span>{d.value}</span>
                      {copyable.includes(d.value) && (
                        <button
                          onClick={() => handleCopy(d.value)}
                          aria-label={`Copy ${d.value}`}
                          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                          <ClipboardCopyIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <span className="italic text-gray-500">See QR below</span>
                  )}
                </li>
              ))}

              {/* If method is UPI, show a QR placeholder */}
              {method.includes("UPI") && (
                <div className="mt-4 flex justify-center">
                  <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
                    {/* Replace this div with an <img src="/path/to/qr.png" alt="UPI QR Code" /> */}
                    <span className="text-gray-500 dark:text-gray-400">
                      QR Code
                    </span>
                  </div>
                </div>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// ——— MAIN PAGE COMPONENT ——————————————————————————————————————————————————

export default function RegistrationPage() {
  const [openIncludes, setOpenIncludes] = useState(null);
  const [openPayments, setOpenPayments] = useState(null);

  const toggleInclude = useCallback(
    (idx) => setOpenIncludes((prev) => (prev === idx ? null : idx)),
    []
  );
  const togglePayment = useCallback(
    (idx) => setOpenPayments((prev) => (prev === idx ? null : idx)),
    []
  );

  return (
    <Section
      id="registration"
      className="
        py-24 md:py-32
        bg-gradient-to-tr from-white via-gray-50 to-blue-50
        dark:from-gray-900 dark:via-gray-800 dark:to-blue-900
        text-gray-900 dark:text-gray-100
      "
      aria-labelledby="registration-heading"
    >
      <div className="container max-w-6xl mx-auto space-y-20">
        {/* ——— HEADER ————————————— */}
        <Heading
          id="registration-heading"
          title="Registration"
          text="Secure your spot—choose physical or virtual participation. See details below."
          className="text-center"
        />

        {/* ——— FEES TABLE / CARDS ————————————— */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2
            className="text-2xl font-semibold text-primary-600 dark:text-primary-300 text-center mb-4"
            variants={fadeInItem(0)}
          >
            Registration Fees
          </motion.h2>

          <FeeTable />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative px-6 py-4 mb-8 rounded-xl border border-yellow-400 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-600 text-yellow-800 dark:text-yellow-100 shadow-md"
            role="note"
            aria-label="Early bird registration discount"
          >
            <div className="flex items-start gap-3">
              <ClockIcon className="h-6 w-6 shrink-0 text-yellow-600 dark:text-yellow-200 mt-0.5" />
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Early Bird Discount Available!
                </p>
                <p className="text-sm sm:text-base">
                  <strong>20% off</strong> physical registration and{" "}
                  <strong>10% off</strong> virtual registration if you register
                  before <strong>January 15, 2026</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ——— “Includes” ACCORDION ————————————— */}
        <div className="space-y-8">
          <motion.h2
            className="text-2xl font-semibold text-primary-600 dark:text-primary-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Your Fee Includes
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {INCLUDES.map((inc, idx) => (
              <IncludeAccordionItem
                key={inc.title}
                title={inc.title}
                items={inc.items}
                color={inc.color}
                isOpen={openIncludes === idx}
                onToggle={toggleInclude}
                idx={idx}
              />
            ))}
          </div>
        </div>

        {/* ——— ACCOMMODATION CARD ————————————— */}
        <AccommodationCard />

        {/* ——— PAYMENT METHOD ACCORDION ————————————— */}
        <div className="space-y-8">
          <motion.h2
            className="text-2xl font-semibold text-primary-600 dark:text-primary-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Methods of Payment
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PAYMENTS.map((pmt, idx) => (
              <PaymentAccordionItem
                key={pmt.method}
                method={pmt.method}
                details={pmt.details}
                color={pmt.color}
                copyable={pmt.copyable}
                isOpen={openPayments === idx}
                onToggle={togglePayment}
                idx={idx}
              />
            ))}
          </div>
        </div>

        {/* ——— FINAL CTA ————————————— */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="body text-light-st dark:text-dark-st mb-4">
            Need assistance?
            <a
              href="/contact-us"
              className="ml-1 text-primary-600 dark:text-primary-400 hover:underline"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
