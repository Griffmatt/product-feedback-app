import React, { useState } from 'react'

import { comment } from "../utilities/interfaces";

import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../redux/userSlice";

import{ addReply } from "../redux/suggestionsSlice";
import { generateKey } from "../utilities/generateKey";

interface props{
  comment: comment,
  replyingTo: string,
  handleOpenReply: (commentIndex: number| string, reply: any) => void
}

function AddReply({comment, replyingTo, handleOpenReply}: props) {

  const [replyLength, setReplyLength] = useState(0)

  const input = document.getElementById("reply") as HTMLInputElement;

  const dispatch = useDispatch()
  const user = useSelector(selectUser)


  const handlePost = () => {
    if (replyLength > 0) {
      dispatch(
        addReply({
          commentId: comment.id,
          id: generateKey("R"),
          content: input.value,
          replyingTo: replyingTo,
          user: {
            image: user.image,
            name: user.name,
            username: user.username,
          }
        })
      );
      input.value = ""
      handleOpenReply(comment.id, comment)
    }
  };

  return (
    <div className={`comment__add-reply ${comment.replies.length>0? "comment__add-reply--sm": ""}`}>
        <textarea className="input-field input-field__text-area comment__add-reply--input" id="reply" placeholder='Type your reply here' maxLength={250} onChange={(e) => setReplyLength(e.target.value.length)}/>
        <button className="button button--purple comment__add-reply--button" onClick={handlePost}>Post Reply</button>
    </div>
  )
}

export default AddReply