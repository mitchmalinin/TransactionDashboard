import { useContext, useState, useEffect } from "react"
import { Container, TxsContentContainer } from "./tranasctionContainerStyles"
import LazyLoad from "react-lazyload"
//import for creating unique ids
import { v4 as uuidv4 } from "uuid"
//component import
import Filter from "../../Filter/Filter"
import TransactionItem from "../TransactionItem/TransactionItem"
//Context import
import { TransactionContext } from "../../../context/TransactionContext"
//import interfaces from context
import { BtcTxs, EthTxs, CustodialTxs } from "../../../context/interfaces"

export interface IState extends Array<BtcTxs | EthTxs | CustodialTxs> {}

const TransactionContainer: React.FC = () => {
  const { state } = useContext(TransactionContext)
  //Deconstruct the state, and grab all the txs arrays
  const { btcTxs, ethTxs, cusTxs } = state

  //Create a large array that holds all of the states
  const [totalTxs, setTotalTxs] = useState<IState | null | undefined>(null)
  //Creating a filter array state so that you don't mutate the OG state
  const [filteredTxs, setFilteredTxs] = useState<IState | null | undefined>(
    null
  )
  //create a state that stores the users filtered tabs
  const [userCurrencyOption, setUserCurrencyOption] = useState("ALL")
  const [userStatusOption, setUserStatusOption] = useState("ALL")
  const [userTypeOption, setUserTypeOption] = useState("ALL")
  const [userFilterText, setUserFilterText] = useState("")

  //TODO: fix the any
  //I am passing the type from the options so that I know what part of the state to update
  const filterTransactionArrayFromTabs = (e: any, optionType: string) => {
    if (optionType === "currency") {
      setUserCurrencyOption(e.value)
      //this makes it easy to populate the array back to normal after all is selected
      let totalArray = [...btcTxs, ...ethTxs, ...cusTxs]
      if (e.value !== "ALL") {
        let filtered = totalTxs?.filter((txs) => {
          const txsKeys = Object.keys(txs)
          if (txsKeys.includes("coin") && e.value === "BTC") {
            return txs
          }
          if (txsKeys.includes("erc20") && e.value === "ETH") {
            return txs
          }
          if (txsKeys.includes("fiatCurrency") && e.value === "FIAT") {
            return txs
          }
        })
        setFilteredTxs(filtered)
      } else {
        setFilteredTxs(totalArray)
      }
    }
    if (optionType === "type") {
      setUserTypeOption(e.value)
      let filtered = totalTxs?.filter((txs) => {
        return e.value === "ALL" ? txs : txs.type === e.value
      })
      setFilteredTxs(filtered)
    }
    if (optionType === "status") {
      setUserStatusOption(e.value)

      let filtered = totalTxs?.filter((txs) => {
        return e.value === "ALL" ? txs : txs.state === e.value
      })
      setFilteredTxs(filtered)
    }
  }

  useEffect(() => {
    //Create a large array that has all the transactions inside
    //this makes sure that all of the transactions are loaded from context, because on initial load they are all undefined
    //I am adding the TXS as dependencies so that the "totalTxs" state gets updated when all the txs are returned
    if (btcTxs && ethTxs && cusTxs) {
      setTotalTxs([...btcTxs, ...ethTxs, ...cusTxs])
      //I also populated the filter array so that content renders
      setFilteredTxs([...btcTxs, ...ethTxs, ...cusTxs])
    }
  }, [btcTxs, ethTxs, cusTxs])

  //I am using this useEffect to filter out array based on the user input
  useEffect(() => {
    let filtered = totalTxs?.filter((txs) => {
      //This is a really simple way to parse the whole object
      //For time constraint it seems to work for this!
      let parseTxs = JSON.stringify(txs)
      if (parseTxs.toLowerCase().includes(userFilterText.toLowerCase())) {
        return txs
      }
    })

    setFilteredTxs(filtered)
  }, [userFilterText])

  return (
    <Container>
      <Filter
        filterTransactionArrayFromTabs={filterTransactionArrayFromTabs}
        userFilterText={userFilterText}
        setUserFilterText={setUserFilterText}
      />
      <TxsContentContainer>
        {
          //its better to check for the txs this way, because if you check with the  totalTxs.length && it could return "0"
          //Also I used a unique id package, because you are not supposed to use the index as the key
          filteredTxs ? (
            filteredTxs.map((txs) => {
              return (
                <LazyLoad height={100} overflow>
                  <TransactionItem txs={txs} key={uuidv4()} />
                </LazyLoad>
              )
            })
          ) : (
            <p>Loading...</p>
          )
        }{" "}
      </TxsContentContainer>
    </Container>
  )
}

export default TransactionContainer
