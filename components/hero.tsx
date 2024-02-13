import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="lg:px-40 px-4 bg-[#E8F5E9] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2">
        <div className="mt-20">
          <h1 className="text-4xl lg:text-7xl font-semibold">
            Empowering individuals to make a positive impact
          </h1>
          <p className="text-slate-600 mt-4">
            An environmental sustainability organization with a mission to
            reduce landfill waste and empower individuals to make a positive
            impact. Exchange waste for money, food, medical assistance,
            vouchers, or new products.
          </p>
          <button className="bg-emerald-700 text-white px-6 py-3 rounded-full mt-6">
            Save the Planet
          </button>
        </div>
        <div className="flex justify-start items-end lg:ml-20 rounded-3xl">
          <Image
            src="/images/hero.jpg"
            alt="hero-image"
            width="600"
            height="600"
            className="rounded-3xl"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
