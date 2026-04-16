//import Image from "next/image";
'use client'
import { FriendContext, FriendContextType } from '@/context/FriendContext';
import React, { useContext } from 'react';
//import { FriendContext, FriendContextType } from '@/context/FriendContext';
export default function Home() {
    //const {faridName} = useContext(FriendContext) as FriendContextType;
    //const { names } = useContext(FriendContext) as FriendContextType;
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
        
    </div>
  );
}
