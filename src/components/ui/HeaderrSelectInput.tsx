import React, { useState } from 'react'

interface props{
  options: string[]
}


function HeaderSelectInput({options}: props) {

  const [selectedOption, setSelectedOption] = useState("Most Upvotes")
  const [selectOpen, setSelectOpen] = useState(false)
  return (
    <>
    <span onClick={()=> setSelectOpen(!selectOpen)}>
                {" "}
                {selectedOption}
                <svg width="13" height="8" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1l4 4 4-4"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
      <div className={`${selectOpen?"select__menu--active": ""} select__menu`}>
        {options.map((option: string)=>{
          return(
            <div className="select__option" onClick={()=> setSelectedOption(option)}>
              <p className={`${option===selectedOption? "select__option--active":""}`}>{option}</p>
              {option===selectedOption?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" stroke-width="2" d="M1 5.233L4.522 9 12 1"/></svg>:""}
            </div>
          )
        })}
      </div>
      <div className={`${selectOpen?"select__backdrop--active": ""} select__backdrop`} onClick={()=> setSelectOpen(false)}/>
    </>
  )
}

export default HeaderSelectInput