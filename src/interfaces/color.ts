interface ITextPalette {
  dark: string
  darkDimmed: string
  white: string
}

interface IBackgroundPalette {
  dark: string
  white: string
  light: string
  disabled: string
  tinted: string
}

interface IAlertPalette {
  info: string
  success: string
  warn: string
  error: string
}

interface IPalette {
  primary: string
  text: ITextPalette
  background: IBackgroundPalette
  border: string
  disabled: string
  alert: IAlertPalette
}

export {IPalette}
