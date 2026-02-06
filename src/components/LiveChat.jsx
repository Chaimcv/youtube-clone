import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
const dispatch=useDispatch();
const chatMessages =useSelector((store)=> store.chat.messages);

    //API Polling
    useEffect(()=>{
        const i=setInterval(() => {
            //api call
         console.log("apipolling");
         dispatch(addMessage({
            name:"aa",
            message:"ss",
         }))
        }, 2000);
        return ()=> clearInterval(i);
    })
  return (
    <div className='rounded-lg pl-3 overflow-y-scroll'>
        {chatMessages.map((chatmsg,index)=>(
 <ChatMessages key={index} name={chatmsg.name} messsage={chatmsg.message} />
        ))}
   
    </div>
  )
}

export default LiveChat