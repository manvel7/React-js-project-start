import {HTMLAttributes} from "react"
import styled from "styled-components"
import {mediaBreakpointDown} from "../../../utils/breakpoint"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  containerHeight: number
}

const mobileMixin = `
  margin-right: 0;
`

const Wrapper = styled.div<IProps>`
  flex: 1 0 75%;
  height: ${({containerHeight}) => containerHeight + "rem"};
  margin-right: 0.8rem;
  position: relative;

  .nav-buttons {
    background-color: transparent;
    bottom: 1.6rem;
    left: 1.6rem;
    position: absolute;

    button {
      background-color: ${({theme}) => theme.palette.background.white};
      border: 0.1rem solid ${({theme}) => theme.palette.border};
      border-radius: 0.4rem;
      color: ${({theme}) => theme.palette.primary};
      cursor: pointer;
      height: 4rem;
      width: 4rem;

      &:first-child {
        margin-right: 0.8rem;
      }
    }
  }

  ${({theme}) => mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin)}
`

export default Wrapper
