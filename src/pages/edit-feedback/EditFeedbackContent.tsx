import React from "react";

import ModalSelectInput from "../../components/ui/ModalSelectInput";

import { CATEGORY } from "../../data/category";
import { STATUS } from "../../data/status";

import { suggestions } from "../../utilities/interfaces";

interface props {
  suggestion: suggestions;
}

function EditFeedbackContent({ suggestion }: props) {
  console.log(suggestion);
  return (
    <div className="modal__content">
      <label className="p-2">
        <span className="p--bold">Feedback title</span>
        Add a short, descriptive headline
        <input
          type="text"
          className="input-field"
          defaultValue={suggestion.title}
          id="edit-feedback-title"
        />
      </label>
      <label className="p-2 modal__content--select">
        <span className="p--bold">Category</span>
        Choose a category for your feedback
        <ModalSelectInput options={CATEGORY.slice(1)} defaultValue={suggestion.category}/>
      </label>
      <label className="p-2 modal__content--select">
        <span className="p--bold">Update Status</span>
        Change feature state
        <ModalSelectInput options={STATUS} defaultValue={suggestion.status}/>
      </label>
      <label className="p-2">
        <span className="p--bold">Feedback Detail</span>
        Include any sepcific comments on what should be improved, added, etc.
        <textarea
          className="input-field input-field__text-area"
          defaultValue={suggestion.description}
          id="edit-feedback-details"
        />
      </label>
    </div>
  );
}

export default EditFeedbackContent;
