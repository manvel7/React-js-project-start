import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLTableHeaderCellElement> {}

const TableHeadCell = styled.th<IProps>`
  padding: 0 0.8rem;
`

export default TableHeadCell
