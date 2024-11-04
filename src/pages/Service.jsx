import React from 'react'
import Container from '../Components/Container'
import Serv from "../assets/Serv.png"
import How001 from "../assets/How001.png"
import How002 from "../assets/How002.png"
import How003 from "../assets/How003.png"
import What from '../Components/What'

const Service = () => {
  return (
    <>
    <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Service</h2>
        </div>
   </section>
   <section className='py-28 '>
    <Container>
    <div className="text-center">
            <h2 className=' font-serif font-semibold text-[16px] text-[#FE651B] '  >Our Services</h2>
            <h3 className=' font-serif font-bold text-[42px] text-[#000] '  >Best Quality Services</h3>
        </div>
        <div className="">
            <div className="flex justify-between py-3 px-3 items-center bg-[#F4F4FF] rounded-3xl mt-10">
                <div className="w-[35%]">
                    <img src={Serv} alt="" />
                </div>
                <div className="w-[45%]">
                    <h2  className=' font-serif font-bold text-[28px] text-[#000] '>Search Engine Optimization</h2>
                    <p className=' font-serif font-normal text-[14px] text-[#000] mt-5 '>There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.</p>
                </div>
                <div className="w-[15%]">
                    <div className="py-4 px-6 border-2 border-[#FE651B] w-[70%] rounded-full duration-300 ease-in-out hover:bg-[#FE651B] ">
                        <h3 className=' font-serif font-normal text-[16px] text-[#000] '>Read More</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="flex justify-between py-3 px-3 items-center bg-[#F4F4FF] rounded-3xl mt-10">
                <div className="w-[35%]">
                    <img src={Serv} alt="" />
                </div>
                <div className="w-[45%]">
                    <h2  className=' font-serif font-bold text-[28px] text-[#000] '>Web Design & Development</h2>
                    <p className=' font-serif font-normal text-[14px] text-[#000] mt-5 '>There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.</p>
                </div>
                <div className="w-[15%]">
                    <div className="py-4 px-6 border-2 border-[#FE651B] bg-[#FE651B] w-[70%] rounded-full duration-300 ease-in-out hover:bg-[#fff] ">
                        <h3 className=' font-serif font-normal text-[16px] text-[#000] '>Read More</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="flex justify-between py-3 px-3 items-center bg-[#F4F4FF] rounded-3xl mt-10">
                <div className="w-[35%]">
                    <img src={Serv} alt="" />
                </div>
                <div className="w-[45%]">
                    <h2  className=' font-serif font-bold text-[28px] text-[#000] '>Email and Content Marketing</h2>
                    <p className=' font-serif font-normal text-[14px] text-[#000] mt-5 '>There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.</p>
                </div>
                <div className="w-[15%]">
                    <div className="py-4 px-6 border-2 border-[#FE651B] w-[70%] rounded-full duration-300 ease-in-out hover:bg-[#FE651B] ">
                        <h3 className=' font-serif font-normal text-[16px] text-[#000] '>Read More</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="flex justify-between py-3 px-3 items-center bg-[#F4F4FF] rounded-3xl mt-10">
                <div className="w-[35%]">
                    <img src={Serv} alt="" />
                </div>
                <div className="w-[45%]">
                    <h2  className=' font-serif font-bold text-[28px] text-[#000] '>Social Media Network Marketing </h2>
                    <p className=' font-serif font-normal text-[14px] text-[#000] mt-5 '>There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.</p>
                </div>
                <div className="w-[15%]">
                    <div className="py-4 px-6 border-2 border-[#FE651B] w-[70%] rounded-full duration-300 ease-in-out hover:bg-[#FE651B] ">
                        <h3 className=' font-serif font-normal text-[16px] text-[#000] '>Read More</h3>
                    </div>
                </div>
            </div>
        </div>
        
    </Container>
   </section>

   <section className='py-28 px-3 bg-[#F4F4FF]'>
    <Container>
    <div className="text-center">
            <h2 className=' font-serif font-semibold text-[16px] text-[#3661FC] '  >Work Prosses</h2>
            <h3 className=' font-serif font-bold text-[42px] text-[#000] '  >How We Work!</h3>
        </div>
        <div className=" mt-12 flex justify-between">
            <div className="w-[32%] ">
                <div className="py-7 px-3 bg-how flex justify-between rounded-3xl ">
                  
                  <div className="w-[50%]">
                  <img className='ml-[50%] translate-x-[-50%]' src={How001} alt="" />
                  <h2 className=' font-serif font-bold text-[32px] ml-8 text-[#000] opacity-50 '>01</h2>
                  </div>
                 
                  <div className="w-[50%] mt-5">
                    <h2 className=' font-serif font-bold text-[18px] text-[#000] '>Business Planning</h2>
                    <p className=' font-serif font-normal text-[12px] text-[#000] mt-4 '>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                  </div>
                </div>
            </div>
            <div className="w-[32%] ">
                <div className="py-7 px-3 bg-how02 flex justify-between rounded-3xl ">
                  
                  <div className="w-[50%]">
                  <img className='ml-[50%] translate-x-[-50%]' src={How002} alt="" />
                  <h2 className=' font-serif font-bold text-[32px] ml-8 text-[#000] opacity-50 '>02</h2>
                  </div>
                 
                  <div className="w-[50%] mt-5">
                    <h2 className=' font-serif font-bold text-[18px] text-[#3661FC] '>Market research</h2>
                    <p className=' font-serif font-normal text-[12px] text-[#000] mt-4 '>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                  </div>
                </div>
            </div>
            <div className="w-[32%] ">
                <div className="py-7 px-3 bg-how flex justify-between rounded-3xl ">
                  
                  <div className="w-[50%]">
                  <img className='ml-[50%] translate-x-[-50%]' src={How003} alt="" />
                  <h2 className=' font-serif font-bold text-[32px] ml-8 text-[#000] opacity-50 '>03</h2>
                  </div>
                 
                  <div className="w-[50%] mt-5">
                    <h2 className=' font-serif font-bold text-[18px] text-[#000] '>Completely Solution</h2>
                    <p className=' font-serif font-normal text-[12px] text-[#000] mt-4 '>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                  </div>
                </div>
            </div>
            
        </div>
    </Container>
   </section>

   <section className='py-24  bg-supp' >
    <Container>
    <div className="text-center ">
            <h2 className=' font-serif font-semibold text-[16px] text-[#FE651B] '  >Let’s Support</h2>
            <h3 className=' font-serif font-bold text-[42px] text-[#fff] w-[50%] ml-[50%] translate-x-[-50%] '  >You need our support to have
            any projects?</h3>
            <p className=' font-serif font-medium text-[16px] text-[#fff] w-[60%] ml-[50%] translate-x-[-50%] '>Enthusiastically architect corporate metrics via enterprise methodologies. Progressively
            extend distinctive process improvements rather than parallel channels.</p>
        </div>
        <div className="w-[30%] flex justify-between mt-8 ml-[50%] translate-x-[-50%]">
            <div className="py-4 px-7 bg-[#FE651B] rounded-full">
               <h3 className=' font-serif font-medium text-[16px] text-[#fff]'>Set Free Quotes</h3>
            </div>
            <div className="py-4 px-7 bg-[#FE651B] rounded-full">
               <h3 className=' font-serif font-medium text-[16px] text-[#fff]'>Contact For Us</h3>
            </div>
            
        </div>

    </Container>
   </section>
   <What/>
    </>
  )
}

export default Service