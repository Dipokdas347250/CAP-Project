import React from 'react'
import Container from './Container'
import icon01 from "../assets/Icon01.png"
import icon02 from "../assets/Icon02.png"
import icon03 from "../assets/Icon03.png"
import video from "../assets/video.png"
import { TbBrandReact } from "react-icons/tb";


const StartNew = () => {
  return (
    <>
    <section className="pb-32 px-3">
        <Container>
            <div className="w-[80%] ml-[50%] translate-x-[-50%]">
            <div className="py-12 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] border-8 border-[#fff] rounded-full ">
               <div className=" flex justify-around items-center">
                   <div className="flex items-center gap-5">
                      <img src={icon01} alt="" />
                      <div className="">
                        <h2 className='font-serif font-bold text-[42px] text-[#fff]'>1500</h2>
                        <h3 className='font-serif font-semibold text-[16px] text-[#fff]'>Project Complate</h3>
                      </div>
                   </div>
                   <div className="flex items-center gap-5">
                      <img src={icon02} alt="" />
                      <div className="">
                        <h2 className='font-serif font-bold text-[42px] text-[#fff]'>8562</h2>
                        <h3 className='font-serif font-semibold text-[16px] text-[#fff]'>Satisfied Clients</h3>
                      </div>
                   </div>
                   <div className="flex items-center gap-5">
                      <img src={icon03} alt="" />
                      <div className="">
                        <h2 className='font-serif font-bold text-[42px] text-[#fff]'>35</h2>
                        <h3 className='font-serif font-semibold text-[16px] text-[#fff]'>Awards Win</h3>
                      </div>
                   </div>
               </div>
            </div>
            </div>
            <div className="pt-44 pb-20 bg-[#3661FC] mt-[-100px] rounded-3xl">
                <div className="flex justify-around">
                    <div className="w-[45%]">
                    <img src={video} alt="" />
                    </div>
                    <div className="w-[45%]">
                    <div className="flex items-center gap-3">
                   <TbBrandReact className='font-serif font-medium text-[16px] text-[#FE651B]' />
                   <h3 className='font-serif font-medium text-[16px] text-[#fff]'>Make an Appointment</h3>
                </div>
                     <h2 className='font-serif font-bold text-[42px] text-[#fff] mt-3'>Start New Project With Us</h2>
                     <div className=" flex justify-between">
                     <div className="w-[47%]  ">
                    <input className='h-[50px] w-full outline-none rounded-full pl-2' type="text" placeholder='Your Name*' />
                  </div>
                     <div className="w-[47%] ">
                    <input className='h-[50px] w-full outline-none  rounded-full pl-2' type="text" placeholder='Email Address' />
                  </div>
                     </div>
                     <div className="w-full mt-7  ">
                    <input className='h-[50px] w-full outline-none  rounded-full pl-2' type="text" placeholder='Email Address' />
                  </div>
                  <div className="w-full px-3  mt-7">
                    <label for="" className='text-[#fff] font-normal text-[16px]'>Your Messege :</label>
                    <textarea className='w-full h-48  resize-none  outline-none rounded-3xl pl-2 pt-2  '  ></textarea>

                  </div>
                  <div className="py-3 px-6 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] w-[25%] rounded-full mt-7">
            <h3 className='font-serif font-medium text-[16px] text-[#fff]'>Read More</h3>
        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default StartNew