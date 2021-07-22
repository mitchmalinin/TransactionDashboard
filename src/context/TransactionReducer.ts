//import state from context
import { IState } from "./TransactionContext"
//import interfaces
// import { BtcTxs, EthTxs } from "./interfaces"

//creating the action interface
export type IActions = {
  type: "UPDATE_BTC_TXS" | "UPDATE_ETH_TXS" | "UPDATE_CUS_TXS" | "UPDATE_PRICES"
  payload: any
}

export default (state: IState, action: IActions) => {
  switch (action.type) {
    case "UPDATE_BTC_TXS":
      let btcTxs = { ...state.btcTxs }
      btcTxs = action.payload
      return {
        ...state,
        btcTxs,
      }
    case "UPDATE_ETH_TXS":
      let ethTxs = { ...state.ethTxs }
      ethTxs = action.payload
      return {
        ...state,
        ethTxs,
      }
    case "UPDATE_CUS_TXS":
      let cusTxs = { ...state.cusTxs }
      cusTxs = action.payload
      return {
        ...state,
        cusTxs,
      }
    case "UPDATE_PRICES":
      let prices = { ...state.prices }
      prices = action.payload
      return {
        ...state,
        prices,
      }

    default:
      return state
  }
}
