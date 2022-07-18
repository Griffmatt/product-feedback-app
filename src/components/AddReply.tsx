import React from 'react'

import { comment } from "../utilities/interfaces"

interface props{
  comment: comment
}

function AddReply({comment}: props) {

  return (
    <div className={`comment__add-reply ${comment.replies.length>0? "comment__add-reply--sm": ""}`}>
        <textarea className="input-field input-field__text-area comment__add-reply--input" placeholder='Type your reply here' maxLength={250}/>
        <button className="button button--purple comment__add-reply--button">Post Reply</button>
    </div>
  )
}

export default AddReply