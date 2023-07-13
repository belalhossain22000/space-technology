"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';

const Destination = () => {
    return (
        <section className='lg:flex items-center justify-center gap-5 md:mt-[60px] xl:mt-[200px] px-[30px] lg:px-[40px] xl:px-[60p]  2xl:px-[134p]'>
            <div className='lg:w-1/2 relative'>
                <img className='lg:h-[744px] lg:w-[744px]' src="/earthToy.png" alt="" />
                <img className='absolute left-[-40px] top-[-180px] w-[857px] h-[560px] ' src="/left-vector.png" alt="" />
            </div>
            <div className='relative lg:w-1/2 text-white text-center lg:text-left '>
                <h1 className='xl:text-[100px] md:text-[70px] sm:text-[50px] text-[40px] font-normal leading-[100px]'>Destinations <br />you can visit <br /> <span className='text-[#FF2C01]'>without a visa</span></h1>
                <button className='w-[168px] md:ml-[40%] sm:ml-[30%] ml-[20%] lg:ml-0 flex gap-[3px] items-center px-[24px] py-[18px]
                border-2 border-white rounded-[100px] text-lg font-medium mt-[32px]' style={{background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))"}}>
                    Contact us <BsArrowRight />
                </button>
                <img className='absolute top-[-300px] right-[-40px]' src="/minirocket.png" alt="" />
                <img className='absolute right-[-40px] w-[857px] h-[560px]' src="/right-vector.png" alt="" />
            </div>
        </section>
    );
};

export default Destination;