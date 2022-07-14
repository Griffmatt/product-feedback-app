import React from "react";

import EditFeedback from "./pages/EditFeedback";
import Feedback from "./pages/Feedback";
import NewFeedback from "./pages/NewFeedback";
import Roadmap from "./pages/Roadmap";
import Suggestions from "./pages/Suggestions";

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Suggestions/>}/>
        <Route path="/add-new-feedback" element={<NewFeedback/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>
    </div>
  )
}

export default App

