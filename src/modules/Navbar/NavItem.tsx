import styled, {css, StyledProps} from "styled-components"
import Pill from "../../components/Pill"
import {mediaBreakpointDown} from "../../utils/breakpoint"

export interface IProps {}

const mediaMixin = css<StyledProps<IProps>>`
  ${({theme}) =>
    mediaBreakpointDown("xs", theme.grid.breakpoints, "margin: 0 !important;")}
`

const NavItem = styled(Pill as any)`
  &:not(:last-of-type) {
    margin-right: 1.6rem;
  }

  ${mediaMixin}
`

export default NavItem
