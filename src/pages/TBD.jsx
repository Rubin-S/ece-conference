import React from "react";
import Section from "../components/common/Section"; // Assuming Section component is used for layout

const TBDPage = () => {
  return (
    <Section crosses className="!px-0 !py-20 h-screen">
      <div className="flex container text-center justify-center items-center flex-col h-full">
        <h1 className="text-4xl font-semibold text-light-pt mb-5">
          Page Coming Soon
        </h1>
        <p className="text-lg text-light-st">
          This page is currently under construction. Stay tuned for updates!
        </p>
      </div>
    </Section>
  );
};

export default TBDPage;
