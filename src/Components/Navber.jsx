import React, {  useState } from 'react'
import Container from './Container'
import logo from "../assets/Icon.png"
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiCrossedBones } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";




const Navber = () => {

    let [show , setShow] = useState (()=>{

  })
  return (
    <>
    <section className=' py-5 px-4 rounded-l-full bg-[#F4F4FF]  w-[100%] absolute '>
        <Container>
        <div className="flex justify-between items-center">
            <div className="w-[25%]">
                <div className="flex items-center gap-7">
                    <img src={logo} alt="" />
                    <p> Digital Marketing</p>
                </div>
            </div>
           <div className="flex justify-between items-center  ">
             <div className=" flex justify-center items-center space-x-16">
                <ul className={` lg:flex justify-center items-center z-50  text-center lg:gap-8 lg:py-0 py-6 lg:px-0 px-3  absolute lg:static duration-700 ease-in-out ${show == true ? " bg-slate-300 w-full top-[100px] left-0  " : "  w-full top-[-700px] left-[0px] " }`}>
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#FE651B] duration-500 ease-in-out hover:text-[#1A1A1A] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[45px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        
                        <Link to="./">Home</Link>
                    </li>
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        <Link to="./NewAbout">Abouts</Link>
                    </li>
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        <Link to="./Service">Service</Link>
                    </li>
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[40px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        <Link to="./TeamMain">Team</Link>
                    </li>
                   
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[40px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                       <Link to="./Shop">Shop</Link>
                    </li>
                   
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[40px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>News</li>
                    <li className=' relative lg:mt-0 mt-4 font-serif font-medium text-[16px] text-[#1A1A1A] duration-500 ease-in-out hover:text-[#FE651B] cursor-pointer after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                        <Link to="./Contact">Contact</Link>
                    </li>
            <div className="flex justify-between space-x-12 items-center lg:mt-0 mt-10 ">
               <div className="">
               <div className="flex gap-6 justify-end">
                    <div className="py-4 px-4 border-2 border-[#000] rounded-full">
                        <IoIosSearch className='text-[22px]' />
                    </div>
                    <div className="py-4 px-4  border-2 border-[#000] rounded-full">
                        <HiOutlineShoppingBag className='text-[22px]' />
                    </div>
                    
                </div>
               
               </div>
               <div className="">
               <div className="py-4 px-10 bg-[#3661FC] rounded-full flex justify-around items-center">
                <h3 className=' font-serif font-medium text-[16px] text-[#fff] '>Free Quote</h3>
                        <FaLongArrowAltRight className=' font-serif font-medium text-[20px] text-[#fff] ' />
                    </div>
               </div>
            </div>
                </ul>
            </div>
              <div className=" lg:hidden cursor-pointer  " onClick={()=>setShow(!show)}>
                {show == true ? <GiCrossedBones/> : <FaBars/>}
              
              
              </div>
           </div>
        </div>
           
        
        </Container>
    </section>
    </>
  )
}

export default Navber