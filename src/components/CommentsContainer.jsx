import React from "react";

const CommentsContainer = () => {
  const commentsData = [             //Dummy comment-nesting  section implementation
    {
      name: "Akshay",
      text: "Comments...",
      replies: [],
    },
    {
      name: "Akshay 2",
      text: "Comments nesting",
      replies: [
        {
          name: "Akshay",
          text: "Comments...nested",
          replies: [
            {
              name: "Akshay",
              text: "Comments...",
              replies: [],
            },
          ],
        },
      ],
    },
     {
        name:"Akshay-last",
        text:"Comments...",
        replies:[]
}
  ];

  const Comment=({data}) =>{
    const { name, text, replies }= data;    //extracting(destructuring) name,text and replies 
    return <div className="flex bg-gray-100">
         <img
          className="h-5"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        ></img>
        <div className="px-3">
            <p className="font-semibold">{name}</p>
             <p>{text}</p>
        </div>
        </div>
  }

  return (
    <div className="m-2 p-2">
      <h1 className="font-bold">Comments</h1>
      <Comment data={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
