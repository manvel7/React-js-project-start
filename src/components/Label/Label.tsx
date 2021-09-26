import {HTMLAttributes} from "react"
import styled from "styled-components"
import {h5Mixin} from "../../styles/typography"

export interface IProps extends HTMLAttributes<HTMLSpanElement> {}

const Label = styled.span<IProps>`
  ${h5Mixin<IProps>()}
`

export default Label
