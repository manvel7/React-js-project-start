import {LabelHTMLAttributes, ReactNode} from "react"
import styled, {css, StyledProps} from "styled-components"

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: ReactNode
  checked?: boolean
  error?: boolean
  disabled?: boolean
}

const checkedMixin = css<StyledProps<IProps>>`
  .radio-select__item {
    :after {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const errorMixin = css<StyledProps<IProps>>`
  .radio-select__item {
    border-color: ${({theme}) => theme.palette.alert.error};

    :after {
      background-color: ${({theme}) => theme.palette.alert.error};
    }
  }
`

const disabledMixin = css<StyledProps<IProps>>`
  .radio-select__item {
    border-color: ${({theme}) => theme.palette.disabled};

    :after {
      background-color: ${({theme}) => theme.palette.disabled};
    }
  }
`

const RadioItemWrapper = styled.label<IProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: 0.8rem;

  :last-child {
    margin-bottom: 0;
  }

  .radio-select__item {
    align-items: center;
    background-color: ${({theme}) => theme.palette.background.white};
    border: 0.2rem solid ${({theme}) => theme.palette.primary};
    border-radius: 50%;
    display: flex;
    height: 1.6rem;
    justify-content: center;
    margin-right: ${({label}) => (label ? "0.8rem" : "0")};
    width: 1.6rem;

    :after {
      background-color: ${({theme}) => theme.palette.primary};
      border-radius: 50%;
      content: "";
      display: block;
      height: 0.8rem;
      opacity: 0;
      transform: scale(0);
      transition: transform 0.25s ease-in-out, opacity 0.2s ease-in-out;
      width: 0.8rem;
    }
  }

  ${({checked}) => (checked ? checkedMixin : "")}
  ${({error}) => (error ? errorMixin : "")}
  ${({disabled}) => (disabled ? disabledMixin : "")}
`

export default RadioItemWrapper
