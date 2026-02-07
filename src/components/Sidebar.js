import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-md w-60'>
        
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><Link to="/"><img className="w-10 h-10 inline-flex" src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt='Home' />Home</Link></li>
            <li className=' hover:bg-slate-100 rounded-lg'> <img className="w-5 h-5 inline-flex m-2" src="https://img.icons8.com/?size=24&id=ajczeHCWXbyR&format=png" alt='shorts' />  Shorts</li>
            <li className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://img.icons8.com/?size=100&id=DA3vWy7pLcg6&format=png&color=000000" alt="subscription" />Subscriptions </li>
        </ul>
         <br />
         <h1 className='font-bold'>You</h1>
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 m-2 inline-flex" src="https://seekicon.com/free-icon-download/history_8.svg" />History</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/playlist-videos-icon.png" alt='playlist' />Playlist</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-6 h-6 inline-flex ml-1 my-2 mr-2" src="https://cdn.creazilla.com/icons/3264833/watch-later-icon-size_512.png" alt='watch later' />Watch Later</li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://www.pngfind.com/pngs/m/286-2863936_png-file-svg-youtube-like-button-white-transparent.png" alt='liked videos' />Liked Videos</li>
        </ul>
        <br />
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-6 inline-flex m-2" src="https://st4.depositphotos.com/20858482/38053/v/1600/depositphotos_380531066-stock-illustration-shopping-bag-icon-bag-vector.jpg" alt='shopping'/>Shopping</li>
            <li className=' hover:bg-slate-100 rounded-lg'><img className="w-6 h-6 inline-flex m-2" src="https://media.istockphoto.com/id/1494298565/vector/vector-illustration-of-musical-note-logo-on-white-background.jpg?s=612x612&w=0&k=20&c=5_JC6F9d3eTAXDwdSx-Amkr67C7GpPf26_MIhSkXieE=" alt='music' />Music</li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-6 h-6 inline-flex m-2" src="https://cdn.vectorstock.com/i/750p/24/90/monochrome-simple-clapperboard-icon-vector-36902490.avif" alt='films'/>Films</li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" src="" />Show more</li>
        </ul>
         <br />
         <h1 className='font-bold'>More from Youtube</h1>
        <ul>
             <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-6 h-5 inline-flex m-2" src="https://www.pixartprinting.co.uk/blog/wp-content/uploads/2025/05/Youtube_logo.jpg" alt='youtube' />YouTube Premium</li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" src="" />YouTube Music</li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" src="" />YouTube Kids</li>
            
        </ul>
         <br />
       
        <ul>
             <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" />Settings</li>
             <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2"/>Report History</li>
             <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" />Help</li>
             <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" />Send Feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar