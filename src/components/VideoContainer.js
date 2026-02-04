import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos,setVideos]=useState([]);
    //const url=process.env.REACT_APP_API_URL;
    //console.log(url,"url");
    useEffect(()=>{
        getVideo();
    },[]);
    const getVideo=async () =>{
        const data =await fetch(YOUTUBE_VIDEOS_API);
       const json=await data.json();
        console.log(json,"videos accessed");
        setVideos(json.items);
    };
    console.log(videos,"videos");
  return (
    <div className='flex flex-wrap'>
      {
       videos?.length> 0?(
      
        videos.map((video)=>(
          <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
         ))
        
      ):( 
    <div><h1>No videos  available</h1></div>
      )
    }   
    </div> 
  );
}

export default VideoContainer