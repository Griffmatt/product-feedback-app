import React, { useState } from 'react'

import { comment } from "../../utilities/interfaces";

import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../redux/userSlice";

import{ addReply } from "../../redux/suggestionsSlice";
import { generateKey } from "../../utilities/generateKey";

interface props{
  comment: comment,
  replyingTo: string,
  handleOpenReply: (commentIndex: number| string, reply: any) => void
}

function AddReply({comment, replyingTo, handleOpenReply}: props) {

  const [replyLength, setReplyLength] = useState(0)
  const [reply, setReply] = useState("")

  const dispatch = useDispatch()
  const user = useSelector(selectUser)


  const handlePost = () => {
    if (replyLength > 0) {
      dispatch(
        addReply({
          commentId: comment.id,
          id: generateKey("R"),
          content: reply,
          replyingTo: replyingTo,
          user: {
            image: user.image,
            name: user.name,
            username: user.username,
          }
        })
      );
      setReply("")
      handleOpenReply(comment.id, comment)
    }
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyLength(e.target.value.length)
    setReply(e.target.value)
  }

  return (
    <div className={`comment__add-reply ${comment.replies.length>0? "comment__add-reply--sm": ""}`}>
        <textarea className="input-field input-field__text-area comment__add-reply--input" id="reply" placeholder='Type your reply here' maxLength={250} onChange={(e) => handleReplyChange(e)}/>
        <button className="button button--purple comment__add-reply--button" onClick={handlePost}>Post Reply</button>
    </div>
  )
}

export default AddReply