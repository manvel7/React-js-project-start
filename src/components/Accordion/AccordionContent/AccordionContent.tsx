import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}

const activeMixin = css<StyledProps<IProps>>`
  max-height: none;
  opacity: 1;
  padding: 0.8rem 0;
`

const AccordionContent = styled.div<IProps>`
  color: ${({theme}) => theme.palette.text.dark};
  max-height: 0;
  opacity: 0;
  transition: all 0.35s;

  ${({isActive}) => (isActive ? activeMixin : "")}
`

export default AccordionContent
