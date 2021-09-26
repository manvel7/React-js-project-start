import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const RadioSelectWrapper = styled.div<IProps>`
  display: inline-block;
`

export default RadioSelectWrapper
