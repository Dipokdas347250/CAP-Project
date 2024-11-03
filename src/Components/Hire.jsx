import React from 'react'
import Container from './Container'
import { TbBrandReact } from "react-icons/tb";


const Hire = () => {
  return (
    <>
    <section className='px-60 py-20 bg-[#1A1A1A]'>
        <Container>
             <div className=" px-[75px] py-[77px] bg-[#3661FC] rounded-3xl">
               <div className="flex justify-between items-center">
               <div className="w-[75%]">
                 <div className="flex items-center gap-3">
                   <TbBrandReact className='font-serif font-medium text-[16px] text-[#FE651B]' />
                   <h3 className='font-serif font-medium text-[16px] text-[#fff]'>We Are Hire</h3>
                </div>
                <h2 className='font-serif font-medium text-[36px] text-[#fff]'>Tell us About Your Business, We
                   are Ready to Solve.</h2>
                 </div>
                 <div className="w-[25%]">
                 <div className="py-3 px-6 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] w-[68%] rounded-full mt-7">
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