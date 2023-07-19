"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
// import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Reveals from '@/utils/Reveals/Reveals';


const Hero = () => {
    return (
        <section className='bg-[url("/heroimage.png")] bg-no-repeat bg-cover bg-center  '>
            <div className='xl:w-[1170px] mx-auto max-w-full px-6 xl:px-0'>
                <div className='lg:pb-[154px] md:pb-[75px] pb-[55px] lg:pt-[236px] pt-[110px] md:pt-[120px]' >
                    <Reveals>
                        <h1 style={{ fontFamily: 'Bebas Neue' }} className=' w-fit text-[#FFF] text-[43px] leading-[43px] md:text-[65px] md:leading-[70px] lg:text-[100px] font-normal lg:leading-[100px] tracking-[(-0.5px)]'> PUT YOUR FOOTPRINT IN<br />
                            <span className='' style={{
                                background: 'var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontFamily: 'Bebas Neue'
                            }}>SPACE TRAVEL</span>
                        </h1>
                    </Reveals>

                    <motion.button whileHover={{ background: 'none' }} className='text-white text-[24px] font-medium flex items-center lg:gap-[67px] gap-[8px] md:gap-[20px]  md:py-[25px] py-[11px] px-[17px] md:px-[33px] border-[3px] border-white  rounded-[133.962px] lg:mt-[50px] md:mt-[30px] mt-[20px]' style={{ fontFamily: 'Roboto', background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>Get Started <BsArrowRight className='text-[24px] font-medium' /></motion.button>
                </div>
            </div>
        </section>
    );
};

export default Hero;