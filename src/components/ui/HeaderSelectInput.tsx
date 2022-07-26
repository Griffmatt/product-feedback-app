import React, { useState } from 'react'

import { useSortBy } from "../../context/sortBySuggestions"

interface props{
  options: string[]
}


function HeaderSelectInput({options}: props) {

  const [menuOpen, setMenuOpen] = useState(false)

  const { sortByValue, sortBy } = useSortBy()

 const  handleMenuClick = (option: string) => {
    sortByValue(option)
    setMenuOpen(false)
  }

  return (
    <>
    <span onClick={()=> setMenuOpen(!menuOpen)}>
                {" "}
                {sortBy}
                <svg width="13" height="8" xmlns="http://www.w3.org/2000/svg" className={`${menuOpen ? "select__image--active" : ""}`}>
                  <path
                    d="M1 1l4 4 4-4"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
      </span>
      <div className={`${menuOpen?"select__menu--active": ""} select__menu`}>
        {options.map((option: string)=>{
          return(
            <div className="select__option" onClick={()=> handleMenuClick(option)} key={option}>
              <p className={`${option===sortBy? "select__option--active":""}`}>{option}</p>
              {option===sortBy?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" stroke-width="2" d="M1 5.233L4.522 9 12 1"/></svg>:""}
            </div>
          )
        })}
      </div>
      <div className={`${menuOpen?"select__backdrop--active": ""} select__backdrop`} onClick={()=> setMenuOpen(false)}/>
    </>
  )
}

export default HeaderSelectInput