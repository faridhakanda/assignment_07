'use client'
import React, {use} from 'react';
import Image from 'next/image';
import UserCard from '@/components/userCard';
import UserDataFetch from './users.json';

const users = [
    {
        "id": 1,
        "name": "Mudassir Sheikha",
        "picture": "https://i.ibb.co.com/Fky9vWWR/Mudassir-Sheikha-The-Visionary-Entrepreneur-Behind-Careem.png",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 2,
        "name": "Jawed Karim",
        "picture": "https://i.ibb.co.com/FqnZ7SHp/images-q-tbn-ANd9-Gc-T3-Od4ztem1twih6zm-Xhvtnk-Tvb-Ex5l-XF9w-C8t5vtax-Iu-TFoo-Abx4-Vk-Edylv-Wc-p-Ca-u06.webp",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 3,
        "name": "Ferid Murad",
        "picture": "https://i.ibb.co.com/8n05kG1k/images-q-tbn-ANd9-Gc-SDOMa-Gq-OPWe-Nv-P8-S1b2lp-QORSS40n-K7co9-Rol-Px-EJn-ZBp-S4-Nb-PMkfj4bm-X2umu-TXVjh.webp",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 4,
        "name": "Kim Jong Un",
        "picture": "https://i.ibb.co.com/CsKs07Cz/licensed-image-q-tbn-ANd9-Gc-TYo-W3gwx4oj3qh-FNTrd-BFTjp-Sznet-Hz-QTq5ki78d-CDiu-Kx-Xa-I4j-Kp-T1o-Hf.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 5,
        "name": "Xi Jinping",
        "picture": "https://i.ibb.co.com/JwgJd3HL/Uv-Xwik-Loqt2n-Zzi6t-KDV6cse-BEIVWE1-b1w-Nw-N4xclwn24naf-Kq0avqr3ixngt-E3-Y-k77n-WXPl-d-Bzn9e-XKp4-WMM.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 6,
        "name": "Khabib Nurmagomedov",
        "picture": "https://i.ibb.co.com/F4QMCrb1/image-url-https-st1-uvnimg.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 7,
        "name": "Imran Khan",
        "picture": "https://i.ibb.co.com/QvLFvRDN/119001699-hi067834265.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 8,
        "name": "Ali Khamenei",
        "picture": "https://i.ibb.co.com/JjPV1hXB/c-ap24187182370182.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 9,
        "name": "Mahdi Hasan",
        "picture": "https://i.ibb.co.com/wZPCsbpB/RX142lgr.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 10,
        "name": "Vladimir Putin",
        "picture": "https://i.ibb.co.com/39KC8b7y/9bc710d54fc44a1c959237473fc119cb.jpg",
        "email": "abc@gmail.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college", "close friend"],
        "bio": "Met in university. Love hiking together.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    }
    
    
];

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
            {/* <h2>Books Array Length: {books.length}!</h2> */}
            {/* <div>
                {books.map(book =>
                    <div key={book.bookId}>
                        <h2>{book.bookName}</h2>
                        <Image src={book.image} alt={book.bookName} width="200" height="200" />
                    </div>
                )}
            </div> */}
            {/* {userData.map(user => 
                <div key={user.id}>
                    <h2>{user.name}</h2>
                </div>
            )} */}
            
            <div className='grid grid-cols-4 mx-auto justify-center w-[1200px]'>
                {users.map((user: UserDataType) => 
                    <div 
                        key={user.id}
                        className='w-48 border-1 border-red-300 m-1'
                    >
                        {/* <h2>{user.name}</h2>
                        <Image 
                            src={user.picture}
                            alt={user.name}
                            width={200}
                            height={300}
                        /> */}
                        <UserCard user={user} />
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default UserData;