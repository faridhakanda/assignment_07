'use client'
import { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({children}) => {
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
    const [friends, setFriends] = useState([]);
    const faridName = "Farid Akanda";
    const friendDetailInfo = {
        faridName,
        friends, 
        setFriends,
        
        names
    }
    return <FriendContext.Provider value={friendDetailInfo}>
        {children}
    </FriendContext.Provider>
}
export default FriendProvider;