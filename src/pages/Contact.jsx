import React from 'react'
import Container from '../Components/Container'

const ShopDetails = () => {
  return (
  <>
  <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Contact us</h2>
        </div>
   </section>

   <section className='py-28 px-3 '>
    <Container>
       <div className="">
        <div className="w-[50%]">
          <div className="py-14 px-16 bg-[#F4F4FF] rounded-3xl">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '>Contact With Us</h2>
            <p className=' font-serif font-normal text-[16px] text-[#000] '>Send us a message and we' ll respond as soon as possible</p>
            <div className="flex justify-between mt-10">
               <div className="w-[48%]">
               <div className="items-center mt-6">
               <input className='h-14 w-full bg-[#fff] px-6 items-center rounded-full outline-none relative' type="text" placeholder='First Name' />
               </div>
               </div>
               <div className="w-[48%]">
               <div className="items-center mt-6">
               <input className='h-14 w-full bg-[#fff] px-6 items-center rounded-full outline-none relative' type="text" placeholder='Last Name' />
               </div>
               </div>
                  
                   
                </div>
            <div className="flex justify-between mt-5">
               <div className="w-[48%]">
               <div className="items-center">
               <input className='h-14 w-full bg-[#fff] px-6 items-center rounded-full outline-none relative' type="text" placeholder='Email Address*' />
               </div>
               </div>
               <div className="w-[48%]">
               <div className="items-center">
               <input className='h-14 w-full bg-[#fff] px-6 items-center rounded-full outline-none relative' type="text" placeholder='Phone Number*' />
               </div>
               </div>
                  
                   
                </div>
                <div className="items-center mt-5">
               <input className='h-14 w-full bg-[#fff] px-6 items-center rounded-full outline-none relative' type="text" placeholder='Subject*' />
               </div>
                <div className=" mt-5">
                 <label htmlFor="">Your Message here</label>
               <input className='h-[200px] w-full bg-[#fff] px-6 items-center rounded-3xl outline-none relative' type="text"  />
               </div>
               <div className="h-14 py-3 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] mt-10 rounded-3xl text-center ">
                <h3 className=' font-serif font-bold text-[16px] text-[#000] '>Send Message</h3>
               </div>
          </div>
        </div>
        <div className="w-[50%]"></div>
       </div>
    </Container>
   </section>
  </>
  )
}

export default ShopDetails