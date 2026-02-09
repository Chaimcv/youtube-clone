import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  //API Polling
  useEffect(() => {
    const i = setInterval(() => {
      //api call
      console.log("apipolling");
      console.log(chatMessages);
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        }),
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  console.log(chatMessages,"messagesss");
  console.log(chatMessages,"chat--");
  return (
    <>
      <div className="rounded-lg w-full h-[500px] p-3 ml-2 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chatmsg, index) => (
            <ChatMessages
              key={index}
              name={chatmsg.name}
              messsage={chatmsg.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full border p-1 border-gray-800"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anu",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-80 px-2 bg-slate-100"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-1 mx-1 bg-slate-400" >Send</button>
      </form>
    </>
  );
};

export default LiveChat;
