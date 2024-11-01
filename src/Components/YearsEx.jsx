import React from 'react'
import Container from './Container'
import { TbBrandReact } from "react-icons/tb";


const YearsEx = () => {
  return (
    <>
    <section className='py-28 bg-[#F4F4FF]'>
        <Container>
            <div className=" flex justify-between items-center">
                <div className="w-[45%]">
                <div className="flex items-center gap-3">
                   <TbBrandReact className='font-serif font-medium text-[16px] text-[#FE651B]' />
                   <h3 className='font-serif font-medium text-[16px] text-[#3661FC]'>Why Choose Ortencey</h3>
                </div>
                <div className="">
                    <h3 className='font-serif font-semibold text-[38px] text-[#000] mt-5 w-[80%]'>Reason For Choosing Our 
                    Digital Agency</h3>
                    <p className='font-serif font-medium text-[14px] text-[#000] mt-5'>There are many variations of passages of Lorem Ipsum available, but the majori suffered alteration in some form, by injected humour, or randomised word whic look even sligh believable. If you are going to use.</p>
                </div>
                <div className=" flex justify-between items-center mt-6 relative after:absolute after:contain-[''] after:bottom-[-20px] after:left-0 after:h-2 after:w-full after:bg-[#CCCCCC] after:rounded-full before:absolute before:contain-[''] before:bottom-[-18px] before:left-0 before:h-1 before:w-[85%] before:bg-[#3661FC] before:z-50 before:rounded-full">
                    <h3 className='font-serif font-medium text-[16px] text-[#000]'>Software Development</h3>
                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>85%</h4>
                </div>
                <div className=" flex justify-between items-center mt-16 relative after:absolute after:contain-[''] after:bottom-[-20px] after:left-0 after:h-2 after:w-full after:bg-[#CCCCCC] after:rounded-full before:absolute before:contain-[''] before:bottom-[-18px] before:left-0 before:h-1 before:w-[95%] before:bg-[#3661FC] before:z-50 before:rounded-full">
                    <h3 className='font-serif font-medium text-[16px] text-[#000]'>Web Development</h3>
                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>95%</h4>
                </div>
                <div className=" flex justify-between items-center mt-16 relative after:absolute after:contain-[''] after:bottom-[-20px] after:left-0 after:h-2 after:w-full after:bg-[#CCCCCC] after:rounded-full before:absolute before:contain-[''] before:bottom-[-18px] before:left-0 before:h-1 before:w-[80%] before:bg-[#3661FC] before:z-50 before:rounded-full">
                    <h3 className='font-serif font-medium text-[16px] text-[#000]'>UL / UX Design</h3>
                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>80%</h4>
                </div>
                </div>
                <div className="w-[45%]">
                    <div className="pt-[337px] pb-[30px] px-[120px] bg-[#CCCCCC] rounded-3xl">
                      <div className="flex items-center gap-5 py-6 px-10  bg-[#fff] rounded-full">
                        <h1 className='font-serif font-bold text-[42px] text-[#FE651B]'>25</h1> 
                        <h2 className='font-serif font-bold text-[22px] text-[#000]'>Years Experience</h2>
                      </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default YearsEx