import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const WatchPage = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch()          //to collapse side bar
    },[]);
  return (
    <div></div>
  )
}

export default WatchPage