import React from 'react';
import Image from 'next/image';


// interface UserData {
//     id: number;
//     name: string;
//     picture: string;
//     email: string;
//     days_since_contact: number;
//     status: string;
//     tags: string;
//     bio: string;
//     goal: number;
//     next_due_date: string;
// }
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
        <div>
             
                                
            <h2>{user.name}</h2>
            <Image 
                className='w-[200] h-[200]'
                src={user.picture}
                alt={user.name}
                width={0}
                height={0}
            />
            <h2>{user.bio}</h2>    
            <div>
                {user.tags.map((tag, index) => 
                    <li className='list-none' key={index}>{tag}</li>
                )}
            </div>      
                            
                           
        </div>
    );
};

export default UserCard;