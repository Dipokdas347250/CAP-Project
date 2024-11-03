import React from 'react'
import About from '../Components/About'
import YearsEx from '../Components/YearsEx'
import Team from '../Components/Team'
import Container from '../Components/Container'
import Best from "../assets/Best.png"
import Map from "../assets/Map.png"
import { HiCheckCircle } from "react-icons/hi2";
import Fun from "../assets/Fun.png"
import Fun01 from "../assets/Fun01.png"
import Fun02 from "../assets/Fun02.png"
import Fun03 from "../assets/Fun03.png"


const NewAbout = () => {
  return (
   <>
   <section className='py-40 bg-aboutt'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >About Us</h2>
        </div>
   </section>
        <About/>
        <YearsEx/>
        <section className='py-28'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[48%]">
                        <img src={Best} alt="" />
                    </div>
                    <div className="w-[48%]">
                        <h3 className=' font-serif font-medium text-[16px] text-[#3661FC] '>Reason of Our Success</h3>
                        <h2 className=' font-serif font-bold text-[42px] text-[#000] '>Quality & Experience Best
                        Digital Agency</h2>
                        <div className="flex gap-4 mt-7">
                            <div className="py-4 px-9 bg-[#6B6161] w-[27%] rounded-full duration-500 ease-in-out  hover:bg-[#FE651B]">
                                <h3 className=' font-serif font-medium text-[16px] text-[#fff] '>Our Mission</h3>
                            </div>
                            <div className="py-4 px-9 bg-[#FE651B] w-[27%] rounded-full duration-500 ease-in-out  hover:bg-[#6B6161]">
                                <h3 className=' font-serif font-medium text-[16px] text-[#fff] '>Our Mission</h3>
                            </div>
                            <div className="py-4 px-9 bg-[#6B6161] w-[27%] rounded-full duration-500 ease-in-out  hover:bg-[#FE651B]">
                                <h3 className=' font-serif font-medium text-[16px] text-[#fff] '>Our Mission</h3>
                            </div>
                        </div>
                        <p className=' font-serif font-medium text-[16px] text-[#000] mt-6 '>There are many variations of passages of Lorem Ipsum available, but the majori suffered alteration in some form, by injected humour, or randomised word whic look even sligh believable. If you are going to use.</p>
                        <div className="flex mt-7 gap-5 items-center">
                            <div className="">
                                <img src={Map} alt="" />
                            </div>
                            <div className="">
                                <div className="flex items-center gap-3">
                                <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                                <h4  className='font-serif font-medium text-[16px] text-[#000]' >Financial Growth System</h4>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                                <h4  className='font-serif font-medium text-[16px] text-[#000]' >Customer Oriented Program Daily</h4>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                                <h4  className='font-serif font-medium text-[16px] text-[#000]' >Dedicated Team member</h4>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                                <h4  className='font-serif font-medium text-[16px] text-[#000]' >Product ux Design & Development</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <Team/>
        <section className='py-28'>
            <Container>
                <div className="flex justify-between">
                    <div className="w-[24%]">
                        <div className="py-5 bg-[#F4F4FF] flex justify-around items-center rounded-3xl ">
                            <img src={Fun} alt="" />
                            <div className="">
                                <h2 className='font-serif font-bold text-[42px] text-[#000]'>1500+</h2>
                                <h3 className='font-serif font-medium text-[16px] text-[#000]'>Project Complete</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-[24%]">
                    <div className="py-5 bg-[#F4F4FF] flex justify-around items-center rounded-3xl ">
                            <img src={Fun01} alt="" />
                            <div className="">
                                <h2 className='font-serif font-bold text-[42px] text-[#000]'>150+</h2>
                                <h3 className='font-serif font-medium text-[16px] text-[#000]'>Happy Clients</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                    <div className="py-5 bg-[#F4F4FF] flex justify-around items-center rounded-3xl ">
                            <img src={Fun02} alt="" />
                            <div className="">
                                <h2 className='font-serif font-bold text-[42px] text-[#000]'>95+</h2>
                                <h3 className='font-serif font-medium text-[16px] text-[#000]'>Professional Team</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                    <div className="py-5 bg-[#F4F4FF] flex justify-around items-center rounded-3xl ">
                            <img src={Fun03} alt="" />
                            <div className="">
                                <h2 className='font-serif font-bold text-[42px] text-[#000]'>120+</h2>
                                <h3 className='font-serif font-medium text-[16px] text-[#000]'>Awards Win</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
   </>
  )
}

export default NewAbout