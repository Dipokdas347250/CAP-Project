import React from 'react';
import Container from './Container';
import Our from '../assets/Our.png';
import Our01 from '../assets/Our01.png';
import Our02 from '../assets/Our02.png';
import Our00 from '../assets/Our00.png';
import { HiCheckCircle } from 'react-icons/hi2';

const OurPricing = () => {
  return (
    <>
      <section className="py-32 px-3">
        <Container>
          <div className="text-center">
            <h3 className="font-serif font-medium text-[16px] text-[#3661FC]">Our Pricing</h3>
            <h2 className="font-serif font-bold text-[36px] text-[#000]">Our Best Pricing Plan</h2>
          </div>

          <div className="flex justify-between mt-12">
            {/* Basic Plan */}
            <div className="w-[32%]">
              <img className="ml-[180px]" src={Our} alt="Pricing Image" />
              <img className="mt-[-180px]" src={Our00} alt="Pricing Overlay" />
              <div className="mt-[-495px] ml-[50px]">
                <h3 className="font-serif font-bold text-[24px] text-[#000]">Basic Plan</h3>
                <div className="flex gap-10 mt-3 items-center">
                  <div className="flex">
                    <h6 className="font-serif font-bold text-[16px] text-[#3661FC]">$</h6>
                    <h2 className="font-serif font-bold text-[36px] text-[#3661FC]">30</h2>
                  </div>
                  <h4 className="font-serif font-medium text-[16px] text-[#000]">Per Month</h4>
                </div>
                
                {/* Features */}
                <div className="mt-8 ml-[50%] translate-x-[-50%] mr-[-50px]">
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
                    <h3 className="font-serif font-bold text-[36px] text-[#000] ml-[50px] mt-[30px] cursor-pointer duration-300 ease-in-out hover:text-[#FE651B]">Choose Plan</h3>
                </div>
              </div>
              
            </div>
            <div className="w-[32%]">
              <img className="ml-[180px]" src={Our01} alt="Pricing Image" />
              <img className="mt-[-180px]" src={Our00} alt="Pricing Overlay" />
              <div className="mt-[-495px] ml-[50px]">
                <h3 className="font-serif font-bold text-[24px] text-[#000]">Basic Plan</h3>
                <div className="flex gap-10 mt-3 items-center">
                  <div className="flex">
                    <h6 className="font-serif font-bold text-[16px] text-[#3661FC]">$</h6>
                    <h2 className="font-serif font-bold text-[36px] text-[#3661FC]">60</h2>
                  </div>
                  <h4 className="font-serif font-medium text-[16px] text-[#000]">Glod Plan</h4>
                </div>
                
                {/* Features */}
                <div className="mt-8 ml-[50%] translate-x-[-50%] mr-[-50px]">
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
                    <h3 className="font-serif font-bold text-[36px] text-[#FE651B] ml-[50px] mt-[30px] cursor-pointer duration-300 ease-in-out hover:text-[#000]">Choose Plan</h3>
                </div>
              </div>
              
            </div>
            <div className="w-[32%]">
              <img className="ml-[180px]" src={Our02} alt="Pricing Image" />
              <img className="mt-[-180px]" src={Our00} alt="Pricing Overlay" />
              <div className="mt-[-495px] ml-[50px]">
                <h3 className="font-serif font-bold text-[24px] text-[#000]">Silver Plan</h3>
                <div className="flex gap-10 mt-3 items-center">
                  <div className="flex">
                    <h6 className="font-serif font-bold text-[16px] text-[#3661FC]">$</h6>
                    <h2 className="font-serif font-bold text-[36px] text-[#3661FC]">99</h2>
                  </div>
                  <h4 className="font-serif font-medium text-[16px] text-[#000]">Per Month</h4>
                </div>
                
                {/* Features */}
                <div className="mt-8 ml-[50%] translate-x-[-50%] mr-[-50px]">
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
                    <h3 className="font-serif font-bold text-[36px] text-[#000] ml-[50px] mt-[30px] cursor-pointer duration-300 ease-in-out hover:text-[#FE651B]">Choose Plan</h3>
                </div>
              </div>
              
            </div>
            

            {/* Placeholder Divs for Other Plans */}
            
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurPricing;
