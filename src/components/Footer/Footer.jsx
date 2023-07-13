"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import FooterInput from '@/utils/FooterInput';

const Footer = () => {
    return (
        <footer className='relative w-full px-[30px] lg:px-[40px] xl:px-[60px]  2xl:px-[134px]' style={{ backgroundImage: "linear-gradient(180deg, #4A188C 0%, #3E0174 13.32%, #0C003D 100%)" }}>

            <div className=' text-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-[117px]  pt-[400px] pb-[53px]' >

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
                <div className='space-y-[16px]'>
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
            <div className='md:w-[85%] bg-[#18004A] h-[435px] rounded-[40px] text-center text-white absolute top-[-200px] left-0 p-5 md:p-0 lg:left-[7%]  xl:left-[8%] 2xl:left-[8%] md:left-[7%] xl:py-[103px] lg:py-[70px] lg:px-[100px] md:py-[50px] md:px-[80px] xl:px-[200x]' style={{ backgroundImage: "linear-gradient(140deg, #6F26BB 0%, rgba(111, 38, 187, 0.00) 100%, #6F26BB 100%)" }}>
                <h1 className='text-[60px] font-normal leading-[64px] text-white'>Subscribe To Get The Latest News <br /> About Us </h1>
               <FooterInput/>
            </div>
            <div className='bg-[#330F6F] h-[2px] w-full  mx-auto'></div>
            <div className='text-white flex justify-between pb-[46px] pt-[33px]'>
                <p className='text-[16px] font-normal'>Copyright- 2021 CreativePeoples</p>
                <p className='text-[16px] font-normal'>Privacy Policy    |     Term of Use</p>
            </div>
        </footer>
    );
};

export default Footer;