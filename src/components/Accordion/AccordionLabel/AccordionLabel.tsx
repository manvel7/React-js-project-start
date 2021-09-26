import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {h5Mixin} from "../../../styles/typography"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}

const activeMixin = css<StyledProps<IProps>>`
  &::after {
    transform: rotate(90deg);
  }
`

const AccordionLabel = styled.div<IProps>`
  color: ${({theme}) => theme.palette.text.dark};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;

  &::after {
    color: ${({theme}) => theme.palette.primary};
    content: "❯";
    height: 2.4rem;
    text-align: center;
    transform: rotate(0deg);
    transition: all 0.35s;
    width: 2.4rem;
  }

  ${h5Mixin<IProps>()}

  ${({isActive}) => (isActive ? activeMixin : "")}
`

export default AccordionLabel
