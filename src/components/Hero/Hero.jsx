"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
// import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import heroImage from '../../../public/hero2.png';
import heroImage1 from '../../../public/heroimage.png';
import Reveals from '@/utils/Reveals/Reveals';


const Hero = () => {
    return (
        <section className='lsm:bg-[url("/heroimage.png")] bg-no-repeat bg-center  bg-cover xl:bg-auto'>
            <div className='xl:w-[1170px] mx-auto max-w-full xl:px-0'>
                <div className='lg:pb-[154px] md:pb-[75px] pb-[55px] lg:pt-[236px] pt-[110px] md:pt-[120px]' >
                {/* <Image className='w-full h-auto absolute top-0 z-10' src={heroImage1}/> */}
                    <Reveals>
                        <h1 style={{ fontFamily: 'Bebas Neue' }} className=' w-fit text-[#FFF] text-[66px] leading-[70px] lg:text-[100px] font-normal lg:leading-[100px] tracking-[(-0.5px)] px-5 relative  z-20'> PUT YOUR FOOTPRINT IN<br />
                            <span className='' style={{
                                background: 'var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontFamily: 'Bebas Neue'
                            }}>SPACE TRAVEL</span>
                        </h1>
                    </Reveals>
                    <div className='px-5 relative z-20'>
                        <motion.button whileHover={{ background: 'none', transition: { duration: 0.8 } }} className='text-white text-lg lsm:text-[24px] font-medium flex items-center justify-between lg:gap-[67px] gap-[8px] md:gap-[20px]  md:py-[25px] py-[11px] px-[17px] md:px-[33px] border-[3px] border-white  rounded-[133.962px] lg:mt-[50px] md:mt-[30px] mt-[20px] transition-all duration-1000  w-full h-[60px] lsm:w-fit md:h-fit' style={{ fontFamily: 'Roboto', background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>Get Started <BsArrowRight className='text-[24px] font-medium' /></motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;