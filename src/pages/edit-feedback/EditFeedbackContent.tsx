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
  const { register, handleSubmit, formState: {errors} } = useForm();

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
          className={` ${errors.title? "input-field__error": ""} input-field`}
          defaultValue={suggestion.title}
          {...register("title", {required: true})}
        />
        {errors.title && <p className="input-field__error--text">Title connot be empty</p>}
      </label>
      <label className="p-2 modal__content--select">
        <p className="p--bold">Category</p>
        Choose a category for your feedback
        <ModalSelectInput options={CATEGORY.slice(1)} defaultValue={suggestion.category} name="category" register={register}/>
      </label>
      <label className="p-2 modal__content--select">
        <p className="p--bold">Update Status</p>
        Change feature state
        <ModalSelectInput options={STATUS} defaultValue={suggestion.status} name="status" register={register} />
      </label>
      <label className="p-2">
        <p className="p--bold">Feedback Detail</p>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea
          className={` ${errors.description? "input-field__error": ""} input-field input-field__text-area`}
          defaultValue={suggestion.description}
          {...register("description", {required: true})}
        />
        {errors.description && <p className="input-field__error--text">Description cannot be empty</p>}
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
