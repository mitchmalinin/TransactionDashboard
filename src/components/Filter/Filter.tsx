import { useState } from "react"
import { FilterContainer } from "./filterStyles"
import Dropdown, { Option } from "react-dropdown"
import { txsTypes, txsStatus, coinTypes } from "../../utils/staticData"

interface IProps {
  filterTransactionArray: (e: Option, optionType: string) => void
}

const Filter: React.FC<IProps> = ({ filterTransactionArray }) => {
  return (
    <FilterContainer>
      <p>Input</p>
      <div className="dropDownContainer">
        <Dropdown
          options={coinTypes}
          placeholder="Currency"
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          onChange={(e) => filterTransactionArray(e, "currency")}
        />{" "}
      </div>
      <div className="dropDownContainer">
        <Dropdown
          placeholder="Txs Types"
          options={txsTypes}
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          onChange={(e) => filterTransactionArray(e, "type")}
        />
      </div>
      <div className="dropDownContainer">
        <Dropdown
          placeholder="Txs Status"
          options={txsStatus}
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          onChange={(e) => filterTransactionArray(e, "status")}
        />
      </div>
    </FilterContainer>
  )
}

export default Filter
