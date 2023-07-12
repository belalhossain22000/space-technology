"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';

const UltimateExperience = () => {
    return (
        <section className='flex items-center w-full px-[134px] mt-[138px] pb-[377px] px-[134p]'>
            <div className='w-1/2 text-white'>
                <h1 className='text-[80px] font-normal leading-[85px]'>Ultimate Experience  for <br /><span className='text-[#FE780E]'>outer space Travel</span> </h1>
                <p className='text-lg font-normal leading-[30px] '>Get the latest space exploration, innovation and astronomy <br /> news. Space.com celebrates humanity's ongoing expansion br
                    across the final frontier.</p>
                <button className=' flex gap-[3px] items-center px-[24px] py-[18px]
                border-2 border-white rounded-[100px] text-lg font-medium mt-[32px]' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>
                    Contact us <BsArrowRight />
                </button>
            </div>
            <div className='w-1/2'>
                <img className='w-[616px] h-[838px]' src="/moontoy-2.png" alt="" />
            </div>
        </section>
    );
};

export default UltimateExperience;