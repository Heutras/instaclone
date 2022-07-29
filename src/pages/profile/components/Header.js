import React from 'react'
import { logout } from 'firebase.js';

function Header({ user }) {
  return (
    <header className='flex items-center gap-x-6 px-24 gap-x-24 py-4 pb-10'>
      <img src="/no-avatar.jpg" alt="pp" className='w-[150px] h-[150px] rounded-full' onClick={logout}/>
      <div className='mb-4'>
        <h1 className='text-[28px] font-light'>{user.username}</h1>
      </div>
      <nav className='flex gap-x-10 items-center'>
      <div><span className='font-semibold'>{user.posts}</span> posts</div>
      <div><span className='font-semibold'>{user.followers.length}</span> followers</div>
      <div><span className='font-semibold'>{user.following.length}</span> following</div>
      </nav>
    </header>
  )
}

export default Header