import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
  StyledProps
} from "styled-components"
import {mediaBreakpointDown} from "../utils/breakpoint"
import {getValue, toPercent} from "../utils/unit"
import {
  bodyMixin,
  smallMixin,
  h1Mixin,
  h2Mixin,
  h3Mixin,
  h4Mixin,
  h5Mixin,
  h6Mixin
} from "./typography"

interface IProps {}

const genericResetMixin = css<StyledProps<IProps>>`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const appResetMixin = css<StyledProps<IProps>>`
  html {
    /* stylelint-disable property-no-vendor-prefix */
    -ms-overflow-style: scrollbar; /* Set box-sizing so that the width is not affected by padding or border */
    -ms-text-size-adjust: 100%; /* Set default font family in all browsers. */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* Makes 1rem = 10px */
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS. */
    /* stylelint-enable property-no-vendor-prefix */
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${({theme}) => theme.palette.background.white};

    /* Hide overflow content */
    &.overflow {
      overflow: hidden;
    }

    /* Prevent focus outline on elements that can't be accessed via keyboard. */
    [tabindex="-1"]:focus {
      outline: none !important;
    }

    /* Hide overflow in IE */
    svg:not(:root) {
      overflow: hidden;
    }

    /* Hide elements has 'hidden' attribute in IE 10- */
    [hidden] {
      display: none !important;
    }

    ::-webkit-file-upload-button {
      /* stylelint-disable-next-line property-no-vendor-prefix */
      -webkit-appearance: button;
      font: inherit;
    }
  }
`

const typographyMixin = css<StyledProps<IProps>>`
  html {
    font-family: ${({theme}) =>
      theme.typography
        .fontFamily}; /* Prevent scrollbars to overlap content in IE11 and Edge */
    font-size: ${({theme}) =>
      toPercent(
        getValue(theme.typography.htmlFontSize),
        16
      )}; /* Set default tap highlight to be transparent in iOS. */
    font-style: normal;
    color: ${({theme}) => theme.palette.text.dark};
  }

  body {
    ${bodyMixin<IProps>()}
  }

  h1 {
    ${h1Mixin<IProps>()}
  }

  h2 {
    ${h2Mixin<IProps>()}
  }

  h3 {
    ${h3Mixin<IProps>()}
  }

  h4 {
    ${h4Mixin<IProps>()}
  }

  h5 {
    ${h5Mixin<IProps>()}
  }

  h6 {
    ${h6Mixin<IProps>()}
  }

  small {
    ${smallMixin<IProps>()}
  }

  b,
  strong {
    font-weight: ${({theme}) => theme.typography.fontWeights.bold};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    caption {
      font-weight: ${({theme}) => theme.typography.fontWeights.boldest};
    }
  }
`

const utilsMixin = css<StyledProps<IProps>>`
  .hidden {
    visibility: hidden;
  }

  .d-none {
    display: none;
  }

  .hidden-sm-down {
    ${({theme}) =>
      mediaBreakpointDown(
        "sm",
        theme.grid.breakpoints,
        `
      display: none;
    `
      )}
  }

  .text-center {
    text-align: center;
  }
`

const CssBaseline: GlobalStyleComponent<
  IProps,
  DefaultTheme
> = createGlobalStyle`
  ${genericResetMixin}

  ${appResetMixin}

  ${typographyMixin}

  ${utilsMixin}
`

export default CssBaseline
