import React from 'react'

import { Link } from 'react-router-dom'
import AddComment from '../components/AddComment';

import Card from '../components/Card'
import FeedbackComments from '../components/FeedbackComments';
import BackButton from '../components/ui/BackButton';

import data from "../data/data.json";

function FeedbackDetails({id}:{id: string | undefined} ) {

  const suggestion = data.productRequests.filter(suggestion => suggestion.id === Number(id))[0]
  console.log(id)
  return (
    <div className="container">
      <div className="feedback">
      <div className="feedback__nav">
        <BackButton/>
        <Link to="/edit-feedback"><button className="p-2 button button--blue button--md">Edit Feedback</button></Link>
      </div>
      <Card suggestion={suggestion}/>
      <FeedbackComments suggestion={suggestion}/>
      <AddComment/>
    </div>
    </div>
  )
}

export default FeedbackDetails