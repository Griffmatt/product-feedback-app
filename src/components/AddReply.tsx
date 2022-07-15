import React from 'react'

interface Props{
    comment: any
}

function AddReply({comment}: Props) {

  return (
    <div className={`comment__add-reply ${comment.replies.length>0? "comment__add-reply--sm": ""}`}>
        <textarea className="input-field input-field__text-area comment__add-reply--input" placeholder='Type your reply here' maxLength={250}/>
        <button className="button button--purple comment__add-reply--button">Post Reply</button>
    </div>
  )
}

export default AddReply