import React from "react";


  const commentsData = [             //Dummy comment-nesting  section implementation
    {
      name: "Akshay1",
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
      name: "Akshay-last",
      text: "Comments...",
      replies: [],
    },
  ];
  console.log(commentsData, "comment-data");

  const Comment = ({ data }) => {
    const { name, text, replies } = data;     //extracting(destructuring) name,text and replies
    console.log(data, "names");
    return (
      <div className="flex bg-gray-100">
        <img
          className="h-5"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        ></img>
        <div className="px-3">
          <p className="font-semibold">{name || "hh"}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ( {comments} ) => {
    console.log(typeof(comments),"comments-commentlist");
    return (
        <div>
        {comments.map((comment,index) => (

          <div>

             <h1>comment list</h1>
            <Comment key={index} data={comment} />;           
            <div className="replies pl-5 border border-l-black ml-5">
               
               <CommentList comments={comment.replies} />
            </div>
          </div>
        ))};
        </div>
    )
  };

  const CommentsContainer = () => {
    console.log(typeof(commentsData),"commentsdata");
  return (
    <div className="m-2 p-2">
      <h1 className="font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
