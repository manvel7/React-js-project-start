import styled from "styled-components"
import {mediaBreakpointDown} from "../../../utils/breakpoint"

const mobileMixin = `
  bottom: initial;
  right: 0;
  width: initial;
  height: 5.6rem;
  transition: height 0.4s ease-in-out;

  &:hover {
    width: initial;
  }

  &.expanded {
    height: 100vh;
    overflow-y: auto;
  }

  .mobile-heading {
    display: block;
  }

  overflow-y: hidden;
`

const SidebarWrapper = styled.div`
  background-color: ${({theme}) => theme.palette.primary};
  bottom: 0;
  color: ${({theme}) => theme.palette.text.white};
  display: flex;
  flex-direction: column;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transition: width 0.4s ease-in-out;
  width: 6.4rem;
  z-index: 10;

  &:hover {
    transition-duration: 0.25s;
    width: 25.6rem;
  }

  .mobile-heading {
    display: none;
    flex: 0 0 5.6rem;
    line-height: 5.6rem;
    position: relative;
    text-align: center;

    h4 {
      line-height: 5.6rem;
    }

    .burger-button {
      align-items: center;
      bottom: 0;
      display: flex;
      padding: 0 2.4rem;
      position: absolute;
      top: 0;
      svg path {
        fill: ${({theme}) => theme.palette.text.white};
      }
    }
  }

  ${({theme}) => mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin)}
`

export default SidebarWrapper
