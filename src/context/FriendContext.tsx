'use client'
import { createContext, ReactNode, useState } from "react";
export interface FriendContextType  {
        faridName: string;
        names: {id: number; name: string; age: number}[];
        // friends: String[];
        // setFriends: 
};
//export const FriendContext = createContext();
export const FriendContext = createContext<FriendContextType | undefined>(undefined); //</FriendContextType>
const FriendProvider = ({children} : {children: ReactNode}) => {
    const names = [
        {
            id: 1,
            name: 'Farid Akanda',
            age: 29
        },
        {
            id: 2,
            name: 'Zaheed Sabur',
            age: 40
        },
        {
            id: 3,
            name: 'Tamim Shahriar',
            age: 42
        },
        {
            id: 4,
            name: 'Zulkernine Mahmud',
            age: 37
        },
        {
            id: 5,
            name: 'Mahbubur Rahman',
            age: 35
        }
    ]
    //const [friends, setFriends] = useState([]);
    const faridName = "Farid Akanda";

    // const myFunc = () => {
    //     return "Hello, world!";
    // }
    // const [isActive, setIsActive] = useState(true);
    //     const [isTimeLine, setIsTimeLine] = useState(false);
    //     const [isStats, setIsStats] = useState(false);
    //     const handleHome = () => {
    //         setIsActive(true);
    //         setIsTimeLine(false);
    //         setIsStats(false);
    //     }
    //     const handleTimeLine = () => {
    //         setIsActive(false);
    //         setIsTimeLine(true);
    //         setIsStats(false);
    //     }
    //     const handleStats = () => {
    //         setIsActive(false);
    //         setIsTimeLine(false);
    //         setIsStats(true);
    //     }
    



    const friendDetailInfo = {
        faridName, //: String,
        //friends, 
        //setFriends,
        // myFunc,
        // isActive,
        // isTimeLine,
        // isStats,
        // handleHome,
        // handleTimeLine,
        // handleStats,
        names, //: []
    }
    return <FriendContext.Provider value={friendDetailInfo}>
        {children}
    </FriendContext.Provider>
}
export default FriendProvider;