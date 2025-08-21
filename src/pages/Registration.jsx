
// -----------------------------------------------------------------------------
// FILE: src/pages/Registration.jsx
// Updated price page: single method -> pay externally then upload receipt
// Clicking Register navigates to the registration form and passes selection
// -----------------------------------------------------------------------------
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import { ClockIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const FEES = [
  { category: "Indian Student", physical: "₹8,000", virtual: "₹6,000" },
  { category: "Indian Faculty / Researcher", physical: "₹10,000", virtual: "₹8,000" },
  { category: "Foreign Student", physical: "₹12,500", virtual: "₹10,000" },
  { category: "Foreign Delegate", physical: "₹20,000", virtual: "₹16,000" },
  { category: "Industry Professional", physical: "₹24,000", virtual: "₹20,000" },
];

const fadeInItem = (delay = 0) => ({ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } });

export default function RegistrationPage() {
  const navigate = useNavigate();

  const handleRegister = useCallback((category, mode, price) => {
    // navigate to the form and pass selection as state
    navigate("/registration/form", { state: { selection: { category, mode, price }, prefill: {} } });
  }, [navigate]);

  return (
    <Section id="registration" className="py-24 md:py-32 bg-gradient-to-tr from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100" aria-labelledby="registration-heading">
      <div className="container max-w-6xl mx-auto space-y-20">
        <Heading id="registration-heading" title="Registration" text="Secure your spot—pay externally then upload the payment screenshot on the form page." className="text-center" />

        <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-300 text-center mb-4" variants={fadeInItem(0)}>Registration Fees</motion.h2>

          <div className="w-full overflow-x-hidden">
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
                {FEES.map((row) => (
                  <tr key={row.category} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-light-pt dark:text-dark-pt">{row.category}</td>
                    <td className="p-4 text-center text-light-st dark:text-dark-st">{row.physical}</td>
                    <td className="p-4 text-center text-light-st dark:text-dark-st">{row.virtual}</td>
                    <td className="p-4 text-center">
                      <div className="flex gap-2 items-center justify-center">
                        <button aria-label={`Register physical ${row.category}`} onClick={() => handleRegister(row.category, 'physical', row.physical)} className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">Register (Physical)</button>
                        <button aria-label={`Register virtual ${row.category}`} onClick={() => handleRegister(row.category, 'virtual', row.virtual)} className="px-4 py-2 bg-primary-200 text-primary-700 rounded-lg hover:bg-primary-300 transition hidden md:inline">Register (Virtual)</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile cards */}
            <div className="md:hidden space-y-6">
              {FEES.map((row) => (
                <div key={row.category} className="bg-light-altBg dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl shadow-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-lg text-primary-500">{row.category}</h4>
                    <div className="flex gap-2">
                      <button onClick={() => handleRegister(row.category, 'physical', row.physical)} className="px-3 py-1 bg-primary-500 text-white rounded-md text-sm hover:bg-primary-600 transition">Register Phy</button>
                      <button onClick={() => handleRegister(row.category, 'virtual', row.virtual)} className="px-3 py-1 bg-primary-200 text-primary-700 rounded-md text-sm hover:bg-primary-300 transition">Register Vir</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-light-st dark:text-dark-st">Physical:</span>
                      <span className="text-light-pt dark:text-dark-pt">{row.physical}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-light-st dark:text-dark-st">Virtual:</span>
                      <span className="text-light-pt dark:text-dark-pt">{row.virtual}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative px-6 py-4 mb-8 rounded-xl border border-yellow-400 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-600 text-yellow-800 dark:text-yellow-100 shadow-md" role="note" aria-label="Early bird registration discount">
            <div className="flex items-start gap-3">
              <ClockIcon className="h-6 w-6 shrink-0 text-yellow-600 dark:text-yellow-200 mt-0.5" />
              <div>
                <p className="font-semibold text-sm sm:text-base">Early Bird Discount Available!</p>
                <p className="text-sm sm:text-base"><strong>20% off</strong> physical registration and <strong>10% off</strong> virtual registration if you register before <strong>January 15, 2026</strong>.</p>
              </div>
            </div>
          </motion.div>

          {/* SINGLE PAYMENT INSTRUCTION CARD */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-light-divider dark:border-dark-divider rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Pay & Upload Screenshot</h3>
              <p className="text-sm text-light-st dark:text-dark-st mb-4">Please make the payment using the bank/UPI details provided by the organizers (you will update these on the site). After payment, come back to the registration form and upload the payment screenshot or PDF.</p>
              <ul className="text-sm list-disc list-inside mb-4 text-light-st dark:text-dark-st">
                <li>Choose your category above and click the Register button.</li>
                <li>Make the payment using the details provided on the site.</li>
                <li>On the form page, attach the payment screenshot and your paper link.</li>
              </ul>
            </div>

            <div className="bg-light-altBg dark:bg-dark-altBg border border-light-divider dark:border-dark-divider rounded-2xl p-6 shadow-md flex items-center justify-center">
              <div className="text-center">
                <p className="font-medium text-light-st dark:text-dark-st mb-2">You will be redirected to the form after selecting Register.</p>
                <p className="text-sm text-light-st dark:text-dark-st">(QR / Bank details placeholders removed — you will update them yourself where needed.)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <p className="body text-light-st dark:text-dark-st mb-4">Need assistance? <a href="/contact-us" className="ml-1 text-primary-600 dark:text-primary-400 hover:underline">Contact us</a></p>
        </div>
      </div>
    </Section>
  );
}
