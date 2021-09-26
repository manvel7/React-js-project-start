import {ButtonHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {AlertVariant} from "./AlertStyledComponent"

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AlertVariant
}

const primaryMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.primary};
`

const infoMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.info};
`

const successMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.success};
`

const warningMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.warn};
`

const errorMixin = css<StyledProps<IProps>>`
  color: ${({theme}) => theme.palette.alert.error};
`

const CloseButton = styled.button<IProps>`
  align-items: center;
  background-color: ${({theme}) => theme.palette.background.white};
  border-radius: 5rem;
  border-width: 0;
  color: ${({theme}) => theme.palette.primary};
  cursor: pointer;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  margin-left: 1.5rem;
  width: 1.5rem;

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
`

export default CloseButton
