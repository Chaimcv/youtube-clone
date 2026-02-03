import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

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
        console.log(json.items,"videos accessed");
        setVideos(json.items);
    };
  return (
    <div><VideoCard info={videos[0]}/></div>
  )
}

export default VideoContainer