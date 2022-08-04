import React, { useState, useEffect } from "react";

interface props {
  options: string[],
  defaultValue: string,
  name: string,
  handleFeedbackChange?: (name: string, value: string) => void,
  register: any
}

function ModalSelectInput({ options, defaultValue, name, register }: props) {

  const [selectedOption, setSelectedOption] = useState<string>();
  const [menuOpen, setMenuOpen] = useState(false)

  const handleShown = () =>{
    setMenuOpen(!menuOpen)
  }

  const handleChange = (option: string) =>{
    setSelectedOption(option)
  }

  useEffect(()=>{
    setSelectedOption(defaultValue)
  }, [defaultValue])

  return (
    <>
    {selectedOption &&
      <><div className="input-field__wrapper">
          <input readOnly className="input-field input-field__select" onClick={() => handleShown()} value={selectedOption} {...register(`${name}`)} />
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg" className={`${menuOpen ? "select__image--active" : ""}`}>
            <path
              d="M1 1l4 4 4-4"
              stroke="#4661E6"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd" />
          </svg>
        </div><div
          className={`${menuOpen ? "select__menu--active" : ""} select__menu select__menu--modal`}
        >
            {options.map((option: string) => {
              return (
                <div
                  className="select__option"
                  onClick={() => handleChange(option)}
                  key={option}
                >
                  <p
                    className={`${option.toLowerCase() === selectedOption.toLowerCase() ? "select__option--active" : ""}`}
                  >
                    {option}
                  </p>
                  {option.toLowerCase() === selectedOption.toLowerCase() ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11">
                      <path
                        fill="none"
                        stroke="#AD1FEA"
                        stroke-width="2"
                        d="M1 5.233L4.522 9 12 1" />
                    </svg>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div></>}
    </>
  );
}

export default ModalSelectInput;
