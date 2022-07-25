import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { suggestions } from "../../utilities/interfaces";

import Card from "../../components/SuggestionsCard";
import CardEmpty from "./CardEmpty";
import NavBar from "../../components/NavBar";
import Header from "./SugestionsHeader";

import { useFeature } from "../../context/currentFeature";
import { useSelector, useDispatch } from "react-redux";
import { selectSuggestions, fetchState } from "../../redux/suggestionsSlice";
import { setUser, selectUser } from "../../redux/userSlice";

import { sortSuggestions } from "../../utilities/sortSuggestions";
import { useSortBy } from "../../context/sortBySuggestions";


function Suggestions() {
  const { currentFeature } = useFeature();
  const { sortBy } = useSortBy()

  const [filteredSuggestions, setFilteredSuggestions] = useState<Array<any>>(
    []
  );

  const dispatch = useDispatch();

  const suggestions = useSelector(selectSuggestions);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (suggestions.length === 0) {
      dispatch(fetchState());
    }
    if (user === null) {
      dispatch(setUser([]));
    }
  }, []);

  useEffect(() => {
   setFilteredSuggestions(
      sortSuggestions(sortBy, suggestions).filter(
        (suggestion: suggestions) =>
          suggestion.status === "suggestion" &&
          (suggestion.category === currentFeature.toLocaleLowerCase() ||
            currentFeature === "All")
      )
    )
  }, [currentFeature, suggestions, sortBy]);

  return (
    <div className="container container--row">
      <NavBar />
      <div className="column">
        <Header suggestions={filteredSuggestions}/>
        <div className="grid">
          {filteredSuggestions.length === 0 ? (
            <CardEmpty />
          ) : (
            filteredSuggestions.map((suggestion: suggestions) => {
              return (
                <div key={suggestion.id}>
                  <Link to={`/${suggestion.id}`}>
                    <Card suggestion={suggestion} />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
