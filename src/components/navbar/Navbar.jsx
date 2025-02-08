import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./DropDown/Dropdown";

const items = [
  {
    t1: "Discover",
    submenu: [{ t1: "Travelers choice" }, { t1: "Travel stories" }],
  },
  { t1: "Trip", submenu: [{ t1: "Start trip" }, { t1: "My trips" }] },
  {
    t1: "Review",
    submenu: [
      { t1: "Add review" },
      { t1: "Post Photo" },
      { t1: "Add a place" },
    ],
  },
  { t1: "More" },
];

const Navbar = () => {
  const [mobileview, setMobileView] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full bg-zinc-700 justify-center items-center">
      <nav className="bg-zinc-700 p-3 w-3/4 text-zinc flex justify-between items-center">
        <a href="#" className="flex items-center hover:text-white">
          <img
            src="https://img.freepik.com/free-vector/detailed-travel-logo-template_23-2148614916.jpg?semt=ais_incoming"
            alt=""
            className="h-10 mr-2 rounded-lg"
          />
          <span className="ml-2 font-semibold text-2xl">Travel Companion</span>
        </a>

        <div
          className={`${
            mobileview ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-6 relative`}
          ref={dropdownRef}
        >
          {items.map((item, index) => (
            <div key={index} className="relative">
              <a
                href="#"
                className="m-1 hover:text-white block"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(dropdownOpen === index ? null : index);
                }}
              >
                {item.t1}
              </a>
              {item.submenu && dropdownOpen === index && (
                <Dropdown items={item.submenu} />
              )}
            </div>
          ))}
        </div>

        <div className="text-gray-800 mx-6 items-center justify-center">
          <a className="mx-3 hover:text-white" href="">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <button
            className="lg:hidden m-3 text-gray-800 flex hover:text-white"
            onClick={() => setMobileView(!mobileview)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button>
            <FontAwesomeIcon className="ml-4 hover:text-white" icon={faUser} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
