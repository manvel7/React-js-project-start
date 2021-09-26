import React from "react"
import {screen, render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Button from "../Button"
import Tooltip from "./Tooltip"

describe("Tooltip", () => {
  describe("with text reference", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Tooltip content="tooltip content">Text reference</Tooltip>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      render(
        <UiProvider>
          <Tooltip trigger="none" tooltipShown={true} content="tooltip content">
            Text reference
          </Tooltip>
        </UiProvider>
      )

      expect(screen.getByText("tooltip content")).toBeInTheDocument()
    })
  })

  describe("with button reference", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Tooltip content="tooltip content">
            <Button>Button reference</Button>
          </Tooltip>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with manual state", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Tooltip content="tooltip content" trigger="none" tooltipShown={true}>
            Manual state
          </Tooltip>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with placement right", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Tooltip content="tooltip content" placement="right">
            Placement right
          </Tooltip>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
