import {InputHTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const HiddenInput = styled.input.attrs<IProps>(({value, checked}) => ({
  type: "radio",
  value,
  checked
}))`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.1rem;
`

export default HiddenInput
