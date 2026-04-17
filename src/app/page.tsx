//import Image from "next/image";
'use client'
import Image from 'next/image';
import { FriendContext, FriendContextType } from '@/context/FriendContext';
import React, {use,  useContext } from 'react';
import UserData from './users';
//import Users from './users';
//import { FriendContext, FriendContextType } from '@/context/FriendContext';
//const userPromise = fetch('./userDatas.json').then((res) => res.json());
// const Users = fetch('/users.json').then((res) => res.json());
export default function Home() {
    
    const { faridName, names } = useContext(FriendContext) as FriendContextType;
  return (
    <div className="bg-[#5c97839f] text-black p-2 text-2xl font-bold">
        <h2>Assignment 07 project for vercel host!</h2>
        <h2>{faridName}</h2>
        {names.map((user, ind) => 
            <div key={ind}>
                <h2>{user.id}-{user.name} {user.age}</h2>
                
            </div>
        )}
        <div>
            
           <h2>User Data display!</h2>
           {/* {userData.map(Farid => 
            <div key={Farid.id}>
                <h2>{Farid.id} - {Farid.name}</h2>
                <Image src={Farid.picture} alt={Farid.name} width={200} height={200} />
            </div>
           )} */}
           <UserData />
        </div>
        <div className='bg-orange-300 md:bg-lime-300 lg:bg-blue-300'>
            <h2>Farid Akanda</h2>
        </div>
        
        
    </div>
  );
}
