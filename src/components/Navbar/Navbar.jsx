"use client"
import React, { useState, useEffect } from 'react';
import { FaBeer, FaXmark } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { motion } from "framer-motion"


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
        <nav className={`flex items-center justify-between xl:w-[1170px] max-w-full mx-auto py-[35px] fixed top-0 left-0 right-0 px-5  z-30 ${scrollPosition > 0 ? " bg-[#4B168C] h-[80px] rounded-b-md" : ""}`}>
            <Link href={"/"}>
                <img src="/logo.png" alt="logo" className='h-[46px] w-[139px]' />
            </Link>
            <ul className={`lg:flex items-center gap-[30px] absolute left-0 lg:static   ${open ? "top-[3px] left-0 bg-[#0C003D] w-[185px] h-[100vh] px-[50px] " : "left-[-490px] top-[px]"} transition-all duration-1000 ease-in  z-10 lg:z-auto  `} style={{ fontFamily: ' Roboto' }}>
                {/* logo for small device */}
                <Link href={"/"} className='lg:hidden mt-10'>
                    <img src="/logo.png" alt="logo" className='h-[46px] mt-10 w-[139px]' />
                </Link>
                {
                    navLinks.map(({ path, title }) => <li className='my-6 text-[18px] font-medium hover:text-[#FF5A09] text-white' key={title}><Link className='text-[18px]' href={path}>{title}</Link></li>)
                }
            </ul>
            <div onClick={() => setOpen(!open)} className='text-white lg:hidden'>
                {
                    open ? <GrFormClose className='text-[35px] text-white rounded-full bg-white' /> : <img className='h-[35px] w-[35px]' src="/bar.png" alt="" />
                }
            </div>

        </nav>
    );
};

export default Navbar;

