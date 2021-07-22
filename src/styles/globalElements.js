import styled from "styled-components"
import { themes } from "./colorsStyles"

export const BTN = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.7em 1.5em;
  color: ${themes.light.lightText};
  background-color: ${themes.light.btnColor};
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.02);
    background-color: ${themes.light.btnHover};
  }
`
