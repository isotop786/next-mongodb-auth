"use client"

import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'


function SignupPage() {

    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username:"",
    })

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            router.push("/login")
        }
        catch (error: any) {
            console.log("Signup failed", error.message);
        }
    }

  return (
      <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={user.username}
            onChange={e => setUser({...user, username: e.target.value})}
            placeholder='username'
          />

          <label htmlFor="email">Email</label>
          <input
            id='email'
            type='email'
            value={user.email}
            onChange={e => setUser({...user, email: e.target.value})}
            placeholder='email'
          />
          <label htmlFor="passoword">Password</label>
          <input
            id='password'
            type='password'
            value={user.password}
            onChange={e => setUser({...user, password:e.target.value})}
            placeholder='password'
          />

          <button onClick={onSignup}>Sign Up</button>
          <Link href="/login">Visit login Page</Link>

    </div>
  )
}

export default SignupPage