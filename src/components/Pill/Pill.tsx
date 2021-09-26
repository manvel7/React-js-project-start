import {ButtonHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {bodyMixin, smallMixin} from "../../styles/typography"

export type PillSize = "sm" | "md"

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: PillSize
  isActive?: boolean
}

const smMixin = css<StyledProps<IProps>>`
  ${smallMixin<IProps>()}
`

const mdMixin = css<StyledProps<IProps>>`
  ${bodyMixin<IProps>()}
`

const activeMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.primary};
  color: ${({theme}) => theme.palette.text.white};
`

const Pill = styled.button<IProps>`
  background-color: transparent;
  border: none;
  border-radius: 0.4rem;
  color: ${({theme}) => theme.palette.primary};
  cursor: pointer;
  display: inline-block;
  padding: 0.4rem 1.6rem;

  ${({isActive}) => (isActive ? activeMixin : "")}

  ${({size}) => {
    switch (size) {
      case "sm":
        return smMixin
      case "md":
      default:
        return mdMixin
    }
  }}
`

Pill.defaultProps = {
  isActive: true
}

export default Pill
