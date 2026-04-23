'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import React, {  useContext, useState } from 'react';
import { GoHome } from "react-icons/go";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { FriendContext, FriendContextType } from '@/context/FriendContext';
//import { FriendContext, FriendContextType } from '@/context/FriendContext';
//import { NavLink, useLocation } from 'react-router';
//import { useLocation } from 'react-router';//useLocation
const Header = () => {
    // const pathname = usePathname();
    // const isActive = false;
    //const {isActive, isStats, isTimeLine, handleHome, handleTimeLine, handleStats } = useContext(FriendContext) as FriendContextType;
    const {isStata, setIsStata} = useContext(FriendContext) as FriendContextType;
    const [isActive, setIsActive] = useState(true);
    const [isTimeLine, setIsTimeLine] = useState(false);
    const [isStats, setIsStats] = useState(false);
    const handleHome = () => {
        setIsActive(true);
        setIsTimeLine(false);
        setIsStats(false);
    }
    const handleTimeLine = () => {
        setIsActive(false);
        setIsTimeLine(true);
        setIsStats(false);
    }
    const handleStats = () => {
        setIsActive(false);
        setIsTimeLine(false);
        setIsStats(true);
    }
    
    return (
        
        <div className='shadow-sm py-2'>
            <div className='mx-2 sm:mx-20 justify-between flex items-center'>
                <div className='flex sm:visible md:visible lg:visible'>
                    <Image className='w-fit h-fit ' src="/logo.png" alt="Logo" width={150} height={150} />
                </div>
                
                <div className='flex space-x-1 sm:space-x-4 '>
                    <Link
                        href="/"
                        onClick={() => handleHome()}
                        className={`p-1 flex items-center sm:space-x-1 sm:gap-1 font-normal text-sm ${isActive ? 'bg-[#244D3F] rounded-md text-white' : ''}`}
                    >
                        <GoHome />
                        Home
                        
                    </Link>
                    <Link 
                        href="/timeline"
                        onClick={() => handleTimeLine()}
                        className={`p-1 flex items-center sm:space-x-1 sm:gap-1 font-normal text-sm ${isTimeLine ? 'bg-[#244D3F] rounded-md text-white' : ''}`}
                        //className='flex items-center space-x-1 gap-1 font-normal text-sm'
                    >
                        <RiTimeLine />
                        TimeLine
                    </Link>
                    <Link 
                        href="/stats"
                        onClick={() => handleStats()}
                        className={`p-1 flex items-center sm:space-x-1 sm:gap-1 font-normal text-sm ${isStats ? 'bg-[#244D3F] rounded-md text-white' : ''}`}
                        //className='flex items-center space-x-1 gap-1 font-normal text-sm'
                    >
                    
                        <ImStatsDots />
                        Stats
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Header;