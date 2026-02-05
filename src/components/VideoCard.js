import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info,"data passed from videocontainer");

    const{ snippet,statistics }= info;
   // console.log(info?.snippet,"c");
   // console.log(info?.statistics,"stati");
    const{ channelTitle,title,thumbnails }=snippet;
    
  return (
    <div className='p-2 m-2 w-52 shadow-md'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt='thumbnail' />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard