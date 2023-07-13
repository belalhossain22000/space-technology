import React from 'react';

const FooterInput = () => {
    return (
        <div>
            <div className='relative md:w-[550px] mx-auto'>
                <input className='mt-[33px] px-[42px]  h-[69px] rounded-[40px]' style={{ background: " linear-gradient(140deg, #6F26BB 0%, rgba(111, 38, 187, 0.00) 100%, #6F26BB 100%)" }} type="text" placeholder='Enter Your email' />
                <button className='absolute top-[34px] right-[68px] py-5 px-[34px] w-[166px] h-[69px] rounded-r-[40px] -ml-8' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>Subscribe</button>
            </div>
        </div>
    );
};

export default FooterInput;