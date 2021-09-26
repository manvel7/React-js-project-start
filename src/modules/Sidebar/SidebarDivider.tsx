import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLHRElement> {}

const SidebarDivider = styled.hr<IProps>`
  border-color: ${({theme}) => theme.palette.background.white};
  margin: 1.6rem auto;
  opacity: 0.3;
  width: calc(100% - 4rem);
`

export default SidebarDivider
