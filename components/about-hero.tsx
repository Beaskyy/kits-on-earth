import React from "react";

const AboutHero = () => {
  return (
    <main>
      <div className="flex justify-center items-center mt-14">
        <h2 className="m-4 text-6xl w-full lg:w-[556px] text-center">
          Join us in the{" "}
          <span className="bg-[#b0d4c0] rounded-[32px]">fight </span>for the
          environment
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 m-10">
        <div className="w-full h-40 rounded-3xl bg-[#8cdbbc]"></div>
        <div className="w-full h-80 rounded-3xl bg-[#8cdbbc]"></div>
        <div className="w-full h-96 rounded-3xl bg-[#8cdbbc]"></div>
        <div className="w-full h-80 rounded-3xl bg-[#8cdbbc]"></div>
        <div className="w-full h-40 rounded-3xl bg-[#8cdbbc]"></div>
      </div>
    </main>
  );
};

export default AboutHero;
