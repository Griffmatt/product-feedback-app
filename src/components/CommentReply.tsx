import React from 'react'


interface props{
    comment: any, 
    index: number
}

function CommentReply({comment, commentIndex, handleAddReply}: any) {
  return (
        <div className="comment__replies">
            {comment.replies.length>0? <div className="comment__divider--vertical"/>:""}
            {comment.replies?
            comment.replies.map((reply: any, index: number) => {
                return (
                <div className="comment comment--reply" key={index}>
                    <img src={reply.user.image} className="comment__image" />
                    <div className="comment__user">
                    <p className="p-1 p--bold">{reply.user.name}</p>
                    <p className="p-1">@{reply.user.username}</p>
                    </div>
                    <p className="p-1 comment__content"><span className="comment__replying-to">@{reply.replyingTo}</span> {reply.content}</p>
                    <p className="p-2 p--bold comment__reply--button" onClick={()=> handleAddReply(commentIndex, reply)}>Reply</p>
                </div>
                );}):""}
        </div>
  )
}

export default CommentReply