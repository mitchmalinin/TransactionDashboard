import styled from "styled-components"

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`

export const BannerContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  .leftSide {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    gap: 2em;
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
