import React from "react";

import EditFeedback from "./pages/EditFeedback";
import Feedback from "./pages/Feedback";
import NewFeedback from "./pages/NewFeedback";
import Roadmap from "./pages/Roadmap";
import Suggestions from "./pages/Suggestions";

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
      <PersistGate persistor={persistor}>
        <FeatureContextProvider>
          <Routes>
            <Route path="/" element={<Suggestions/>}/>
            <Route path="/add-new-feedback" element={<NewFeedback/>}/>
            <Route path="/edit-feedback" element={<EditFeedback/>}/>
            <Route path={`/:id`} element={<FeedbackId/>}/>
          </Routes>
        </FeatureContextProvider>
        </PersistGate>
    </Provider>
  )
}

export default App

