import {TableHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {smallMixin} from "../../styles/typography"

export interface IProps extends TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean
}

const stripedMixin = css<StyledProps<IProps>>`
  tbody {
    tr:nth-of-type(odd) {
      background-color: ${({theme}) => theme.palette.background.white};
    }
  }
`

const Table = styled.table<IProps>`
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  color: ${({theme}) => theme.palette.text.dark};
  width: 100%;
  ${smallMixin<IProps>()}

  ${({striped}) => (striped ? stripedMixin : "")}
`

export default Table
