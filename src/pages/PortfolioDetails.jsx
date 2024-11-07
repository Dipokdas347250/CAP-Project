import React from 'react'
import Container from '../Components/Container'
import PortD from "../assets/PortD.png"
import Port00 from "../assets/Port00.png"
import { HiCheckCircle } from "react-icons/hi2";
import Port01 from "../assets/Prot01.png"
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSkype } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";






const PortfolioDetails = () => {
  return (
   <>
    <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Portfolio Details</h2>
        </div>
   </section>
   <section className="py-32 px-3 bg-[#F4F4FF]">
        <Container>
            <div className="">
              <img src={PortD} alt="" />
            </div>
            <div className="mt-12 flex justify-around bg-[#CCCCCC] rounded-3xl">
                <div className="w-[32%] py-5 px-5   items-center ">
                    <div className="flex items-center gap-7 ">
                        <h3 className="font-serif font-bold text-[18px] text-[#000]">Start Date :</h3>
                        <h3 className="font-serif font-medium text-[14px] text-[#000] opacity-60">15 Dec 2022 </h3>
                    </div>
                    <div className="flex items-center gap-7 mt-4 ">
                        <h3 className="font-serif font-bold text-[18px] text-[#000]">End Date :</h3>
                        <h3 className="font-serif font-medium text-[14px] text-[#000] opacity-60">12 Jan 2023</h3>
                    </div>
                    
                </div>
                <div className="w-[32%] py-5 px-5   items-center ">
                    <div className="flex items-center gap-7 ">
                        <h3 className="font-serif font-bold text-[18px] text-[#000]">Client :</h3>
                        <h3 className="font-serif font-medium text-[14px] text-[#000] opacity-60">Jiyatan Raw </h3>
                    </div>
                    <div className="flex items-center gap-7 mt-4 ">
                        <h3 className="font-serif font-bold text-[18px] text-[#000]">Tags :</h3>
                        <h3 className="font-serif font-medium text-[14px] text-[#000] opacity-60">Digital Agency</h3>
                    </div>
                    
                </div>
                <div className="w-[32%] py-5 px-5   items-center ">
                    <div className="flex items-center gap-7 ">
                        <h3 className="font-serif font-bold text-[18px] text-[#000]">Website :</h3>
                        <h3 className="font-serif font-medium text-[14px] text-[#000] opacity-60">jiyatanraw.com</h3>
                    </div>
                    <div className="flex items-center gap-7 mt-4 ">
                        <h3 className="font-serif font-bold text-[18px] text-[#000]">Category :</h3>
                        <h3 className="font-serif font-medium text-[14px] text-[#000] opacity-60">Agency</h3>
                    </div>
                    
                </div>
            </div>

            <div className="mt-12">
                <h2 className="font-serif font-bold text-[20px] text-[#000]">Human Figurines Using Ladder to Reach Cracked lit Lightbulb as an Idea</h2>
                <p className="font-serif font-normal text-[14px] text-[#000] mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look as even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the as Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictiona ry of over Latin words need to as be sure there isn't anything as embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
            </div>

            <div className="flex justify-between mt-14">
                <div className="w-[48%] ">
                    <div className="flex justify-between">
                    <div className="w-[50%]">
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >Research beyond the business plan</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >Customer Oriented Program Daily</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >The ability to turnaround consulting</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >Customer engagement matters</h4>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >Research beyond the business plan</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >Customer Oriented Program Daily</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >The ability to turnaround consulting</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                        <HiCheckCircle  className='font-serif font-medium text-[20px] text-[#FE651B]' />
                        <h4  className='font-serif font-medium text-[14px] text-[#000]' >Customer engagement matters</h4>
                        </div>
                    </div>
                    </div>
                    <div className=" flex justify-between mt-14">
                        <div className="w-[48%]">
                        <img src={Port01} alt="" />
                        </div>
                        <div className="w-[48%]">
                        <img src={Port01} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="w-[48%]">
                    <div className="w-[90%] justify-self-end">
                    <div className="py-8 px-7 bg-[#fff] rounded-2xl mt-7 drop-shadow-lg">
                        <h2 className="font-serif font-bold text-[20px] text-[#000] relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[3px] after:w-[20%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52]">Need Your Help?</h2>
                        <div className="flex justify-between items-center">
                        <div className="w-[48%]">
                        <div className="flex  items-center gap-3 mt-7 ">
                   <IoCall className='font-serif font-medium text-[22px] text-[#FE651B]' />
                   <h3 className=' font-serif font-medium text-[14px] text-[#000] '>+88 ( 5548 ) 6548</h3>
                </div>
                <div className="flex  items-center gap-3 mt-7">
                    <MdMarkEmailRead className='font-serif font-medium text-[22px] text-[#FE651B]' />
                    <h4 className=' font-serif font-medium text-[14px] text-[#000]'>infoyour@gmail.com</h4>
                </div>
                            </div>
                        <div className="w-[48%]">
                        <div className="flex  items-center gap-3 mt-7 ">
                   <FaSkype className='font-serif font-medium text-[22px] text-[#FE651B]' />
                   <h3 className=' font-serif font-medium text-[14px] text-[#000] '>Abubokkor AK</h3>
                </div>
                <div className="flex  items-center gap-3 mt-7">
                    <FaLocationDot className='font-serif font-medium text-[22px] text-[#FE651B]' />
                    <h4 className=' font-serif font-medium text-[14px] text-[#000]'>374 FA Tower, William S Blvd
                    2721, IL, USA</h4>
                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="mt-12">
                        <p className=' font-serif font-medium text-[14px] text-[#000]'>There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour, or randomised words which do look as even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                        <p className=' font-serif font-medium text-[14px] text-[#000] mt-11'>Hidden in the middle of text. All the as Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Inte rnet. It uses a dictionary of over Latin words need to as be sure</p>
                    </div>
                </div>
            </div>

            <div className=" mt-20">
                <h2 className="font-serif font-bold text-[32px] text-[#000]">Our Similar Projects</h2>
                <div className="flex justify-around mt-10">
                    <div className="w-[32%]">
                         <img  src={Port00} alt="" />
                    </div>
                    <div className="w-[32%]">
                         <img src={Port00} alt="" />
                    </div>
                    <div className="w-[32%]">
                         <img src={Port00} alt="" />
                    </div>
                </div>
            </div>
        </Container>
   </section>
   </>
  )
}

export default PortfolioDetails