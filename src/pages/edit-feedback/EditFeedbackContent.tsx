import React, { useEffect, useState } from "react";

import ModalSelectInput from "../../components/ui/ModalSelectInput";

import { CATEGORY } from "../../data/category";
import { STATUS } from "../../data/status";

import { suggestions } from "../../utilities/interfaces";

interface props {
  suggestion: suggestions,
  setFeedback: React.Dispatch<React.SetStateAction<{}>>,
  feedback: {}
}

function EditFeedbackContent({ suggestion, feedback, setFeedback}: props) {

  useEffect(()=>{
    setFeedback({
      id: suggestion.id,
      title: suggestion.title,
      description: suggestion.description,
      category: suggestion.category,
      status: suggestion.status
    })
  }, [])

  const handleFeedbackChange = (name: string, value: string) =>{
    console.log(value)
    setFeedback({
      ...feedback,
      [name]: value
    })
  }
  

  return (
    <div className="modal__content">
      <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input
          type="text"
          className="input-field"
          defaultValue={suggestion.title}
          name="title"
          onChange={(e)=>handleFeedbackChange(e.target.name, e.target.value)}
        />
      </label>
      <label className="p-2 modal__content--select">
        <span className="p--bold">Category</span>
        Choose a category for your feedback
        <ModalSelectInput options={CATEGORY.slice(1)} defaultValue={suggestion.category} name="category" handleFeedbackChange={handleFeedbackChange}/>
      </label>
      <label className="p-2 modal__content--select">
        <span className="p--bold">Update Status</span>
        Change feature state
        <ModalSelectInput options={STATUS} defaultValue={suggestion.status} name="status" handleFeedbackChange={handleFeedbackChange} />
      </label>
      <label className="p-2">
        <span className="p--bold">Feedback Detail</span>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea
          className="input-field input-field__text-area"
          defaultValue={suggestion.description}
          onChange={(e)=>handleFeedbackChange(e.target.name, e.target.value)}
          name="description"
        />
      </label>
    </div>
  );
}

export default EditFeedbackContent;
