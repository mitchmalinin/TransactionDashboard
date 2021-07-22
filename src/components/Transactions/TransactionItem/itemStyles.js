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
`

export const Status = styled.div`
  padding: 0.5em 1em;
  border-radius: 5px 5px 0 0;
  background-color: ${({ status }) =>
    status === "PENDING" ? themes.light.pending : themes.light.confirmed};
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
`
export const ItemDetails = styled.div`
  display: grid;
  gap: 1em;
  .topRow,
  .bottomRow {
    display: grid;
    grid-template-columns: minmax(150px, 1.33fr) minmax(150px, 2.33fr) minmax(
        150px,
        1.33fr
      );

    gap: 7em;
  }
`