import React, { useEffect } from "react"

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

import  { z }  from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface props {
  suggestion?: suggestions
}

const FormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).max(250),
  status: z.string().optional(),
  category: z.string()
});


type FormSchemaType = z.infer<typeof FormSchema>;


function EditFeedbackContent({ suggestion }: props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: {errors} } = useForm<FormSchemaType>({resolver: zodResolver(FormSchema)})

  useEffect(()=>{
    let defaulValues={
      title: suggestion?.title,
      description: suggestion?.description,
      status: suggestion?.status,
      category: suggestion?.category
    }
    
    reset({...defaulValues})
  }, [suggestion])

  const handleUpdateFeedback = (data: any) => {
    dispatch(updateFeedback({id: suggestion?.id, ...data}))
    navigate(-1)
  }


  const handleDeleteFeedback = () => {
    dispatch(deleteFeedback(suggestion?.id))
    navigate(-1)
  }

  const handleAddFeedback = (data: any) => {
    dispatch(addFeedback({id: generateKey("F"), ...data, status: "suggestion", upvotes: 0, comments: [] }))
    navigate(-1)
  }
  

  return (
    <form className="modal__content" onSubmit={handleSubmit(suggestion? handleUpdateFeedback:handleAddFeedback)}>
      <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input
          type="text"
          className={` ${errors.title? "input-field__error": ""} input-field`}
          {...register("title")}
          defaultValue={suggestion?.title}
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
          defaultValue={suggestion?.description}
          {...register("description")}
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
