import React from "react"

import { deleteFeedback, updateFeedback, addFeedback } from "../redux/suggestionsSlice"

import ModalSelectInput from "./ui/ModalSelectInput"

import { CATEGORY } from "../data/category"
import { STATUS } from "../data/status"

import { suggestions } from "../utilities/interfaces"

import CancelButton from './ui/CancelButton'

import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { generateKey } from "../utilities/generateKey"

interface props {
  suggestion?: suggestions
}

function EditFeedbackContent({ suggestion }: props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleUpdateFeedback = (data: any) => {
    
    dispatch(updateFeedback({id: suggestion?.id, ...data}))

    navigate(-1)
  }


  const handleDeleteFeedback = () => {
    dispatch(deleteFeedback(suggestion?.id))
    navigate("/")
  }

  const handleAddFeedback = (data: any) => {
    dispatch(addFeedback({id: generateKey("F"), ...data, status: "suggestion", upvotes: 0, comments: [] }))
    navigate("/")
  }
  

  return (
    <form className="modal__content" onSubmit={handleSubmit(suggestion? handleUpdateFeedback:handleAddFeedback)}>
      <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input
          type="text"
          className={` ${errors.title? "input-field__error": ""} input-field`}
          defaultValue={suggestion?suggestion.title: ""}
          {...register("title", {required: true})}
        />
        {errors.title && <p className="input-field__error--text">Title connot be empty</p>}
      </label>
      <label className="p-2 modal__content--select">
        <p className="p--bold">Category</p>
        Choose a category for your feedback
        <ModalSelectInput options={CATEGORY.slice(1)} defaultValue={suggestion?suggestion.category:"Feature"} name="category" register={register}/>
      </label>
      {suggestion && <label className="p-2 modal__content--select">
        <p className="p--bold">Update Status</p>
        Change feature state
        <ModalSelectInput options={STATUS} defaultValue={suggestion.status} name="status" register={register} />
      </label>}
      <label className="p-2">
        <p className="p--bold">Feedback Detail</p>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea
          className={` ${errors.description? "input-field__error": ""} input-field input-field__text-area`}
          defaultValue={suggestion?suggestion.description: ""}
          {...register("description", {required: true})}
        />
        {errors.description && <p className="input-field__error--text">Description cannot be empty</p>}
      </label>
      <div className="modal__buttons">
          <button className="button button--purple button--lg modal__buttons--save" type="submit">Save Changes</button>
          <CancelButton/>
          {suggestion &&<button className="button button--red button--lg modal__buttons--delete"onClick={handleDeleteFeedback}>Delete</button>}
      </div>
    </form>
  );
}

export default EditFeedbackContent;
