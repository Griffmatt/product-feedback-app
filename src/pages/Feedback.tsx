import React from 'react'

import { Link } from 'react-router-dom'

import Card from '../components/Card'
import BackButton from '../components/ui/BackButton';

import data from "../data/data.json";

function FeedbackDetails() {

  const suggestion= data.productRequests[0]
  return (
    <div className="container">
      <div className="feedback">
      <div className="feedback__nav">
        <BackButton/>
        <Link to="/edit-feedback"><button className="p-2 button button--blue button--md">Edit Feedback</button></Link>
      </div>
      <Card suggestion={suggestion} comments={suggestion.comments}/>
      <div className="feedback__comments">
          <h3>0 Comments</h3>
          <div className="comment">
            <img src={suggestion.comments[0].user.image} className="comment__image"/>
            <div className="comment__user">
              <p className="p-1 p--bold">{suggestion.comments[0].user.name}</p>
              <p className="p-1">@{suggestion.comments[0].user.username}</p>
            </div>
            <p className="p-1 comment__content">{suggestion.comments[0].content}</p>
            <p className="p-2 p--bold comment__reply">Reply</p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default FeedbackDetails