import {HTMLAttributes} from "react"
import styled from "styled-components"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}

const AccordionWrapper = styled.div<IProps>`
  background-color: ${({theme}) => theme.palette.background.tinted};
  border: 0.1rem solid ${({theme}) => theme.palette.border};
  border-radius: 0.4rem;
  color: ${({theme}) => theme.palette.background.white};
  overflow: hidden;
  padding: 0.8rem 1.6rem;
  width: 100%;
`

export default AccordionWrapper
