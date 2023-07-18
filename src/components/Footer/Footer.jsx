"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import FooterInput from '@/utils/FooterInput';

const Footer = () => {
    return (
        <footer className='relative ' style={{ backgroundImage: "linear-gradient(180deg, #4A188C 0%, #3E0174 13.32%, #0C003D 100%)" }}>

            <div className=' text-white pt-[200px] md:pt-[275px] lg:pt-[394px] w-[1170px] max-w-full mx-auto flex justify-between flex-wrap px-5' style={{ fontFamily: 'Inter' }} >

                <div className='space-y-[16px]'><img src="/logo.png" alt="logo" /></div>
                <div className='space-y-[16px]'>
                    <h4 className='mb-[25px] text-[18px] font-medium leading-[22px]'>Products</h4>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Squat Rack</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Power Tower</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Explorer</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Price</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Institutional</Link>
                    <p></p>
                </div>
                <div className='space-y-[16px]'>
                    <h4 className='mb-[25px] text-[18px] font-medium leading-[22px]'>Resources</h4>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>APIs</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Status</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Open Source</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Research</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Security</Link>
                    <p></p>
                </div>
                <div className='space-y-[16px] mt-[-150px] md:mt-0'>
                    <h4 className='mb-[25px] text-[18px] font-medium leading-[22px]'>Company</h4>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>About</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Careers Hiring</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Press Center</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Prime</Link>
                    <p></p>
                    <Link href={"#"} className='text-[16px] font-normal leading-[20px]'>Ventures</Link>
                    <p></p>
                </div>
                <div className='space-y-[16px]'>
                    <h4 className='mb-[25px] text-[18px] font-medium leading-[22px]'>Our Social Media</h4>
                    <div className='flex items-center sm:gap-[12px] gap-1'>

                        <FaTwitter className='bg-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#5F5C51] rounded-full' />
                        <FaYoutube className='bg-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#FF592C] rounded-full' />
                        <FaLinkedin className='bg-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#5F5C51] rounded-full' />
                    </div>

                </div>

            </div>
            {/* bottom footer */}
            <div className='bg-[#330F6F] h-[2px] px-5 lg:px-0 w-[1130px] max-w-full mx-auto'></div>
            <div className='text-white w-[1170px] max-w-full mx-auto flex justify-between pb-[46px] pt-[33px] px-5 lg:px-0' style={{ fontFamily: 'Inter' }}>
                <p className='text-[16px] font-normal'>Copyright- 2021 CreativePeoples</p>
                <p className='text-[16px] font-normal'>Privacy Policy    |     Term of Use</p>
            </div>
            {/* news letter card  */}
            <div className='  bg-[#18004A] xl:w-[1130px] mx-5   xl:mx-auto mt-[-500p] rounded-[40px] text-center text-white absolute top-[-200px] left-0 right-0 md:h-[435px] ' style={{ backgroundImage: "linear-gradient(140deg, #6F26BB 0%, rgba(111, 38, 187, 0.00) 100%, #6F26BB 100%)" }}>
                <div className='relative py-5 px-2 md:py-[103px] '>
                    <h1 style={{ fontFamily: 'Bebas Neue' }} className='md:text-[60px] text-[36px] leading-[45px] font-normal md:leading-[64px] text-white'>Subscribe To Get The Latest News <br /> About Us </h1>
                    <div className='md:w-[550px] mx-auto' style={{ fontFamily: 'Roboto' }}>
                        <input className='mt-[33px] px-[42px]  h-[69px] rounded-[40px]' style={{ background: " linear-gradient(140deg, #6F26BB 0%, rgba(111, 38, 187, 0.00) 100%, #6F26BB 100%)" }} type="text" placeholder='Enter Your email' />
                        <button className=' h-[69px] px-[100px] md:px-[34px] rounded-[40px] md:rounded-none mt-5 md:mt-0 md:rounded-r-[40px] md:-ml-8' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>Subscribe</button>
                    </div>
                    <img className='rounded-[40px] absolute top-0 left-0 hidden md:block' src="/footer-roket.png" alt="" />
                    <img className='absolute right-0 top-0 ' src="/footer-dot.png" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
