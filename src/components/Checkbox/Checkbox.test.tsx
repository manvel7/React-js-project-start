import React from "react"
import {render, screen} from "@testing-library/react"
import {UiProvider} from "../../styles"
import theme from "../../styles/theme"
import Checkbox from "./Checkbox"

describe("Checkbox", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Checkbox />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Checkbox />
        </UiProvider>
      )

      const element = screen.getByRole("checkbox")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
        ? result.container.firstChild.childNodes[1]
        : null
      expect(component).toHaveStyleRule("border-radius", "0.4rem")
    })
  })

  describe("Default checked", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} />
        </UiProvider>
      )

      const element = screen.getByRole("checkbox")
      expect(element).toBeInTheDocument()

      const iconElement = screen.getAllByRole("img", {hidden: true})[0]
      expect(iconElement).toBeInTheDocument()

      const component = result.container.firstChild
        ? result.container.firstChild.childNodes[1]
        : null
      expect(component).toHaveStyleRule("color", theme.palette.primary)
    })
  })

  describe("Disabled checked", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} disabled={true} />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} disabled={true} />
        </UiProvider>
      )

      const element = screen.getByRole("checkbox")
      expect(element).toBeInTheDocument()

      const iconElement = screen.getAllByRole("img", {hidden: true})[0]
      expect(iconElement).toBeInTheDocument()

      const component = result.container.firstChild
        ? result.container.firstChild.childNodes[1]
        : null
      expect(component).toHaveStyleRule("color", theme.palette.disabled)
    })
  })

  describe("Dashed checkbox checked", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} variant="dashed" />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} variant="dashed" />
        </UiProvider>
      )

      const element = screen.getByRole("checkbox")
      expect(element).toBeInTheDocument()

      const iconElement = screen.getAllByRole("img", {hidden: true})[0]
      expect(iconElement).toBeInTheDocument()

      const component = result.container.firstChild
        ? result.container.firstChild.childNodes[1]
        : null
      expect(component).toHaveStyleRule("color", theme.palette.primary)
    })
  })

  describe("Dashed disabled checkbox checked", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Checkbox checked={true} disabled={true} variant="dashed" />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Checkbox disabled={true} checked={true} variant="dashed" />
        </UiProvider>
      )

      const element = screen.getByRole("checkbox")
      expect(element).toBeInTheDocument()

      const iconElement = screen.getAllByRole("img", {hidden: true})[0]
      expect(iconElement).toBeInTheDocument()

      const component = result.container.firstChild
        ? result.container.firstChild.childNodes[1]
        : null
      expect(component).toHaveStyleRule("color", theme.palette.disabled)
    })
  })
})
