"use client"
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import Reveals from '@/utils/Reveals/Reveals';

const planetData = [
    {
        id: 1,
        image: "/moon3.png",
        name: "moon",
        title: "Dune Buggy Tours"
    },
    {
        id: 2,
        image: "/stun3.png",
        name: "Saturn",
        title: "Canyon Adventures"
    },
    {
        id: 3,
        image: "/jupiar3.png",
        name: "Jupiter",
        title: "Ocean Aerial Tours"
    },
]

const EnjoySpace = () => {
    return (
        <section className=' text-white w-[1170px] max-w-full mx-auto '>
            <div className='p-5 lg:p-0 flex justify-center items-center m-0'>
                <Reveals>
                    <h2 style={{ fontFamily: 'Bebas Neue' }} className='md:text-[55px]  text-[40px] text-center font-normal leading-[60px] tracking-[0.55px]  '>Enjoying Space Like Never Before</h2>
                </Reveals>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-[23px] xl:justify-between '>
                {/* card */}
                {
                    planetData.map(({ title, name, image, id }) => <motion.div
                        whileHover={{ scale: 1.2, background: 'linear-gradient(180deg, rgba(255, 7, 114, 0.00) 14.62%, #FF5A09 100%)', }}
                        whileTap={{ scale: 0.9 }}

                        key={id} className='h-[408px] w-[352px] text-center rounded-[19px] mt-[50px]' style={{ background: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }} >
                        {/* image */}
                        <div className='flex justify-center mb-[12px]'>
                            <img className='h-[250px] w-[250px]' src={image} alt="" />
                        </div>
                        {/* text */}
                        <div className='px-5 flex justify-center items-center flex-col ' style={{ fontFamily: 'Roboto' }}>
                            <Reveals>
                                <p className='text-[#FFF] text-[29px] font-medium '>{name}</p>
                            </Reveals>
                            <div className='w-[40px] h-[2px] mx-auto' style={{ background: "linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%)" }}></div>
                            <Reveals>
                                <h4 className='sm:text-[34px] text-[30px] text font-medium'>{title}</h4>
                            </Reveals>
                        </div>
                    </motion.div>)
                }
            </div>
        </section>
    );
};

export default EnjoySpace;
// style={{ background: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }}