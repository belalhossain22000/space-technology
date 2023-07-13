"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';

const UltimateExperience = () => {
    return (
        <section className='lg:flex items-center justify-center lg:justify-start w-full mt-[138px] px-[30px] lg:px-[40px] xl:px-[60px]  2xl:pl-[134px] pb-[377px]'>
            <div className='relative text-white text-center lg:text-left'>
                <h1 className='text-[40px] lg:text-[50px] xl:text-[80px] mb-5 font-normal leading-[60px] xl:leading-[85px]'>Ultimate Experience  for <br /><span className='text-[#FE780E]'>outer space Travel</span> </h1>
                <p className='text-lg mb-[50px] font-normal leading-[30px] '>Get the latest space exploration, innovation and astronomy <br /> news. Space.com celebrates humanity's ongoing expansion <br />
                    across the final frontier.</p>
                <button className='lg:ml-0 md:ml-[40%] sm:ml-[30%] ml-[20%] flex gap-[3px] items-center px-[24px] py-[18px]
                border-2 border-white rounded-[100px] text-lg font-medium mt-[32px]' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>
                    Contact us <BsArrowRight />
                </button>
                <img className='absolute left-[-59px]' src="/minirocket-left.png" alt="" />
            </div>
            <div className='xl:mt-0 mt-[80px]'>
                <img className='lg:w-[616px] lg:h-[838px]' src="/moontoy-2.png" alt="" />
            </div>
        </section>
    );
};

export default UltimateExperience;