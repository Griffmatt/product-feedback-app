import React from 'react'

function NewFeedbackContent() {
  return (
    <div className="modal__content">
        <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input type="text" className="input-field" id="new-feedback-title"/>
        </label>
        <label className="p-2">
        <span className="p--bold">Category</span>
        Choose a category for your feedback
        <input type="text" className="input-field" id="new-feedback-category"/>
        </label>
        <label className="p-2">
        <span className="p--bold">Update Status</span>
        Change feature state
        <input type="text" className="input-field" id="new-feedback-status"/>
        </label>
        <label className="p-2">
        <span className="p--bold">Feedback Details</span>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea className="input-field input-field__text-area" id="new-feedback-detail"/>
        </label>
    </div>
  )
}

export default NewFeedbackContent