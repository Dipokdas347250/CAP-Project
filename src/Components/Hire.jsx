import React from 'react'
import Container from './Container'
import { TbBrandReact } from "react-icons/tb";


const Hire = () => {
  return (
    <>
    <section className='lg:px-60 px-3 py-20 bg-[#1A1A1A]'>
        <Container>
             <div className=" lg:px-[75px] px-5 lg:py-[77px] py-5 bg-[#3661FC] rounded-3xl">
               <div className="lg:flex justify-between items-center">
               <div className="lg:w-[75%] w-full">
                 <div className="flex items-center gap-3">
                   <TbBrandReact className='font-serif font-medium text-[16px] text-[#FE651B]' />
                   <h3 className='font-serif font-medium text-[16px] text-[#fff]'>We Are Hire</h3>
                </div>
                <h2 className='font-serif font-medium text-[36px] text-[#fff]'>Tell us About Your Business, We
                   are Ready to Solve.</h2>
                 </div>
                 <div className="lg:w-[25%] w-full">
                 <div className="py-4 px-9 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-center rounded-full mt-7">
            <h3 className='font-serif font-medium text-[16px] text-[#fff]'>Contact Us</h3>
        </div>
                 </div>
               </div>
             </div>
        </Container>
    </section>
    </>
  )
}

export default Hire