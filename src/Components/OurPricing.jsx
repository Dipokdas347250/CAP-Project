import React from 'react';
import Container from './Container';
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
            <div className="lg:flex justify-between mt-12 space-y-8 lg:space-y-0">
              <div className="lg:w-[32%] w-full">
                <div className=" bg-[#3661FC] border-2 border-[#000] rounded-[20px] shadow-lg py-8 lg:px-11 pt-8 pb-8 relative overflow-hidden group duration-300 ease-in-out hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] hover:border-[#FE651B] hover:shadow-2xl hover:translate-y-[-10px]">
                  <div>
                    <h3 className="font-serif font-bold lg:text-[24px] text-[20px] text-[#fff] py-2 bg-[#000] text-center rotate-45 lg:ml-[175px] ml-[100px] lg:mt-[36px] mt-0 w-[350px]">
                      Basic Plan
                    </h3>

                   

                    {/* Features */}
                    <div className="  mt-[10px] text-[#000] space-y-4 duration-300 ease-in-out group-hover:text-[#fff]  ">
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Free Consultations</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Business Planning</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Investment Process</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Market Research</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Online Support</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Unlimited Updates</h4>
                      </div>
                     
                     
                     
                     
                    </div>

                     <div className="flex gap-5 items-center mt-8 justify-center">
                      <div className="flex ">
                        <h6 className="font-serif font-bold text-[32px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#3661FC] ">$</h6>
                        <h2 className="font-serif font-bold text-[64px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#3661FC]">30</h2>
                      </div>
                      <h4 className="font-serif font-medium text-[28px] text-[#000] duration-300 ease-in-out group-hover:text-[#fff]">Per Month</h4>
                    </div>

                    <div>
                      <button className=" py-4 px-12 rounded-full bg-[#FE651B] ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] text-center mt-12 cursor-pointer duration-300 ease-in-out group-hover:text-[#FE651B] group-hover:bg-[#3661FC] ">Choose Plan</button>
                     
                    </div>
                  </div>
                </div>


              </div>

              <div className="lg:w-[32%] w-full">
                <div className=" bg-[#3661FC] border-2 border-[#000] rounded-[20px] shadow-lg py-8 lg:px-11 pt-8 pb-8 relative overflow-hidden group duration-300 ease-in-out hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] hover:border-[#FE651B] hover:shadow-2xl hover:translate-y-[-10px]">
                  <div>
                    <h3 className="font-serif font-bold lg:text-[24px] text-[20px] text-[#fff] py-2 bg-[#000] text-center rotate-45 lg:ml-[175px] ml-[100px] lg:mt-[36px] mt-0 w-[350px]">
                      Basic Plan
                    </h3>

                   

                    {/* Features */}
                    <div className="  mt-[10px] text-[#000] space-y-4 duration-300 ease-in-out group-hover:text-[#fff]  ">
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Free Consultations</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Business Planning</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Investment Process</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Market Research</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Online Support</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Unlimited Updates</h4>
                      </div>
                     
                     
                     
                     
                    </div>

                     <div className="flex gap-5 items-center mt-8 justify-center">
                      <div className="flex ">
                        <h6 className="font-serif font-bold text-[32px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#3661FC] ">$</h6>
                        <h2 className="font-serif font-bold text-[64px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#3661FC]">60</h2>
                      </div>
                      <h4 className="font-serif font-medium text-[28px] text-[#000] duration-300 ease-in-out group-hover:text-[#fff]">Gold Plan</h4>
                    </div>

                    <div>
                      <button className=" py-4 px-12 rounded-full bg-[#FE651B] ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] text-center mt-12 cursor-pointer duration-300 ease-in-out group-hover:text-[#FE651B] group-hover:bg-[#3661FC] ">Choose Plan</button>
                     
                    </div>
                  </div>
                </div>


              </div>

              <div className="lg:w-[32%] w-full">
                <div className=" bg-[#3661FC] border-2 border-[#000] rounded-[20px] shadow-lg py-8 lg:px-11 pt-8 pb-8 relative overflow-hidden group duration-300 ease-in-out hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] hover:border-[#FE651B] hover:shadow-2xl hover:translate-y-[-10px]">
                  <div>
                    <h3 className="font-serif font-bold lg:text-[24px] text-[20px] text-[#fff] py-2 bg-[#000] text-center rotate-45 lg:ml-[175px] ml-[100px] lg:mt-[36px] mt-0 w-[350px]">
                      Silver Plan
                    </h3>

                   

                    {/* Features */}
                    <div className="  mt-[10px] text-[#000] space-y-4 duration-300 ease-in-out group-hover:text-[#fff]  ">
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Free Consultations</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Business Planning</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Investment Process</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Market Research</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Online Support</h4>
                      </div>
                      <div className=" flex justify-center gap-3 items-center">
                         <HiCheckCircle className="font-serif font-medium text-[20px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#fff]" />
                        <h4 className="font-serif font-bold text-[20px] text-center">Unlimited Updates</h4>
                      </div>
                     
                     
                     
                     
                    </div>

                     <div className="flex gap-5 items-center mt-8 justify-center">
                      <div className="flex ">
                        <h6 className="font-serif font-bold text-[32px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#3661FC] ">$</h6>
                        <h2 className="font-serif font-bold text-[64px] text-[#FE651B] duration-300 ease-in-out group-hover:text-[#3661FC]">99</h2>
                      </div>
                      <h4 className="font-serif font-medium text-[28px] text-[#000] duration-300 ease-in-out group-hover:text-[#fff]">Gold Plan</h4>
                    </div>

                    <div>
                      <button className=" py-4 px-12 rounded-full bg-[#FE651B] ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] text-center mt-12 cursor-pointer duration-300 ease-in-out group-hover:text-[#FE651B] group-hover:bg-[#3661FC] ">Choose Plan</button>
                     
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
