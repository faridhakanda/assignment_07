import React from 'react';
import KeenKeeper from '/logo-xl.png';
import Image from 'next/image';
// import Instragram from '/instagram.png';
// import Facebook from '/facebook.png';
// import X from '/twitter.png';
const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='w-280 mx-auto text-center'>
                <div className='pt-20 '>
                    
                    <Image className='flex mx-auto py-2' src="/logo-xl.png" alt="keenkeeper text logo"  width="300" height="100"/>
                    
                    <p className='py-1 text-[#FFFFFF]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h2 className='font-medium text-[20px] py-2 text-[#FFFFFF]'>Social Links</h2>
                    <div className='flex mx-auto justify-center space-x-2'>
                        <Image src="/instagram.png" alt="Instragram Icon" width="32" height="32" />
                        <Image src="/facebook.png" alt="Facebook Icon" width="32" height="32" />
                        <Image src="/twitter.png" alt="X Icon"  width="32" height="32"/>
                    </div>
                </div>
                <hr className='border-t-1 border-gray-600 w-[1120px] mx-auto my-4'></hr>
                <div className='mx-auto flex  justify-between pb-3 text-[#64748B]'>
                    <div>
                        <p className=''>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex space-x-4 '>
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