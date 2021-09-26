import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLTableRowElement> {}

const TableHead = styled.thead<IProps>`
  tr {
    background-color: transparent;
  }

  th {
    text-align: right;

    &:first-child {
      text-align: left;
    }
  }
`

export default TableHead
