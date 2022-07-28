import React, { useEffect, useState } from 'react'
import { CATEGORY } from '../data/category'

import { useFeature } from "../context/currentFeature"

import Login from "../components/Login"
import NavRoadmap from './NavRoadmap'

function NavBar() {
    const [navOpen, setNavOpen] = useState(false)

    const {currentFeature, setCurrentFeature} = useFeature()

    const handleNavOpen = () =>{
        setNavOpen(!navOpen)
    }

    useEffect(()=>{
        return(
            setCurrentFeature("All"),
            setNavOpen(false)
        )
    }, [])


  return (
    <div className="nav">
            <div className="nav__banner">
                <div className="nav__title">
                    <h2>Product Name</h2>
                    <p className="p-2">Feedback Board</p>
                </div>
                {navOpen?<svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" onClick={handleNavOpen}><path d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z" fill="#FFF" fill-rule="evenodd"/></svg>:<svg width="20" height="17" xmlns="http://www.w3.org/2000/svg" className="nav__image" onClick={handleNavOpen}><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>}
            </div>
            <div className={`nav__menu ${navOpen?"nav__menu--active":""}`}>
                <div className="nav__buttons">
                    {CATEGORY.map(bug=>{
                        return(
                            <div key={bug} className={`button__category ${currentFeature===bug?"button__category--active":""}`} onClick={()=> setCurrentFeature(`${bug}`)}>
                                <p className="p-2">{bug}</p>
                            </div>
                        )
                    })}
                </div>
                <NavRoadmap/>
                <Login/>
            </div>
            <div className={`nav__back-drop ${navOpen?"nav__back-drop--active":""}`}/>
        </div>
  )
}

export default NavBar