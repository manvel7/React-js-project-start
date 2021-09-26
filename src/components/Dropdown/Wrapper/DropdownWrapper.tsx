import {HTMLAttributes} from "react"
import styled from "styled-components"

const DropdownWrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: inline-block;
  perspective: 30rem;
  position: relative;
  z-index: 3;
`

export default DropdownWrapper
