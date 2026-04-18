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
        <div className='bg-[#F9F8F6]'>
            <div className=' md:flex mx-auto justify-center lg:w-6/9'>
                <div className='bg-green-300 w-4/12'>
                    <h2>Left Side</h2>
                </div>
                <div className='bg-pink-300 w-5/6 md:flex'>
                    <div className='bg-blue-300 w-3/8'>aa</div>
                    <div className='bg-gray-300 w-3/8'>Right side</div>
                    <div className='bg-orange-300 w-3/8'>
                        Frist
                    </div>
                </div>

            </div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 w-12/13 md:w-8/9 lg:w-6/9 bg-red-400'>
                <div className='bg-lime-300 lg:w-3/5'>
                    <div className='w-4/5 mx-auto'>
                        <div className='w-full bg-gray-50'>
                            <Image 
                                className='w-[100] h-[100]  rounded-full'
                                src={currentUser.picture}
                                alt={currentUser.name}
                                width={0}
                                height={0}
                            />
                            <h2>{currentUser.name}</h2>
                            <p>{currentUser.status}</p>
                            <div>
                                {currentUser.tags.map((tag, index) =>
                                    <li key={index}>{tag.toUpperCase()}</li> 
                                )}
                            </div>
                            <p>{currentUser.bio}</p>
                        </div>
                    
                        <h2>Snooze 2 Weeks</h2>
                        <h2>Archive</h2>
                        <h2>Delete</h2>
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-blue-300 w-3/4'>
                        <h2>First</h2>
                    </div>
                    <div className='bg-orange-300'>
                        <h2>Right Part</h2>
                    </div>
                    <div className='bg-lime-300'>
                        <h2>Last Part</h2>
                    </div>
                </div>
            </div>
            <div className='bg-blue-200 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:w-6/9'>
                <div className='w-4/5 mx-auto'>
                    <div className='w-4/5 bg-gray-50'>
                        <Image 
                            className='w-[100] h-[100]  rounded-full'
                            src={currentUser.picture}
                            alt={currentUser.name}
                            width={0}
                            height={0}
                        />
                        <h2>{currentUser.name}</h2>
                        <p>{currentUser.status}</p>
                        <div>
                            {currentUser.tags.map((tag, index) =>
                                <li key={index}>{tag.toUpperCase()}</li> 
                            )}
                        </div>
                        <p>{currentUser.bio}</p>
                    </div>
                    
                    <h2>Snooze 2 Weeks</h2>
                    <h2>Archive</h2>
                    <h2>Delete</h2>
                </div>
                <div className='bg-lime-300 w-6/5 mx-auto'>
                    <div className='flex text-center w-4/5 space-x-2'>
                        <div>
                            <h2>{currentUser.days_since_contact}</h2>
                            <p className='text-[12px]'>Days Since Contact</p>
                        </div>
                        <div>
                            <h2>{currentUser.goal}</h2>
                            <p className='text-[12px]'>Goal(Days)</p>
                        </div>
                        <div>
                            <h2>{currentUser.next_due_date}</h2>
                            <p className='text-[12px]'>Next Due</p>
                        </div>
                    </div>
                    <div className='flex bg-yellow-200 justify-between mx-4 '>
                        <div>
                            <h2>Relationship Goal</h2>
                            <p>Connect every <span>30 days</span></p>
                        </div>
                        <button>Edit</button>
                    </div>
                    <div>
                        <h2>Quick Check-In</h2>
                        <div className='flex space-x-2 text-center items-center mx-auto'>
                            <div>
                                <Image src="/call.png" alt="call icon" width={32} height={32} />
                                <button>Call</button>
                            </div>
                            <div>
                                <Image src="/text.png" alt="call icon" width={32} height={32} />
                                <button>Text</button>
                            </div>
                            <div>
                                <Image src="/video.png" alt="call icon" width={32} height={32} />
                                <button>Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsCard;