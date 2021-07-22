import React from "react"
import { FilterContainer } from "./filterStyles"
import Dropdown from "react-dropdown"

const options = [
  { value: "0", label: "Up Coming", className: "optionSelect" },
  { value: "1", label: "Live", className: "optionSelect" },
]

const Filter = () => {
  return (
    <FilterContainer>
      <p>Input</p>
      <Dropdown
        options={options}
        className="dropDown"
        value={options[0].label}
        controlClassName="control"
        menuClassName="menu"
        //   onChange={(e) => changeStatus(e)}
      />
      <Dropdown
        options={options}
        className="dropDown"
        value={options[0].label}
        controlClassName="control"
        menuClassName="menu"
        //   onChange={(e) => changeStatus(e)}
      />
    </FilterContainer>
  )
}

export default Filter
