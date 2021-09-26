import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"

type DisplayPosition = "top" | "bottom" | "auto"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  displayPosition?: DisplayPosition
}

const topMixin = css<StyledProps<IProps>>`
  margin-bottom: 2.4rem;
`

const bottomMixin = css<StyledProps<IProps>>`
  margin-top: auto;
`

const autoMixin = css<StyledProps<IProps>>`
  margin-bottom: auto;
  margin-top: auto;
`

const SidebarItemWrapper = styled.div<IProps>`
  align-items: center;
  display: flex;

  ${({displayPosition}) => {
    switch (displayPosition) {
      case "bottom":
        return bottomMixin
      case "top":
        return topMixin
      case "auto":
        return autoMixin
      default:
        return ""
    }
  }}

  &:hover {
    background-color: ${({theme}) => theme.palette.background.dark};
    cursor: pointer;
  }

  .icon,
  .text {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .icon {
    flex-shrink: 0;
    height: 6.4rem;
    width: 6.4rem;
  }

  .text {
    padding-left: 1.6rem;
    white-space: nowrap;
  }
`

export default SidebarItemWrapper
