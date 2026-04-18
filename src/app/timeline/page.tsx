import Image from 'next/image';
import React from 'react';

const TimeLine = () => {
    return (
        <div className='bg-gray-50 '>
            <div className='w-5/6 md:w-4/9 mx-auto py-4 '>
                <div className='w-8/9 px-10 pt-1 sm:pt-6 pb-2'>
                    <h2 className='font-bold text-[24px] md:text-[32px] lg:text-[48px]'>Timeline</h2>
                    <div className='border-1 border-gray-400 w-fit px-2 py-1 rounded-md'>
                        <h2>Filter timeline</h2>
                    </div>
                    
                    
                </div>
                
                <div className=''>
                    <div className='flex w-4/5 lg:w-8/9 bg-[#FFFFFF] space-x-4 shadow-sm mx-auto my-2 rounded-md px-3 py-2'>
                        <Image className='w-fit h-fit' src="/call.png" alt="call icon" width={16} height={16} />
                        <div>
                            <h2 className='text-[14px] sm:text-[18px] md:text-[20px]'>Meetup with Tom Baker</h2>
                            <p className='text-[10px] sm:text-[14px] md:[text-16px]'>March 29, 2026</p>
                        </div>
                        
                    </div>
                    <div className='bg-[#FFFFFF] w-4/5 lg:w-8/9 flex space-x-4 shadow-sm mx-auto my-2 rounded-md px-3 py-2'>
                        <Image className='w-fit h-fit' src="/text.png" alt="call icon" width={16} height={16} />
                        <div>
                            <h2 className='text-[14px] sm:text-[18px] md:text-[20px]'>Meetup with Tom Baker</h2>
                            <p className='text-[10px] sm:text-[14px] md:[text-16px]'>March 29, 2026</p>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] w-4/5 lg:w-8/9 flex space-x-4 shadow-sm mx-auto my-2 rounded-md px-3 py-2'>
                        <Image className='w-fit h-fit' src="/video.png" alt="call icon" width={16} height={16} />
                        <div>
                            <h2 className='text-[14px] sm:text-[18px] md:text-[20px]'>Meetup with Tom Baker</h2>
                            <p className='text-[10px] sm:text-[14px] md:[text-16px]'>March 29, 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TimeLine;