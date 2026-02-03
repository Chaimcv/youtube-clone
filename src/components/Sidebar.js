import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-md w-50'>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
         <h1 className='font-bold'>You</h1>
        <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Show more</li>
        </ul>
         <h1 className='font-bold'>More from Youtube</h1>
        <ul>
            <li>YouTube Premium</li>
            <li>YpuTube Music</li>
            <li>YouTube Kids</li>
            
        </ul>
       
        <ul>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar