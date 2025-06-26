import React from 'react'
import Container from '../Components/Container'
import ta from "../assets/Team01.png"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom';
import Team from '../Components/Team';


    

const TeamMain = () => {
   
  return (
    <>
    <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Team</h2>
        </div>
   </section>
   <section className="py-32 px-3 bg-[#F4F4FF]">
   <Container>
              <Team/>
            </Container>
   </section>
    </>
  )
}

export default TeamMain