"use client"
import React, { useState, useEffect } from 'react';
import { FaBeer, FaXmark } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { motion, transform } from "framer-motion"
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

import Image from 'next/image'
import Link from 'next/link';
// import ScrollBackgroundChange from '@/utils/ScrollBackgroundChange/ScrollBackgroundChange';

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/earth',
        title: 'Earth'
    },
    {
        path: '/insights',
        title: 'Insights'
    },
    {
        path: '/plans',
        title: 'Plans'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
];

const Navbar = () => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }

    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup: Reset body overflow when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className='fixed top-0 left-0 right-0 z-50'>

            <div className={` flex items-center justify-between xl:w-[1170px] max-w-full mx-auto py-[35px] fixed top-0 left-0 right-0 px-5  z-30 ${scrollPosition > 0 ? " bg-[#4B168C] h-[80px] rounded-b-md" : ""}`}>
                <Link href={"/"}>
                    <img src="/logo.png" alt="logo" className='h-[46px] w-[139px]' />
                </Link>
                <ul className={`lg:flex items-center gap-[30px] hidden`} style={{ fontFamily: ' Roboto' }}>
                    {
                        navLinks.map(({ path, title }) => <li className='my-6 text-[18px] font-medium duration-1000 transition-all hover:text-[#FF5A09] text-white' key={title}><Link className='text-[18px]' href={path}>{title}</Link></li>)
                    }
                </ul>

                {/* hamburger */}
                <div onClick={() => setOpen(!open)} className='text-white cursor-pointer '>
                    {
                        open ? <GrFormClose className='text-[35px] text-white rounded-full bg-white' /> : <img className='h-[35px] w-[35px]' src="/bar.png" alt="" />
                    }
                </div>

            </div>
            {/* side bar */}
            <aside className={`overflow-y-auto pb-14 bg-[#4B168C] text-white w-[70%] xlg:w-[30%] h-[100vh] rounded-md transition-all duration-700 z-50 absolute top-[0px] ${open ? "left-0" : "left-[-2000px]"}`}>
                {/* navigatioin item */}
                <ul className={`px-5   flex items-start md:items-center  flex-col `} style={{ fontFamily: ' Roboto' }}>
                    {/* logo for small device */}
                    <Link href={"/"} className=' mt-5'>
                        <img src="/logo.png" alt="logo" className='h-[46px] mt-10 w-[139px] ' />
                    </Link>
                    {
                        navLinks.map(({ path, title }) => <li className='mt-5 text-[18px] font-medium duration-1000 transition-all hover:text-[#FF5A09] text-white md:hidden' key={title}><Link className='text-[18px]' href={path}>{title}</Link></li>)
                    }
                </ul>
                <div className='space-y-[16px]  mt-5 px-5'>
                    <h4 className='mb-3 md:mb-[25px] text-[18px] font-medium leading-[22px] md:text-center text-left'>Our Social Media</h4>
                    <div className='flex items-start md:items-center flex-col sm:gap-[12px] gap-1'>

                        <FaTwitter className='bg-white transition-all duration-1000 hover:bg-[#5F5C51] hover:text-white h-[40px] w-[40px] px-[8px] py-[6px] text-[#5F5C51] rounded-full' />
                        <FaYoutube className='bg-white transition-all duration-1000 hover:bg-[#FF592C] hover:text-white  h-[40px] w-[40px] px-[8px] py-[6px] text-[#FF592C] rounded-full' />
                        <FaLinkedin className='bg-white transition-all duration-1000 hover:bg-[#5F5C51] hover:text-white  h-[40px] w-[40px] px-[8px] py-[6px] text-[#5F5C51] rounded-full' />
                    </div>

                </div>
            </aside>

        </nav>
    );
};

export default Navbar;

