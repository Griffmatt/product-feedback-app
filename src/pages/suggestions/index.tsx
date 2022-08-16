import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { suggestions } from "../../utilities/interfaces"

import Card from "../../components/SuggestionsCard"
import CardEmpty from "./CardEmpty"
import NavBar from "../../components/NavBar"
import Header from "./SugestionsHeader"

import { useFeature } from "../../context/currentFeature"
import { useSelector, useDispatch } from "react-redux"
import { selectSuggestions, fetchSuggestions } from "../../redux/suggestionsSlice"

import { sortSuggestions } from "../../utilities/sortSuggestions"
import { useSortBy } from "../../context/sortBySuggestions"


function Suggestions() {
  const { currentFeature } = useFeature();
  const { sortBy } = useSortBy()

  const [filteredSuggestions, setFilteredSuggestions] = useState<Array<any>>(
    []
  );

  const suggestions = useSelector(selectSuggestions);


  useEffect(() => {
   setFilteredSuggestions(
      sortSuggestions(sortBy, suggestions).filter(
        (suggestion: suggestions) =>
          suggestion.status.toLowerCase() === "suggestion" &&
          (suggestion.category.toLowerCase() === currentFeature.toLowerCase() ||
            currentFeature === "All")
      )
    )
  }, [currentFeature, suggestions, sortBy]);

  return (
    <div className="container">
      <div className=" container--row">
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
    </div>
  );
}

export default Suggestions;
