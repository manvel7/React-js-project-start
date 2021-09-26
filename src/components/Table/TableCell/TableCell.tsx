import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLTableCellElement> {}

const TableCell = styled.td<IProps>`
  padding: 0.8rem;
`

export default TableCell
