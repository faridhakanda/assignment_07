'use client'
import React, {use} from 'react';
import Image from 'next/image';
import UserCard from '@/components/userCard';
import UserDataFetch from './users.json';


//const manPromise = fetch('/users.json').then((res) => res.json())
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
// const Users =  async () => {
//     const datas = await fetch('/users.json');
//     const res = datas.json();
//     return res;
// } //fetch('/users.json').then((res) => res.json());
//const userPromise = fetch('/foods.json').then(res => res.json());
const UserData = () => {
        //const Users = fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());
        //console.log(Users.data, "json api!");
        // const users = use(userPromise);
        // console.log(users, 'farid akanda');
        //const users: UserDataType[] = use(manPromise);
        const users: UserDataType[] = UserDataFetch;
        console.log(users, "books");
    return (
        <div>
            <h2>Hello, User data!</h2>
            
            
            <div className='grid grid-cols-4 mx-auto justify-center w-[1200px]'>
                {users.map((user: UserDataType) => 
                    <div 
                        key={user.id}
                        className='w-64 border-1 border-red-300 m-1'
                    >
                        
                        <UserCard user={user} />
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default UserData;