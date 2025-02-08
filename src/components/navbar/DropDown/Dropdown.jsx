import React from "react";

const Dropdown = ({ items }) => {
  return (
    <ul className="absolute z-50 bg-white text-black shadow-lg mt-1 rounded-md py-2 w-40">
      {items.map((item, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-200">
          <a href="#">{item.t1}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
