import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-end bg-gray-950 text-white px-4 space-x-4 h-16'>
      <Link className=' hover:text-blue-300 transition' href={'/'}>Home</Link>
      <Link className=' hover:text-blue-300 transition' href={'/posts'}>Posts</Link>
    </div>
  )
}

export default Header
