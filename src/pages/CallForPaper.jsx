import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const CallForPapers = () => {
  return (
    <Section id="call-for-papers">
      <div className="container max-w-5xl">
        <Heading
          title="Call for Papers"
          text="We invite researchers, academicians, and industry professionals to submit original research contributions aligned with the theme of the conference."
        />

        <div className="body-2 space-y-8 text-light-pt">
          {/* Overview */}
          <div>
            <p className="text-light-muted">
              The{" "}
              <strong>
                International Conference on Data-Driven Approaches to Dynamical
                Systems and Computational Modeling
              </strong>{" "}
              provides a platform to present cutting-edge research, innovative
              methodologies, and emerging applications in the fields of system
              dynamics and computational modeling. We welcome submissions from
              all over the world.
            </p>
          </div>

          {/* Topics of Interest */}
          <div>
            <h3 className="h4 mb-2">Topics of Interest</h3>
            <ul className="list-disc list-inside text-light-muted space-y-1">
              <li>Data-driven techniques for dynamical systems</li>
              <li>Computational modeling in physical and biological systems</li>
              <li>Machine learning applications in system dynamics</li>
              <li>Modeling and simulation of engineering systems</li>
              <li>Nonlinear dynamics and chaos theory</li>
              <li>Big data analytics for system control and optimization</li>
              <li>Stochastic processes in dynamical systems</li>
              <li>
                Applications in robotics, climate modeling, and other domains
              </li>
            </ul>
          </div>

          {/* Submission Guidelines */}
          <div>
            <h3 className="h4 mb-2">Submission Guidelines</h3>
            <p className="text-light-muted">
              Authors are invited to submit original, unpublished manuscripts
              that are not under consideration for publication elsewhere. All
              papers must be written in English and follow the conference
              formatting guidelines.
            </p>
            <p className="text-light-muted mt-2">
              Submissions will undergo a rigorous peer-review process. Accepted
              papers will be presented during the conference and may be included
              in the official conference proceedings.
            </p>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="h4 mb-2">Important Dates</h3>
            <ul className="list-disc list-inside text-light-muted space-y-1">
              <li>
                <strong>Paper Submission Deadline:</strong> 15th February 2026
              </li>
              <li>
                <strong>Notification of Acceptance:</strong> 20th March 2026
              </li>
              <li>
                <strong>Camera-Ready Submission:</strong> 5th April 2026
              </li>
              <li>
                <strong>Conference Dates:</strong> 15th–16th May 2026
              </li>
            </ul>
          </div>

          {/* Submission Link */}
          <div>
            <h3 className="h4 mb-2">Submit Your Paper</h3>
            <p className="text-light-muted">
              Please use the submission portal linked below to upload your paper
              and track the review process.
            </p>
            <Button
              disable={true}
              href="/submission"
             >
              TBD
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CallForPapers;
