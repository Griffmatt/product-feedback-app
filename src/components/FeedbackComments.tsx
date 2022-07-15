import React, {useState} from "react";
import CommentReply from "./CommentReply";

import { totalComments } from '../utilities/totalComments'
import AddReply from "./AddReply";


function FeedbackComments({ suggestion }: any) {

  const [commentIndex, setCommentIndex] = useState<number>()
  const [replyingTo, setReplyingTo] = useState("")

  const handleAddReply = (index: number, comment: any)=> {
    if(commentIndex === index){
      setCommentIndex(undefined)
      return
    }
    setReplyingTo(comment.user.username)
    setCommentIndex(index)
  }

  return (
    <div className="feedback__comments">
      <h3>{totalComments(suggestion.comment)} Comments</h3>
      {suggestion.comments?suggestion.comments.map((comment: any, index: number) => {
        return (
          <>
            <div className="comment" key={comment.id}>
              <img src={comment.user.image} className="comment__image" />
              <div className="comment__user">
                <p className="p-1 p--bold">{comment.user.name}</p>
                <p className="p-1">@{comment.user.username}</p>
              </div>
              <p className="p-1 comment__content">{comment.content}</p>
              <p className="p-2 p--bold comment__reply--button" onClick={()=>handleAddReply(index, comment)}>Reply</p>
              <CommentReply comment={comment} commentIndex={index} handleAddReply={handleAddReply}/>
              {commentIndex === index?<AddReply comment={comment} />:<></>}
            </div>
            {index+1=== suggestion.comments.length?"":<div className="comment__divider"/>}
          </>
        );
      }):""}
    </div>
  );
}

export default FeedbackComments;
