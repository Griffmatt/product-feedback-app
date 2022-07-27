import React from 'react'

import { CATEGORY } from '../../data/category'

import ModalSelectInput from '../../components/ui/ModalSelectInput'
import CancelButton from '../../components/ui/CancelButton';

import { useDispatch } from "react-redux";
import { addFeedback } from "../../redux/suggestionsSlice";
import { generateKey } from "../../utilities/generateKey"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

function NewFeedbackContent() {

  const { register, handleSubmit, formState:{errors} } = useForm();

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleAddFeedback = (data: any) => {
    dispatch(addFeedback({id: generateKey("F"), ...data, status: "suggestion", upvotes: 0, comments: [] }))
    navigate("/")
  }

  return (
    <>
      <form className="modal__content"  onSubmit={handleSubmit(handleAddFeedback)}>
          <label className="p-2">
          <p className="p--bold">Feedback title</p>
          Add a short, descriptive headline
          <input type="text" className={` ${errors.title? "input-field__error": ""} input-field `}  {...register("title", { required: true})}/>
          {errors.title && <p className="input-field__error--text">Title cannot be empty</p>}
          </label>
          <label className="p-2 modal__content--select">
          <p className="p--bold">Category</p>
          Choose a category for your feedback
          <ModalSelectInput options={CATEGORY} defaultValue="feature" name="category" register={register}/>
          </label>
          <label className="p-2">
          <p className="p--bold">Feedback Details</p>
          Include any sepcific comments on what should be improved, added, etc.
          <textarea className={` ${errors.description? "input-field__error": ""} input-field input-field__text-area`}  {...register("description", {required: true})} />
          {errors.description && <p className="input-field__error--text">Description cannot be empty</p>}
          </label>
          <div className="modal__buttons">
            <button className="button button--purple button--lg modal__buttons--save" type="submit" >Add Feedback</button>
            <CancelButton/>
          </div>
      </form>
    </>
  )
}

export default NewFeedbackContent