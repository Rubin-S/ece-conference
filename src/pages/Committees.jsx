import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const committees = [
  {
    role: "Chief Patron",
    members: [
      { name: "Dr. Makarand Madhao Ghangrekar", affiliation: "NIT puducherry" },
    ],
  },
  {
    role: "Patron",
    members: [
      { name: "Dr. S. Sundaravarathan", affiliation: "NIT puducherry" },
    ],
  },
  {
    role: "Organizing Secretaries",
    members: [
      { name: "Dr. Naveen Raj R", affiliation: "NIT puducherry" },
      {
        name: "Dr. Santo Banerjee",
        affiliation:
          "Managing Editor, The European Physical Journal Plus & Politecnico di Torino",
      },
    ],
  },
  {
    role: "Co-Organizing Secretaries",
    members: [
      { name: "Dr. Satishkumar P", affiliation: "NIT puducherry" },
      {
        name: "Dr. Lamberto Rondoni",
        affiliation: "Politecnico di Torino, Italy",
      },
    ],
  },
  {
    role: "International and National Advisory Board",
    members: [
      { name: "Dr. Sehshadri Shekar", affiliation: "Director, IIT Palakad" },
      { name: "Dr. Shankar Krishnapillai", affiliation: "IIT Madras" },
      { name: "Dr. Gnanamoorthy", affiliation: "IIT Madras" },
      { name: "Dr. K. Shankaranarayanasamy", affiliation: "NIT Trichy" },
      { name: "Dr. Chandramouli P", affiliation: "IIT Madras" },
      { name: "Dr. Suresh P.S.", affiliation: "DRDO" },
      { name: "Mr. Sheik Jaheerudien", affiliation: "IOFS, AVADI" },
      { name: "Dr. S. Senthilvelan", affiliation: "IIT Guwahati, India" },
      { name: "Dr. Shahis Hasim", affiliation: "Sweden" },
      { name: "Prof. Manosh Paul", affiliation: "Glasgow, UK" },
      {
        name: "Dr. Suryanarayana Prasad",
        affiliation: "Ashok Leyland, Chennai",
      },
      {
        name: "Dr. B. Rushi Kumar",
        affiliation: "Vellore Institute of Technology, India",
      },
      { name: "Dr. Britto Gowri", affiliation: "" },
      {
        name: "Dr. Gyanendra Tripathi",
        affiliation: "Kyushu Institute of Technology, Japan",
      },
      {
        name: "Dr. Hayder Natiq Kadhim",
        affiliation: "Imam Ja'afar Al-Sadiq University, Iraq",
      },
      {
        name: "Dr. Hoang Manh Thang",
        affiliation: "Hanoi University of Science and Technology, Vietnam",
      },
      {
        name: "Dr. Pawan Kumar",
        affiliation: "National Academy of Sciences of Belarus (NASB), Minsk",
      },
      {
        name: "Dr. Jun Mou",
        affiliation: "Dalian Polytechnic University, China",
      },
      {
        name: "Dr. Kajal Kumar Mondal",
        affiliation: "Coochbehar Panchanan Barma University, India",
      },
      {
        name: "Dr. Kamrul Hassan",
        affiliation: "University of Dhaka, Bangladesh",
      },
      {
        name: "Dr. Lamberto Rondoni",
        affiliation: "Politecnico di Torino, Italy",
      },
      {
        name: "Dr. Laxmikanta Mandi",
        affiliation: "University of Gour Banga, India",
      },
      { name: "Dr. Mai The Anh", affiliation: "Vinh University, Vietnam" },
      {
        name: "Dr. Nur Aisyah Abdul Fataf",
        affiliation:
          "Cyber Security Centre, National Defence University of Malaysia, Malaysia",
      },
      {
        name: "Dr. Rakkiyappan Rajan",
        affiliation: "Bharathiar University, India",
      },
      {
        name: "Dr. R. Sivaraj",
        affiliation: "Vellore Institute of Technology, Vellore, India",
      },
      {
        name: "Dr. R. Uthayakumar",
        affiliation: "The Gandhigram Rural Institute, India",
      },
      { name: "Dr. Shaobo He", affiliation: "Central South University, China" },
      { name: "Dr. Son Dang Thai", affiliation: "Vinh University, Vietnam" },
      {
        name: "Dr. Stavros Stavrinides",
        affiliation: "Aristotle University, Greece",
      },
      {
        name: "Dr. Devanjan Bhattacharya",
        affiliation: "University of Edinburgh, UK",
      },
      {
        name: "Dr. Indu Bala",
        affiliation: "The University of Adelaide, Australia",
      },
      {
        name: "Dr. Matteo Colangeli",
        affiliation: "Universita degli studi dell'Aquila, Italy",
      },
      {
        name: "Dr. Muhammad Firdaus Abdul Rahim",
        affiliation: "Mahsa University, Malaysia",
      },
      {
        name: "Dr. Priyanka Mohan",
        affiliation: "Guizhou University, China",
      },
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Committees() {
  const { theme } = useTheme();

  return (
    <main
      className="min-h-screen bg-gradient-to-tr from-sky-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-8 py-20"
      role="main"
      aria-labelledby="committees-heading"
    >
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-purple-400 dark:to-sky-400">
          Conference Committees
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Meet the experts powering this conference with leadership and
          excellence.
        </p>
      </motion.header>

      <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
        {committees.map((group, groupIndex) => (
          <div key={group.role} className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-700 dark:text-primary-300">
              {group.role}
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {group.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  className="rounded-2xl max-w-lg bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out p-6 text-center"
                >
                  <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </div>
                  <div className="text-lg font-light italic text-gray-400 dark:text-white mb-1">
                    {member.affiliation}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
