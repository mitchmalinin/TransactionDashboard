import { useContext, useState, useEffect } from "react"
import { Container, TxsContentContainer } from "./tranasctionContainerStyles"
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
  const [totalTxs, setTotalTxs] = useState<IState | null>(null)

  //create a state that stores the users filtered tabs
  const [filterState, setFilterState] = useState({
    type: "",
    status: "",
    currency: "",
  })
  //TODO: fix the any

  //I am passing the type from the options so that I know what part of the state to update
  const filterTransactionArray = (e: any, type: string) => {
    console.log(e)
    setFilterState({
      ...filterState,
      type: e.value,
    })
  }

  useEffect(() => {
    //Create a large array that has all the transactions inside
    //this makes sure that all of the transactions are loaded from context, because on initial load they are all undefined
    //I am adding the TXS as dependencies so that the "totalTxs" state gets updated when all the txs are returned
    if (btcTxs && ethTxs && cusTxs) {
      setTotalTxs([...btcTxs, ...ethTxs, ...cusTxs])
    }
  }, [btcTxs, ethTxs, cusTxs])
  return (
    <Container>
      <Filter filterTransactionArray={filterTransactionArray} />
      <TxsContentContainer>
        {
          //its better to check for the txs this way, because if you check with the  totalTxs.length && it could return "0"
          //Also I used a unique id package, because you are not supposed to use the index as the key
          totalTxs ? (
            totalTxs.map((txs) => {
              return <TransactionItem txs={txs} key={uuidv4()} />
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
