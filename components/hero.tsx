import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="lg:px-40 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="">
          <h1 className="text-4xl lg:text-7xl font-bold">
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
        <div className="flex justify-center items-center lg:ml-20">
          <Image
            src="/images/hero-img.png"
            alt="hero-image"
            width="600"
            height="600"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
