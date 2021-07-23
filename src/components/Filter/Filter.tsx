import { useState } from "react"
import { FilterContainer, StyledInput } from "./filterStyles"
import Dropdown, { Option } from "react-dropdown"
import { txsTypes, txsStatus, coinTypes } from "../../utils/staticData"

interface IProps {
  filterTransactionArrayFromTabs: (e: Option, optionType: string) => void
  setUserFilterText: React.Dispatch<React.SetStateAction<string>>
  userFilterText: string
}

const Filter: React.FC<IProps> = ({
  filterTransactionArrayFromTabs,
  userFilterText,
  setUserFilterText,
}) => {
  //On Change function typescript way
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFilterText(e.target.value)
  }
  return (
    <FilterContainer>
      <StyledInput
        placeholder="Search your transaction, address, or block"
        value={userFilterText}
        onChange={onChange}
      />
      <div className="dropDownContainer">
        <Dropdown
          options={coinTypes}
          placeholder="Currency"
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          onChange={(e) => filterTransactionArrayFromTabs(e, "currency")}
        />{" "}
      </div>
      <div className="dropDownContainer">
        <Dropdown
          placeholder="Txs Types"
          options={txsTypes}
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          onChange={(e) => filterTransactionArrayFromTabs(e, "type")}
        />
      </div>
      <div className="dropDownContainer">
        <Dropdown
          placeholder="Txs Status"
          options={txsStatus}
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          onChange={(e) => filterTransactionArrayFromTabs(e, "status")}
        />
      </div>
    </FilterContainer>
  )
}

export default Filter
