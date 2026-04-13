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
        </div>
    );
};

export default Header;