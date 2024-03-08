import Image from "next/image";
import { IoSunny } from "react-icons/io5";

const AboutFeatures = () => {
  return (
    <>
      <div className="bg-emerald-50 py-2 lg:flex hidden  justify-center items-center gap-4 mt-40">
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="whitespace-nowrap">Green the planet </p>
          <IoSunny />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full mt-20">
          <h2 className="lg:text-5xl text-2xl font-normal text-center  max-w-[800px]">
            We strive to protect nature for future generations
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-40 p-4 gap-8">
        <div className="flex flex-col justify-center">
          <h4 className="lg:text-2xl text-lg font-semibold mb-3">
            Lorem ipsum dolor sit.
          </h4>
          <p className="text-slate-500">
            Kits on earth has carried out so many successful projects for
            reforestation and biodiversity conservation
          </p>
          <button className="border py-2 px-4 mt-3 rounded-lg text-sm font-semibold shadow-md w-fit">
            Learn more
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/heros.png"
            alt="plant"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default AboutFeatures;
