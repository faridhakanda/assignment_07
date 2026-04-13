'use client'
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';

const Header = () => {
    const { faridName, names} = useContext(FriendContext);
    return (
        <div>
            <h2>Header file! </h2>
            <p>{faridName}</p>
            {names.map((Name) => <div key={Name.id}>
                <h2>{Name.id}.{Name.name} - {Name.age}</h2>
            </div>)}
        </div>
    );
};

export default Header;