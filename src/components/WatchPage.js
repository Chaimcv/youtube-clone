import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const[searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get("v"),"video id");     //to get id of a particular video from url(v-because youtube's setting)
    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(closeMenu());          //to collapse side bar
    },[]);
  return (
    <div></div>
  )
}

export default WatchPage