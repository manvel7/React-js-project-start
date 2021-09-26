import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {h5Mixin} from "../../styles/typography"
import {mediaBreakpointDown} from "../../utils/breakpoint"

export interface IProps extends HTMLAttributes<HTMLSpanElement> {}

const mediaMixin = css<StyledProps<IProps>>`
  ${({theme}) =>
    mediaBreakpointDown(
      "xs",
      theme.grid.breakpoints,
      "display: none; padding: 0.8rem 1.6rem;"
    )}
`

const NavTitle = styled.span<IProps>`
  padding: 1.6rem;

  ${h5Mixin<IProps>()}
  ${mediaMixin}
`

export default NavTitle
