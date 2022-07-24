
import React from 'react'
import {  comment } from "../../utilities/interfaces"
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../redux/userSlice";

import { deleteComment } from "../../redux/suggestionsSlice";

interface props{
    comment: comment, 
    index: number,
    handleOpenReply: (commentIndex: number | string, reply: any) => void
}

function ReplyToCommentButton({comment, index, handleOpenReply}: props) {

    const user = useSelector(selectUser)

    const dipsatch = useDispatch()

    const handleDeleteComment = () => {
        dipsatch(deleteComment(comment.id))
    }

  return (
    <>
    {user && user.username === comment.user.username?<p className="p-2 p--bold comment__button comment__button--delete" onClick={handleDeleteComment}>Delete</p>:<p className="p-2 p--bold comment__button comment__button--reply" onClick={()=> handleOpenReply(index, comment)}>Reply</p>}
    </>
  )
}

export default ReplyToCommentButton