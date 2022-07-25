import React from 'react'
import{Link} from "react-router-dom"

function AddFeedbackButton() {
  return (
    <Link to="/add-new-feedback">
        <button className="p-2 button button--purple button--md">
            + Add Feedback
        </button>
    </Link>
  )
}

export default AddFeedbackButton