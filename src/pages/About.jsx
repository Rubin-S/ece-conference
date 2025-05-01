import Section from "../components/common/Section";
import Heading from "../components/common/Heading";

const About = () => {
  return (
    <Section id="about">
      <div className="container max-w-5xl">
        <Heading
          title="About Us"
          text="A collaborative initiative by NIT Puducherry, India and Politecnico di Torino, Italy—advancing global research in dynamical systems and computational modeling."
        />

        <div className="body-2 space-y-8 text-light-pt">
          {/* About the Conference */}
          <div>
            <p className="text-light-muted">
              The{" "}
              <strong>
                International Conference on Data-Driven Approaches to Dynamical
                Systems and Computational Modeling
              </strong>{" "}
              is a collaborative initiative organized by the{" "}
              <strong>
                National Institute of Technology Puducherry (NITPY)
              </strong>
              , India, in association with the{" "}
              <strong>Politecnico di Torino</strong>, Italy. This event unites
              two prestigious institutions dedicated to advancing research and
              innovation in applied sciences and engineering.
            </p>
          </div>

          {/* About NITPY */}
          <div>
            <h3 className="h4 mb-2">
              National Institute of Technology Puducherry (NITPY)
            </h3>
            <p className="text-light-muted">
              NIT Puducherry, located in the Union Territory of Puducherry,
              India, is an Institute of National Importance under the Ministry
              of Education, Government of India. With a strong emphasis on
              academic excellence, cutting-edge research, and interdisciplinary
              collaboration, NITPY has emerged as a hub for innovation in
              engineering and technology education.
            </p>
          </div>

          {/* About Politecnico di Torino */}
          <div>
            <h3 className="h4 mb-2">Politecnico di Torino, Italy</h3>
            <p className="text-light-muted">
              Politecnico di Torino, one of Italy’s most renowned technical
              universities, has a long-standing reputation for excellence in
              engineering, architecture, and applied sciences. It is globally
              recognized for its pioneering work in computational modeling,
              systems theory, and data-driven research.
            </p>
          </div>

          {/* Collaboration Summary */}
          <div>
            <h3 className="h4 mb-2">Global Collaboration & Vision</h3>
            <p className="text-light-muted">
              Together, NITPY and Politecnico di Torino bring a wealth of
              expertise and global perspectives to this conference, aiming to
              foster international collaboration and drive forward the frontiers
              of dynamical systems, machine learning applications, and
              computational modeling across diverse scientific and engineering
              domains.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
