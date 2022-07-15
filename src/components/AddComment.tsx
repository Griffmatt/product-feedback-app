import React, { useState } from 'react'

function AddComment() {

    const [commentLength, setCommentLength] = useState(0)

  return (
    <div className="add-comment">
        <h3>Add Comment</h3>
        <textarea className="input-field input-field__text-area" placeholder='Type your comment here' maxLength={250} onChange={(e)=> setCommentLength(e.target.value.length)}/>
        <div className="add-comment__post">
            <p className="p-1">{250-commentLength} Characthers left</p>
            <button className="button button--purple">Post Comment</button>
        </div>
    </div>
  )
}

export default AddComment