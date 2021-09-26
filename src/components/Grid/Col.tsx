import {HTMLAttributes} from "react"
import clsx from "clsx"
import _ from "lodash"
import styled, {css, StyledProps} from "styled-components"
import {ColBreakpointName} from "../../interfaces/grid"
import {mediaBreakpointUp} from "../../utils/breakpoint"
import {pxToRem, toPercent} from "../../utils/unit"

const colBreakpoints: Array<ColBreakpointName> = ["xs", "sm", "md", "lg", "xl"]

type ColSize = number | "auto" | true
type ColOrder = number | "first" | "last"

interface IColConfig {
  size?: ColSize
  order?: ColOrder
  offset?: number
}

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  xs?: IColConfig
  sm?: IColConfig
  md?: IColConfig
  lg?: IColConfig
  xl?: IColConfig
}

const widthMixin = css<StyledProps<IProps>>`
  ${(props) => {
    const {
      theme: {
        grid: {breakpoints, columns}
      }
    } = props

    return colBreakpoints
      .map((breakpoint) => {
        const colConfig = props[breakpoint]

        if (!_.isNil(colConfig)) {
          const {size, order, offset} = colConfig
          const breakpointStyles: string[] = []

          // Column size
          switch (true) {
            case size === "auto":
              breakpointStyles.push(
                mediaBreakpointUp(
                  breakpoint,
                  breakpoints,
                  `flex: 0 0 auto;
                  width: auto;
                  max-width: none;`
                )
              )
              break
            case _.isNumber(size):
              breakpointStyles.push(
                mediaBreakpointUp(
                  breakpoint,
                  breakpoints,
                  `flex: 0 0 ${toPercent(size as number, columns)};
                  max-width: ${toPercent(size as number, columns)};`
                )
              )
              break
            default:
              breakpointStyles.push(
                mediaBreakpointUp(
                  breakpoint,
                  breakpoints,
                  `flex-basis: 0;
                  flex-grow: 1;
                  max-width: 100%;`
                )
              )
          }

          // Column order
          switch (true) {
            case order === "first":
              breakpointStyles.push(
                mediaBreakpointUp(breakpoint, breakpoints, "order: -1;")
              )
              break
            case order === "last":
              breakpointStyles.push(
                mediaBreakpointUp(breakpoint, breakpoints, "order: 13;")
              )
              break
            case _.isNumber(order):
              breakpointStyles.push(
                mediaBreakpointUp(breakpoint, breakpoints, `order: ${order};`)
              )
              break
            default:
          }

          // Column offset
          if (!_.isNil(offset) && _.isNumber(offset)) {
            breakpointStyles.push(
              mediaBreakpointUp(
                breakpoint,
                breakpoints,
                `margin-left: ${toPercent(offset, columns)};`
              )
            )
          }

          return breakpointStyles.join("\n")
        }

        return mediaBreakpointUp(
          breakpoint,
          breakpoints,
          `flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;`
        )
      })
      .join("\n")
  }}
`

const Col = styled.div.attrs<IProps, IProps>((props) => {
  const {className, xs, sm, md, lg, xl} = props

  return {
    className: clsx(className, {
      col: true,
      // xs
      [`col-${xs?.size}`]: !_.isNil(xs?.size) && xs?.size !== true,
      [`order-xs-${xs?.order}`]: !_.isNil(xs?.order),
      [`offset-xs-${xs?.offset}`]: !_.isNil(xs?.offset),
      // sm
      "col-sm": !_.isNil(sm?.size) && sm?.size === true,
      [`col-sm-${sm?.size}`]: !_.isNil(sm?.size) && sm?.size !== true,
      [`order-sm-${sm?.order}`]: !_.isNil(sm?.order),
      [`offset-sm-${sm?.offset}`]: !_.isNil(sm?.offset),
      // md
      "col-md": !_.isNil(md?.size) && md?.size === true,
      [`col-md-${md?.size}`]: !_.isNil(md?.size) && md?.size !== true,
      [`order-md-${md?.order}`]: !_.isNil(md?.order),
      [`offset-md-${md?.offset}`]: !_.isNil(md?.offset),
      // lg
      "col-lg": !_.isNil(lg?.size) && lg?.size === true,
      [`col-lg-${lg?.size}`]: !_.isNil(lg?.size) && lg?.size !== true,
      [`order-lg-${lg?.order}`]: !_.isNil(lg?.order),
      [`offset-lg-${lg?.offset}`]: !_.isNil(lg?.offset),
      // xl
      "col-xl": !_.isNil(xl?.size) && xl?.size === true,
      [`col-xl-${xl?.size}`]: !_.isNil(xl?.size) && xl?.size !== true,
      [`order-xl-${xl?.order}`]: !_.isNil(xl?.order),
      [`offset-xl-${xl?.offset}`]: !_.isNil(xl?.offset)
    })
  }
})`
  min-height: 0.1rem;
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
  position: relative;
  width: 100%;
  ${widthMixin}
`

export default Col
