import Container from "@/Components/Container/Container";
import Image from "next/image";
import React from "react";

import { HiArrowSmallRight } from "react-icons/hi2";

const Portfolio = () => {
  return (
    <div className="py-10 ">
      <Container>
        <div>
          <h3 className="text-[32px] text-[#0F172A] xl:text-[48px] font-bold font-Raleway">
            Our Amazing Portfolio
          </h3>
        </div>
        <div className="flex flex-col gap-10 md:flex-row justify-between py-4  pt-5">
          <div>
            <h3 className="text-[16px] text-[#666666]">
              Our beautiful work you need to know!
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 text-[#9E9E9E] text-[16px] ">
            <div className="flex gap-10">
            <button className="text-[#FA8D59] font-bold  transition-all">All</button>
            <button className="hover:text-[#FA8D59] transition-all">
              Graphic Design
            </button>
            <button className="hover:text-[#FA8D59] transition-all">
              Web Development
            </button>
            </div>
         <div className="flex gap-10">
         <button className="hover:text-[#FA8D59] transition-all whitespace-nowrap">
              App Development
            </button>
         <button className="hover:text-[#FA8D59] transition-all">
              Marketing
            </button>
            <button className="hover:text-[#FA8D59] transition-all ">
              Video & Animation
            </button>
         </div>
          </div>
        </div>
        {/* card */}
        <div>
          {/* 1st row */}
          <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
            {/* 1st row 1st column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="w-[350.45px] h-[420px]"
                  src="/assets/portfolio1.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                <div className="text-center">
                <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                App & Web Development
                  </h4>
                  <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                    Visuel Agency <br /> Photo Brand
                  </h3>
                  <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <button className=" text-[14px]  ">Read More </button>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* 1st row 2nd column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="w-[350.45px] h-[420px]"
                  src="/assets/portfolio2.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                <div className="text-center">
                <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                App & Web Development
                  </h4>
                  <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                    Visuel Agency <br /> Photo Brand
                  </h3>
                  <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <button className=" text-[14px]  ">Read More </button>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col md:flex-row  gap-10 justify-between pt-10 pb-5 ">
            {/* 2nd row 1st column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="w-[350.45px] h-[420px] portfolio-bgHover"
                  src="/assets/portfolio3.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                <div className="text-center">
                <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                App & Web Development
                  </h4>
                  <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                    Visuel Agency <br /> Photo Brand
                  </h3>
                  <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <button className=" text-[14px]  ">Read More </button>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
            {/* 2nd row 2nd column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="w-[350.45px] h-[420px]"
                  src="/assets/portfolio4.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                <div className="text-center">
                <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                App & Web Development
                  </h4>
                  <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                    Visuel Agency <br /> Photo Brand
                  </h3>
                  <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <button className=" text-[14px]  ">Read More </button>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <button className="text-[16px] bg-[#FF693B] px-10 py-3 text-white rounded-xl border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
            View All Portfolio
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;