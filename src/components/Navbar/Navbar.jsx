"use client"
import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
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
    return (
        <nav className='flex items-center justify-between w-full  lg:px-[134px] py-[35px] fixed top-0'>
            <Link href={"/"}>
                <img src="/logo.png" alt="logo" className='h-[46px] w-139px' />
            </Link>
            <ul className='flex items-center gap-[30px]'>
                {
                    navLinks.map(({ path, title }) => <li className='text-[18px] font-medium hover:text-[#FF5A09] text-white' key={title}><Link href={path}>{title}</Link></li>)
                }
            </ul>
            <HiOutlineMenu className='text-white' />
        </nav>
    );
};

export default Navbar;