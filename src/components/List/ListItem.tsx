import {LiHTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"

export interface IProps extends LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}

const activeMixin = css<StyledProps<IProps>>`
  border-color: ${({theme}) => theme.palette.background.dark};
`

const ListItem = styled.li<IProps>`
  background-color: ${({theme}) => theme.palette.background.tinted};
  border: 0.2rem solid ${({theme}) => theme.palette.background.tinted};
  border-radius: 0.4rem;
  min-height: 6.4rem;
  padding: 0.8rem 1.6rem 1.6rem;
  width: 100%;

  small {
    color: ${({theme}) => theme.palette.text.darkDimmed};
  }

  ${({isActive}) => (isActive ? activeMixin : "")}
`

export default ListItem
