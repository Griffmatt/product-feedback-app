import React, { useState } from 'react'

import { Link } from "react-router-dom"

import AddFeedbackButton from '../../components/ui/AddFeedbackButton'
import BackButton from '../../components/ui/BackButton'
import RoadmapCard from './RoadmapCard';
import RoadmapCards from './RoadmapCards';

import { selectSuggestions } from "../../redux/suggestionsSlice";
import { useSelector } from "react-redux";

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
          {suggestions && <RoadmapCards activeNav={activeNav} suggestion={suggestions.filter(suggestion=> suggestion.status.toLowerCase() === "planned")} info={{title: "Planned", description:"Ideas prioritized for research"}}/>}
          {suggestions && <RoadmapCards activeNav={activeNav} suggestion={suggestions.filter(suggestion=> suggestion.status.toLowerCase() === "in-progress")} info={{title: "In-Progress", description:"Features currently being developed"}}/>}
          {suggestions && <RoadmapCards activeNav={activeNav} suggestion={suggestions.filter(suggestion=> suggestion.status.toLowerCase() === "live")} info={{title: "Live", description:"Released features"}}/>}
        </div>
      </div>
    </div>
  )
}

export default Roadmap