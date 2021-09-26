interface ITypographyStyles {
  size: string
  weight: number
  lineHeight: string
  letterSpacing: string
}

type TypographyVariantName =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"

type TypographyVariants = Record<TypographyVariantName, ITypographyStyles>

type FontWeightName = "normal" | "bold" | "boldest"

type FontWeights = Record<FontWeightName, number>

interface ITypography {
  htmlFontSize: string
  fontFamily: string
  fontWeights: FontWeights
  variants: TypographyVariants
}

export {ITypography}
