import React from 'react';
import Image from 'next/image'

const Destination = () => {
    return (
        <section className='flex items-center'>
            <div className='w-1/2'>
               <img src="/earthToy.png" alt="" />
            </div>
            <div className='w-1/2 text-white'>
               <h1 className='text-[100px] font-normal leading-[100px]'>Destinations you can visit <span className='text-[#FF2C01]'>without a visa</span></h1>
               <button className='bg-[#FF2C01]'>
                Contact us 
               </button>
            </div>
        </section>
    );
};

export default Destination;