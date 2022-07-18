import React from 'react'

import BackButton from "../components/ui/BackButton";
import CancelButton from '../components/ui/CancelButton';

function EditFeedback() {
  return (
    <div className="container container--sm container--padding-top">
      <BackButton/>
      <div className="modal">
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="modal__image"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="20" cy="20" r="20"/><path d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z" fill="#FFF" fill-rule="nonzero"/></g></svg>
        <h3>Editing 'add a dark theme'</h3>
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
          <button className="button button--purple button--lg modal__buttons--save">Save Changes</button>
          <CancelButton/>
          <button className="button button--red button--lg modal__buttons--delete">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default EditFeedback