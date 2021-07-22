import React, { createContext, useReducer } from "react"
import TransactionReducer from "./TransactionReducer"
//import Actions from reducer
import { IActions } from "./TransactionReducer"
//import interfaces
import { EthTxs, BtcTxs, CustodialTxs } from "./interfaces"

//Transaction state interface
export interface IState {
  ethTxs: EthTxs[]
  btcTxs: BtcTxs[]
  cusTxs: CustodialTxs[]
  prices: {
    BTC: string
    ETH: string
  }
}

interface ContextState {
  state: IState
  dispatch: React.Dispatch<IActions>
}

//initial app State
const initialState: IState = {
  ethTxs: [],
  btcTxs: [],
  cusTxs: [],
  prices: {
    BTC: "",
    ETH: "",
  },
}

//Create Context
export const TransactionContext = createContext<ContextState>({
  state: initialState,
  dispatch: () => null,
})

//Provider Component
export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState)

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  )
}
