import React, { useState } from 'react'

interface props{
  options: string[],
  selectOpen?: boolean,
  setSelectOpen: React.Dispatch<React.SetStateAction<boolean>>
}


function HeaderSelectInput({options, selectOpen, setSelectOpen}: props) {

  const [selectedOption, setSelectedOption] = useState("Most Upvotes")
  return (
    <>
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