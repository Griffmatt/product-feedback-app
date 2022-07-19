import React from 'react'
import {  comment } from "../../utilities/interfaces"
import { useSelector} from "react-redux";

import { selectUser } from "../../redux/userSlice";


interface props{
    comment: comment, 
    index: number,
    handleOpenReply: (commentIndex: number, reply: any) => void
}

function ReplyButton({comment, index, handleOpenReply}: props) {

    const user = useSelector(selectUser)

  return (
    <>
    {user && user.username === comment.user.username?"":<p className="p-2 p--bold comment__reply--button" onClick={()=> handleOpenReply(index, comment)}>Reply</p>}
    </>
  )
}

export default ReplyButton