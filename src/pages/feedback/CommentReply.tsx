import React from 'react'

import {  comment, reply } from "../../utilities/interfaces"
import ReplyButton from '../../components/ui/ReplyButton';

import { useAutoAnimate } from '@formkit/auto-animate/react'

interface props{
    comment: comment, 
    commentIndex: number,
    handleOpenReply: (commentIndex: number, reply: any) => void
}


function CommentReply({comment, commentIndex, handleOpenReply}: props) {

    const [repliesRef] = useAutoAnimate<HTMLDivElement>()

  return (
    <>
        {comment.replies.length>0? <div className="comment__divider--vertical"/>:""}
        <div className="comment__replies" key={comment.id} ref={repliesRef}>
            {comment.replies &&
            comment.replies.map((reply: reply) => {
                return (
                <div className="comment comment--reply" key={reply.id}>
                    <img src={reply.user.image} className="comment__image" />
                    <div className="comment__user">
                    <p className="p-1 p--bold">{reply.user.name}</p>
                    <p className="p-1">@{reply.user.username}</p>
                    </div>
                    <p className="p-1 comment__content"><span className="comment__replying-to">@{reply.replyingTo}</span> {reply.content}</p>
                    <ReplyButton reply={reply} index={commentIndex} handleOpenReply={handleOpenReply}/>
                </div>
                );})}
        </div>
    </>
  )
}

export default CommentReply