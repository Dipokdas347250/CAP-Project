import React from 'react'
import Container from "../Components/Container"
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF,FaLinkedinIn ,FaTwitter ,FaYoutube  } from "react-icons/fa";




const Header = () => {
  return (
    <>
    <section className='py-3 bg-[#3661FC] px-4 lg:rounded-r-full  w-[100%] '>
        <Container>
           <div className="lg:flex ">
            <div className=" lg:w-3/5 w-full">
              <div className="lg:flex justify-between items-center">
                <h4 className=' font-serif font-medium text-[14px] text-[#fff]'>Welcome to Ortencey Digital Market Agency</h4>
                <div className="flex  items-center gap-3 ">
                   <IoCall className='font-serif font-medium text-[22px] text-[#FE651B]' />
                   <h3 className=' font-serif font-medium text-[14px] text-[#fff] '>+88 ( 5548 ) 6548</h3>
                </div>
                <div className="flex  items-center gap-3">
                    <MdMarkEmailRead className='font-serif font-medium text-[22px] text-[#FE651B]' />
                    <h4 className=' font-serif font-medium text-[14px] text-[#fff]'>infoyour@gmail.com</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
            <div className="lg:flex justify-end items-center gap-10">
                <div className="flex items-center">
                    <h1 className=' font-serif font-medium text-[14px] text-[#fff]'>English</h1>
                    <IoIosArrowDown className=' font-serif font-medium text-[20px] text-[#fff]' />
                </div>
                <div className="flex items-center gap-4">
                     <FaFacebookF className=' font-serif font-medium text-[22px] text-[#FE651B] cursor-pointer duration-500 ease-in-out hover:text-[#95ACFF]' />
                     <FaLinkedinIn className=' font-serif font-medium text-[22px] text-[#95ACFF]  cursor-pointer duration-500 ease-in-out hover:text-[#FE651B]'/>
                     <FaTwitter className=' font-serif font-medium text-[22px] text-[#95ACFF] cursor-pointer  duration-500 ease-in-out hover:text-[#FE651B]' />
                     <FaYoutube className=' font-serif font-medium text-[22px] text-[#95ACFF] cursor-pointer  duration-500 ease-in-out hover:text-[#FE651B]'  />
                </div>
            </div>
            </div>
           </div>
        </Container>
    </section>
    </>
  )
}

export default Header