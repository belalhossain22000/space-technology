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
        <section className=' text-white w-[1170px] max-w-full mx-auto '>
            <div className='p-5 lg:p-0'>
                <h2 style={{ fontFamily: 'Bebas Neue' }} className='md:text-[55px]  text-[40px] text-center font-normal leading-[60px] tracking-[0.55px] lg:pt-[46px] xl:mb-[132px]'>Enjoying Space Like Never Before</h2>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-[23px] xl:justify-between'>
                {/* card */}
                {
                    planetData.map(({ title, name, image, id }) => <div
                        key={id} className='h-[408px] p-1 md:p-0 md:w-[352px] text-center rounded-[19px] mt-[50px]' style={{ background: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }} >
                        {/* image */}
                        <div className='flex justify-center '>
                            <img className='h-[250px] w-[250px]' src={image} alt="" />
                        </div>
                        {/* text */}
                        <div className='' style={{ fontFamily: 'Roboto' }}>
                            <p className='text-[#FFF] text-[29px] font-medium '>{name}</p>
                            <div className='w-[40px] h-[2px] mx-auto' style={{ background: "linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%)" }}></div>
                            <h4 className='text-[34px] font-medium'>{title}</h4>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default EnjoySpace;
// style={{ background: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }}