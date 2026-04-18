import React from 'react';

const FeatureCart = ({ featureTitle, featureText, featureIcon, dateText}) => {
    return (
        <div>
            <div className='w-full h-fit mx-auto my-1 sm:my-0  text-center'>
                <div className='flex justify-between px-4 py-2 items-center'>
                    <div className='flex items-center space-x-2 text-start'>
                        < featureIcon/>
                        <div>
                            <h2>{featureTitle}</h2>
                            <p className='text-[#647489] text-[14px]'>{featureText}</p>
                        </div>
                        
                    </div>
                    <div>
                        <p className='text-[#647489] text-[16px]'>{dateText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCart;