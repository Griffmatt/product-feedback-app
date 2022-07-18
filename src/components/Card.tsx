import React, { useEffect, useState } from 'react'

import { totalComments } from '../utilities/totalComments'

import { useDispatch, useSelector } from "react-redux";

import { addUpvote, removeUpvote, selectUser } from "../redux/userSlice";

import { upVote, downVote } from "../redux/suggestionsSlice";

import { suggestions } from "../utilities/interfaces";

interface props{
    suggestion: suggestions
}


function Card({suggestion}: props) {

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    const handleUpVote = (e: React.MouseEvent) => {
        
        if(user.upvotes.includes(suggestion.id)){
            dispatch(removeUpvote(suggestion.id))
            dispatch(downVote(suggestion.id))
            setActive(false)
        } else{
            dispatch(addUpvote(suggestion.id))
            dispatch(upVote(suggestion.id))
            setActive(true)
        }

        e.stopPropagation();
        e.preventDefault();
    }

    useEffect(() =>{
        if(user.upvotes.includes(suggestion.id)){
            setActive(true)
        }
    }, [])


  return (
    <div className="card card--grid">
        <div className="card__text">
            <h3>{suggestion.title}</h3>
            <p className="p-2">{suggestion.description}</p>
        </div>
        <div className="card__feature">
            <p className="p-2">{suggestion.category}</p>
        </div>
        <div className={`card__up-vote ${active?"card__up-vote--active": ""}`} onClick={(e)=> handleUpVote(e)}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke-width="2" fill="none" fillRule="evenodd"/></svg>
            <p className="p-2">{suggestion.upvotes}</p>
        </div>
        <div className="card__comments">
            <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>
            <p>{totalComments(suggestion.comments)}</p>
        </div>
    </div>
  )
}

export default Card