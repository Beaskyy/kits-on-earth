"use client";

import Link from "next/link";
import { useState } from "react";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <main className="">
      <div className="lg:flex hidden justify-between items-center w-full bg-emerald-100 lg:px-40 py-5">
        <div>Kits On Earth</div>
        <div>
          <ul className="flex justify-evenly items-center gap-x-12">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/campaigns">Campaigns</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </div>
        <div>Learn More</div>
      </div>

      {/* Mobile menu */}
      <div className="fixed lg:hidden w-full flex justify-between items-center p-4 bg-emerald-100 top-0">
        <div>Kits on Earth</div>
        <div
          className="absolute z-50 right-4 transition-all duration-300 ease-in"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <LiaTimesSolid size={30} />
          ) : (
            <LiaBarsSolid size={30} />
          )}
        </div>
        <div
          className={`bg-white min-h-screen ${
            showSidebar ? "w-72" : "w-0"
          } right-0 bottom-0 fixed transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-8 mt-16 ml-6 font-medium">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/campaigns">Campaigns</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Header;
