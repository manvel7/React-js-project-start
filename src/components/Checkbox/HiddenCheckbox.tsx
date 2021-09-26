import {HTMLAttributes} from "react"
import styled from "styled-components"

export interface IProps extends HTMLAttributes<HTMLInputElement> {}

const HiddenCheckbox = styled.input.attrs({type: "checkbox"})<IProps>`
  border: 0;
  height: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.1rem;
`

export default HiddenCheckbox
