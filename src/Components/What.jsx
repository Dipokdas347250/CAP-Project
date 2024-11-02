import React from 'react'
import Container from './Container'
import Say from "../assets/Say.png"
import Icon000 from "../assets/Icon000.png"
import { TbBrandReact } from "react-icons/tb";
import { FaStar } from "react-icons/fa";


const What = () => {
  return (
    <section className=' py-28 px-3'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[40%]">
                   <div className="flex justify-between relative after:absolute after:contain-[''] after:top-0 after:right-[-130px] after:h-[100%] after:w-2 after:bg-[#3661FC] ">
                    <div className="">
                        <img className='mt-20' src={Say} alt="" />
                        <img className='mt-20' src={Say} alt="" />
                    </div>
                    <div className="">
                    <img src={Say} alt="" />
                    <img className='mt-20' src={Say} alt="" />
                    <img className='mt-20' src={Say} alt="" />
                    </div>
                    <div className="">
                    <img  className='mt-20' src={Say} alt="" />
                    <img  className='mt-20' src={Say} alt="" />
                    </div>
                   </div>
                </div>
                <div className="w-[40%]">
               <div className=" ">
               <div className="flex items-center gap-3">
                   <TbBrandReact className='font-serif font-medium text-[16px] text-[#FE651B]' />
                   <h3 className='font-serif font-medium text-[16px] text-[#3661FC]'>Testimonial</h3>
                </div>
                <h2 className='font-serif font-bold text-[42px] text-[#000]'>What Our Client Say</h2>
                <div className=" flex justify-between items-center mt-7">
                    <img src={Icon000} alt="" />
                    <div className="flex py-3 px-2 bg-[#D7DFFE] gap-2 rounded-full text-[#FCC013]">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                    </div>
                </div>
                <div className="">
                    <p className='font-serif font-medium text-[16px] text-[#000] mt-8'>There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte our, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing.</p>
                    <h2 className='font-serif font-bold text-[22px] text-[#000] mt-10'>Kristin Waon</h2>
                    <h3 className='font-serif font-medium text-[16px] text-[#000]'>Web Designer</h3>
                </div>
                </div>
               </div>
            </div>
        </Container>
    </section>
  )
}

export default What