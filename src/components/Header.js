import React from 'react'
import {Link} from "react-router-dom";
import Search from './Search';
import Icon from './Icon';
import { NavLink } from 'react-router-dom';
import { logout } from 'firebase.js';
import { useSelector } from 'react-redux';


function Header() {
  const user = useSelector(state => state.auth.user);

  return (
    <header className='bg-white border-b border-gray-300'>
      <div className='h-[60px] flex items-center justify-between container mx-auto'>
        <Link to="/">
          <img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="logo"/>
        </Link>
        <Search />
        <nav className='flex items-center gap-x-6'>
          <NavLink to="/">
            <Icon name="home" size={24}/>
          </NavLink>
          <NavLink to="/">
            <Icon name="dm" size={24}/>
          </NavLink>
          <NavLink to="/">
            <Icon name="new" size={24}/>
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24}/>
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24}/>
          </NavLink>
          <NavLink to={`/${user.username}`}>
            <img src="/no-avatar.jpg" alt="pp" className="w-6 h-6 rounded-full"/>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header