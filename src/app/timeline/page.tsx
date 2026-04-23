'use client'
import { FriendContext, FriendContextType } from '@/context/FriendContext';
import Image from 'next/image';
import React, { useState, useContext } from 'react';


const TimeLine = () => {
    const {isStata, setIsStata} = useContext(FriendContext) as FriendContextType;
    

    // const [filteredData, setFilteredData] = useState([]);
    // setFilteredData([...filteredData, isStata]);
    const [filterData, setIsFilteredData] = useState('all');
    const handleFilter = (e: any) => {
        setIsFilteredData(e.target.value);
        // const value = e.target.value;
        // console.log(value);
        // // const filteredData = isStata.filter(user => user.title.includes('Call'));
        // // console.log(filteredData);
        // const filteredData = isStata.filter(user => user.title === value);
        // setIsStata(filteredData);
        //setFilteredData([...filteredData, datas]);
    }
    const isStataData = filterData === 'all' ? isStata : isStata.filter(user => user.title === filterData);
    
    return (
        <div className='bg-gray-50 '>
            <div className='w-5/6 md:w-4/9 mx-auto py-4 '>
                <div className='w-8/9 px-10 pt-1 sm:pt-6 pb-2'>
                    <h2 className='font-bold text-[24px] text-[#000000] md:text-[32px] lg:text-[48px]'>Timeline</h2>
                    <div className=' w-48 px-2 py-1 rounded-md'>
                        
                        <select onChange={handleFilter} defaultValue="Color scheme" className="select border-none select-accent">
                            <option disabled={true}>Filter timeline</option>
                            <option value="all">All Data</option>
                            <option value="Call">Call</option>
                            <option value="Text">Text</option>
                            <option value="Video">Video</option>
                        </select>
                    </div>
                    
                    
                </div>
                
                <div className=''>
                    {isStataData.map((user, index) => 
                            <div key={index} className='flex w-4/5 lg:w-8/9 bg-[#FFFFFF] text-[#000000] space-x-4 shadow-sm mx-auto my-2 rounded-md px-3 py-2'>
                                {user.title==='Call' && <Image className='w-fit h-fit' src="/call.png" alt={user.name} width={32} height={32} />}
                                {user.title === 'Text' && <Image className='w-fit h-fit' src="/text.png" alt="text" width={32} height={32} />}
                                {user.title === 'Video' && <Image className='w-fit h-fit' src="/video.png" alt="text" width={32} height={32} />}
                                {/* <Image className='w-fit h-fit' src="/call.png" alt="call icon" width={16} height={16} /> */}
                                <div>
                                    <h2 className='text-[14px] sm:text-[18px] md:text-[20px]'>{user.title.toString()} with {user.name}</h2>
                                    <p className='text-[10px] sm:text-[14px] md:[text-16px]'>{user.dayTime}</p>
                                </div>
                                
                            </div>
                        )}
                    
                </div>
            </div>
            
        </div>
    );
};

export default TimeLine;