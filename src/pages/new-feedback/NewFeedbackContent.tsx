import React from 'react'

import ModalSelectInput from '../../components/ui/ModalSelectInput'
import { STATUS } from '../../data/status'

function NewFeedbackContent() {
  return (
    <div className="modal__content">
        <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input type="text" className="input-field" id="new-feedback-title"/>
        </label>
        <label className="p-2 modal__content--select">
        <span className="p--bold">Category</span>
        Choose a category for your feedback
        <ModalSelectInput options={STATUS} defaultValue="suggestion"/>
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