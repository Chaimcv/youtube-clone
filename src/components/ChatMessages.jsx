import React from 'react'



const ChatMessages = ({name,messsage}) => {
  return (
    <div className='flex inline-block'>
       <img
          className="h-5"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        ></img>
     <span>{name}</span>
      <span>{messsage}</span>
    </div>
  )
}

export default ChatMessages