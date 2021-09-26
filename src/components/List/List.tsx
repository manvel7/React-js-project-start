import {HTMLAttributes} from "react"
import styled from "styled-components"

export interface IProps extends HTMLAttributes<HTMLUListElement> {}

const List = styled.ul<IProps>`
  width: 100%;

  li {
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default List
