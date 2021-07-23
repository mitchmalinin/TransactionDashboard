import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  gap: 3em;
`

export const TxsContentContainer = styled.div`
  max-height: 70vh;
  min-height: 300px;
  overflow: scroll;
  padding: 0 2em;
  display: grid;
  gap: 1em;
`
