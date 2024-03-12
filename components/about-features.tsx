import Image from "next/image";
import { IoSunny } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "./footer";

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

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-40 lg:py-10 p-4 gap-8">
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
      <div className="lg:px-40 p-4">
        <p className="border border-slate-800 w-fit py-1 px-4 rounded-full">
          Our Projects
        </p>
        <p className="mt-4 lg:text-6xl font-light text-slate-600 lg:leading-[72px]">
          We hold various events, campaigns and raise funds for implementation
          of projects to preserve{" "}
          <span className="bg-[#E8F5E9] px-4 rounded-full whitespace-nowrap">
            the environment
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:p-40 gap-4">
        <div className="col-span-2 bg-gray-100 rounded-xl p-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-3xl lg:w-80 mb-4 font-light">
                Cleaning up the Sango River
              </h4>
              <p className="lg:w-72 text-md mb-7">
                Our team is actively working to clean up sango river from
                pollution in order to restore its natural beauty
              </p>
              <button className="flex justify-center items-center gap-4">
                Read more{" "}
                <span className="flex justify-center items-center bg-white w-8 h-8 rounded-full p-2">
                  <BsArrowUpRight />
                </span>
              </button>
            </div>
            <div>
              <Image
                src="/images/heros.png"
                alt="plant"
                width={400}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#E8F5E9] rounded-xl p-8 flex flex-col justify-between items-start">
          <h4 className="bg-white rounded-xl p-2 w-fit">Forest gardens</h4>
          <div className="flex justify-between w-full items-center gap-4">
            <button>Read more</button>
            <span className="flex justify-center items-center bg-white w-8 h-8 rounded-full p-2">
              <BsArrowUpRight />
            </span>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:px-40 gap-4 w-full">
        <div>
          <h1 className="lg:text-7xl text-4xl font-extrabold text-green-500 uppercase">
            Green
          </h1>
        </div>

        <div
          className="w-80 h-80 rounded-full bg-emerald-50 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sustainable.jpg')" }}
        ></div>
        <div>
          <h1 className="lg:text-8xl text-4xl font-extrabold uppercase">
            Campaign
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutFeatures;
