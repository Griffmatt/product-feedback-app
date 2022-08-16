import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSuggestions, fetchSuggestions } from "./redux/suggestionsSlice";

import EditFeedback from "./pages/edit-feedback";
import Feedback from "./pages/feedback";
import NewFeedback from "./pages/new-feedback";
import Roadmap from "./pages/roadmap";
import Suggestions from "./pages/suggestions";

import { Routes, Route, useParams } from "react-router-dom";
import { FeatureContextProvider } from "./context/currentFeature";
import { SortByContextProvider } from "./context/sortBySuggestions";

function App() {
  const dispatch = useDispatch();

  const suggestions = useSelector(selectSuggestions);

  useEffect(() => {
    if (suggestions.length === 0) {
      dispatch(fetchSuggestions());
    }
  }, []);

  const FeedbackId = () => {
    const { id } = useParams();
    return <Feedback id={id} />;
  };
  return (
    <FeatureContextProvider>
      <SortByContextProvider>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/add-new-feedback" element={<NewFeedback />} />
          <Route path="/edit-feedback/:id" element={<EditFeedback />} />
          <Route path="/:id" element={<FeedbackId />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </SortByContextProvider>
    </FeatureContextProvider>
  );
}

export default App;
