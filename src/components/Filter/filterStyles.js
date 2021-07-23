import styled from "styled-components"
import { themes } from "../../styles/colorsStyles"

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: flex-end;
  gap: 3em;
  padding: 0 2em;

  .dropDownContainer {
    position: relative;
  }

  .control {
    background-color: ${themes.light.bgColor};
    border: 1.5px solid ${themes.light.btnColor} !important;
    color: ${themes.light.primary};
    border: none;
    border-radius: 5px;
    padding: 0.5em 1em;
    cursor: pointer;
    text-align: center;
  }

  .menu {
    border-radius: 0 0 5px 5px;
    box-shadow: 2px 1px 25px -2px rgb(163 160 160 / 30%);
    -webkit-box-shadow: -2px 5px 15px 2px rgb(163 160 160 / 27%);
    border: none;
    color: ${themes.light.lightText};
    padding: 0.2em;
    z-index: 3;
    position: absolute;
    width: 100%;
    background-color: ${themes.light.bgColor};
  }

  .optionSelect {
    transition: all 0.2s ease-in-out;
    padding: 0.2em;
    color: ${themes.light.primary};
    &:hover {
      background: ${themes.light.btnHover} !important;
      color: ${themes.light.lightText};
      cursor: pointer;
    }
  }

  .optionSelect.is-selected {
    background-color: ${themes.light.btnColor};
    color: ${themes.light.lightText};
  }
`

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 0.5em 0.7em;
  border: 1.5px solid ${themes.light.lightBorder};
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1.5px solid ${themes.light.btnColor};
  }
`
