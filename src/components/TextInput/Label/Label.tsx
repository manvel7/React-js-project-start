import {InputHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {smallMixin, h5Mixin, h6Mixin} from "../../../styles/typography"
import {TextInputSize} from "../TextInput"

export interface IProps extends InputHTMLAttributes<HTMLLabelElement> {
  displaySize?: TextInputSize
  disabled: boolean
}

const lgMixin = css<StyledProps<IProps>>`
  ${h5Mixin<IProps>()}
`

const mdMixin = css<StyledProps<IProps>>`
  ${h6Mixin<IProps>()}
`

const smMixin = css<StyledProps<IProps>>`
  ${h6Mixin<IProps>()}
`

const xsMixin = css<StyledProps<IProps>>`
  ${smallMixin<IProps>()}
`

const Label = styled.label<IProps>`
  color: ${({disabled, theme}) =>
    disabled ? theme.palette.text.darkDimmed : theme.palette.text.dark};
  display: inline-block;
  ${({displaySize}) => {
    switch (displaySize) {
      case "lg":
        return lgMixin
      case "sm":
        return smMixin
      case "xs":
        return xsMixin
      case "md":
      default:
        return mdMixin
    }
  }};
  margin-bottom: 0.8rem;
  width: 100%;
`

export default Label
