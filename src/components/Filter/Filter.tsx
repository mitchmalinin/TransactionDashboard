import { useState } from "react"
import { FilterContainer } from "./filterStyles"
import Dropdown, { Option } from "react-dropdown"
import { txsTypes, txsStatus, coinTypes } from "../../utils/staticData"

//import the props interface
import { IState } from "../Transactions/TransactionsContainer/TransactionContainer"

const Filter = () => {
  const [filterTags, setFilterTags] = useState({
    currency: "",
    type: "",
    status: "",
  })

  const filterTransactionArray = (e: Option) => {
    console.log(e)
  }

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
          value={filterTags.currency}
          onChange={(e) => filterTransactionArray(e)}
        />{" "}
      </div>
      <div className="dropDownContainer">
        <Dropdown
          placeholder="Txs Types"
          options={txsTypes}
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          value={filterTags.type}
          onChange={(e) => filterTransactionArray(e)}
        />
      </div>
      <div className="dropDownContainer">
        <Dropdown
          placeholder="Txs Status"
          options={txsStatus}
          className="dropDown"
          controlClassName="control"
          menuClassName="menu"
          value={filterTags.status}
          onChange={(e) => filterTransactionArray(e)}
        />
      </div>
    </FilterContainer>
  )
}

export default Filter
