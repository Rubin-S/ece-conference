  <motion.div
    variants={fadeUp}
    className="flex-[3] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8"
  >
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
      {/* Logos column (fixed shrink so text takes remaining space) */}
      <div className="flex flex-col items-center gap-6 sm:gap-10 flex-shrink-0">
        <motion.img
          src={springer}
          alt="Springer Logo"
          className="w-36 sm:w-44 md:w-48 h-auto"
          whileHover={{ scale: 1.03 }}
        />
        <motion.img
          src={springerBottom}
          alt="Springer Proceedings"
          className="w-36 sm:w-44 md:w-48 h-auto"
          whileHover={{ scale: 1.03 }}
        />
      </div>

      {/* Info List (fills remaining width) */}
      <div className="flex-1 flex flex-col gap-8 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        {[
          "At least one author of any accepted paper must register and present the paper in the conference either in virtual or physical mode. Otherwise, the paper will not be processed further for publication.",
          `All peer reviewed and accepted papers will be published in the "Springer Proceedings in Complexity (Scopus Indexed)".`,
          "There are no fees for publication of any accepted paper.",
          "All revised papers must be submitted in the conference template (LaTeX only), available in the download section of the ICNDA 2022 website.",
          "Number of pages in the paper should be 6-8 pages. In special cases, it may be up to 10 pages.",
          "Similarity of any submitted paper must be below 25%.",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3 text-left group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1 flex-shrink-0 text-primary-600 dark:text-primary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M9 12l2 2 4-4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="group-hover:text-primary-600 transition-colors">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>