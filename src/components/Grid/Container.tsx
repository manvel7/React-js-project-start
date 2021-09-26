import {HTMLAttributes} from "react"
import clsx from "clsx"
import _ from "lodash"
import styled, {css, StyledProps} from "styled-components"
import {ColBreakpointName, ScreenBreakpointName} from "../../interfaces/grid"
import {mediaBreakpointUp} from "../../utils/breakpoint"
import {pxToRem} from "../../utils/unit"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean | ColBreakpointName
}

const maxWidthMixin = css<StyledProps<IProps>>`
  ${({
    fluid,
    theme: {
      grid: {breakpoints, containerMaxWidths},
      typography: {htmlFontSize}
    }
  }) => {
    if (fluid === true) {
      return ""
    }

    let shouldSkip = false

    return (Object.keys(breakpoints) as Array<ScreenBreakpointName>)
      .map((breakpoint) => {
        if (breakpoint === fluid) {
          shouldSkip = true
        }

        const maxWidth = containerMaxWidths[breakpoint]

        if (maxWidth) {
          return mediaBreakpointUp(
            breakpoint,
            breakpoints,
            shouldSkip
              ? "max-width: none;"
              : `max-width: ${pxToRem(maxWidth, htmlFontSize)};`
          )
        }

        return ""
      })
      .join("\n")
  }}
`

const Container = styled.div.attrs<IProps, IProps>(({className, fluid}) => {
  return {
    className: clsx(className, {
      container: true,
      "container-fluid": !_.isNil(fluid) && fluid === true,
      [`container-${fluid}-fluid`]: !_.isNil(fluid) && fluid !== true
    })
  }
})`
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(
    ${({
        theme: {
          grid: {gutterWidth},
          typography: {htmlFontSize}
        }
      }) => pxToRem(gutterWidth, htmlFontSize)} / 2
  );
  padding-right: calc(
    ${({
        theme: {
          grid: {gutterWidth},
          typography: {htmlFontSize}
        }
      }) => pxToRem(gutterWidth, htmlFontSize)} / 2
  );
  width: 100%;

  ${maxWidthMixin}
`

export default Container
