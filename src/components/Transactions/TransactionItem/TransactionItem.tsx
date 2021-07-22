import { useState, useEffect } from "react"
//style imports
import {
  ItemContainer,
  Status,
  ItemContent,
  ItemDetails,
  Item,
} from "./itemStyles"
//Interface import
import { BtcTxs, EthTxs, CustodialTxs } from "../../../context/interfaces"
interface IProps {
  txs: BtcTxs | EthTxs | CustodialTxs
}

interface IState {
  path: string
  pair: string
}

//This will return the right coin image and pair based on the coin
const returnProperCoinImg = ({ txs }: IProps) => {
  let returnedCoin = returnCoinType({ txs })
  if (returnedCoin === "BTC") {
    return { path: "../../../images/btc_logo.png", pair: "BTC" }
  }
  if (returnedCoin === "ETH") {
    return { path: "../../../images/eth_logo.png", pair: "ETH" }
  }
  if (returnedCoin === "FIAT") {
    return { path: "../../../images/money_logo.png", pair: txs.pair }
  }
}

//This function takes the coin amount, and returns the proper value in Sats or Wei
const formatAmount = ({ txs }: IProps) => {
  const btcAmount = 0.00000001
  const ethAmount = 0.000000001
  let returnedCoin = returnCoinType({ txs })
  if (returnedCoin === "BTC") {
    return txs.amount ? txs.amount / btcAmount : null
  } else {
    return txs.amount ? txs.amount / ethAmount : null
  }
}

//this function returns the coin type
const returnCoinType = ({ txs }: IProps) => {
  const txsKeys = Object.keys(txs)
  if (txsKeys.includes("coin")) {
    return "BTC"
  }
  if (txsKeys.includes("erc20")) {
    return "ETH"
  }
  if (txsKeys.includes("fiatCurrency")) {
    return "FIAT"
  }
}

const TransactionItem: React.FC<IProps> = ({ txs }) => {
  //create a state that holds the image and pair
  const [coin, setCoin] = useState<IState>({
    path: "",
    pair: "",
  })

  useEffect(() => {
    //create the coin image and pair
    //I know you are not supposed to use "any" but this was giving me a lot of trouble, and I did not want to waste more time trying to debug (I am in a time crunch)
    //Still New to typescript but I am progressing fast
    let formattedCoin: any = returnProperCoinImg({ txs })
    setCoin(formattedCoin)
  }, [])

  return (
    <ItemContainer>
      <Status status={txs.state}>
        <span>{coin.pair !== "" ? coin.pair : ""}</span> -
        <span>{txs.state}</span>
      </Status>
      <ItemContent>
        <img
          src={coin.path !== "" ? coin.path : undefined}
          alt="coin_logo"
          min-width="20px"
          height="35px"
        />
        <ItemDetails>
          <div className="topRow">
            <Item>From: {txs.from ? txs.from : "N/A"}</Item>
            <Item>To: {txs.to ? txs.to : "N/A"}</Item>
            <Item>
              {txs.createdAt
                ? "Created At: " + txs.createdAt
                : "Inserted At: " + txs.insertedAt}
            </Item>
          </div>
          <div className="bottomRow">
            <Item>
              Amount (Fiat): ${txs.amount ? txs.amount : txs.fiatValue}
            </Item>
            <Item>
              Amount (Crypto):{" "}
              {txs.amount ? formatAmount({ txs }) : txs.fiatValue}
            </Item>
            <Item>Type: {txs.type}</Item>
          </div>
        </ItemDetails>
      </ItemContent>
    </ItemContainer>
  )
}

export default TransactionItem
