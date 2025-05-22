import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const committees = [
  {
    role: "Organizing Secretaries",
    members: [
      { name: "Dr. Naveen Raj R", affiliation: "" },
      { name: "Dr. Santo Banerjee", affiliation: "" },
    ],
  },
  {
    role: "Co-Organizing Secretaries",
    members: [
      { name: "Dr. Satishkumar P", affiliation: "" },
      { name: "Dr. Lamberto Rondoni", affiliation: "" },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Committees() {
  const { theme } = useTheme();

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-tr from-white via-gray-50 to-blue-50
        dark:from-gray-900 dark:via-gray-800 dark:to-blue-900
        text-gray-900 dark:text-gray-100
        px-6 sm:px-12 lg:px-24 py-16
        flex flex-col items-center
      "
      role="main"
      aria-labelledby="committees-heading"
    >
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center max-w-3xl"
      >
        <h1
          id="committees-heading"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans"
        >
          Conference Committees
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-light">
          Our esteemed group of chairs and secretaries ensuring a world-class
          event.
        </p>
      </motion.header>

      <section
        aria-label="List of conference committees"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
      >
        {committees.map((committee, idx) => (
          <motion.div
            key={committee.role}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-2xl shadow-xl
              p-8
              flex flex-col
            "
            role="region"
            aria-labelledby={`role-${idx}`}
          >
            <h2
              id={`role-${idx}`}
              className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300"
            >
              {committee.role}
            </h2>

            <ul className="space-y-3">
              {committee.members.map((m, j) => (
                <li
                  key={`${committee.role}-${j}`}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-lg">{m.name}</p>
                    {m.affiliation && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {m.affiliation}
                      </p>
                    )}
                  </div>
                  {m.email && (
                    <a
                      href={`mailto:${m.email}`}
                      className="
                        mt-2 sm:mt-0
                        text-sm font-medium
                        text-primary-600 dark:text-primary-400
                        hover:underline
                      "
                    >
                      {m.email}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
