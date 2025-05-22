import { motion } from "framer-motion";
import Heading from "./common/Heading";
import Section from "./common/Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const speakers = [
  {
    id: 1,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 5,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 6,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://placehold.co/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const Benefits = () => {
  return (
    <Section
      id="features"
      role="region"
      aria-labelledby="keynote-speakers-heading"
      className="py-20 md:py-32"
    >
      <div className="container">
        <Heading
          id="keynote-speakers-heading"
          className="text-center mb-12 md:mb-16"
          title="Keynote Speakers"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((spk, index) => (
            <motion.article
              key={spk.id}
              role="group"
              aria-labelledby={`speaker-${spk.id}-name`}
              className="relative overflow-hidden rounded-2xl border-2 border-light-border dark:border-dark-border bg-no-repeat bg-cover p-0.5 group"
              style={{ backgroundImage: `url(${spk.backgroundUrl})` }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <GradientLight />
              <div
                className="absolute inset-0"
                style={{ clipPath: "url(#benefits)" }}
              />
              <ClipPath />

              <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
                <motion.img
                  src={spk.image}
                  alt={spk.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-light-pb dark:border-dark-pb mb-4 shadow-md group-hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                />

                <h3
                  id={`speaker-${spk.id}-name`}
                  className="h3 mb-2 text-light-pt dark:text-dark-pt"
                >
                  {spk.name}
                </h3>

                <p className="body mb-3 text-light-st dark:text-dark-st">
                  {spk.college}
                </p>

                <p className="body leading-snug text-light-muted dark:text-dark-muted max-w-sm">
                  {spk.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
