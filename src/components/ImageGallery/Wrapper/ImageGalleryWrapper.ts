import styled from "styled-components"
import {IProps} from "../ImageGallery"
import {mediaBreakpointDown} from "../../../utils/breakpoint"

const mobileMixin = `
  flex-direction: column;
`

const ImageGalleryWrapper = styled.div<Partial<IProps>>`
  display: flex;
  flex-direction: row;
  width: ${({containerWidth}) =>
    containerWidth ? containerWidth + "rem" : "100%"};

  ${({theme}) => mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin)}
`

export default ImageGalleryWrapper
