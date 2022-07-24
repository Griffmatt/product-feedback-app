import React, { useRef } from 'react'

import ModalSelectInput from '../../components/ui/ModalSelectInput'
import { CATEGORY } from '../../data/category'


interface props{
  handleFeedbackChange: (name: string, value: string) => void
}

function NewFeedbackContent({handleFeedbackChange}: props) {

  return (
    <form className="modal__content" >
        <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input type="text" className="input-field"  name="title" onChange={(e)=>handleFeedbackChange(e.target.name, e.target.value)}/>
        </label>
        <label className="p-2 modal__content--select">
        <span className="p--bold">Category</span>
        Choose a category for your feedback
        <ModalSelectInput options={CATEGORY} defaultValue="feature" name="category" handleFeedbackChange={handleFeedbackChange}/>
        </label>
        <label className="p-2">
        <span className="p--bold">Feedback Details</span>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea className="input-field input-field__text-area" name="description" onChange={(e)=>handleFeedbackChange(e.target.name, e.target.value)}/>
        </label>
    </form>
  )
}

export default NewFeedbackContent