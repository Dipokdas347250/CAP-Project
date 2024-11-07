import React from 'react'
import Container from '../Components/Container'
import Port from "../assets/Port.png"
import { Link, useNavigate } from 'react-router-dom'

const Portfolio = () => {
    
    let navigate = useNavigate()

    let handlePortfolioDetails = ()=>{
        navigate("/Portfolioone")
    }


  return (
   <>
    <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Portfolio</h2>
        </div>
   </section>

   <section className="py-32 px-3 bg-[#F4F4FF]">

   <Container>
   <div className="text-center">
                    <h3 className="font-serif font-medium text-[16px] text-[#3661FC]">Portfolio</h3>
                    <h2 className="font-serif font-bold text-[36px] text-[#000]">Our Impressive Portfolio</h2>
                </div>

                <div className=" flex justify-between mt-12">
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    
                    
                </div>
                <div className=" flex justify-between mt-8">
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    
                    
                </div>
                <div className=" flex justify-between mt-8">
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    <div className="w-[32%]">

                    <img className='w-full' src={Port} alt="" />
                    </div>
                    
                    
                </div>

              
                <div className=" w-[20%] py-6 ml-[50%] translate-x-[-50%]   text-center bg-gradient-to-r from-[#FE651B] to-[#FFAA52]  rounded-full mt-7" onClick={handlePortfolioDetails}>
            <h3 className='font-serif font-medium text-[16px] text-[#fff]'>View More Projects</h3>
        </div>
                
   </Container>
   </section>
   </>
  )
}

export default Portfolio