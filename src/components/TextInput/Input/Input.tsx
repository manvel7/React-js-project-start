import {InputHTMLAttributes} from "react"
import styled from "styled-components"
import {bodyMixin} from "../../../styles/typography"
import {TextInputSize} from "../TextInput"

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  displaySize?: TextInputSize
  disabled: boolean
}

const Input = styled.input<IProps>`
  background-color: ${({theme}) => theme.palette.background.light};
  border: 0.2rem solid ${({theme}) => theme.palette.border};
  border-radius: 0.4rem;
  color: ${({theme}) => theme.palette.text.dark};
  display: block;
  padding: 0.8rem 1.6rem;
  width: 100%;
  ${bodyMixin()}

  &:focus {
    background-color: ${({theme}) => theme.palette.background.white};
    border: 0.2rem solid ${({theme}) => theme.palette.background.dark};
  }

  &:disabled {
    background-color: ${({theme}) => theme.palette.background.light};
    border: 0.2rem solid ${({theme}) => theme.palette.background.disabled};
    color: ${({theme}) => theme.palette.text.darkDimmed};
  }

  &::placeholder {
    color: ${({theme}) => theme.palette.text.darkDimmed};
  }
`

export default Input
