import {ButtonHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {h4Mixin, h5Mixin} from "../../../styles/typography"

export type ButtonSize = "md" | "lg"
export type ButtonVariant = "normal" | "circle"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

const lgMixin = css<StyledProps<IProps>>`
  ${h4Mixin<IProps>()}
`

const mdMixin = css<StyledProps<IProps>>`
  ${h5Mixin<IProps>()}
`

const normalMixin = css<StyledProps<IProps>>`
  border-radius: 0.4rem;
`

const circleMixin = css<StyledProps<IProps>>`
  /*width is not fixed, so 50% doesn't work*/
  border-radius: 10rem;
`

const activeMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.primary};
  color: ${({theme}) => theme.palette.text.white};
`

const PaginationButton = styled.button<IProps>`
  background-color: ${({theme}) => theme.palette.background.tinted};
  border: none;
  color: ${({theme}) => theme.palette.primary};
  cursor: pointer;
  margin: 0 0.4rem;
  min-height: 3.2rem;
  min-width: 3.2rem;
  padding: 0.4rem 0.8rem;

  &[disabled] {
    cursor: initial;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${({size}) => {
    switch (size) {
      case "lg":
        return lgMixin
      case "md":
      default:
        return mdMixin
    }
  }}

  ${({variant}) => {
    switch (variant) {
      case "circle":
        return circleMixin
      case "normal":
      default:
        return normalMixin
    }
  }}

  ${({isActive}) => (isActive ? activeMixin : "")}
`

PaginationButton.defaultProps = {
  variant: "normal",
  isActive: false
}

export default PaginationButton
