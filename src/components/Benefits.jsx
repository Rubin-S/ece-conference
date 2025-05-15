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
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 5,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 6,
    name: "TBD",
    college: "TBD",
    description: "TBD",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
];

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
          {speakers.map((spk) => (
            <article
              key={spk.id}
              role="group"
              aria-labelledby={`speaker-${spk.id}-name`}
              className="
                relative overflow-hidden rounded-2xl border-2
                border-light-border dark:border-dark-border
                bg-no-repeat bg-cover p-0.5
                transition-transform hover:scale-[1.02]
              "
              style={{ backgroundImage: `url(${spk.backgroundUrl})` }}
            >
              {/* Gradient overlay */}
              <GradientLight />

              {/* Clip-path white card */}
              <div
                className="absolute inset-0"
                style={{ clipPath: "url(#benefits)" }}
              />
              <ClipPath />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
                <img
                  src={spk.image}
                  alt={spk.name}
                  className="
                    w-28 h-28 rounded-full object-cover
                    border-4 border-light-pb dark:border-dark-pb
                    mb-4
                  "
                />

                <h3
                  id={`speaker-${spk.id}-name`}
                  className="h3 mb-2 text-light-pt dark:text-dark-pt"
                >
                  {spk.name}
                </h3>

                <p className="body mb-4 text-light-st dark:text-dark-st">
                  {spk.college}
                </p>

                <p className="body leading-snug text-light-muted dark:text-dark-muted">
                  {spk.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
