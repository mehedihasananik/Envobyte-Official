"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomDropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="">
      <input
        type="text"
        value={selectedOption}
        placeholder={placeholder || "Select an option"}
        readOnly
        className="px-4 py-2 border border-gray-400 rounded-md w-full"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on input click
      />
      {isOpen && (
        <ul className=" w-full border border-gray-400 rounded-md mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
