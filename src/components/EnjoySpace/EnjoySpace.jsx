"use client"
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

const planetData = [
    {
        id: 1,
        image: "/moon.png",
        name: "moon",
        title: "Dune Buggy Tours"
    },
    {
        id: 2,
        image: "/saturn.png",
        name: "Saturn",
        title: "Canyon Adventures"
    },
    {
        id: 3,
        image: "/jupitar.png",
        name: "Jupiter",
        title: "Ocean Aerial Tours"
    },
]

const EnjoySpace = () => {
    return (
        <section className='mt-[100px] text-white px-[30px] lg:px-[40px] xl:px-[60px]  2xl:px-[134px]'>
            <div>
                <h2 className='md:text-[55px]  text-[40px] text-center font-normal leading-[60px] tracking-[0.55px] mb-[132px]'>Enjoying Space Like Never Before</h2>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-[23px] '>
                {
                    planetData.map(({ title, name, image, id }) => <motion.div initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.2, backgroundImage: 'linear-gradient(180deg, rgba(255, 7, 114, 0.00) 14.62%, #FF5A09 100%)', }}
                        whileTap={{ scale: 0.9 }}
                        key={id} className='flex flex-col justify-center relative bg-re-500 text-center w-[352px] h-[287px] rounded-[19px] my-[50px] xl:my-0 hover:bg-red-500' style={{ background: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }} >

                        <motion.img animate={{
                            rotate: [0, 360],
                        }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: 'linear',
                            }} className=' rounded-ful absolute top-[-121px] left-16' height={250} width={250} src={image} alt="" />

                        <div className=''>
                            <p className='text-[#FFF] text-[29px] font-medium '>{name}</p>
                            <div className='w-[40px] h-[2px] mx-auto' style={{ background: "linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%)" }}></div>
                            <h4 className='text-[34px] font-medium'>{title}</h4>
                        </div>
                    </motion.div>)
                }
            </div>
        </section>
    );
};

export default EnjoySpace;