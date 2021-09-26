import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import {h3Mixin, h4Mixin} from "../../styles/typography"

export type JumbotronSize = "sm" | "lg"

export interface IProps extends HTMLAttributes<HTMLElement> {
  size?: JumbotronSize
}

const lgMixin = css<StyledProps<IProps>>`
  ${h3Mixin<IProps>()}
`

const smMixin = css<StyledProps<IProps>>`
  ${h4Mixin<IProps>()}
`

const Jumbotron = styled.div<IProps>`
  background-color: ${({theme}) => theme.palette.background.dark};
  border-radius: 0.4rem;
  color: ${({theme}) => theme.palette.text.white};
  padding: 1.6rem;
  width: 100%;

  ${({size}) => {
    switch (size) {
      case "lg":
        return lgMixin
      case "sm":
      default:
        return smMixin
    }
  }}
`

export default Jumbotron
