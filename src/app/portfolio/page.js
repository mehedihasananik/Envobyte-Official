"use client"
import Container from '@/Components/Container/Container'
import CustomDropdown from '@/utilites/CustomDropdown';
import React, { useState } from 'react'
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FaAngleDown } from "react-icons/fa6";

const PortfolioPage = () => {


  return (
    <div>
      <Container>
        <div className=''>
          {/* title */}
          <div className='pt-5 md:pt-14'>
            <h1 className='text-[30px] md:text-[48px] font-Raleway font-bold'>Our Amazing Portfolio</h1>
          </div>
          {/* service slections */}
          <div>
            <div className="flex  items-center justify-between ">
              <CustomDropdown options={["Option 1", "Option 2", "Option 3"]} placeholder="Dropdown 1" />
              <CustomDropdown options={["Option A", "Option B", "Option C"]} placeholder="Dropdown 2" />
              <CustomDropdown options={["Apple", "Banana", "Orange"]} placeholder="Dropdown 3" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PortfolioPage