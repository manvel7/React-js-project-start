import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = styled.tbody<IProps>``

export default TableBody
