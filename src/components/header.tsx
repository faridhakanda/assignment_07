'use client'
import { FriendContext, FriendContextType } from '@/context/FriendContext';
import React, { useContext } from 'react';

const Header = () => {
    const {  faridName, names} = useContext(FriendContext) as FriendContextType;
    return (
        <div>
            <h2>Header file! </h2>
            <h2>{faridName} is a software engineer!</h2>
            {names.map((Name) => <div key={Name.id}>
                <h2>{Name.id}.{Name.name} - {Name.age}</h2>

            </div>)}
            <div className='bg-lime-200  text-black p-2  m-1 w-96 rounded-md'>
                <h2>Farid Akanda is a software engineer!</h2>
                <p>I'm interested to work with cyber security and date science!</p>
            </div>
        </div>
    );
};

export default Header;