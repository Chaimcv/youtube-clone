import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-md w-50'>
        
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><Link to="/"><img className="w-10 h-10 inline-flex" src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt='Home' />Home</Link></li>
            <li className=' hover:bg-slate-100 rounded-lg'> <img className="w-5 h-5 inline-flex m-2" src="https://img.icons8.com/?size=24&id=ajczeHCWXbyR&format=png" alt='shorts' />  Shorts</li>
            <li className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://img.icons8.com/?size=100&id=DA3vWy7pLcg6&format=png&color=000000" alt="subscription" />Subscriptions </li>
        </ul>
         <h1 className='font-bold'>You</h1>
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 m-2 inline-flex" src="https://seekicon.com/free-icon-download/history_8.svg" />History</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/playlist-videos-icon.png" alt='playlist' />Playlist</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-6 h-6 inline-flex m-1" src="https://cdn.creazilla.com/icons/3264833/watch-later-icon-size_512.png" alt='watch later' />Watch Later</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" />Liked Videos</li>
        </ul>
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" />Shopping</li>
            <li><img className="w-5 h-5 inline-flex m-2" />Music</li>
            <li><img className="w-5 h-5 inline-flex m-2" />Films</li>
            <li><img className="w-5 h-5 inline-flex m-2" />Show more</li>
        </ul>
         <h1 className='font-bold'>More from Youtube</h1>
        <ul>
            <li><img className="w-5 h-5 inline-flex m-2" />YouTube Premium</li>
            <li><img className="w-5 h-5 inline-flex m-2" />YpuTube Music</li>
            <li><img className="w-5 h-5 inline-flex m-2" />YouTube Kids</li>
            
        </ul>
       
        <ul>
            <li><img className="w-5 h-5 inline-flex m-2" />Settings</li>
            <li><img className="w-5 h-5 inline-flex m-2"/>Report History</li>
            <li><img className="w-5 h-5 inline-flex m-2" />Help</li>
            <li><img className="w-5 h-5 inline-flex m-2" />Send Feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar