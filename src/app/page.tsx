import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div>page</div>
      <Link href="/profile">Profile</Link>
      <br/>
    <Link href="/posts">Posts</Link>
    </>
  )
}

export default page