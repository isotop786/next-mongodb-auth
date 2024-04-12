"use client"

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Post{
    _id: string
    title: string,
    description: string
}

const CreatePostPage = () => {
  const router = useRouter()
  const [post, setPost] = useState({
    title: "",
    description:""
  })
 

  const onSubmit = () => {
  
    try {
      axios.post('/api/posts/create',post)
      router.push('/posts')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h3>Create New Post</h3>
      <br />
     
        <div>
           <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"
            value={post.title}
            onChange={e => setPost({...post,title:e.target.value})}
          />
       </div>
        <div>
           <label htmlFor="title">Description</label>
          <textarea
            value={post.description}
            onChange={e => setPost({...post, description:e.target.value})}
          ></textarea>
        </div>
        <button onClick={onSubmit}>Submit</button>

     
    </div>
  )
}

export default CreatePostPage