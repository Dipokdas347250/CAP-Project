import React from 'react'
import Container from './Container'
import ta from "../assets/Team01.png"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#3BB9FF] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] right-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#3BB9FF] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] left-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
       <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
      </div>
     
    );
  }


const Team = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    }
    return (
        <section className="py-32 px-3 bg-[#F4F4FF]">
            <Container>
                <div className="text-center">
                    <h3 className="font-serif font-medium text-[16px] text-[#3661FC]">Team Member</h3>
                    <h2 className="font-serif font-bold text-[36px] text-[#000]">Creative Team Member</h2>
                </div>
                <Link to="./Portfolio">
                
                <Slider className='mt-10 ' {...settings}>


                    <div className=" px-2">
                        <div className="py-5 px-5  bg-[#fff] rounded-3xl text-center ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Robert Sions</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Business Consultant</h4>
                            </div>

                        </div>
                    </div>
                    <div className=" px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="flex  justify-around mt-5 ">
                                <a className=' bg-[#F4F4FF] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#3661FC] ' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                                <a className=' bg-[#3661FC] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#F4F4FF]' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                                <a className=' bg-[#F4F4FF] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#3661FC]' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                                <a className=' bg-[#F4F4FF] rounded-full  text-[#000] p-[16px] duration-500 ease-in-out hover:bg-[#3661FC]' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>



                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Karikok Jahan</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Executive Manager</h4>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Dickerson MH</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Agency Analysis</h4>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Dickerson MH</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Agency Analysis</h4>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Alextina Ditarson</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Graphic Designer</h4>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">David Phillips</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Senior Manager</h4>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Robert Sions</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Business Consultant</h4>
                            </div>

                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Leslie Alexander</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Product Designer</h4>
                            </div>

                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Guy Hawkins</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">WP Developer</h4>
                            </div>

                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Guy Hawkins</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">WP Developer</h4>
                            </div>

                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Zin Denvar</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">WP Developer</h4>
                            </div>

                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-5 px-5 bg-[#fff] rounded-3xl ">
                            <img className='ml-[50%] translate-x-[-50%]' src={ta} alt="" />
                            <div className="text-center mt-5">
                                <h3 className="font-serif font-bold text-[22px] text-[#000]">Kari Rasmussen</h3>
                                <h4 className="font-serif font-medium text-[14px] text-[#000]">Executive Manager</h4>
                            </div>

                        </div>
                    </div>

                </Slider>
                </Link>
            </Container>
        </section>
    )
}

export default Team 