import Section from "../components/common/Section";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath.jsx";


const ContactUs = () => {
  return (
    <Section
      crosses
      className="!px-0 !py-10 h-screen flex flex-col justify-center items-center"
    >
      <div className="container max-sm:px-4">
        <h2 className="text-center text-3xl font-semibold mb-8">Contact Us</h2>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <div
            className="block relative border-2 border-light-border p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-2xl overflow-hidden"
          >
            <div className="relative z-2 flex flex-col p-[2.4rem] items-center text-center">
              <h5 className="h5 mb-1">Dr. Naveen Raj</h5>
              <p className="text-sm text-light-st mb-3">Organizing Secretary</p>
              <p className="body-2 text-light-muted">
                Phone: +91-7358455415
                <br />
                Email:{" "}
                <a href="mailto:naveenraj.r@nitpy.ac.in">
                  naveenraj.r@nitpy.ac.in
                </a>
              </p>
            </div>

            <GradientLight />

            <div
              className="absolute inset-0.5 bg-light-pb "
              style={{ clipPath: "url(#benefits)" }}
            />
            <ClipPath />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
