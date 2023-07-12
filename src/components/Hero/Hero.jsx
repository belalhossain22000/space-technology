"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    return (
        <section className='px-[134px] h-[800px]  w-full bg-[url("/heroimage.png")] bg-no-repeat bg-cover '>
            <div className=''>

                <h1 className='uppercase pt-[236px] text-white text-[100px] font-normal leading-[100px] tracking-[0.5px]'>put your footprint in <br /> <span className='text-[#FF5A09]'>space travel</span></h1>
                <button className='text-white text-[24px] font-medium flex items-center gap-[67px] py-[25px] px-[33px] border-[3px] border-white  rounded-[133.962px] mt-[50px]' style={{background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))"}}>Get Started <BsArrowRight className='text-[24px] font-medium'/></button>
            </div>
        </section>
    );
};

export default Hero;