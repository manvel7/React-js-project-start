import {HTMLAttributes} from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const ButtonGroup = styled.div<IProps>`
  display: inline-flex;
  flex-wrap: no-wrap;

  button {
    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    &.toggle__button--inactive {
      border-color: ${({theme}) => theme.palette.border};
    }

    &.toggle__button--active {
      font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
    }
  }
`

export default ButtonGroup
