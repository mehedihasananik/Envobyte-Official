// Accordion.js
"use client"
import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="py-2 rounded-md ">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full bg-[#F8FAFC] rounded-md py-3 px-4 font-semibold"
      >
        <div className="flex items-center gap-3 ">
          <RiEdit2Fill />
          <span className="text-[#334155] text-[20px]">{title}</span>
        </div>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className=" overflow-hidden text-[16px] px-4 py-0  bg-[#F8FAFC]">
          <p className="py-3 pb-8">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
