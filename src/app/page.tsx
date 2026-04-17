//import Image from "next/image";
'use client'

//import { FriendContext, FriendContextType } from '@/context/FriendContext';
//import React, { useContext } from 'react';

import UserDataFetch from './users.json'
import UserCard from '@/components/userCard';
import { GoPlus } from "react-icons/go";
//import Users from './users';
//import { FriendContext, FriendContextType } from '@/context/FriendContext';
//const userPromise = fetch('./userDatas.json').then((res) => res.json());
// const Users = fetch('/users.json').then((res) => res.json());
interface UserDataType {
    id: number;
    name: string;
    picture: string;
    email: string;
    days_since_contact: number;
    status: string;
    tags: string[];
    bio: string;
    goal: number;
    next_due_date: string;
}
export default function Home() {
    const users: UserDataType[] = UserDataFetch;
    //const { faridName, names } = useContext(FriendContext) as FriendContextType;
    //const { myFunc } = useContext(FriendContext) as FriendContextType;
    //const aaa = myFunc();
  return (
    <div className="bg-[#F9F8F6] text-black p-2 text-2xl font-bold">
        
        <div className='text-center mx-1 py-6 my-1 space-y-2'>
            <h2 className='font-bold text-[32px] md:text-[42px]'>Friends to keep close in your life</h2>
            <p className='text-[#647489] text-[14px] md:text-[16px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>relationships that matter most.</p>
            <button className='cursor-pointer flex items-center mx-auto gap-1 font-medium bg-[#244D3F] text-[#FFFFFF] p-1 m-1 rounded-md text-[14px] md:text-[16px]'><GoPlus />Add a Friend</button>
        </div>
        
        <div className='w-8/9 md:w-8/9  lg:w-7/9  mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto md:mx-auto lg:mx-auto w-8/9 md:w-8/9  lg:w-8/9 py-3 gap-1'>
                <div className='bg-[#FFFFFF] mx-auto shadow-sm text-center w-52 md:w-60 lg:w-64 p-3 rounded-md'>
                    <h2>{users.length}</h2>
                    <p className='text-[#647389] text-[14px] font-medium'>Total Friends</p>
                </div>
                <div className='bg-[#FFFFFF] mx-auto shadow-sm text-center w-52 md:w-60 lg:w-64 p-3 rounded-md'>
                    <h2>3</h2>
                    <p className='text-[#647389] text-[14px] font-medium'>On Track</p>
                </div>
                <div className='bg-[#FFFFFF] mx-auto shadow-sm text-center w-52 md:w-60 lg:w-64 p-3 rounded-md'>
                    <h2>6</h2>
                    <p className='text-[#647389] text-[14px] font-medium'>Need Attentoin</p>
                </div>
                <div className='bg-[#FFFFFF] mx-auto shadow-sm text-center w-52 md:w-60 lg:w-64 p-5 rounded-md'>
                    <h2 className='text-[18px]'>12</h2>
                    <p className='text-[#647389] text-[14px] font-medium'>Interactions This Month</p>
                </div>
            </div>
            <div className='text-center text-[24px] font-semibold my-2'>
                <h2>Your Friends</h2>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 mx-auto md:mx-auto lg:mx-auto w-8/9 md:w-8/9  lg:w-8/9'>
                
                {users.map((user: UserDataType) => 
                    <div 
                        key={user.id}
                        className='w-52 md:w-60 lg:w-64 h-84 m-2 mx-auto'
                    >
                        <UserCard user={user} />
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
