import styled from "styled-components"
import { themes } from "../../styles/colorsStyles"

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  justify-content: flex-end;
  gap: 3em;
  padding: 0 2em;

  .control {
    background-color: ${themes.light.bgColor};
    color: ${themes.light.primary};
    border: none;
    border-radius: 5px;
  }

  .menu {
    border-radius: 0 0 5px 5px;
    background-color: ${themes.light.bgColor};
    border: none;
  }

  .optionSelect {
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${themes.light.btnColor};
      color: ${themes.light.lightText};
    }
  }

  .optionSelect.is-selected {
    background-color: ${themes.light.btnColor};
    color: ${themes.light.lightText};
  }
`
