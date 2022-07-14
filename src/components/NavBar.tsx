import React, { useState, useEffect } from 'react'
import { CATEGORY } from '../data/category';

function NavBar() {

    const [active, setActive] = useState("All")
    const [navOpen, setNavOpen] = useState(false)

    const handleNavOpen = (e: any) =>{
        setNavOpen(!navOpen)
    }

  return (
    <div className="nav">
            <div className="nav__banner">
                <div className="nav__title">
                    <h2>Product Name</h2>
                    <p className="p-2">Feedback Board</p>
                </div>
                <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg" className="nav__image" onClick={handleNavOpen}><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>
            </div>
            <div className={`nav__menu ${navOpen?"nav__menu--active":""}`}>
                <div className="nav__buttons">
                    {CATEGORY.map(bug=>{
                        return(
                            <div key={bug} className={`button__category ${active===bug?"button__category--active":""}`} onClick={()=> setActive(`${bug}`)}>
                                <p className="p-2">{bug}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="nav__roadmap">
                    <div>
                        <h3>Roadmap</h3>
                        <p className="p-2 nav__roadmap--view">view</p>
                    </div>
                    <ul>
                        <li><span>Planned<span>0</span></span></li>
                        <li><span>In-Progress<span>0</span></span></li>
                        <li><span>Live<span>0</span></span></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default NavBar