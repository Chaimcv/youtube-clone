import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();

   //search bar
const[searchQuery,setSearchQuery]=useState("");  
const[suggestions,setSuggestions]=useState([]);   //to get search suggestion
const[showSuggestions,setShowSuggestions]=useState(false);  //for visibility of search suggestions
console.log(searchQuery);
// useEffect(()=>{
//    const timer=setTimeout(() => getSearchSuggesstions(),200);                       //api call on every key press,but when difference between two key strokes is less than 200ms-> decline api call
// return() =>{
// clearTimeout(timer); 
//};
// },[searchQuery]);
// const getSearchSuggesstions = async() => {
//   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//   const json = await data.json();
//   console.log(json,"search");
// };

  
  const toggleMenuHandler = () => {         //to collapse(toggle) sidebar on hamburger click
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 mb-1 shadow-md">
      <div className="flex col-span-1 justify-around">
        <img
          className=" hamburger-img h-6 gap-2 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
          alt="hamburger menu"
        ></img>
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="logo"
        ></img>
      </div>
      <div className="col-span-10 justify-center flex inline-block">
        <input
          type="text"
          placeholder="  Search"
          className="w-1/2 h-10 rounded-s-full border border-slate-400 p-3"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button className="border border-slate-400 h-10 rounded-e-full bg-slate-100">
          <img
            className="w-11"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyFE3cmdz5xct0IyrFWpbLlATgczRKuarKw&s"
            alt="search-icon"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-5"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Head;
