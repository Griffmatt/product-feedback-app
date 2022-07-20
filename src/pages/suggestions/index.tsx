import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { suggestions } from "../../utilities/interfaces";

import Card from "../../components/Card";
import CardEmpty from "./CardEmpty";
import NavBar from "../../components/NavBar";
import Header from "./Header";

import { useFeature } from "../../context/currentFeature";
import { useSelector, useDispatch } from "react-redux";
import { selectSuggestions, fetchState } from "../../redux/suggestionsSlice";
import { setUser, selectUser } from "../../redux/userSlice";


function Suggestions() {
  const { currentFeature } = useFeature();

  const [filteredSuggestions, setFilteredSuggestions] = useState<Array<any>>(
    []
  );

  const dispatch = useDispatch();

  const suggestion = useSelector(selectSuggestions);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (suggestion.length === 0) {
      dispatch(fetchState());
    }
    if (user === null) {
      dispatch(setUser([]));
    }
  }, []);

  useEffect(() => {
    setFilteredSuggestions(
      suggestion.filter(
        (suggestion: suggestions) =>
          suggestion.status === "suggestion" &&
          (suggestion.category === currentFeature.toLocaleLowerCase() ||
            currentFeature === "All")
      )
    );
  }, [currentFeature, suggestion]);

  return (
    <div className="container container--row">
      <NavBar />
      <div className="column">
        <Header suggestions={filteredSuggestions}/>
        <div className="grid">
          {filteredSuggestions.length === 0 ? (
            <CardEmpty />
          ) : (
            filteredSuggestions.map((filteredSuggestions: suggestions) => {
              return (
                <div key={filteredSuggestions.id}>
                  <Link to={`/${filteredSuggestions.id}`}>
                    <Card suggestion={filteredSuggestions} />
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
