import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileview,setMobileView]=useState(false);
  return (
    <nav className="bg-zinc-700 p-3  flex justify-between items-center ">
      <a
        href="#"
        className=" flex items-center hover:text-white  justify-between "
      >
        <img
          src="https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038157.jpg"
          alt=""
          className="h-10 mr-2 rounded-lg "
        />
        <span className="ml-2 font-semibold text-2xl">Travel Companion</span>
      </a>

      <div className="w-full max-w-sm min-w-[200px]">
  <div className="relative">
    <input className="w-full bg-transparent placeholder:text-zinc-400 text-zinc-700 text-sm border border-zinc-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-400 hover:border-zinc-300 shadow-sm focus:shadow" placeholder="Search Place of Interest" />
    <button className="absolute top-1 right-1 flex items-center rounded bg-zinc-200 py-1 px-2.5 border border-transparent text-center text-sm text-zinc transition-all shadow-sm hover:shadow focus:bg-zinc-700 focus:shadow-none active:bg-zinc-700 hover:bg-zinc-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
      </svg>
      Search
    </button>
  </div>
</div>

      <div  className={`${
          mobileview ? "block" : "hidden"
        } lg:flex lg:items-center lg:gap-6 text-white`}>
        <a href="#" className="m-1 hover:text-white ">
          Home
        </a>
        <a href="#" className="m-1  hover:text-white">
          Travel agency
        </a>
        <a href="#" className="m-1  hover:text-white">
          About
        </a>
        <a href="#" className="m-1  hover:text-white">
          Contact
        </a>
      </div>

      <div className="text-gray-800  ">
        <a className="m-3 hover:text-white" href="">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <button className="lg:hidden m-3 text-gray-800 hover:text-white " onClick={()=>setMobileView(!mobileview)} >
          <FontAwesomeIcon className="" icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
