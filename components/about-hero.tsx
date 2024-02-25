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
        <div className="w-full h-40 rounded-3xl bg-[#b4d9b7] lg:mt-[120px]"></div>
        <div className="w-full h-80 rounded-3xl bg-[#b4d9b7] text-center lg:mt-8">
          <div className="p-6">
            <h5 className="text-xl font-medium mb-2">+685 trees planted</h5>
            <p>
              More than 685 trees were planted last year with the help of our
              activities
            </p>
          </div>
          <div className="bg-slate-100 py-6 px-5 translate-y-2 rounded-t-[30px] rounded-b-3xl">
            <h5 className="text-xl font-medium mb-2">6 Eductional programs</h5>
            <p>
              were launched and developed by our specialists to educate young
              people
            </p>
          </div>
        </div>
        <div
          className="w-full h-96 rounded-3xl bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/plant.jpg')" }}
        >
          <div className="flex flex-col justify-end items-center h-full p-6 font-medium text-lg">
            <p className="bg-white rounded-xl max-w-[150px] text-center">
              Share with us your results
            </p>
          </div>
        </div>
        <div className="w-full h-80 rounded-3xl bg-[#b4d9b7] lg:mt-8"></div>
        <div className="w-full h-40 rounded-3xl bg-[#b4d9b7] lg:mt-[120px]"></div>
      </div>
    </main>
  );
};

export default AboutHero;
