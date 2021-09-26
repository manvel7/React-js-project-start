import {HTMLAttributes} from "react"
import styled from "styled-components"
import {h6Mixin} from "../../styles/typography"

export interface IProps extends HTMLAttributes<HTMLElement> {
  disabled?: boolean
}

const CheckboxContainer = styled.label<IProps>`
  align-items: center;
  color: ${({disabled, theme}) =>
    disabled ? theme.palette.text.darkDimmed : theme.palette.text.dark};
  display: inline-flex;
  justify-content: center;
  ${h6Mixin<IProps>()};
`

export default CheckboxContainer
