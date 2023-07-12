"use client"
import React from 'react';
import Image from 'next/image'

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
        <section className='mt-[100px] text-white px-[134px]'>
            <div>
                <h2 className='text-[55px] text-center font-normal leading-[60px] tracking-[0.55px] mb-[132px]'>Enjoying Space Like Never Before</h2>
            </div>
            <div className='grid grid-cols-3'>
                {
                    planetData.map(({ title, name, image, id }) => <div key={id} className='flex flex-col justify-center relative bg-re-500 text-center w-[352px] h-[287px] rounded-[19px]' style={{ background: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }} >

                        <img className=' rounded-ful absolute top-[-121px] left-16' height={250} width={250} src={image} alt="" />

                        <div className=''>
                            <p className='text-[#FFF] text-[29px] font-medium '>{name}</p>
                            <div className='w-[40px] h-[2px] mx-auto' style={{background: "linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%)"}}></div>
                            <h4 className='text-[34px] font-medium'>{title}</h4>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default EnjoySpace;