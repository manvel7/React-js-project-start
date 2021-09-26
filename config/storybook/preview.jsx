import React from "react"
import {UiProvider} from "../../src"

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"}
}

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  (Story) => (
    <UiProvider>
      <Story />
    </UiProvider>
  )
]
