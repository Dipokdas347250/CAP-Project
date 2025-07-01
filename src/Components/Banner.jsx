import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
   <>
   <section className=' bg-banner  bg-cover bg-center bg-repeat  lg:py-60 py-40 px-4 w-full '>
    <Container>
    <div className="lg:w-1/2 w-full">
        <div className="">
            <h5 className='font-serif font-medium text-[16px] text-[#FE651B]'>Your Trusted Ortencey Agency</h5>
            <h1 className='font-serif font-bold text-[48px] text-[#fff]'>Our Digital Agency With
            Excellence Services</h1>
            <p className=' w-[70%] font-serif font-medium text-[14px] text-[#fff]'>The 3 golden rules professional Digital Marketing Agency don’t
            want you to know about.</p>
        </div>
        <div className="py-3 px-6 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] lg:w-[25%] rounded-full mt-9">
            <h3 className='font-serif font-medium text-[16px] text-center text-[#fff]'>Discover More</h3>
        </div>
    </div>
    </Container>
   </section>
   </>
  )
}

export default Banner