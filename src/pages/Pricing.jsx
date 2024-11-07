import React from 'react'
import OurPricing from '../Components/OurPricing'
import Container from '../Components/Container'
import Pri from "../assets/Pri.png"
import Pri01 from "../assets/Pri01.png"
import Pri02 from "../assets/Pri02.png"
import Pri03 from "../assets/Pri03.png"
import Pri04 from "../assets/Pri04.png"

const Pricing = () => {
  return (
   <>
   <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Pricing</h2>
        </div>
   </section>
   <OurPricing/>

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
  <section className=' py-14 px-3'>
  <Container>
    <div className="flex justify-between">
        <div className="w-[19%]">

         <img src={Pri} alt="" />
        </div>
        <div className="w-[19%]">

        <img src={Pri01} alt="" />
        </div>
        <div className="w-[19%]">

        <img src={Pri02} alt="" />
        </div>
        <div className="w-[19%]">

        <img src={Pri03} alt="" />
        </div>
        <div className="w-[19%]">

        <img src={Pri04} alt="" />
        </div>
         
        
         
        
    </div>
   </Container>
  </section>
   </>
  )
}

export default Pricing