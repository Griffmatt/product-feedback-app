import React from 'react'

import { useNavigate } from "react-router-dom";

interface props{
  color?: string
}

function BackButton({color}: props) {

  let navigate = useNavigate()
  return (
    <span className={`button__back button__back--${color}`} onClick={()=> navigate(-1)}>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          <p className="p-1">Go Back</p>
    </span>
  )
}

export default BackButton