import React from "react";

import EditFeedback from "./pages/EditFeedback";
import Feedback from "./pages/Feedback";
import NewFeedback from "./pages/NewFeedback";
import Roadmap from "./pages/Roadmap";
import Suggestions from "./pages/Suggestions";

import { Routes, Route, useParams } from "react-router-dom"
import { FeatureContextProvider } from "./context/currentFeature";

function App() {

  const FeedbackId = () => {
    const {id} = useParams()
      return(
        <Feedback id={id}/>
      )
  }
  return (
    <FeatureContextProvider>
      <Routes>
        <Route path="/" element={<Suggestions/>}/>
        <Route path="/add-new-feedback" element={<NewFeedback/>}/>
        <Route path="/edit-feedback" element={<EditFeedback/>}/>
        <Route path={`/:id`} element={<FeedbackId/>}/>
      </Routes>
    </FeatureContextProvider>
  )
}

export default App

