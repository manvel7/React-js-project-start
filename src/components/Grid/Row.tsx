import {HTMLAttributes} from "react"
import clsx from "clsx"
import styled, {css, StyledProps} from "styled-components"
import {pxToRem} from "../../utils/unit"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  noGutters?: boolean
  alignItems?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "baseline"
    | "normal"
    | "stretch"
}

const noGuttersMixin = css<StyledProps<IProps>>`
  margin-left: 0;
  margin-right: 0;

  > .col,
  > [class*="col-"] {
    padding-left: 0;
    padding-right: 0;
  }
`

const alignItemsMixin = css<StyledProps<IProps>>`
  ${({alignItems}) => `align-items: ${alignItems};`}
`

const Row = styled.div.attrs<IProps, IProps>(({className, noGutters}) => {
  return {
    className: clsx(className, {
      row: true,
      "no-gutters": noGutters
    })
  }
})`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(
    ${({
        theme: {
          grid: {gutterWidth},
          typography: {htmlFontSize}
        }
      }) => pxToRem(gutterWidth, htmlFontSize)} / -2
  );
  margin-right: calc(
    ${({
        theme: {
          grid: {gutterWidth},
          typography: {htmlFontSize}
        }
      }) => pxToRem(gutterWidth, htmlFontSize)} / -2
  );

  ${({noGutters}) => (noGutters ? noGuttersMixin : "")}
  ${({alignItems}) => (alignItems ? alignItemsMixin : "")}
`

export default Row
