import styled from "styled-components"

const TooltipContainer = styled.div`
  background-color: ${({theme}) => theme.palette.background.white};
  border: 0.1rem solid ${({theme}) => theme.palette.border};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding: 0.8rem 1.6rem;
  z-index: 99;
`

export default TooltipContainer
