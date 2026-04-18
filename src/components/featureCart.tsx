import React from 'react';
import { IconType } from 'react-icons';
interface FeatureType {
    FeatureText: string;
    FeatureTitle: string;
    FeatureIcon: IconType; //ComponentType<SVGProps<SVGSVGElement>>;
    DateText: string;
}
const FeatureCart = ({ FeatureTitle, FeatureText, FeatureIcon: FeatureIcon, DateText}: FeatureType) => {
    return (
        <div>
            <div className='w-full h-fit mx-auto my-1 sm:my-0  text-center'>
                <div className='flex justify-between px-4 py-2 items-center'>
                    <div className='flex items-center space-x-2 text-start'>
                        < FeatureIcon/>
                        <div>
                            <h2>{FeatureTitle}</h2>
                            <p className='text-[#647489] text-[14px]'>{FeatureText}</p>
                        </div>
                        
                    </div>
                    <div>
                        <p className='text-[#647489] text-[16px]'>{DateText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCart;