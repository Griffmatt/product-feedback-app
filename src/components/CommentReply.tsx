import React from 'react'

import {  comment } from "../utilities/interfaces"
import ReplyButton from './ui/ReplyButton';

interface props{
    comment: comment, 
    commentIndex: number,
    handleOpenReply: (commentIndex: number, reply: any) => void
}

function CommentReply({comment, commentIndex, handleOpenReply}: props) {

  return (
        <div className="comment__replies" key={comment.id}>
            {comment.replies.length>0? <div className="comment__divider--vertical"/>:""}
            {comment.replies?
            comment.replies.map((reply: any) => {
                return (
                <div className="comment comment--reply" key={reply.id}>
                    <img src={reply.user.image} className="comment__image" />
                    <div className="comment__user">
                    <p className="p-1 p--bold">{reply.user.name}</p>
                    <p className="p-1">@{reply.user.username}</p>
                    </div>
                    <p className="p-1 comment__content"><span className="comment__replying-to">@{reply.replyingTo}</span> {reply.content}</p>
                    <ReplyButton comment={reply} index={commentIndex} handleOpenReply={handleOpenReply}/>
                </div>
                );}):""}
        </div>
  )
}

export default CommentReply