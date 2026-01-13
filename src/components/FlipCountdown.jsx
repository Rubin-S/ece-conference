  import React, { useEffect, useRef, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";

  // ------------------------------------------------------------------------------------------------
  // UTILITY: Compute Hours, Minutes, Seconds from Date
  // ------------------------------------------------------------------------------------------------
  function getCurrentTime() {
    const now = new Date();
    return {
      h: String(now.getHours()).padStart(2, "0"),
      m: String(now.getMinutes()).padStart(2, "0"),
      s: String(now.getSeconds()).padStart(2, "0"),
    };
  }

  // ------------------------------------------------------------------------------------------------
  // FLIP DIGIT: represents a single decimal place (0–9), split into two 3D "card" halves.
  //   - props:
  //       digit     = current character to display (e.g. "0"–"9")
  //       prevDigit = previous character (for the flip animation from prev → current)
  //       label     = textual label underneath ("H", "M", "S")
  // ------------------------------------------------------------------------------------------------
  const FlipDigit = React.memo(function FlipDigit({ digit, prevDigit, label }) {
    // Build a unique key so AnimatePresence re-mounts on every digit change
    const animateKey = digit + label;

    // Easing curves for the “fold” animations
    const easeTop = [0.4, 0, 0.2, 1];
    const easeBot = [0.4, 0, 0.2, 1];

    return (
      <div className="relative flex flex-col items-center mx-1 w-12 sm:w-14 md:w-16 perspective-[800px]">
        {/* ----------------------------------------------------
              STATIC BACK FACES (always show current digit on both halves)
          ---------------------------------------------------- */}
        <div className="absolute inset-0 flex flex-col select-none">
          {/* Bottom Static Half */}
          <div
            className="
              overflow-hidden
              bg-white dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              rounded-t-lg
              flex items-start justify-center
            "
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-none">
              {digit}
            </div>
          </div>
          {/* Top Static Half */}
          <div
            className="
              overflow-hidden
              bg-white dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              rounded-b-lg
              flex items-end justify-center
            "
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-none">
              {digit}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
              ANIMATED TOP HALF: flips 0° → -90° showing prevDigit
          ---------------------------------------------------- */}
        <AnimatePresence initial={false}>
          {prevDigit !== digit && (
            <motion.div
              key={`top-${animateKey}`}
              className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden origin-bottom"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -90 }}
              exit={{ rotateX: 0 }}
              transition={{ duration: 0.5, ease: easeTop }}
              style={{
                perspective: 800,
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="
                  w-full h-full
                  bg-gray-200 dark:bg-gray-700
                  border border-gray-300 dark:border-gray-600
                  rounded-t-lg
                  flex items-end justify-center
                "
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-none">
                  {prevDigit}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ----------------------------------------------------
              ANIMATED BOTTOM HALF: flips +90° → 0° showing new digit
          ---------------------------------------------------- */}
        <AnimatePresence initial={false}>
          {prevDigit !== digit && (
            <motion.div
              key={`bottom-${animateKey}`}
              className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden origin-top"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: 90 }}
              transition={{ duration: 0.5, ease: easeBot }}
              style={{
                perspective: 800,
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="
                  w-full h-full
                  bg-gray-200 dark:bg-gray-700
                  border border-gray-300 dark:border-gray-600
                  rounded-b-lg
                  flex items-start justify-center
                "
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-none">
                  {digit}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ----------------------------------------------------
              LABEL (H, M, S) underneath
          ---------------------------------------------------- */}
        <div className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
          {label}
        </div>
      </div>
    );
  });

  // ------------------------------------------------------------------------------------------------
  // MAIN FlipClock COMPONENT
  // ------------------------------------------------------------------------------------------------
  export default function FlipClock() {
    const targetDate = useRef(new Date("2026-05-14T00:00:00").getTime()).current;
    const [time, setTime] = useState(() => {
      // Initialize both “current” and “prev” to the same values
      const { h, m, s } = getCurrentTime();
      return {
        hCurr: h[0],
        hNext: h[1],
        mCurr: m[0],
        mNext: m[1],
        sCurr: s[0],
        sNext: s[1],
        prev: {
          hCurr: h[0],
          hNext: h[1],
          mCurr: m[0],
          mNext: m[1],
          sCurr: s[0],
          sNext: s[1],
        },
      };
    });

    // Tick every second
    useEffect(() => {
      const interval = setInterval(() => {
        const { h, m, s } = getCurrentTime();
        setTime((prevTime) => ({
          hCurr: h[0],
          hNext: h[1],
          mCurr: m[0],
          mNext: m[1],
          sCurr: s[0],
          sNext: s[1],
          prev: {
            hCurr: prevTime.hCurr,
            hNext: prevTime.hNext,
            mCurr: prevTime.mCurr,
            mNext: prevTime.mNext,
            sCurr: prevTime.sCurr,
            sNext: prevTime.sNext,
          },
        }));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <section
        className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 md:py-16 flex flex-col items-center"
        role="region"
        aria-label="Flip clock showing current time"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          Current Time
        </h2>

        {/* Optional: a subtle pulsating background circle */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <motion.div
            className="bg-gradient-to-r from-primary-300 to-primary-500 opacity-20 rounded-full w-64 h-64"
            animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Flip Digits Container */}
        <div className="relative flex z-10">
          {/* Hours Tens */}
          <FlipDigit label="H" digit={time.hCurr} prevDigit={time.prev.hCurr} />
          {/* Hours Ones */}
          <FlipDigit label="" digit={time.hNext} prevDigit={time.prev.hNext} />
          {/* Separator (optional) */}
          <div className="flex items-center mx-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              :
            </span>
          </div>
          {/* Minutes Tens */}
          <FlipDigit label="M" digit={time.mCurr} prevDigit={time.prev.mCurr} />
          {/* Minutes Ones */}
          <FlipDigit label="" digit={time.mNext} prevDigit={time.prev.mNext} />
          {/* Separator (optional) */}
          <div className="flex items-center mx-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              :
            </span>
          </div>
          {/* Seconds Tens */}
          <FlipDigit label="S" digit={time.sCurr} prevDigit={time.prev.sCurr} />
          {/* Seconds Ones */}
          <FlipDigit label="" digit={time.sNext} prevDigit={time.prev.sNext} />
        </div>
      </section>
    );
  }
