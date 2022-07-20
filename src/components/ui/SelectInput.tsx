import React, { useState } from 'react'

import { SORT_BY } from "../../data/sortBy";


function SelectInput() {

    const [selectedOption, setSelectOption] = useState(SORT_BY[0])
    console.log(SORT_BY)

  return (
    <select> 
        {SORT_BY.map((option: string)=>(
            <option value={option.toLowerCase()}>{option}</option>
        ))}
    </select>

  )
}

export default SelectInput