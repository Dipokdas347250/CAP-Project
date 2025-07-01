import React from 'react'
import Container from './Container'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import Foo from "../assets/Foo.png"
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";





const Footer = () => {
  return (
   <>
   <section className='py-20 px-3 bg-footer'>
    <Container>
      <div className="lg:flex justify-between items-center space-y-8 lg:space-y-0">
         <div className="lg:w-[70%] w-full">
            <h2 className='font-serif font-medium text-[16px] text-[#fff]'>For Digital Marketing Agency</h2>
            <h3 className='font-serif font-bold text-[28px] text-[#fff]'>Join Our Agency Community</h3>
         </div>
         <div className="lg:w-[30%] w-full text-end ">
            
            <div className="flex justify-between items-center py-3 px-3 bg-[#fff] rounded-full ">
            
            <div className="">
            <h4 className='font-serif font-normal text-[14px] text-[#000]'>Enter your email address</h4>
            </div>
            <div className="py-4 px-3 bg-[#3661FC] rounded-full">
            <h4 className='font-serif font-medium text-[14px] text-[#fff]'>Subscribe Now</h4>
            </div>

            </div>
         </div>
      </div>
      <div className="lg:flex justify-between mt-28">
        <div className="lg:w-[24%] w-full">
            <h2 className='font-serif  font-bold text-[28px] text-[#fff] relative after:absolute after:contain-[""] after:bottom-[-10px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>About Company</h2>
            <p className='font-serif font-normal text-[14px] text-[#fff] mt-9'>There are many variations of passages of Lore Ipsum availab but the majority have suffereds alteration in some form, by injected humour a randomised words which</p>
<div className="flex gap-4 mt-5 ">
                <a className=' bg-[#F4F4FF] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#3661FC] ' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                <a className=' bg-[#3661FC] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#F4F4FF]' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                <a className=' bg-[#F4F4FF] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#3661FC]' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                <a className=' bg-[#F4F4FF] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#3661FC]' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>



              </div>
        </div>
        <div className="lg:w-[24%] w-full">
        <h2 className='font-serif  font-bold text-[28px] text-[#fff] relative after:absolute after:contain-[""] after:bottom-[-10px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Featured Services</h2>
        <ul>
            <li className='font-serif font-normal text-[14px] text-[#fff] duration-500 ease-in-out hover:text-[#3661FC] mt-9 ml-4 relative after:absolute after:contain-[""] after:top-[4px] after:left-[-16px] after:h-[10px] after:w-[10px] after:bg-[#3661FC] after:rounded-full '>Social Media Marketing</li>
            <li className='font-serif font-normal text-[14px] text-[#3661FC] duration-500 ease-in-out hover:text-[#fff] mt-4 ml-4 relative after:absolute after:contain-[""] after:top-[4px] after:left-[-16px] after:h-[10px] after:w-[10px] after:bg-[#3661FC] after:rounded-full '>Pay Per Click Management</li>
            <li className='font-serif font-normal text-[14px] text-[#fff] duration-500 ease-in-out hover:text-[#3661FC] mt-4 ml-4 relative after:absolute after:contain-[""] after:top-[4px] after:left-[-16px] after:h-[10px] after:w-[10px] after:bg-[#3661FC] after:rounded-full '>Search Engine Optimization</li>
            <li className='font-serif font-normal text-[14px] text-[#fff] duration-500 ease-in-out hover:text-[#3661FC] mt-4 ml-4 relative after:absolute after:contain-[""] after:top-[4px] after:left-[-16px] after:h-[10px] after:w-[10px] after:bg-[#3661FC] after:rounded-full '>Free SEO Analysis</li>
            <li className='font-serif font-normal text-[14px] text-[#fff] duration-500 ease-in-out hover:text-[#3661FC] mt-4 ml-4 relative after:absolute after:contain-[""] after:top-[4px] after:left-[-16px] after:h-[10px] after:w-[10px] after:bg-[#3661FC] after:rounded-full '>Case Studies</li>
        </ul>
        </div>
        <div className="lg:w-[24%] w-full">
        <h2 className='font-serif  font-bold text-[28px] text-[#fff] relative after:absolute after:contain-[""] after:bottom-[-10px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Recent Post</h2>
        <div className="flex gap-4 mt-9 items-center">
            <img src={Foo} alt="" />
            <div className="w-[50%]">
                <h2 className='font-serif  font-normal text-[14px] text-[#fff] '>Thoughtful man using
                laptop pondering </h2>
                <h3 className='font-serif  font-normal text-[12px] text-[#fff] '>09 Dec 2022</h3>
            </div>
        </div>
        <div className="flex gap-4 mt-7 items-center">
            <img src={Foo} alt="" />
            <div className="w-[50%]">
                <h2 className='font-serif  font-normal text-[14px] text-[#fff] '>Young man with a lap
                top in a business </h2>
                <h3 className='font-serif  font-normal text-[12px] text-[#fff] '>09 Dec 2022</h3>
            </div>
        </div>
        </div>
        <div className="lg:w-[24%] w-full">
        <h2 className='font-serif  font-bold text-[28px] text-[#fff] relative after:absolute after:contain-[""] after:bottom-[-10px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Contact Us</h2>
        <div className="mt-9">
            <div className=" flex gap-4">
                <IoMdCall className='font-serif  font-bold text-[20px] text-[#3661FC]'/>
                <h4 className='font-serif  font-bold text-[14px] text-[#fff]'>+8801712345678</h4>
            </div>
            <div className=" flex gap-4 mt-5">
                <MdMail className='font-serif  font-bold text-[20px] text-[#3661FC]'/>
                <h4 className='font-serif  font-bold text-[14px] text-[#fff]'>infoyourortencey@gmail.com</h4>
            </div>
            <div className=" flex gap-4 mt-5 items-center">
                <FaLocationDot className='font-serif  font-bold text-[20px] text-[#3661FC]'/>
                <h4 className='font-serif  font-bold text-[14px] text-[#fff] w-[80%]'>374 FA Tower, William S Blvd, Melbourne
                2721, IL, USA</h4>
            </div>
        </div>
        </div>
      </div>
    </Container>
   </section>
   <div className=" py-4 px-3 w-full bg-[#3661FC]">
        <Container>
            <div className=" lg:flex justify-between">
                <h2 className='font-serif  font-bold text-[14px] text-[#fff] '>2022 © All rights reserved by devsnest-llc</h2>
                <h3 className='font-serif  font-bold text-[14px] text-[#fff] '>Privacy Policy       |       Terms & Conditions</h3>
            </div>
        </Container>
   </div>
   </>
  )
}

export default Footer