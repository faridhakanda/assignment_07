'use client'
import React, { useContext } from 'react';


import { FriendContext, FriendContextType } from '@/context/FriendContext';
import { Pie, PieChart, Legend } from 'recharts';
//mport { RechartsDevtools } from '@recharts/devtools';


const StatsPage = () => {
    const {isStata, setIsStata} = useContext(FriendContext) as FriendContextType;
    
    let totalCall = 0;
    let totalText = 0;
    let totalVideo = 0;

    isStata.map(user => {
        if (user.title === 'Call') totalCall++;
        if (user.title === 'Text') totalText++;
        if (user.title === 'Video') totalVideo++;
    })
    
    
    const data = [
        {name: 'Call', value: totalCall, fill: '#0088FE'},
        {name: 'Text', value: totalText, fill: '#00C49F'},
        {name: 'Video', value: totalVideo, fill: '#FF8042'},
    ]
    return (
        <div className='w-7/9  mx-auto my-2 sm:my-2 md:my-4 lg:my-8'>
            <h2 className='font-bold pt-2 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px]'>Friendship Analytics</h2>
            <div className='py-2 bg-[#FFFFFF] shadow-sm rounded-md my-2'>
                <p className='m-2'>By Interactin Type</p>
                {/* <h2>Call: {totalCall}</h2>
                <p>Stata length: {isStata.length}</p> */}
                 <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        //isAnimationActive={isAnimationActive}
                    />
                    {/* <RechartsDevtools /> */}
                    <Legend />
                </PieChart>
                <div className='mx-auto items-center justify-center text-center'>
                    
                </div>
            </div>

        </div>
    );
};

export default StatsPage;










// import { Pie, PieChart } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// // #region Sample data
// const data = [
//   { name: 'Group A', value: 400, fill: '#0088FE' },
//   { name: 'Group B', value: 300, fill: '#00C49F' },
//   { name: 'Group C', value: 300, fill: '#FFBB28' },
//   { name: 'Group D', value: 200, fill: '#FF8042' },
// ];

// // #endregion
// export default function PieChartWithPaddingAngle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
//   return (
//     <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
//       <Pie
//         data={data}
//         innerRadius="80%"
//         outerRadius="100%"
//         // Corner radius is the rounded edge of each pie slice
//         cornerRadius="50%"
//         fill="#8884d8"
//         // padding angle is the gap between each pie slice
//         paddingAngle={5}
//         dataKey="value"
//         isAnimationActive={isAnimationActive}
//       />
//       <RechartsDevtools />
//     </PieChart>
//   );
// }