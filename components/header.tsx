import React from "react";

const Header = () => {
  return (
    <main className="">
      <div className="lg:flex hidden justify-between items-center w-full bg-emerald-400 lg:px-40 py-5">
        <div>Kits On Earth</div>
        <div>
            <ul className="flex justify-evenly items-center gap-x-12">
                <li>About</li>
                <li>Events</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>Learn More</div>
      </div>
    </main>
  );
};

export default Header;
