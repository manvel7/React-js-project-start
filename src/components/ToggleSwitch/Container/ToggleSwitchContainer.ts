import {LabelHTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const ToggleSwitchContainer = styled.label<IProps>`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 0.8rem;
`

export default ToggleSwitchContainer
