import styled from "styled-components"
import { themes } from "../../../styles/colorsStyles"
export const ItemContainer = styled.div`
  border-radius: 5px;
  display: grid;
  gap: 1em;
  box-shadow: 2px 1px 25px -2px rgb(163 160 160 / 30%);
  -webkit-box-shadow: -2px 5px 15px 2px rgb(163 160 160 / 27%);

  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 750px) {
    gap: 0em;
  }
`

export const Status = styled.div`
  padding: 0.5em 1em;
  border-radius: 5px 5px 0 0;
  background-color: ${({ status }) =>
    status === "PENDING"
      ? themes.light.pending
      : status === "CONFIRMED"
      ? themes.light.confirmed
      : themes.light.finished};
  color: ${themes.light.lightText};
  font-weight: 500;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 1em;
`

export const ItemContent = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  gap: 1em;
  padding: 1em;
  align-items: center;
  img {
    justify-self: center;
  }
`
export const Item = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease-in;
  &:hover {
    overflow: visible;
    /* width: auto; */
    background-color: #fff;
  }

  @media (max-width: 750px) {
    &:hover {
      white-space: normal;
      overflow-wrap: break-word;
      word-wrap: break-word;
      width: 200px;
    }
  }
  .fiat {
    color: ${themes.light.buyPrice};
    font-weight: bold;
  }

  .crypto {
    font-weight: bold;
  }

  .address {
    color: ${themes.light.btnColor};
  }
`
export const ItemDetails = styled.div`
  display: grid;
  gap: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3em;

  .col {
    display: grid;
    gap: 1em;
  }

  @media (min-width: 1400px) {
    gap: 6em;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1em;

    .col {
      &:nth-child(1),
      &:nth-child(2) {
        border-bottom: 1.5px solid ${themes.light.fadedDivider};
        padding-bottom: 1em;
      }
    }
  }
`
