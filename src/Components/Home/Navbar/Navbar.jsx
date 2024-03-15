import Container from '@/Components/Container/Container'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <Container>
        {/* navbar started */}
      <nav className="flex justify-between items-center pt-5 ">
        {/* logo */}
          <div>
            <Image  src="/assets/logo.png"  width={159} height={49} alt="Picture of the logo"/>
          </div>
          {/* nav items */}
          <div className="flex items-center gap-10 text-[#1E1E24]">
            <ul className="flex gap-10">
              <li className="cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300">
                Home
              </li>
              <li className="cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300">
                Services
              </li>
              <li className="cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300">
                Portfolio
              </li>
              <li className="cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300">
                About Us
              </li>
            </ul>
            {/* nav button */}
            <button className=" bg-[#FF693B] border border-[#FF693B] text-white font-medium px-10 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300">
              Login
            </button>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar