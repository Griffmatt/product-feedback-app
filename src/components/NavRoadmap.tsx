import React, { useCallback } from 'react'

import { Link } from "react-router-dom"

import { countStatus } from "./../utilities/countStatus"
import { selectSuggestions } from "../redux/suggestionsSlice"
import { useSelector } from "react-redux"


function NavRoadmap() {

    const suggestions = useSelector(selectSuggestions)

    const roadmapCallback = useCallback(
        (s: string) => countStatus(s, suggestions),
        [suggestions.some(suggestion=> suggestion.status)]
      );

  return (
    <div className="nav__roadmap">
        <div>
            <h3>Roadmap</h3>
            <Link to="/roadmap"><p className="p-2 nav__roadmap--view">view</p></Link>
        </div>
        <ul>
            <li><span>Planned<span>{roadmapCallback("planned")}</span></span></li>
            <li><span>In-Progress<span>{roadmapCallback("in-progress")}</span></span></li>
            <li><span>Live<span>{roadmapCallback("live")}</span></span></li>
        </ul>
    </div>
  )
}

export default NavRoadmap