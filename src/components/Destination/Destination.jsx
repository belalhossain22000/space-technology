"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';

const Destination = () => {
    return (
        <section className='flex items-center mt-[157px] px-'>
            <div className='w-1/2'>
                <img className='h-[744px] w-[744px]' src="/earthToy.png" alt="" />
            </div>
            <div className='w-1/2 text-white'>
                <h1 className='text-[100px] font-normal leading-[100px]'>Destinations you can visit <span className='text-[#FF2C01]'>without a visa</span></h1>
                <button className=' flex gap-[3px] items-center px-[24px] py-[18px]
                border-2 border-white rounded-[100px] text-lg font-medium mt-[32px]' style={{background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))"}}>
                    Contact us <BsArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Destination;