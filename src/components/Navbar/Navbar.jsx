"use client"
import React, { useState } from 'react';
import { FaBeer, FaXmark } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { motion } from "framer-motion"


import Image from 'next/image'
import Link from 'next/link';

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

    return (
        <nav className=' flex items-center justify-between  w-full px-[30px] lg:px-[40px] xl:px-[60px]  2xl:px-[134px] py-[35px] fixed top-0'>
            <Link href={"/"}>
                <img src="/logo.png" alt="logo" className='h-[46px] w-139px' />
            </Link>
            <ul  className={`lg:flex items-center gap-[30px]  absolute left-0 lg:static 3xl:mr-[300px]  ${open ? "top-20 bg-[#0C003D] w-full px-[50px] border-t-4 border-white" : " top-[-490px]"} transition-all duration-500 ease-in  z-[-1] lg:z-auto  `}>
                {
                    navLinks.map(({ path, title }) => <li className='my-6 text-[18px] font-medium hover:text-[#FF5A09] text-white' key={title}><Link className='text-[18px]' href={path}>{title}</Link></li>)
                }
            </ul>
            <div onClick={() => setOpen(!open)} className='text-white lg:hidden'>
                {
                    open ? <GrFormClose className='text-[35px] text-white bg-white' /> : <img className='h-[35px] w-[35px]' src="/bar.png" alt="" />
                }
            </div>

        </nav>
    );
};

export default Navbar;

//  absolute   lg:static lg:z-auto z-[-1] w-full  transition-all duration-500 ease-in ${open?"top-20":" top-[490px]"}