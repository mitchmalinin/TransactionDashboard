import { useState, useEffect, useContext } from "react"
import moment from "moment"
//Need this for eth conversion
import convert from "ether-converter"

//context import
import { TransactionContext } from "../../../context/TransactionContext"

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
  formattedAmount?: number
  fiatAmount?: number
}

//This function takes the coin amount, and returns the proper value in Sats or Wei
const formatAmount = (coinType: string, { txs }: IProps) => {
  const btcAmount = 0.00000001
  if (coinType === "BTC") {
    return txs.amount ? txs.amount * btcAmount : null
  } else {
    //converting the amount to ETH was causing me an extreme amount of pain (dealing with scientific notation), so I had to import eth-converter for the conversion
    return txs.amount ? Number(convert(txs.amount, "wei", "ether")) : null
  }
}

//this function returns the coin type based on object keys
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
  const { state } = useContext(TransactionContext)
  const { prices } = state
  //create a state that holds the image and pair
  const [coin, setCoin] = useState<IState>({
    path: "",
    pair: "",
    formattedAmount: 0,
    fiatAmount: 0,
  })

  //This will return the right coin image and pair based on the coin
  const returnFormattedCoin = ({ txs }: IProps) => {
    let returnedCoin = returnCoinType({ txs })
    if (returnedCoin === "BTC") {
      //I am formatted the amount, and then I use that amount to calculate the fiat value
      let coinAmount: any = formatAmount("BTC", { txs })
      let fiatAmount = coinAmount * parseFloat(prices.BTC)
      //I then return a coin object that is used to create the coin state
      return {
        path: "../../../images/btc_logo.jpg",
        pair: "BTC",
        formattedAmount: coinAmount,
        fiatAmount,
      }
    }
    if (returnedCoin === "ETH") {
      let coinAmount: any = formatAmount("ETH", { txs })
      let fiatAmount = coinAmount * parseFloat(prices.ETH)
      return {
        path: "../../../images/eth_logo.jpg",
        pair: "ETH",
        formattedAmount: coinAmount,
        fiatAmount,
      }
    }
    if (returnedCoin === "FIAT") {
      //split the pair and get the crypto value, so the crypto amount can be calculated
      let cryptoCoinPair: string[] | null = txs.pair
        ? txs.pair.split("-")
        : null

      //if the pair is btc than format the crypto amount by / fiat value by the price
      if (
        (cryptoCoinPair !== null && cryptoCoinPair[0] === "BTC") ||
        (cryptoCoinPair !== null && cryptoCoinPair[1] === "BTC")
      ) {
        let fiatValue: string | undefined = txs.fiatValue
        return {
          path: "../../../images/money_logo.jpg",
          pair: txs.pair,
          //Not sure if this is the right way to do this in typescript, but it seems to not complain
          formattedAmount:
            parseFloat(fiatValue !== undefined ? fiatValue : "0") /
            parseFloat(prices.BTC),
        }
      } else {
        //don't need to make another if because if its not BTC then it has to be ETH
        let fiatValue: string | undefined = txs.fiatValue
        return {
          path: "../../../images/money_logo.jpg",
          pair: txs.pair,
          formattedAmount:
            parseFloat(fiatValue !== undefined ? fiatValue : "0") /
            parseFloat(prices.ETH),
        }
      }
    }
  }

  //This converts the fiat created at date to a more readable date format
  const formatDate = (dateTime: string) => {
    //I am splitting the date time string based on the T
    //Then I format the date in a more readable format
    let date = dateTime.split("T")[0].split("-").join("")
    //Here I format the time in a more readable format
    let time = dateTime.split("T")[1].split(".")[0]
    let formattedDate = moment(date, "YYYYMMDD").format("MMM Do")
    let formatTime = moment(time, "HH:mm:ss").format("hh:mm a")
    return `${formattedDate}, ${formatTime}`
  }

  useEffect(() => {
    //create the coin image and pair
    //I know you are not supposed to use "any" but this was giving me a lot of trouble, and I did not want to waste more time trying to debug (I am in a time crunch)
    //Still New to typescript but I am progressing fast
    let formattedCoin: any = returnFormattedCoin({ txs })
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
          loading="lazy"
        />
        <ItemDetails>
          <div className="col">
            <Item>From: {txs.from ? txs.from : "N/A"}</Item>
            <Item>To: {txs.to ? txs.to : "N/A"}</Item>
          </div>
          <div className="col">
            <Item>
              Amount (Crypto):{" "}
              <span className="crypto">
                {coin.formattedAmount
                  ? coin.formattedAmount.toFixed(8)
                  : txs.fiatValue}
              </span>
            </Item>
            <Item>
              Amount (Fiat):
              <span className="fiat">
                ${coin.fiatAmount ? coin.fiatAmount.toFixed(2) : txs.fiatValue}
              </span>
            </Item>
          </div>
          <div className="col">
            <Item>
              {txs.createdAt
                ? "Created At: " + formatDate(txs.createdAt)
                : "Inserted At: " + txs.insertedAt}
            </Item>
            <Item>Type: {txs.type}</Item>
          </div>
        </ItemDetails>
      </ItemContent>
    </ItemContainer>
  )
}

export default TransactionItem
