import Heading from "./common/Heading";
import Section from "./common/Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  const speakers = [

  {
    id: 1,
    name: "TBH",
    college: "TBH",
    description: "TBH",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    name: "TBH",
    college: "TBH",
    description: "TBH",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    name: "TBH",
    college: "TBH",
    description: "TBH",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    name: "TBH",
    college: "TBH",
    description: "TBH",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 5,
    name: "TBH",
    college: "TBH",
    description: "TBH",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
  {
    id: 6,
    name: "TBH",
    college: "TBH",
    description: "TBH",
    image: "https://via.placeholder.com/150",
    backgroundUrl: "https://via.placeholder.com/600x400",
  },
];



  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Keynote Speakers"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

          {/* // flex flex-wrap gap-10 mb-10 */}
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="block relative border-2 border-light-border p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url(${speaker.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] items-center text-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-light-pb"
                />
                <h5 className="h5 mb-1">{speaker.name}</h5>
                <p className="text-sm text-light-st mb-3">{speaker.college}</p>
                <p className="body-2 text-light-muted">{speaker.description}</p>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-light-pb "
                style={{ clipPath: "url(#benefits)" }}
              />
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
