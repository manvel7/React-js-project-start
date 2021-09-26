import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import ToggleSwitch from "./ToggleSwitch"

describe("ToggleSwitch", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <ToggleSwitch checked={false} />
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Default checked", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <ToggleSwitch checked={true} />
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Disabled", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <ToggleSwitch checked={false} disabled={true} />
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Error", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <ToggleSwitch checked={false} error={true} />
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
