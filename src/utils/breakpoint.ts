import _ from "lodash"
import {ScreenBreakpointName, GridBreakpoints} from "../interfaces/grid"
import {getUnit, getValue} from "./unit"

const breakpointNext = (
  breakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints
): ScreenBreakpointName | null => {
  const breakpointNames = Object.keys(breakpoints) as Array<
    ScreenBreakpointName
  >
  const idx = breakpointNames.indexOf(breakpointName)

  if (idx !== -1 && idx + 1 < breakpointNames.length) {
    return breakpointNames[idx + 1]
  }

  return null
}

const breakpointMin = (
  breakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints
): string => {
  const min = getValue(breakpoints[breakpointName])

  if (min !== 0) {
    return breakpoints[breakpointName]
  }

  return ""
}

const breakpointMax = (
  breakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints
): string => {
  const next = breakpointNext(breakpointName, breakpoints)

  if (!_.isNil(next)) {
    const min = breakpointMin(next, breakpoints)

    if (!_.isEmpty(min)) {
      const value = getValue(min)
      const unit = getUnit(min)

      return `${value - 1}${unit}`
    }
  }

  return ""
}

const mediaBreakpointUp = (
  breakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints,
  styles: string
) => {
  const min = breakpointMin(breakpointName, breakpoints)

  if (!_.isEmpty(min)) {
    return `
      @media (min-width: ${min}) {
        ${styles}
      }
    `
  }

  return styles
}

const mediaBreakpointDown = (
  breakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints,
  styles: string
) => {
  const max = breakpointMax(breakpointName, breakpoints)

  if (!_.isEmpty(max)) {
    return `
      @media (max-width: ${max}) {
        ${styles}
      }
    `
  }

  return styles
}

const mediaBreakpointBetween = (
  lowerBreakpointName: ScreenBreakpointName,
  upperBreakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints,
  styles: string
) => {
  const min = breakpointMin(lowerBreakpointName, breakpoints)
  const max = breakpointMax(upperBreakpointName, breakpoints)

  if (!_.isEmpty(min) && !_.isEmpty(max)) {
    return `
      @media (min-width: ${min}) and (max-width: ${max}) {
        ${styles}
      }
    `
  }

  if (!_.isEmpty(min)) {
    return `
      @media (min-width: ${min}) {
        ${styles}
      }
    `
  }

  if (!_.isEmpty(max)) {
    return `
      @media (max-width: ${max}) {
        ${styles}
      }
    `
  }

  return styles
}

const mediaBreakpointOnly = (
  breakpointName: ScreenBreakpointName,
  breakpoints: GridBreakpoints,
  styles: string
) => {
  return mediaBreakpointBetween(
    breakpointName,
    breakpointName,
    breakpoints,
    styles
  )
}

export {
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointBetween,
  mediaBreakpointOnly
}
