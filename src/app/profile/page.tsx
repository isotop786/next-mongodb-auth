"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data._id)
    }

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            
        }

    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>{data==="nothing" ? "Nothing" : data }</h2>
            {data==="nothing" && (   
                <button onClick={getUserDetails}>Details</button>
            )}
            <button onClick={logout}>Logout</button>
        </div>
    )
}