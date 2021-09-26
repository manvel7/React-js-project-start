import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
  hasLabel?: boolean
  error?: boolean
}

const checkedMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.primary};

  .toggle-switch__dot {
    left: calc(100% - 0.8rem);
  }
`

const disabledMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.disabled};

  .toggle-switch__dot {
    background-color: ${({theme}) => theme.palette.text.darkDimmed};
  }
`

const errorMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) => theme.palette.border};

  .toggle-switch__dot {
    background-color: ${({theme}) => theme.palette.alert.error};
  }
`

const VisibleSwitch = styled.div<IProps>`
  background-color: ${({theme}) => theme.palette.border};
  border-radius: 0.4rem;
  display: inline-block;
  height: 0.8rem;
  margin-right: ${({hasLabel}) => (hasLabel ? "0.8rem" : "0")};
  position: relative;
  transition: background-color 0.1s cubic-bezier(0.47, 0.09, 0.86, 0.68);
  transition-delay: 0.1s;
  width: 3.2rem;

  .toggle-switch__dot {
    background-color: ${({theme}) => theme.palette.primary};
    border-radius: 50%;
    height: 1.6rem;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(calc(-50% + 0.4rem));
    transition: left 0.2s cubic-bezier(0.47, 0.09, 0.86, 0.68);
    width: 1.6rem;
  }

  ${({checked}) => (checked ? checkedMixin : "")}
  ${({disabled}) => (disabled ? disabledMixin : "")}
  ${({error}) => (error ? errorMixin : "")}
`

export default VisibleSwitch
