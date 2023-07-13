"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section animate={{
            backgroundPositionX: ['0%', '100%'],
        }}
            transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'linear',
            }} className='px-[30px] lg:px-[40px] xl:px-[60px]  2xl:px-[120px] h-[800px]  w-full bg-[url("/heroimage.png")] bg-no-repeat bg-cover bg-center '>
            <div className=''>

                <h1 className='uppercase pt-[236px] text-white text-[50px] md:text-[70px] xl:text-[100px] font-normal md:leading-[100px] leading-[50px] tracking-[0.5px]'>put your footprint in <br /> <span className='text-[#FF5A09]'>space travel</span></h1>
                <motion.button whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.9 }} animate={{
                        x: ['-20px', '20px'],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 1,
                    }} className='text-white text-[24px] font-medium flex items-center md:gap-[67px] gap-[40px] md:py-[25px] py-[11px] px-[17px] md:px-[33px] border-[3px] border-white  rounded-[133.962px] mt-[50px]' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>Get Started <BsArrowRight className='text-[24px] font-medium' /></motion.button>
            </div>
        </motion.section>
    );
};

export default Hero;