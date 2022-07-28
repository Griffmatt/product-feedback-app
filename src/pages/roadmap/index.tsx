import React, { useState } from 'react'

import { Link } from "react-router-dom"

import AddFeedbackButton from '../../components/ui/AddFeedbackButton'
import BackButton from '../../components/ui/BackButton'
import { selectSuggestions } from "../../redux/suggestionsSlice";
import { useSelector } from "react-redux";
import RoadmapCard from './RoadmapCard';

function Roadmap() {

  const [activeNav, setActiveNav] = useState("Planned")

  const suggestions = useSelector(selectSuggestions);

  return (
    <div className="container roadmap">
      <div className="roadmap__header">
          <div>
              <BackButton color="white"/>
              <h1>Roadmap</h1>
          </div>
          <AddFeedbackButton/>
      </div>
      <div className="roadmap__nav">
          <p className={`${activeNav==="Planned"? "roadmap__nav--active": ""}`} onClick={()=> setActiveNav("Planned")}>Planned</p>
          <p className={`${activeNav==="In-Progress"? "roadmap__nav--active": ""}`} onClick={()=> setActiveNav("In-Progress")}>In-Progress</p>
          <p className={`${activeNav==="Live"? "roadmap__nav--active": ""}`} onClick={()=> setActiveNav("Live")}>Live</p>
      </div>
      <div className="roadmap__content">
        <div className="roadmap__grid">
          {suggestions &&
          <div className={`roadmap__cards ${activeNav==="Planned"? "roadmap__cards--active": ""}`}>
            <div className="roadmap__title">
              <h3>Planned</h3>
              <p>Features currently being developed</p>
            </div>
            {suggestions.filter(suggestion=> suggestion.status.toLowerCase() === "planned").map(suggestion=>{
              return(
                <Link to={`/${suggestion.id}`}>
                  <RoadmapCard suggestion={suggestion} color="Planned"/>
                </Link>
                )
            })}
          </div>}
          {suggestions &&
          <div className={`roadmap__cards ${activeNav==="In-Progress"? "roadmap__cards--active": ""}`}>
            <div className="roadmap__title">
              <h3>In-Progress</h3>
              <p>Currently being developed</p>
            </div>
            {suggestions.filter(suggestion=> suggestion.status.toLowerCase() === "in-progress").map(suggestion=>{
              return(
                <Link to={`/${suggestion.id}`}>
                  <RoadmapCard suggestion={suggestion} color="In-Progress"/>
                </Link>
                )
            })}
          </div>}
          {suggestions &&
          <div className={`roadmap__cards ${activeNav==="Live"? "roadmap__cards--active": ""}`}>
            <div className="roadmap__title">
              <h3>Live</h3>
              <p>Released features</p>
            </div>
            {suggestions.filter(suggestion=> suggestion.status.toLowerCase() === "live").map(suggestion=>{
              return(
                <Link to={`/${suggestion.id}`}>
                  <RoadmapCard suggestion={suggestion} color="Live"/>
                </Link>
              )
            })}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Roadmap