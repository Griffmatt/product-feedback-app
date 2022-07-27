import React from "react";

import { deleteFeedback, updateFeedback } from "../../redux/suggestionsSlice";

import ModalSelectInput from "../../components/ui/ModalSelectInput";

import { CATEGORY } from "../../data/category";
import { STATUS } from "../../data/status";

import { suggestions } from "../../utilities/interfaces";

import CancelButton from '../../components/ui/CancelButton';

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

interface props {
  suggestion: suggestions
}

function EditFeedbackContent({ suggestion }: props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const handleUpdateFeedback = (data: any) => {
    
    dispatch(updateFeedback({id: suggestion.id, ...data}))

    navigate(-1)
  }


  const handleDeleteFeedback = () => {
    dispatch(deleteFeedback(suggestion.id))
    navigate("/")
  }
  

  return (
    <form className="modal__content" onSubmit={handleSubmit(handleUpdateFeedback)}>
      <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input
          type="text"
          className="input-field"
          defaultValue={suggestion.title}
          {...register("title")}
        />
      </label>
      <label className="p-2 modal__content--select">
        <span className="p--bold">Category</span>
        Choose a category for your feedback
        <ModalSelectInput options={CATEGORY.slice(1)} defaultValue={suggestion.category} name="category" register={register}/>
      </label>
      <label className="p-2 modal__content--select">
        <span className="p--bold">Update Status</span>
        Change feature state
        <ModalSelectInput options={STATUS} defaultValue={suggestion.status} name="status" register={register} />
      </label>
      <label className="p-2">
        <span className="p--bold">Feedback Detail</span>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea
          className="input-field input-field__text-area"
          defaultValue={suggestion.description}
          {...register("description")}
        />
      </label>
      <div className="modal__buttons">
          <button className="button button--purple button--lg modal__buttons--save" type="submit">Save Changes</button>
          <CancelButton/>
          <button className="button button--red button--lg modal__buttons--delete"onClick={handleDeleteFeedback}>Delete</button>
      </div>
    </form>
  );
}

export default EditFeedbackContent;
