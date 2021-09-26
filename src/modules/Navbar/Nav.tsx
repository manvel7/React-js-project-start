import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {mediaBreakpointDown} from "../../utils/breakpoint"

export interface IProps extends HTMLAttributes<HTMLUListElement> {}

const mediaMixin = css<StyledProps<IProps>>`
  ${({theme}) =>
    mediaBreakpointDown(
      "xs",
      theme.grid.breakpoints,
      "overflow-y: auto; white-space: nowrap; padding: 0.8rem 1.6rem;"
    )}
`

const Nav = styled.ul<IProps>`
  padding: 1.6rem;

  ${mediaMixin}
`

export default Nav
