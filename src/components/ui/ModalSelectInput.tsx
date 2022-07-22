import React, { useState } from "react";

interface props {
  options: string[],
  defaultValue: string
}

function ModalSelectInput({ options, defaultValue }: props) {

const firstLetterUpperCase = (word: string) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
    }
  const [selectedOption, setSelectedOption] = useState(firstLetterUpperCase(defaultValue));
  const [selectOpen, setSelectOpen] = useState(false);


  return (
    <>
      <div className="input-field input-field__select" onClick={()=> setSelectOpen(!selectOpen)} defaultValue={selectedOption}>
        <p>{selectedOption}</p>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4 4 4-4"
            stroke="#4661E6"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`${selectOpen ? "select__menu--active" : ""} select__menu select__menu--modal`}
      >
        {options.map((option: string) => {
          return (
            <div
              className="select__option"
              onClick={() => setSelectedOption(option)}
            >
              <p
                className={`${
                  option === selectedOption ? "select__option--active" : ""
                }`}
              >
                {option}
              </p>
              {option === selectedOption ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11">
                  <path
                    fill="none"
                    stroke="#AD1FEA"
                    stroke-width="2"
                    d="M1 5.233L4.522 9 12 1"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div
        className={`${
          selectOpen ? "select__backdrop--active" : ""
        } select__backdrop`}
        onClick={() => setSelectOpen(false)}
      />
    </>
  );
}

export default ModalSelectInput;
