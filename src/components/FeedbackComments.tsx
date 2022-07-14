import React from "react";
import CommentReply from "./CommentReply";


function FeedbackComments({ suggestion }: any) {


  const totalComments = () => {
    let total = 0
    if(suggestion.comments){
      total += suggestion.comments.length
    }
    if(suggestion.comments.replies){
      total += suggestion.comments.replies.length
    }
    return total
  }

  return (
    <div className="feedback__comments">
      <h3>{totalComments()} Comments</h3>
      {suggestion.comments?suggestion.comments.map((comment: any) => {
        return (
          <>
            <div className="comment" key={comment.id}>
              <img src={comment.user.image} className="comment__image" />
              <div className="comment__user">
                <p className="p-1 p--bold">{comment.user.name}</p>
                <p className="p-1">@{comment.user.username}</p>
              </div>
              <p className="p-1 comment__content">{comment.content}</p>
              <p className="p-2 p--bold comment__reply">Reply</p>
            </div>
            <CommentReply comment={comment}/>
          </>
        );
      }):""}
    </div>
  );
}

export default FeedbackComments;
