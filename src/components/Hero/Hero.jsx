import React from 'react';
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='px-[134px] h-[800px]  w-full bg-[url("/heroimage.png")]  '>
            <div className='flex justify-center'>

                <h1 className='uppercase text-white text-[100px] font-normal leading-[100px] tracking-[0.5px]'>put your footprint in <br /> <span className='text-[#FF5A09]'>space travel</span></h1>
            </div>
        </section>
    );
};

export default Hero;