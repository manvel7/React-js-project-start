import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {mediaBreakpointDown} from "../../utils/breakpoint"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  hideOnXsScreen?: boolean
}

const mediaMixin = css<StyledProps<IProps>>`
  ${({theme, hideOnXsScreen}) =>
    mediaBreakpointDown(
      "xs",
      theme.grid.breakpoints,
      hideOnXsScreen ? "display: none;" : ""
    )}
`

const Navbar = styled.div<IProps>`
  align-items: center;
  background-color: ${({theme}) => theme.palette.background.white};
  border-bottom: 0.1rem solid ${({theme}) => theme.palette.border};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  width: 100%;

  ${mediaMixin}
`

export default Navbar
