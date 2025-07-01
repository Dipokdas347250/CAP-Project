import React from 'react'
import Container from './Container'
import Add from "../assets/Add.png"
import { TbBrandReact } from "react-icons/tb";
import { HiCheckCircle } from "react-icons/hi2";
import Add01 from "../assets/Add01.png"
import Add02 from "../assets/Add02.png"
import Add03 from "../assets/Add03.png"
import Add04 from "../assets/Add04.png"
import Add001 from "../assets/Add001.png"


const About = () => {
  return (
    <>
       <section className='py-32 px-3'>
           <Container>
             <div className="container mx-auto"> {/* Replace Container with div if you don't have a Container component */}
                <div className="lg:flex justify-between">
                    <div className="lg:w-[45%] w-full">
                        <img src={Add} alt="Main" />
                    </div>
                    <div className="lg:w-[45%] w-full mt-9">
                        <div className="flex items-center gap-3">
                            <TbBrandReact className='text-[16px] text-[#FE651B]' />
                            <h3 className='font-serif font-medium text-[16px] text-[#3661FC]'>About Our Company</h3>
                        </div>
                        <div>
                            <h2 className='font-serif font-medium text-[38px] text-[#000] mt-5'>
                                Best Digital Marketing Agency For People
                            </h2>
                            <p className='font-serif font-medium text-[14px] text-[#000] mt-5'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[50%]">
                                <div className="flex items-center gap-3 mt-5">
                                    <HiCheckCircle className='text-[20px] text-[#FE651B]' />
                                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>Digital Strategy</h4>
                                </div>
                                <div className="flex items-center gap-3 mt-5">
                                    <HiCheckCircle className='text-[20px] text-[#FE651B]' />
                                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>Marketing</h4>
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <div className="flex items-center gap-3 mt-5">
                                    <HiCheckCircle className='text-[20px] text-[#FE651B]' />
                                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>SEO Optimization</h4>
                                </div>
                                <div className="flex items-center gap-3 mt-5">
                                    <HiCheckCircle className='text-[20px] text-[#FE651B]' />
                                    <h4 className='font-serif font-medium text-[16px] text-[#000]'>First Working Proc</h4>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-6 bg-gradient-to-r from-[#FE651B] to-[#FFAA52] lg:w-[25%] text-center rounded-full mt-9">
                            <h3 className='font-serif font-medium text-[16px] text-[#fff]'>Read More</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-32 lg:flex justify-between space-y-5 lg:space-y-0 gap-6">
                    {[ 
                        { img: Add01, title: 'Graphics Design', color: '#000' },
                        { img: Add02, title: 'Web Developer', color: '#3661FC' },
                        { img: Add03, title: 'Digital Marketing', color: '#000' },
                        { img: Add04, title: 'App Design', color: '#000' }
                    ].map((item, idx) => (
                        <div key={idx} className="lg:w-[24%] w-full">
                            <img src={item.img} alt={item.title} />
                            <img className='mt-[-180px] ' src={Add001} alt="" />
                            <div className="py-7 px-8 lg:w-[342px] bg-[#F4F4FF] rounded-b-2xl hover:text-[#3661FC]">
                                <h2 className={`font-serif font-semibold text-[22px]`} style={{ color: item.color }}>
                                    {item.title}
                                </h2>
                                <p className='font-serif font-medium text-[14px] text-[#000]'>
                                    Contrary to popular belief, Lorem Ips is not simply random text. It has roots in classical literature.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           </Container>
        </section>
    </>
  )
}

export default About