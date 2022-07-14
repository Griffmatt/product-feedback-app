import React from 'react'

function CommentReply({comment}: any) {
  return (
    <>
        {comment.replies?comment.replies.map((reply: any) => {
            return (
            <div className="comment comment--reply" key={reply.id}>
                <img src={reply.user.image} className="comment__image" />
                <div className="comment__user">
                <p className="p-1 p--bold">{reply.user.name}</p>
                <p className="p-1">@{reply.user.username}</p>
                </div>
                <p className="p-1 comment__content">{reply.content}</p>
                <p className="p-2 p--bold comment__reply">Reply</p>
            </div>
            );
        }):""}
    </>
  )
}

export default CommentReply