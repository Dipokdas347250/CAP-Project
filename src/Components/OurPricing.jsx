import React from 'react';
import Container from './Container';
import Our from '../assets/Our.png';
import Our01 from '../assets/Our01.png';
import Our02 from '../assets/Our02.png';
import Our00 from '../assets/Our00.png';
import { HiCheckCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const OurPricing = () => {
  return (
    <>
      <section className="py-32 px-3">
        <Container>
          <div className="text-center">
            <h3 className="font-serif font-medium text-[16px] text-[#3661FC]">Our Pricing</h3>
            <h2 className="font-serif font-bold text-[36px] text-[#000]">Our Best Pricing Plan</h2>
          </div>

           <Link to="./Pricing">
          <div className="flex justify-between mt-12">
           <div className="w-[32%]">
              <div className="bg-plan bg-cover bg-no-repeat w-[464px] h-[606px] relative ">
                <img className=" absolute top-[12px] right-[3px] -z-50   " src={Our} alt="Pricing Image" />
              
              <div className=" pt-8 px-11">
                <h3 className="font-serif font-bold text-[24px] text-[#000]">Basic Plan</h3>
                <div className="flex gap-10 mt-3 items-center">
                  <div className="flex">
                    <h6 className="font-serif font-bold text-[16px] text-[#3661FC]">$</h6>
                    <h2 className="font-serif font-bold text-[36px] text-[#3661FC]">30</h2>
                  </div>
                  <h4 className="font-serif font-medium text-[16px] text-[#000]">Per Month</h4>
                </div>
                
                {/* Features */}
                <div className=" ml-[50%] translate-x-[-50%] mt-[76px] ">
                  {[
                    'Free Consultations',
                    'Business Planning',
                    'Investment Process',
                    'Market Research',
                    'Online Support',
                    'Unlimited Updates'
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-3 items-center mt-4">
                      <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B]" />
                      <h4 className="font-serif font-medium text-[16px] text-[#000]">{feature}</h4>
                    </div>
                  ))}
                </div>
                <div className="">
                    <h3 className="font-serif font-bold text-[36px] text-[#000] text-center   mt-12 cursor-pointer duration-300 ease-in-out hover:text-[#FE651B]">Choose Plan</h3>
                </div>
              </div>
              </div>
              
            </div>
           <div className="w-[32%]">
              <div className="bg-plan bg-cover bg-no-repeat w-[464px] h-[606px] relative ">
                <img className=" absolute top-[12px] right-[3px] -z-50   " src={Our01} alt="Pricing Image" />
              
              <div className=" pt-8 px-11">
                <h3 className="font-serif font-bold text-[24px] text-[#000]">Basic Plan</h3>
                <div className="flex gap-10 mt-3 items-center">
                  <div className="flex">
                    <h6 className="font-serif font-bold text-[16px] text-[#3661FC]">$</h6>
                    <h2 className="font-serif font-bold text-[36px] text-[#3661FC]">60</h2>
                  </div>
                  <h4 className="font-serif font-medium text-[16px] text-[#000]">Glod Plan</h4>
                </div>
                
                {/* Features */}
                <div className=" ml-[50%] translate-x-[-50%] mt-[76px] ">
                  {[
                    'Free Consultations',
                    'Business Planning',
                    'Investment Process',
                    'Market Research',
                    'Online Support',
                    'Unlimited Updates'
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-3 items-center mt-4">
                      <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B]" />
                      <h4 className="font-serif font-medium text-[16px] text-[#000]">{feature}</h4>
                    </div>
                  ))}
                </div>
                <div className="">
                    <h3 className="font-serif font-bold text-[36px] text-[#000] text-center   mt-12 cursor-pointer duration-300 ease-in-out hover:text-[#FE651B]">Choose Plan</h3>
                </div>
              </div>
              </div>
              
            </div>
           <div className="w-[32%]">
              <div className="bg-plan bg-cover bg-no-repeat w-[464px] h-[606px] relative ">
                <img className=" absolute top-[12px] right-[3px] -z-50   " src={Our02} alt="Pricing Image" />
              
              <div className=" pt-8 px-11">
                <h3 className="font-serif font-bold text-[24px] text-[#000]">Silver Plan</h3>
                <div className="flex gap-10 mt-3 items-center">
                  <div className="flex">
                    <h6 className="font-serif font-bold text-[16px] text-[#3661FC]">$</h6>
                    <h2 className="font-serif font-bold text-[36px] text-[#3661FC]">99</h2>
                  </div>
                  <h4 className="font-serif font-medium text-[16px] text-[#000]">Glod Plan</h4>
                </div>
                
                {/* Features */}
                <div className=" ml-[50%] translate-x-[-50%] mt-[76px] ">
                  {[
                    'Free Consultations',
                    'Business Planning',
                    'Investment Process',
                    'Market Research',
                    'Online Support',
                    'Unlimited Updates'
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-3 items-center mt-4">
                      <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B]" />
                      <h4 className="font-serif font-medium text-[16px] text-[#000]">{feature}</h4>
                    </div>
                  ))}
                </div>
                <div className="">
                    <h3 className="font-serif font-bold text-[36px] text-[#000] text-center   mt-12 cursor-pointer duration-300 ease-in-out hover:text-[#FE651B]">Choose Plan</h3>
                </div>
              </div>
              </div>
              
            </div>
            
            
            
          </div>
           </Link>
        </Container>
      </section>
    </>
  );
};

export default OurPricing;
