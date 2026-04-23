'use client'
import { useParams } from 'next/navigation';
//import UserDataFetch from '/users.json'
import UserDataFetch from '../../users.json'
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

import { TbBellRinging } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { FaBoxArchive } from "react-icons/fa6";

import { IoVideocamOutline } from "react-icons/io5";
import { SiGooglemeet } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { PiCurrencyNgnThin } from 'react-icons/pi';

import FeatureCart from '@/components/featureCart';
import { FriendContext, FriendContextType } from '@/context/FriendContext';


interface User {
    
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

    const [isUser, setIsUser] = useState([]);
    const {isStata, setIsStata} = useContext(FriendContext) as FriendContextType;
    
    const users: User[] = UserDataFetch;
    const currentUser = users.find((user) => user.id === Number(id));
    // = (UserDataFetch as User[]).find((u) => u.id === Number(id));
    if (!currentUser) {
        return <div>Not user found!</div>
    }


    const toDate = new Date();
    const today = toDate.getDate();
    const month = toDate.getMonth();
    const presentYear = toDate.getFullYear();
    const months = ["January", "Feb", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"];
    const currentDate = months[month]+" "+today+", "+presentYear;
    //console.log("Today is: ", months[month-1]+" "+today+", "+presentYear);
    //console.log("Today: ", currentDate);
    const handleToCall = () => {
        //const userCall = {'call': 1};
        //const newUser = [...isUser, userCall];
        //const toDate: Date = new Date();
        const newUser = {
            name: currentUser.name,
            title: 'Call',
            dayTime: currentDate
        }
        setIsStata([...isStata, newUser]);
        //setIsUser([...isUser,userCall]);
        //console.log(isUser, "isUser data");
        toast.success(`${currentUser.name} is added to call!`);
    }
    const handleToText = () => {
        // const userCall = {
        //     "text": 1,
            
        // }
        const newUser = {
            name: currentUser.name,
            title: 'Text',
            dayTime: currentDate
        }
        setIsStata([...isStata, newUser]);
        //setIsUser([...isUser, userCall]);//...isUser, userCall];
        //setIsUser(newUser);
        //console.log(isUser, "isUser data");
        toast.success(`${currentUser.name} is added to text!`);
    }
    const handleToVideo = () => {
        // const userCall = {
        //     "video": 1,
            
        // }
        const newUser = {
            name: currentUser.name,
            title: 'Video',
            dayTime: currentDate
        }
        setIsStata([...isStata, newUser]);
        //const newUser = [];
        // setIsUser([...isUser, userCall]);
        // console.log(isUser, "isUser data");
        toast.success(`${currentUser.name} is added to video!`);
    }
    //console.log(isUser, "All details!");
    return (
        <div className='bg-[#F9F8F6]'>
            
            <div className='py-12 md:flex mx-auto justify-center lg:w-6/9'>
                <div className=' mx-auto w-5/6 md:w-4/12'>
                    <div className='md:w-4/5 bg-gray-50 shadow-sm text-center py-6 rounded-md'>
                        <Image 
                            className='w-[100] h-[100] mx-auto  rounded-full'
                            src={currentUser.picture}
                            alt={currentUser.name}
                            width={0}
                            height={0}
                        />
                        <h2 className='my-1 font-bold text-[16px]'>{currentUser.name}</h2>
                        <p className={`text-[12px] text-[#FFFFFF] px-2 py-1 w-fit my-3 mx-auto  rounded-full ${currentUser.status === "Overdue" ? "bg-[#244D3F]" : "hidden"}`}>{currentUser.status}</p>
                        <p className={`text-[12px] text-[#FFFFFF] px-2 py-1 w-fit my-3 mx-auto  rounded-full ${currentUser.status === "Almost Due" ? "bg-yellow-400" : "hidden"}`}>{currentUser.status}</p>
                        <p className={`text-[12px] text-[#FFFFFF] px-2 py-1 w-fit my-3 mx-auto  rounded-full ${currentUser.status === "On-Track" ? "bg-red-500" : "hidden"}`}>{currentUser.status}</p>
                            
                        
                        {/* <p>{currentUser.status}</p> */}
                        <div>
                            {currentUser.tags.map((tag, index) =>
                                <li className='list-none bg-green-300 w-fit px-2 rounded-full mx-auto my-1' key={index}>{tag.toUpperCase()}</li> 
                            )}
                        </div>
                        <p className='py-1 text-sm text-[#647489]'>{currentUser.bio}</p>
                        
                    </div>
                    <div className='md:w-4/5 text-center'>
                        <h2 className='bg-gray-50 shadow-sm my-1 rounded-md py-2 items-center justify-center text-center flex gap-2'><TbBellRinging />Snooze 2 Weeks</h2>
                        <h2 className='bg-gray-50 shadow-sm my-1 rounded-md py-2 items-center justify-center text-center flex gap-2'> <FaBoxArchive/>Archive</h2>
                        <h2 className='bg-gray-50 shadow-sm my-1 rounded-md py-2 items-center justify-center text-center flex gap-2 text-red-600'><AiOutlineDelete/>Delete</h2>
                    </div>
                    
                    
                    
                </div>
                <div className=' w-5/6 md:grid grid-cols-1  mx-auto md:my-0'>
                    <div className='justify-between   grid grid-cols-1 md:grid-cols-3 text-center w-full h-fit '>
                        <div className='w-full h-fit py-3 mx-auto my-1 sm:my-0 md:w-[230px] text-center  bg-gray-50 rounded-md shadow-sm'>
                            <h2>{currentUser.days_since_contact}</h2>
                            <p className='text-[12px]'>Days Since Contact</p>
                        </div>
                        <div className='w-full h-fit py-3 mx-auto my-1 sm:my-0 md:w-[230px] bg-gray-50 shadow-sm text-center rounded-md'>
                            <h2>{currentUser.goal}</h2>
                            <p className='text-[12px]'>Goal(Days)</p>
                        </div>
                        <div className='w-full h-fit py-3 mx-auto my-1 sm:my-0 md:w-[230px] bg-gray-50 shadow-sm text-center rounded-md'>
                            <h2>{currentUser.next_due_date}</h2>
                            <p className='text-[12px]'>Next Due</p>
                        </div>
                    </div>

                    

                    <div className='grid grid-cols-1 shadow-sm text-center md:grid-cols-2 justify-between bg-gray-50 rounded-md mx-3 my-1 py-3 h-fit  sm:px-0'>
                        <div className='font-medium my-4 px-2'>
                                <h2>Relationship Goal</h2>
                                <p className='text-[#647489] text-[14px]'>Connect every<span className='text-[#000000]'> 30 days</span></p>
                            </div>
                            <div className="w-fit mx-auto my-auto h-fit px-4 py-1 border-1 border-gray-300 shadow-sm  rounded-md ">
                                Edit
                            </div>
                    </div>
                    
                    


                    <div className='bg-gray-50 shadow-sm my-2 rounded-md mx-3 h-fit py-4 px-4 sm:px-0'>
                        <h2 className='font-medium my-4 px-2'>Quick Check-In</h2>
                        
                        
                        {/* call, text and video section */}
                        <div className='justify-between grid grid-cols-1 md:grid-cols-3 text-center w-full h-fit '>
                            <div className='w-full h-fit py-3 mx-auto my-1 sm:my-0 md:w-[230px] text-center  bg-gray-100 rounded-md shadow-sm'>
                                <div>
                                    <Image className='mx-auto my-1' src="/call.png" alt="call icon" width={32} height={32} />
                                    <button
                                        onClick={handleToCall}
                                        className='cursor-pointer my-1'
                                    >
                                        Call
                                    </button>
                                </div>
                            </div>
                            <div className='w-full h-fit py-3 mx-auto my-1 sm:my-0 md:w-[230px] bg-gray-100 shadow-sm text-center rounded-md'>
                                <div>
                                    <Image className='mx-auto my-1' src="/text.png" alt="call icon" width={32} height={32} />
                                    <button
                                        onClick={handleToText}
                                        className='cursor-pointer my-1'
                                    >
                                        Text
                                    </button>
                                </div>
                            </div>
                            <div className='w-full h-fit py-3 mx-auto my-1 sm:my-0 md:w-[230px] bg-gray-100 shadow-sm text-center rounded-md'>
                                <div >
                                    <Image className='mx-auto my-1' src="/video.png" alt="call icon" width={32} height={32} />
                                    <button
                                        onClick={handleToVideo}
                                        className='cursor-pointer my-1'
                                    >
                                        Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* feature part */}

                    <div className='bg-gray-50 shadow-md rounded-md mx-3 my-2 h-fit py-4 px-4 sm:px-0'>
                        <div className='font-medium justify-between flex my-4 px-4'>
                            <h2>Recent Interactions</h2>
                            <div className='border-1 border-gray-200 rounded-md w-fit px-2 py-1 text-[16px] text-[#647489]'>Full History</div>
                        </div>
                        
                        
                        {/* call, text and video section */}
                        <div className='justify-between grid grid-cols-1 px-4 text-center w-full h-fit '>
                            <FeatureCart FeatureIcon={FiPhoneCall} FeatureText={`${currentUser.name} is call.`} FeatureTitle={"Call"} DateText={"Jun 22, 2025"} />
                            <hr className='border-t-1 border-gray-200 my-1'></hr>
                            <FeatureCart FeatureIcon={SiGooglemeet} FeatureText={`${currentUser.name} is meet.`} FeatureTitle={"Meetup"} DateText={"Jun 22, 2025"} />
                            <hr className='border-t-1 border-gray-200 my-1'></hr>
                            <FeatureCart FeatureIcon={IoVideocamOutline} FeatureText={`${currentUser.name} is video.`} FeatureTitle={"Video"} DateText={"Feb 12, 2026"} />
                            <hr className='border-t-1 border-gray-200 my-1'></hr>
                            <FeatureCart FeatureIcon={PiCurrencyNgnThin} FeatureText={`${currentUser.name} is meet.`} FeatureTitle={"Meetup"} DateText={"Jan 22, 2025"} />
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default UserDetailsCard;