"use client"
import React, { useState, useEffect } from 'react';
import { FaBeer, FaXmark } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { motion, transform } from "framer-motion"


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
        <nav className={` flex items-center justify-between xl:w-[1170px] max-w-full mx-auto py-[35px] fixed top-0 left-0 right-0 px-5  z-30 ${scrollPosition > 0 ? " bg-[#4B168C] h-[80px] rounded-b-md" : ""}`}>
            <Link href={"/"}>
                <img src="/logo.png" alt="logo" className='h-[46px] w-[139px]' />
            </Link>
            <ul className={`lg:flex items-center gap-[30px] hidden`} style={{ fontFamily: ' Roboto' }}>
                {
                    navLinks.map(({ path, title }) => <li className='my-6 text-[18px] font-medium duration-1000 transition-all hover:text-[#FF5A09] text-white' key={title}><Link className='text-[18px]' href={path}>{title}</Link></li>)
                }
            </ul>

            {/* side bar */}
            <div className={`bg-[#4B168C] text-white w-[50%] xlg:w-[30%] h-[100vh] rounded-md transition-all duration-700 absolute top-[100px] ${open ? "right-5" : "right-[-2000px]"}`}>
                {/* navigatioin item */}
                <ul className={`flex items-center  flex-col `} style={{ fontFamily: ' Roboto' }}>
                    {/* logo for small device */}
                    <Link href={"/"} className=' mt-5'>
                        <img src="/logo.png" alt="logo" className='h-[46px] mt-10 w-[139px] ' />
                    </Link>
                    {
                        navLinks.map(({ path, title }) => <li className='mt-5 text-[18px] font-medium duration-1000 transition-all hover:text-[#FF5A09] text-white' key={title}><Link className='text-[18px]' href={path}>{title}</Link></li>)
                    }
                </ul>
            </div>
            {/* hamburger */}
            <div onClick={() => setOpen(!open)} className='text-white cursor-pointer '>
                {
                    open ? <GrFormClose className='text-[35px] text-white rounded-full bg-white' /> : <img className='h-[35px] w-[35px]' src="/bar.png" alt="" />
                }
            </div>

        </nav>
    );
};

export default Navbar;

