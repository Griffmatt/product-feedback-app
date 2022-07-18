import React from 'react'
import { useNavigate } from "react-router-dom"

function CancelButton() {
    const navigate = useNavigate()
  return (
    <button className="button button--dark-blue button--lg modal__buttons--cancel" onClick={()=> navigate(-1)}>Cancel</button>
  )
}

export default CancelButton