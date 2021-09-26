import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {h5Mixin} from "../../styles/typography"

export type AlertVariant = "primary" | "info" | "success" | "warning" | "error"

export interface IProps extends HTMLAttributes<HTMLElement> {
  isDismissible?: boolean
  variant?: AlertVariant
}

const primaryMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.primary};
`

const infoMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.alert.info};
`

const successMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.alert.success};
`

const warningMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.alert.warn};
`

const errorMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.alert.error};
`

const AlertStyledComponent = styled.div<IProps>`
  align-items: center;
  border-radius: 0.5rem;
  bottom: 1.6rem;
  box-sizing: border-box;
  color: ${({theme}) => theme.palette.text.white};
  display: flex;
  justify-content: space-between;
  opacity: 1;
  padding: 1.2rem 1.6rem;
  transition: 0.6s linear all;
  visibility: visible;
  width: 100%;
  ${h5Mixin<IProps>()}

  ${({variant}) => {
    switch (variant) {
      case "info":
        return infoMixin
      case "success":
        return successMixin
      case "warning":
        return warningMixin
      case "error":
        return errorMixin
      case "primary":
      default:
        return primaryMixin
    }
  }}
 
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`

export default AlertStyledComponent
