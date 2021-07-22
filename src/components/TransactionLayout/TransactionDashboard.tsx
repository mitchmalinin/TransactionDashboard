import { useEffect, useContext } from "react"
//styled component imports
import { DashboardContainer, ContentWrapper } from "./transactionStyles"
//component imports
import BannerDetails from "../BannerDetails/BannerDetails"
import TransactionContainer from "../Transactions/TransactionsContainer/TransactionContainer"
//context import
import { TransactionContext } from "../../context/TransactionContext"
//import the custom axios hook
import { useAxios } from "../../hooks/useAxios"

const TransactionDashboard: React.FC = () => {
  //Grab the context so that it can be updated
  const { dispatch } = useContext(TransactionContext)

  //this is calling the custom useAxios hook to get all the necessary responses
  const pricesResponse = useAxios("prices")
  const btcResponse = useAxios("btc-txs")
  const ethResponse = useAxios("eth-txs")
  const cusResponse = useAxios("custodial-txs")

  // This will update the context after the response comes back from the custom hook
  useEffect(() => {
    dispatch({
      type: "UPDATE_BTC_TXS",
      payload: btcResponse.response,
    })
    dispatch({
      type: "UPDATE_ETH_TXS",
      payload: ethResponse.response,
    })
    dispatch({
      type: "UPDATE_CUS_TXS",
      payload: cusResponse.response,
    })
    dispatch({
      type: "UPDATE_PRICES",
      payload: pricesResponse.response,
    })

    //You need to add the responses as the dependencies, because when the useEffect runs on initial load, the responses are empty
    //This makes sure that when they are populated, they get updated in the state
  }, [
    btcResponse.response,
    ethResponse.response,
    cusResponse.response,
    pricesResponse.response,
  ])

  return (
    <DashboardContainer>
      <ContentWrapper>
        <BannerDetails />
        <TransactionContainer />
      </ContentWrapper>
    </DashboardContainer>
  )
}

export default TransactionDashboard
