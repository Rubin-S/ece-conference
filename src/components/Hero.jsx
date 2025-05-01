import Button from "./common/Button";
import Section from "./common/Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[7.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h2 className="h2 mb-4 md:mb-8">International Conference on</h2>
          <h1 className="h4 mb-6">
            Data-Driven Approaches to Dynamical Systems and Computational
            Modeling
          </h1>
          <p className="h1 max-w-3xl mx-auto mb-6 text-light-st lg:mb-8">
            15th-16th May 2026
          </p>
          <Button
            href="../assets/CONFERENCE.pdf"
            download={true}
            target="_blank"
            className="mx-4 md:mx-8"
          >
            Download brochure
          </Button>
          <Button href="/call-for-papers" className="mx-4 md:mx-8">
            Conference Schedule
          </Button>
        </div>
        

        <section className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-light-altBg rounded-[1rem]">
              <div className="aspect-[33/60] md:aspect-[688/490] lg:aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden relative">
                {/* Fixed layout: flex-column center alignment */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-light-pt md:mb-[5rem] text-[2rem] font-bold md:text-[3.5rem] lg:text-[5rem] mb-4">
                    Conference Overview
                  </h1>
                  <p className="text-light-st text-[1rem] font-medium md:text-[1.25rem] lg:text-[1.5rem] sm:text-[1rem] max-w-3xl leading-snug">
                    This conference aims to bring together leading researchers,
                    scientists, and practitioners in the fields of dynamical
                    systems, computational modeling, and data-driven approaches.
                    The event will provide a platform for discussing
                    cutting-edge methodologies, trends, and innovations in
                    modeling complex systems across various disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <BackgroundCircles />
        </section>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
