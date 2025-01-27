import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Slide = () => {
  const slide = [
    {
      URL: "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      URL: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      URL: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      URL: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [index, setIndex] = useState(0);

  const goLeft = () => {
    const firstslide = index === 0;

    const newIndex = firstslide ? slide.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goRight = () => {
    const lastSilde = index == slide.length - 1;

    const newIndex = lastSilde ? 0 : index + 1;
    setIndex(newIndex);
  };
  return (
    <div className="flex items-center rounded-md justify-center h-4/6 relative">
    {/* Background Image */}
    <div
      style={{ backgroundImage: `url(${slide[index].URL})` }}
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
    ></div>
  
    {/* Search Bar */}
    <div className="relative z-10 w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          className="w-full bg-white placeholder:text-zinc-400 text-zinc-700 text-sm border border-zinc-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-400 hover:border-zinc-300 shadow-sm focus:shadow"
          placeholder="Search Place of Interest"
        />
        <button
          className="absolute top-1 right-1 flex items-center rounded bg-zinc-200 py-1 px-2.5 border border-transparent text-center text-sm text-zinc transition-all shadow-sm hover:shadow focus:bg-zinc-700 focus:shadow-none active:bg-zinc-700 hover:bg-zinc-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  
    {/* Navigation Buttons */}
    <button
      onClick={goLeft}
      className="absolute left-4 z-10 bg-white bg-opacity-50 rounded-full p-2"
    >
      <FontAwesomeIcon icon={faChevronLeft} className="h-6" />
    </button>
    <button
      onClick={goRight}
      className="absolute right-4 z-10 bg-white bg-opacity-50 rounded-full p-2"
    >
      <FontAwesomeIcon icon={faChevronRight} className="h-6" />
    </button>
  </div>
  
  );
};

export default Slide;
