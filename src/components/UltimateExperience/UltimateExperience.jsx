import React from 'react';
import Image from 'next/image'

const UltimateExperience = () => {
    return (
        <section className='flex items-center'>
            <div className='w-1/2 text-white'>
                <h1>Ultimate Experience  for <span>outer space Travel</span> </h1>
                <p>Get the latest space exploration, innovation and astronomy news. Space.com celebrates humanity's ongoing expansion across the final frontier.</p>
                <button className='bg-red'>Contact us</button>
            </div>
            <div className='w-1/2'>
                <img src="/moonToy.png" alt="" />
            </div>
        </section>
    );
};

export default UltimateExperience;