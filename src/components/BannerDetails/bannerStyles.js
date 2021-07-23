import styled from "styled-components"
import { themes } from "../../styles/colorsStyles"

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;

  @media (max-width: 750px) {
    font-size: 1.7em;
    margin: 1.5em 0 0 0;
  }
`

export const BannerContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;

  .allPricesContainer {
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 2em;
    align-items: center;
  }

  .leftSide {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    gap: 2em;
  }

  @media (max-width: 750px) {
    padding: 0;
    text-align: center;

    .leftSide {
      grid-template-columns: 1fr;
    }

    .rightSide {
      display: none;
    }
  }
`

export const PriceContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1em;
  font-size: 1.2em;
  img {
    height: 30px;
  }
`
