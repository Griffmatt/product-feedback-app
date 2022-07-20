import React from "react";

import EditFeedback from "./pages/edit-feedback";
import Feedback from "./pages/feedback";
import NewFeedback from "./pages/new-feedback";
import Roadmap from "./pages/roadmap";
import Suggestions from "./pages/suggestions";

import { Routes, Route, useParams } from "react-router-dom"
import { FeatureContextProvider } from "./context/currentFeature";

import { Provider } from 'react-redux';
import store from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'


function App() {

  let persistor = persistStore(store);

  const FeedbackId = () => {
    const {id} = useParams()
      return(
        <Feedback id={id}/>
      )
  }
  return (
    <Provider store={store}>
        <FeatureContextProvider>
          <Routes>
            <Route path="/" element={<Suggestions/>}/>
            <Route path="/add-new-feedback" element={<NewFeedback/>}/>
            <Route path={`/edit-feedback/:id`} element={<EditFeedback/>}/>
            <Route path={`/:id`} element={<FeedbackId/>}/>
            <Route path ="/roadmap" element ={<Roadmap/>}/>
          </Routes>
        </FeatureContextProvider>
    </Provider>
  )
}

export default App

