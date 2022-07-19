import React from 'react'
import NewFeedbackContent from '../components/NewFeedbackContent';

import BackButton from "../components/ui/BackButton";
import CancelButton from '../components/ui/CancelButton';

import { useDispatch } from "react-redux";

import { addFeedback } from "../redux/suggestionsSlice";

import { generateKey } from "../utilities/generateKey"

import { useNavigate } from "react-router-dom"



function NewFeedback() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddFeedback = () => {
    const title = document.getElementById("new-feedback-title") as HTMLInputElement
    const category = document.getElementById("new-feedback-category") as HTMLInputElement
    const status = document.getElementById("new-feedback-status") as HTMLInputElement
    const description = document.getElementById("new-feedback-detail") as HTMLInputElement
    dispatch(addFeedback({
      id: generateKey("F"),
      title: title.value,
      category: category.value,
      upvotes: 0,
      status: status.value,
      description:description.value,
      comments: [
      ]
    }))

    navigate("/")
  }

  return (
    <div className="container container--sm container--padding-top">
      <BackButton/>
      <div className="modal">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className="modal__image"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fill-rule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
        <h3>Create New Feedback</h3>
        <NewFeedbackContent/>
        <div className="modal__buttons">
          <button className="button button--purple button--lg modal__buttons--save" onClick={handleAddFeedback}>Add Feedback</button>
          <CancelButton/>
        </div>
      </div>
    </div>
  )
}

export default NewFeedback