import {HTMLAttributes} from "react"
import styled, {css} from "styled-components"
import {DisplayType} from "../Dropdown"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  isOpened: boolean
  displayValue: DisplayType
}

const openedMixin = css`
  opacity: 1;
  transform: rotateX(0);
`

const DropdownMenu = styled.div<IProps>`
  display: ${({displayValue}) => displayValue};
  min-width: 100%;
  opacity: 0;
  position: absolute;
  transform: rotateX(-30deg);
  transform-origin: top;
  transition: opacity 0.15s ease-in, transform 0.15s ease-in;
  z-index: 5;

  ${({isOpened}) => (isOpened ? openedMixin : "")}
`

export default DropdownMenu
