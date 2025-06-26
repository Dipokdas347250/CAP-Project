import React from 'react'
import Container from '../Components/Container'
import { FaSearch ,FaStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

import Cart from "../assets/Cart.png"
import { Link ,useNavigate } from 'react-router-dom';








const Shop = () => {

    let navigate = useNavigate();
  
    
  return (
    <>
    <section className='py-40 bg-[#CCCCCC]'>
        <div className="text-center">
            <h2 className=' font-serif font-bold text-[42px] text-[#000] '  >Shop</h2>
        </div>
   </section>

   <section className='py-28 px-3 '>
    <Container>
      <div className="flex justify-between">
        <div className="w-[29%]">
            <div className="py-8 px-8 border-2 border-[#FE651B] rounded-3xl">
                <h2 className=' font-serif font-bold text-[26px] text-[#000] relative after:absolute after:contain-[""] after:bottom-[-5px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Search</h2>

                <div className="flex items-center mt-6">
                <input className='h-14 w-full bg-gradient-to-r from-[#FE651B] to-[#FFAA52] px-3 items-center rounded-full outline-none relative' type="text" placeholder='Search' />
                  
                   <FaSearch className=' absolute left-[300px] text-[#fff] text-[20px]'/>
                </div>
            </div>

            <div className="py-8 px-8 border-2 border-[#FE651B] rounded-3xl mt-8">
            <h2 className=' font-serif font-bold text-[26px] text-[#000] relative after:absolute after:contain-[""] after:bottom-[-5px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Price Range</h2>
            <div className="flex items-center relative after:absolute after:contain-[''] after:top-[30px] after:left-0 after:h-[3px] after:w-[100%] after:bg-[#CCCCCC] before:absolute before:contain-[''] before:left-[40px] before:top-[28px] before:h-[6px] before:w-[30%] before:bg-[#3661FC] before:z-50 before:rounded-full">
                <h4 className='font-serif font-bold text-[16px] text-[#000] mt-12 '>Price : </h4>
                <h5 className='font-serif font-normal text-[14px] text-[#000] mt-12 '> $100.00 - $1200.00</h5>
            </div>
            </div>


            <div className="py-8 px-8 border-2 border-[#FE651B] rounded-3xl mt-8">
            <h2 className=' font-serif font-bold text-[26px] text-[#000] relative after:absolute after:contain-[""] after:bottom-[-5px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Product categories</h2>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Accessories </h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (65)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Books </h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (08)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Computer & Gaming </h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (55)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Office Appliances</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (41)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Laptops</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (21)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Mobiles</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (32)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Tablets</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (47)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Televisions</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (32)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Uncategorized</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (22)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Washing Machine</h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (18)</h5>
            </div>
            
            </div>


            <div className="py-8 px-8 border-2 border-[#FE651B] rounded-3xl mt-8">
            <h2 className=' font-serif font-bold text-[26px] text-[#000] relative after:absolute after:contain-[""] after:bottom-[-5px] after:left-0 after:h-[3px] after:w-[30%] after:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] '>Availability</h2>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>In Stock </h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (3660)</h5>
            </div>
            <div className="flex justify-between items-center text-[#000] duration-300 ease-in-out cursor-pointer hover:text-[#3661FC] ">
                <h4 className='font-serif font-normal text-[16px]  mt-4 '>Out of Stock </h4>
                <h5 className='font-serif font-normal text-[14px]  mt-4 '> (260)</h5>
            </div>
            </div>
        </div>
        <div className="w-[69%]">
            <div className="flex justify-between items-center px-3">
                <h2 className=' font-serif font-normal text-[14px] text-[#000] ' >Showing 1-16 of 17 results</h2>
                <div className="flex items-center py-4 px-5 bg-[#CCCCCC] gap3">
                    <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Default Sorting</h3>
                    <IoMdArrowDropdown/>
                </div>
            </div>
           
            
            <div className="flex justify-between mt-5">
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                    
                     
                       <div className=" py-4  w-full bg-[#fff] rounded-full mt-7" onClick={()=>{navigate("/Addyocart")}} >
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000]  " >
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                       
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between mt-5">
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between mt-5">
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="py-8 px-8 bg-[#F4F4FF]  rounded-2xl">
                        <div className=" flex justify-between items-center">
                            <button className= ' py-1 px-2 rounded-2xl bg-[#3661FC] font-serif font-medium text-[14px] text-[#fff] '>New</button>
                            <div className="">
                                <h3 className=' font-serif font-normal text-[14px] text-[#000] '>Reviews (18)</h3>
                                <div className="flex gap-0 text-[#FCC013]">
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                     <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <img src={Cart} alt="" />
                        </div>
                        <div className="mt-8">
                            <h4 className=' font-serif font-semibold text-[14px] text-[#3661FC]'>Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h4>
                            <h3 className=' font-serif font-bold text-[16px] text-[#000] mt-4'>$2000</h3>
                        </div>
                        <div className=" py-4  w-full bg-[#fff] rounded-full mt-7">
                             <div className="flex items-center ml-[50%] translate-x-[-50%] font-serif font-bold text-[16px] text-[#000] ">
                                <MdOutlineShoppingBag/>
                                <h3>Add to Cart</h3>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
      </div>
    </Container>
   </section>
    </>
  )
}

export default Shop