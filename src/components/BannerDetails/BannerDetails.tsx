import { useContext } from "react"
//import the context
import { TransactionContext } from "../../context/TransactionContext"
import { BannerContainer, PriceContainer, Title } from "./bannerStyles"
//global styles
import { BTN } from "../../styles/globalElements"

const BannerDetails = () => {
  //Grab the state from the context
  const { state } = useContext(TransactionContext)
  //get the prices from the state
  const { prices } = state

  return (
    <BannerContainer>
      <div className="leftSide">
        <Title>Transaction Dashboard</Title>
        <div className="allPricesContainer">
          <PriceContainer>
            <img
              src="../../images/btc_logo.png"
              alt="coin_img"
              min-width="30px"
              height="30px"
            />
            <span>${prices ? prices.BTC : "0.00"}</span>
          </PriceContainer>
          <PriceContainer>
            <img
              src="../../images/eth_logo.png"
              alt="coin_img"
              min-width="30px"
              height="30px"
            />
            <span>${prices ? prices.ETH : "0.00"}</span>
          </PriceContainer>{" "}
        </div>
      </div>
      <div className="rightSide">
        <a
          href="https://www.blockchain.com/prices"
          target="_blank"
          rel="noreferrer"
        >
          <BTN>More Coin Prices</BTN>
        </a>
      </div>
    </BannerContainer>
  )
}

export default BannerDetails
