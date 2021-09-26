import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import TextInput from "./TextInput"

describe("TextInput", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <TextInput id="test-1" label="Label" placeholder="Placeholder" />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Disabled", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <TextInput
            id="test-2"
            label="Disabled"
            displaySize="xs"
            disabled={true}
            placeholder="Placeholder"
          />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
