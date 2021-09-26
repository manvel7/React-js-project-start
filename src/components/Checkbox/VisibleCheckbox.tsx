import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  checked?: boolean
}

const disabledMixin = css<StyledProps<IProps>>`
  background: ${({theme}) => theme.palette.text.darkDimmed};
  border-color: ${({theme}) => theme.palette.disabled};
  color: ${({theme}) => theme.palette.disabled};
`

const VisibleCheckbox = styled.div<IProps>`
  align-items: center;
  background: ${({theme}) => theme.palette.background.white};
  border: 0.1rem solid ${({theme}) => theme.palette.primary};
  border-radius: 0.4rem;
  color: ${({theme}) => theme.palette.primary};
  display: flex;
  height: 1.6rem;
  justify-content: center;
  margin-right: 1.6rem;
  transition: all 150ms;
  width: 1.6rem;

  ${({disabled}) => (disabled ? disabledMixin : "")};

  svg {
    visibility: ${({checked}) => (checked ? "visible" : "hidden")};
  }
`

export default VisibleCheckbox
