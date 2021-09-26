import {ButtonHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {h4Mixin, h6Mixin, smallMixin} from "../../styles/typography"

export type ButtonSize = "sm" | "md" | "lg"
export type ButtonVariant = "default" | "outlined" | "text"
export type ButtonState = "info" | "warn" | "success" | "error"

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  state?: ButtonState
}

const lgMixin = css<StyledProps<IProps>>`
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  ${h4Mixin<IProps>()}
`

const smMixin = css<StyledProps<IProps>>`
  border-radius: 0.3rem;
  padding: 0.2rem 1.6rem;
  ${smallMixin<IProps>()}
`

const mdMixin = css<StyledProps<IProps>>`
  border-radius: 0.4rem;
  padding: 0.6rem 1.6rem;
  ${h6Mixin<IProps>()}
`

const outlinedMixin = css<StyledProps<IProps>>`
  background-color: transparent;
  border: 0.1rem solid
    ${({isDisabled, state, theme}) => {
      if (isDisabled) {
        return theme.palette.disabled
      }

      switch (state) {
        case "error":
          return theme.palette.alert.error
        case "warn":
          return theme.palette.alert.warn
        case "success":
          return theme.palette.alert.success
        case "info":
        default:
          return theme.palette.primary
      }
    }};
  box-sizing: border-box;
  color: ${({isDisabled, theme}) =>
    isDisabled ? theme.palette.text.darkDimmed : theme.palette.primary};
`

const textMixin = css<StyledProps<IProps>>`
  background-color: transparent;
  color: ${({isDisabled, theme}) =>
    isDisabled ? theme.palette.text.darkDimmed : theme.palette.primary};
`

const defaultMixin = css<StyledProps<IProps>>`
  background-color: ${({isDisabled, state, theme}) => {
    if (isDisabled) {
      return theme.palette.background.disabled
    }

    switch (state) {
      case "error":
        return theme.palette.alert.error
      case "warn":
        return theme.palette.alert.warn
      case "success":
        return theme.palette.alert.success
      case "info":
      default:
        return theme.palette.primary
    }
  }};
  color: ${({isDisabled, theme}) =>
    isDisabled ? theme.palette.text.darkDimmed : theme.palette.text.white};
`

const infoMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.info};
`

const warnMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.warn};
`

const errorMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.error};
`

const successMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.success};
`

const Button = styled.button<IProps>`
  border: 0.2rem solid transparent;
  cursor: pointer;

  ${({size}) => {
    switch (size) {
      case "lg":
        return lgMixin
      case "sm":
        return smMixin
      case "md":
      default:
        return mdMixin
    }
  }}

  ${({variant}) => {
    switch (variant) {
      case "outlined":
        return outlinedMixin
      case "text":
        return textMixin
      case "default":
      default:
        return defaultMixin
    }
  }}

  ${({state, variant}) => {
    if (!variant || variant === "default") {
      return ""
    }

    switch (state) {
      case "info":
        return infoMixin
      case "success":
        return successMixin
      case "warn":
        return warnMixin
      case "error":
        return errorMixin
      default:
        return ""
    }
  }}
`

export default Button
