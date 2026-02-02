import React, { useEffect } from 'react'

const VideoContainer = () => {
    const url=process.env.REACT_APP_API_URL;
    useEffect(()=>{
        getVideo();
    },[]);
    const getVideo=async () =>{
        const data =await fetch(url);
        const json=await data.json();
        console.log(json,"videos accessed");
    };
  return (
    <div></div>
  )
}

export default VideoContainer