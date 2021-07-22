//I am new to typescript, so I am not sure if I have to make all the objects match properties
//I only am creating properties for when I need to use "txs.pair" for example when looping and typescript yells at me saying the other interfaces are missing that value

//Eth Transaction Interface
export interface EthTxs {
  amount: number
  blockHeight: string
  data?: null | string
  description: string
  erc20: boolean
  from: string
  hash: string
  insertedAt: number
  state: string
  to: string
  txFee: string
  type: string
  createdAt?: string
  fiatValue?: string
  pair?: string
}

//BTC transaction interface
export interface BtcTxs {
  amount: number
  blockHeight: number
  coin: string
  description: string
  double_spend: boolean
  from: string
  fromWatchOnly: boolean
  hash: string
  insertedAt: number
  state: string
  to: string
  toAddress: string
  toWatchOnly: boolean
  txFee: number
  type: string
  createdAt?: string
  fiatValue?: string
  pair?: string
}

//Custodial Transaction Interface
export interface CustodialTxs {
  id: string
  pair: string
  state: string
  fiatValue: string
  fiatCurrency: string
  version: string
  type: string
  createdAt: string
  from?: string
  to?: string
  insertedAt?: string
  amount?: number
}
