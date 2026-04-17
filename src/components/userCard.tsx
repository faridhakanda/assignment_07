import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface UserDataType {
    user: {
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
    
}
const UserCard = ({user}: UserDataType) => {
    return (
        <div className='bg-[#FFFFFF] rounded-md shadow-sm text-center py-5'>
            <Link 
                href={`/userdetails/${user.id}`}
                
                
            >
                <Image 
                    className='w-[100] h-[100] mx-auto rounded-full'
                    src={user.picture}
                    alt={user.name}
                    width={0}
                    height={0}
                />
                <h2 className='text-[16px] my-2'>{user.name}</h2>
                <p className='text-[#647489] text-[14px]'>{user.days_since_contact}dago</p>    
                <div className='flex'>
                    {user.tags.map((tag, index) => 
                        <li className='list-none text-[12px] mx-auto my-2 bg-green-300 px-2 py-1 rounded-full w-fit' key={index}>{tag.toUpperCase()}</li>
                    )}
                </div>      
                <p className={`text-[12px] text-[#FFFFFF] px-2 py-1 w-fit my-3 mx-auto  rounded-full ${user.status === "Overdue" ? "bg-[#244D3F]" : "hidden"}`}>{user.status}</p>
                <p className={`text-[12px] text-[#FFFFFF] px-2 py-1 w-fit my-3 mx-auto  rounded-full ${user.status === "Almost Due" ? "bg-yellow-400" : "hidden"}`}>{user.status}</p>
                <p className={`text-[12px] text-[#FFFFFF] px-2 py-1 w-fit my-3 mx-auto  rounded-full ${user.status === "On-Track" ? "bg-red-500" : "hidden"}`}>{user.status}</p>
                            
            </Link>
        </div>
        
    );
};

export default UserCard;