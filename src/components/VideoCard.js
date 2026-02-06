import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info,"data passed from videocontainer");

    const{ snippet,statistics }= info;
   // console.log(info?.snippet,"c");
   // console.log(info?.statistics,"stati");
    const{ channelTitle,title,thumbnails }=snippet;
    
  return (
    <div className='p-2 m-2 w-52 h-72 shadow-md hover:bg-blue-50'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt='thumbnail' />
        <ul>
            <li className='font-semibold'>{title}</li>
            <li className='text-gray-600'>{channelTitle}</li>
            <li className='text-gray-600'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard