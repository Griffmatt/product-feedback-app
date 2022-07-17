import React from 'react'

import BackButton from "../components/ui/BackButton";

function NewFeedback() {
  return (
    <div className="container container--sm container--padding-top">
      <BackButton/>
      <div className="modal">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className="modal__image"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fill-rule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
        <h3>Create New Feedback</h3>
        <div className="modal__content">
          <label className="p-2">
            <span className="p--bold">Feedback title</span>
            Add a short, descriptive headline
            <input type="text" className="input-field"/>
          </label>
          <label className="p-2">
            <span className="p--bold">Category</span>
            Choose a category for your feedback
            <input type="text" className="input-field"/>
          </label>
          <label className="p-2">
            <span className="p--bold">Update Status</span>
            Change feature state
            <input type="text" className="input-field"/>
          </label>
          <label className="p-2">
            <span className="p--bold">Feedback Detail</span>
            Include any sepcific comments on what should be improved, added, etc.
            <textarea className="input-field input-field__text-area"/>
          </label>
        </div>
        <div className="modal__buttons">
          <button className="button button--purple button--lg modal__buttons--save">Add Feedback</button>
          <button className="button button--dark-blue button--lg modal__buttons--cancel">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default NewFeedback