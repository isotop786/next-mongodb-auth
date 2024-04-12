"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface Post{
    _id: string
    title: string,
    description: string
}

const PostPage = () => {
    const [posts, setPosts]  = useState<Post[]>([])
    
    useEffect(() => {
        axios.get('/api/posts')
        .then((res: any) => {
            console.log(res.data.posts)    
            setPosts(res.data.posts)
        })
        .catch(err => console.log(err))
    },[])

  return (
      <div>
          <div className='flex flex-row justify-between items-center'>
              <h2> All posts</h2>
              <Link href={"/posts/create"}>Create Post</Link>
         </div>
          { posts.map((post:Post) => (
              <div key={post._id} className='my-3 bg-gray-200 border border-gray-300 text-white p-2 space-y-2'>
                  <h2>{post?.title}</h2>
                  <p>{post?.description}</p>
              </div>
          ))}
    </div>
  )
}

export default PostPage