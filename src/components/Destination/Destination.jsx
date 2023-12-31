"use client"
import React from 'react';
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Reveals from '@/utils/Reveals/Reveals';


const Destination = () => {
    return (<section className='relative mt-[50px] md:mt-0'>
        <img className='absolute  lg:w-[857px] lg:h-[560px] ' src="/left-vector.png" alt="" />
        <img className='absolute top-[-120px] right-0' src="/minirocket.png" alt="" />
        <img className='absolute top-[588px] right-[-125px] w-[857px] h-[560px]' src="/right-vector.png" alt="" />
        {/* main section */}
        <div className='relative flex md:flex-row flex-col-reverse items-center justify-center    lg:w-[1255px] max-full mx-auto mt-[60px] lg:mt-[127px] xlg:gap-[100px]' >
            <div className='md:w-1/2 relative'>
                <img className='lg:h-auto lg:w-[744px]' src="/earthToy.png" alt="" />

            </div>
            <div className='relative md:w-1/2 text-white text-center lg:text-left '>
                <div className='flex items-center justify-center xlg:justify-start'>
                    <Reveals>
                        <h1 style={{ fontFamily: 'Bebas Neue' }} className='xl:text-[100px]  sm:text-[50px] text-[40px] xlg:text-[70px] font-normal leading-[45px] md:leading-[70px] lg:leading-[100px] text-white'>Destinations
                            <br />you can visit <br /> <span className='' style={{
                                background: 'var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontFamily: 'Bebas Neue'
                            }}>without a visa</span></h1>
                    </Reveals>
                </div>
                <motion.button whileHover={{ background: 'none' }} className='w-[168px] mx-auto xlg:mx-0 z-20 relative  flex gap-[3px] items-center px-[24px] py-[18px]
                border-2 border-white rounded-[100px] text-lg font-medium mt-[32px]' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>
                    Contact us <BsArrowRight />
                </motion.button>


            </div>
            <img className='absolute left-0 z-10' style={{ mixBlendMode: 'color-dodge' }} src="/ultimate-bg.png" alt="" />
        </div>
    </section>
    );
};

export default Destination;

