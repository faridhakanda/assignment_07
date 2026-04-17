'use client'
import { useParams } from 'next/navigation';
//import UserDataFetch from '/users.json'
import UserDataFetch from '../../users.json'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
interface User {
    // user: {
    //     id: number;
    //     name: string;
    //     picture: string;
    //     email: string;
    //     days_since_contact: number;
    //     status: string;
    //     tags: string[];
    //     bio: string;
    //     goal: number;
    //     next_due_date: string;
    // }
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
const UserDetailsCard = () => {
    const params = useParams();
    const id = params.id;
    // const users: UserDataType[] = UserDataFetch;
    // console.log(users, "users");
    // console.log(id, "user details")
    const users: User[] = UserDataFetch;
    const currentUser = users.find((user) => user.id === Number(id));
    // = (UserDataFetch as User[]).find((u) => u.id === Number(id));
    if (!currentUser) {
        return <div>Not user found!</div>
    }
    return (
        <div>
            <h2>{currentUser.id}</h2>
            <h2>{currentUser.name}</h2>
            <Image src={currentUser.picture} alt={currentUser.name} width={200} height={200} />
            <h2>{currentUser.bio}</h2>
            <h2>{currentUser.email}</h2>
            <h2>{currentUser.next_due_date}</h2>
            <Link href="/">Go to Home</Link>
        </div>
    );
};

export default UserDetailsCard;