import React from 'react'
import FeedbackContent from "../../components/FeedbackContent"

import BackButton from "../../components/ui/BackButton";

function NewFeedback() {

  return (
    <div className="container container--sm container--padding-top">
      <BackButton/>
      <div className="modal">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className="modal__image"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fill-rule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
        <h3>Create New Feedback</h3>
        <FeedbackContent/>
      </div>
    </div>
  )
}

export default NewFeedback;