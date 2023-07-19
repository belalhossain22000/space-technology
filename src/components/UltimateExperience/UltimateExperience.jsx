"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Reveals from '@/utils/Reveals/Reveals';

const UltimateExperience = () => {
    return (
        <section className='relative'>
            <img className='absolute left-0 bottom-[250px] ' src="/minirocket-left.png" alt="" />
            <div className='relative lg:flex items-center px-5 xl:px-0 w-[1230px] max-w-full mx-auto mt-[50px] lg:mt-[138px] pb-[70px] lg:pb-[377px] overflow-x-hidden'>
                <div className='relative text-white text-center lg:text-left'>
                    <Reveals>
                        <h1 style={{ fontFamily: 'Bebas Neue' }} className='text-[40px] lg:text-[50px] xl:text-[80px] mb-5 font-normal leading-[60px] xl:leading-[85px]'>Ultimate Experience  for <br /><span className='' style={{
                            background: 'var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Bebas Neue'
                        }}>outer space Travel</span> </h1>
                    </Reveals>
                    <Reveals>
                        <p style={{ fontFamily: 'Roboto' }} className='text-lg mb-[50px] font-normal leading-[30px] '>Get the latest space exploration, innovation and astronomy <br /> news. Space.com celebrates humanity's ongoing expansion <br />
                            across the final frontier.</p>
                    </Reveals>
                    <motion.button whileHover={{ background: 'none' }} className='z-20 relative lg:ml-0 md:ml-[40%] sm:ml-[30%] ml-[20%] flex gap-[3px] items-center px-[24px] py-[18px]
                border-2 border-white rounded-[100px] text-lg font-medium mt-[32px]' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))", fontFamily: 'Roboto' }}>
                        Contact us <BsArrowRight />
                    </motion.button>

                </div>
                <div className='xl:mt-0 mt-[80px] flex justify-center lg:justify-start'>
                    <img className='lg:w-[616px] lg:h-[838px]' src="/moontoy-2.png" alt="" />
                </div>
                <img className='absolute left-0 z-10' style={{ mixBlendMode: 'color-dodge' }} src="/ultimate-bg.png" alt="" />
            </div>
        </section>
    );
};

export default UltimateExperience;