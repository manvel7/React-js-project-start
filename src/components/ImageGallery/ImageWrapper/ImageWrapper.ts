import {HTMLAttributes} from "react"
import styled, {
  css,
  DefaultTheme,
  StyledComponent,
  StyledProps
} from "styled-components"
import ImageGalleryList from "../List"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}

const activeMixin = css<StyledProps<IProps>>`
  border-color: ${({theme}) => theme.palette.primary};
`

const ImageWrapper: StyledComponent<"div", DefaultTheme, IProps> = styled.div<
  IProps
>`
  border: 0.1rem solid transparent;
  border-radius: 0.6rem;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    width: 100%;
  }

  ${({isActive}) => (isActive ? activeMixin : "")}

  ${ImageGalleryList} & {
    cursor: pointer;
    flex: 1 1 0;
  }
`

export default ImageWrapper
