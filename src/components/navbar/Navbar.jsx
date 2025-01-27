import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileview,setMobileView]=useState(false);
  return (
    <nav className="bg-zinc-700 p-3 text-zinc  flex justify-between items-center ">
      <a
        href="#"
        className=" flex items-center hover:text-white  justify-between "
      >
        <img
          src="https://img.freepik.com/free-vector/detailed-travel-logo-template_23-2148614916.jpg?semt=ais_incoming"
          alt=""
          className="h-10 mr-2 rounded-lg "
        />
        <span className="ml-2 font-semibold text-2xl">Travel Companion</span>
      </a>

     

      <div  className={`${
          mobileview ? "block" : "hidden"
        }  lg:flex lg:items-center lg:gap-6  `}>
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

      <div className="text-gray-800 mx-6 items-center justify-center   ">
        <a className="mx-3 hover:text-white" href="">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <button className="lg:hidden m-3 text-gray-800 flex  hover:text-white " onClick={()=>setMobileView(!mobileview)} >
          <FontAwesomeIcon className="" icon={faBars} />
        </button>
        <button>
        <FontAwesomeIcon className="ml-4 hover:text-white" icon={faUser} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
