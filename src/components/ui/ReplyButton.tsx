import React from 'react'
import {  reply } from "../../utilities/interfaces"
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../redux/userSlice";

import { deleteReply } from "../../redux/suggestionsSlice";

interface props{
    reply: reply, 
    index: number,
    handleOpenReply: (commentIndex: number, reply: any) => void
}

function ReplyButton({reply, index, handleOpenReply}: props) {

    const user = useSelector(selectUser)

    const dipsatch = useDispatch()

    const handleDeleteComment = () => {
        dipsatch(deleteReply({commentId: reply.commentId, id: reply.id}))
        console.log(reply.id)
    }

  return (
    <>
    {user && user.username === reply.user.username?<p className="p-2 p--bold comment__button comment__button--delete" onClick={handleDeleteComment}>Delete</p>:<p className="p-2 p--bold comment__button comment__button--reply" onClick={()=> handleOpenReply(index, reply)}>Reply</p>}
    </>
  )
}

export default ReplyButton