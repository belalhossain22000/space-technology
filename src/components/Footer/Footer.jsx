"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='relative'>

            <div className='h-[700px] text-white grid grid-cols-5 pt-[400px] px-[134px]' style={{ backgroundImage: "linear-gradient(180deg, #4A188C 0%, #3E0174 13.32%, #0C003D 100%)" }}>

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
                    <div className='flex items-center gap-[12px]'>

                        <FaTwitter className='bg-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#5F5C51] rounded-full' />
                        <FaYoutube className='bg-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#FF592C] rounded-full' />
                        <FaLinkedin className='bg-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#5F5C51] rounded-full' />
                    </div>

                </div>

            </div>
            <div className='w-[1130px] bg-[#18004A] h-[435px] rounded-[40px] text-center text-white absolute top-[-200px] left-[18%] py-[103px] px-[230px]  ' style={{ backgroundImage: "linear-gradient(140deg, #6F26BB 0%, rgba(111, 38, 187, 0.00) 100%, #6F26BB 100%)" }}>
                <h1 className='text-[60px] font-normal leading-[64px] text-white'>Subscribe To Get The Latest News About Us </h1>
                <div className='relative'>

                    <input className='mt-[33px] px-[42px] py-[17px] w-[550px] h-[69px] rounded-[40px]' style={{ background: " linear-gradient(140deg, #6F26BB 0%, rgba(111, 38, 187, 0.00) 100%, #6F26BB 100%)" }} type="text" placeholder='Enter Your email' />
                    <button className='absolute top-[34px] right-5 py-5 px-[34px] w-[166px] h-[69px] rounded-r-[40px] -ml-8' style={{ background: "var(--p-2, linear-gradient(141deg, #FFB018 0%, #FF2900 63.83%))" }}>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;