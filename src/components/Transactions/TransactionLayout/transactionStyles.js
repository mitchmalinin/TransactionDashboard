import styled from "styled-components"

export const DashboardContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
export const ContentWrapper = styled.div`
  padding: 2em 4em;
  display: grid;
  gap: 30px;
  max-width: 1300px;
  @media (max-width: 750px) {
    justify-items: center;
    padding: 2em 1em;
  }
`
