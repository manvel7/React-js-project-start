enum Unit {
  px = "px",
  rem = "rem",
  percent = "%",
  em = "em"
}

const getUnit = (styleValue: string): Unit => {
  switch (true) {
    case !!styleValue.match(Unit.px):
      return Unit.px
    case !!styleValue.match(Unit.rem):
      return Unit.rem
    case !!styleValue.match(Unit.percent):
      return Unit.percent
    case !!styleValue.match(Unit.em):
      return Unit.em
    default:
      throw new Error(`Unit can't be extracted from ${styleValue}`)
  }
}

const getValue = (styleValue: string): number => {
  const unit = getUnit(styleValue)
  const number = styleValue.replace(unit, "")

  return Number(number)
}

const pxToRem = (
  styleValue: string,
  htmlBaselinePx: string,
  decimal = 2
): string => {
  const valueUnit = getUnit(styleValue)
  const baselineUnit = getUnit(styleValue)

  if (baselineUnit !== Unit.px || valueUnit !== Unit.px) {
    throw new Error("Values are NOT in px unit")
  }

  const baseline = getValue(htmlBaselinePx)
  const value = getValue(styleValue)

  const remValue =
    Math.floor((value / baseline) * 10 ** decimal) / 10 ** decimal

  return `${remValue}${Unit.rem}`
}

const toPercent = (value: number, total = 100, decimal = 10): string => {
  const percentValue =
    Math.floor((value / total) * 100 * 10 ** decimal) / 10 ** decimal
  return `${percentValue}${Unit.percent}`
}

export {Unit, getUnit, getValue, toPercent, pxToRem}
