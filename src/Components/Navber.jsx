import React from 'react'
import Container from './Container'
import logo from "../assets/Icon.png"
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Navber = () => {
  return (
    <>
    <section className=' py-5 bg-[#F4F4FF]'>
        <Container>
        <div className="flex justify-between items-center">
            <div className="w-[25%]">
                <div className="flex items-center gap-7">
                    <img src={logo} alt="" />
                    <p> Digital Marketing</p>
                </div>
            </div>
            <div className="w-[45%]">
                <ul className='flex justify-around items-center'>
                    <li className=' relative font-serif font-medium text-[16px] text-[#FE651B] duration-500 ease-in-out hover:text-[#1A1A1A] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[45px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        <Link to="./">Home</Link>
                    </li>
                    <li className=' relative font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        <Link to="./NewAbout">Abouts</Link>
                    </li>
                    <li className=' relative font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>Service</li>
                    <li className=' relative font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[40px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>Team</li>
                    <li className=' relative font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[40px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>News</li>
                    <li className=' relative font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>Contact</li>
                </ul>
            </div>
            <div className="w-[30%] flex justify-between">
               <div className="w-[45%]">
               <div className="flex gap-6 justify-end">
                    <div className="py-4 px-4 border-2 border-[#000] rounded-full">
                        <IoIosSearch className='text-[22px]' />
                    </div>
                    <div className="py-4 px-4  border-2 border-[#000] rounded-full">
                        <HiOutlineShoppingBag className='text-[22px]' />
                    </div>
                    
                </div>
               
               </div>
               <div className="w-[45%]">
               <div className="py-4 px-4 bg-[#3661FC] rounded-full flex justify-around items-center">
                <h3 className=' font-serif font-medium text-[16px] text-[#fff] '>Free Quote</h3>
                        <FaLongArrowAltRight className=' font-serif font-medium text-[20px] text-[#fff] ' />
                    </div>
               </div>
            </div>
        </div>
        </Container>
    </section>
    </>
  )
}

export default Navber