import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  StyledProps,
  ThemedStyledProps
} from "styled-components"
import {pxToRem} from "../utils/unit"

const h1Mixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(theme.typography.variants.h1.size, theme.typography.htmlFontSize)};
  font-weight: ${({theme}) => theme.typography.variants.h1.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.h1.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.h1.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`

const h2Mixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(theme.typography.variants.h2.size, theme.typography.htmlFontSize)};
  font-weight: ${({theme}) => theme.typography.variants.h2.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.h2.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.h2.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`

const h3Mixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(theme.typography.variants.h3.size, theme.typography.htmlFontSize)};
  font-weight: ${({theme}) => theme.typography.variants.h3.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.h3.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.h3.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`

const h4Mixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(theme.typography.variants.h4.size, theme.typography.htmlFontSize)};
  font-weight: ${({theme}) => theme.typography.variants.h4.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.h4.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.h4.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`

const h5Mixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(theme.typography.variants.h5.size, theme.typography.htmlFontSize)};
  font-weight: ${({theme}) => theme.typography.variants.h5.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.h5.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.h5.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`

const h6Mixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(theme.typography.variants.h6.size, theme.typography.htmlFontSize)};
  font-weight: ${({theme}) => theme.typography.variants.h6.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.h6.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.h6.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`

const bodyMixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(
      theme.typography.variants.body.size,
      theme.typography.htmlFontSize
    )};
  font-weight: ${({theme}) => theme.typography.variants.body.weight};
  letter-spacing: ${({theme}) => theme.typography.variants.body.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.body.lineHeight,
      theme.typography.htmlFontSize
    )};
`

const smallMixin = <P extends Record<any, any>>(): FlattenInterpolation<
  ThemedStyledProps<P, DefaultTheme>
> => css<StyledProps<P>>`
  font-size: ${({theme}) =>
    pxToRem(
      theme.typography.variants.caption.size,
      theme.typography.htmlFontSize
    )};
  font-weight: ${({theme}) => theme.typography.variants.caption.weight};
  letter-spacing: ${({theme}) =>
    theme.typography.variants.caption.letterSpacing};
  line-height: ${({theme}) =>
    pxToRem(
      theme.typography.variants.caption.lineHeight,
      theme.typography.htmlFontSize
    )};

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
  }
`
export {
  h1Mixin,
  h2Mixin,
  h3Mixin,
  h4Mixin,
  h5Mixin,
  h6Mixin,
  bodyMixin,
  smallMixin
}
