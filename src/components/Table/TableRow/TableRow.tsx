import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"

export interface IProps extends HTMLAttributes<HTMLTableRowElement> {
  disabled?: boolean
}

const disabledMixin = css<StyledProps<IProps>>`
  background-color: ${({theme}) =>
    theme.palette.background.disabled} !important;
  color: ${({theme}) => theme.palette.text.darkDimmed} !important;
`

const TableRow = styled.tr<IProps>`
  background-color: ${({theme}) => theme.palette.background.light};

  ${({disabled}) => (disabled ? disabledMixin : "")}

  td,th {
    text-align: right;

    &:first-child {
      text-align: left;
      border-radius: 0.4rem 0 0 0.4rem;
    }

    &:last-child {
      border-radius: 0 0.4rem 0.4rem 0;
    }
  }
`

export default TableRow
