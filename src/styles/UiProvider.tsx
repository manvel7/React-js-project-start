import React, {FunctionComponent} from "react"
import {ThemeProvider} from "styled-components"
import theme from "./theme"
import {CssBaseline} from "./index"

interface IProps {}

const UiProvider: FunctionComponent<IProps> = (props) => {
  const {children} = props

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default UiProvider
