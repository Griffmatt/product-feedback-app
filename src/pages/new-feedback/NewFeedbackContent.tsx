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

  const { register, handleSubmit } = useForm();

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
          <span className="p--bold">Feedback title</span>
          Add a short, descriptive headline
          <input type="text" className="input-field" {...register("title")}/>
          </label>
          <label className="p-2 modal__content--select">
          <span className="p--bold">Category</span>
          Choose a category for your feedback
          <ModalSelectInput options={CATEGORY} defaultValue="feature" name="category" register={register}/>
          </label>
          <label className="p-2">
          <span className="p--bold">Feedback Details</span>
          Include any sepcific comments on what should be improved, added, etc.
          <textarea className="input-field input-field__text-area"  {...register("description")} />
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