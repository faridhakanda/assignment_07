import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='w-3/4 lg:w-7/10 lg:flex-col mx-auto text-center'>
                <div className='pt-20 '>
                    
                    <Image className='flex mx-auto py-2 w-fit h-fit' src="/logo-xl.png" alt="keenkeeper text logo"  width={300} height={300}/>
                    
                    <p className='py-1 text-[#FFFFFF] text-[14px] md:text-[18px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h2 className='font-medium text-[16px] sm:text-[20px] py-2 text-[#FFFFFF]'>Social Links</h2>
                    <div className='flex mx-auto justify-center space-x-2'>
                        <Image src="/instagram.png" alt="Instragram Icon" width="32" height="32" />
                        <Image src="/facebook.png" alt="Facebook Icon" width="32" height="32" />
                        <Image src="/twitter.png" alt="X Icon"  width="32" height="32"/>
                    </div>
                </div>
                <hr className='border-t-1 border-gray-600 w-3/4 lg:w-7/10 mx-auto my-4'></hr>
                <div className='mx-auto grid grid-cols-1 md:grid-cols-2    justify-between pb-3 text-[#64748B]'>
                    <div>
                        <p className='text-[12px] md:text-[16px]'>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex space-x-4 text-[12px] md:text-[16px] text-center mx-auto'>
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Footer;