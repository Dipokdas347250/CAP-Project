import React from 'react'
import Container from './Container'
import Blog001 from "../assets/Blog001.png"
import { IoIosContact } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaEye } from "react-icons/fa";



const Blog = () => {
  return (
    <section className='py-28 px-3'>
        <Container>
        <div className="text-center">
            <h3 className="font-serif font-medium text-[16px] text-[#3661FC]">Our Blog</h3>
            <h2 className="font-serif font-bold text-[36px] text-[#000]">Latest Blogs & Articles</h2>
          </div>
          <div className="flex justify-between mt-10">
            <div className="w-[32%]">
                <img className=' ' src={Blog001} alt="" />
                <div className="py-4  bg-[#3661FC] w-[30%] text-center rounded-3xl mt-[-104px] relative  " >
                    <h3 className="font-serif font-bold text-[24px] text-[#fff]">09 Dec 2022</h3>
                </div>
                <div className="py-5 px-5 bg-[#F4F4FF]">
                    <div className="flex justify-between">
                        <div className="flex  items-center gap-2">
                           <IoIosContact className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">by Admin</h3>
                        </div>
                        <div className="flex  items-center gap-2">
                           <TiMessages className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">25</h3>
                        </div>
                        <div className="flex  items-center gap-2">
                           <FaEye className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">120 Views</h3>
                        </div>
                        
                    </div>
                    <div className="">
                        <h2  className="font-serif font-bold text-[22px] text-[#000] mt-5">Successful business partner have
                        a meeting and discussing</h2>
                    </div>
                </div>
            </div>
            <div className="w-[32%]">
                <img className=' ' src={Blog001} alt="" />
                <div className="py-4  bg-[#3661FC] w-[30%] text-center rounded-3xl mt-[-104px] relative  " >
                    <h3 className="font-serif font-bold text-[24px] text-[#fff]">09 Dec 2022</h3>
                </div>
                <div className="py-5 px-5 bg-[#F4F4FF]">
                    <div className="flex justify-between">
                        <div className="flex  items-center gap-2">
                           <IoIosContact className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">by Admin</h3>
                        </div>
                        <div className="flex  items-center gap-2">
                           <TiMessages className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">22</h3>
                        </div>
                        <div className="flex  items-center gap-2">
                           <FaEye className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">3611 Views</h3>
                        </div>
                        
                    </div>
                    <div className="">
                        <h2  className="font-serif font-bold text-[22px] text-[#000] mt-5">Motivated colleagues celebrating
                        corporate success together</h2>
                    </div>
                </div>
            </div>
            <div className="w-[32%]">
                <img className=' ' src={Blog001} alt="" />
                <div className="py-4  bg-[#3661FC] w-[30%] text-center rounded-3xl mt-[-104px] relative  " >
                    <h3 className="font-serif font-bold text-[24px] text-[#fff]">09 Dec 2022</h3>
                </div>
                <div className="py-5 px-5 bg-[#F4F4FF]">
                    <div className="flex justify-between">
                        <div className="flex  items-center gap-2">
                           <IoIosContact className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">by Admin</h3>
                        </div>
                        <div className="flex  items-center gap-2">
                           <TiMessages className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">25</h3>
                        </div>
                        <div className="flex  items-center gap-2">
                           <FaEye className="font-serif font-bold text-[16px] text-[#3661FC]"/>
                           <h3 className="font-serif font-medium text-[14px] text-[#000]">120 Views</h3>
                        </div>
                        
                    </div>
                    <div className="">
                        <h2  className="font-serif font-bold text-[22px] text-[#000] mt-5">Man using a tablet to a work and
                        connect with others</h2>
                    </div>
                </div>
            </div>
            
            
          </div>
        </Container>
    </section>
  )
}

export default Blog