import React from 'react'
import { Link } from "react-router-dom"

import { suggestions } from '../../utilities/interfaces';

import RoadmapCard from './RoadmapCard';

interface props{
    activeNav: string,
    suggestion: suggestions[],
    info: {
        title: string,
        description: string
    }
}

function RoadmapCards({activeNav, suggestion, info}: props) {
  return (
    <div className={`roadmap__cards ${activeNav==="Planned"? "roadmap__cards--active": ""}`}>
        <div className="roadmap__title">
        <h3>{info.title}</h3>
        <p>{info.description}</p>
        </div>
        {suggestion.map((suggestion:suggestions)=>{
        return(
            <Link to={`/${suggestion.id}`}>
                <RoadmapCard suggestion={suggestion} color={info.title}/>
            </Link>
            )
        })}
    </div>
  )
}

export default RoadmapCards
