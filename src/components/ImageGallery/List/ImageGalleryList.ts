import {HTMLAttributes} from "react"
import styled, {css, StyledProps} from "styled-components"
import ImageWrapper from "../ImageWrapper"
import {h5Mixin} from "../../../styles/typography"
import {mediaBreakpointDown} from "../../../utils/breakpoint"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  moreRight?: number
  moreLeft?: number
}

const mobileMixin = `
  flex-direction: row;
  margin-top: 0.8rem;
  height: 8rem;

  & > div {
    margin-bottom: 0rem;
    margin-right: 0.8rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

const moreRightMixin = css<StyledProps<IProps>>`
  & > ${ImageWrapper}:last-child {
    position: relative;

    &:after {
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      bottom: 0;
      color: ${({theme}) => theme.palette.text.white};
      content: "+${({moreRight}) => moreRight}";
      display: flex;
      justify-content: center;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;

      ${h5Mixin}
    }
  }
`

const moreLeftMixin = css<StyledProps<IProps>>`
  & > ${ImageWrapper}:first-child {
    position: relative;

    &:after {
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      bottom: 0;
      color: ${({theme}) => theme.palette.text.white};
      content: "+${({moreLeft}) => moreLeft}";
      display: flex;
      justify-content: center;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;

      ${h5Mixin}
    }
  }
`

const ImageGalleryList = styled.div<IProps>`
  display: flex;
  flex: 0 1 25%;
  flex-direction: column;

  & > div {
    margin-bottom: 0.8rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({moreRight}) => (moreRight ? moreRightMixin : "")}
  ${({moreLeft}) => (moreLeft ? moreLeftMixin : "")}
  ${({theme}) => mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin)}
`

export default ImageGalleryList
