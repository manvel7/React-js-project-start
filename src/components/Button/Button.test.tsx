import React from "react"
import {render, screen} from "@testing-library/react"
import {UiProvider} from "../../styles"
import theme from "../../styles/theme"
import {pxToRem} from "../../utils/unit"
import Button from "./Button"

describe("Button", () => {
  describe("Small 'sm' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button size="sm">Small Button</Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button size="sm">Small Button</Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("border-radius", "0.3rem")
      expect(component).toHaveStyleRule(
        "font-size",
        pxToRem(
          theme.typography.variants.caption.size,
          theme.typography.htmlFontSize
        )
      )
    })
  })
  describe("Medium 'md' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button size="md">Medium Button</Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button size="md">Medium Button</Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("border-radius", "0.4rem")
      expect(component).toHaveStyleRule(
        "font-size",
        pxToRem(
          theme.typography.variants.h6.size,
          theme.typography.htmlFontSize
        )
      )
    })
  })
  describe("Large 'lg' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button size="lg">Large Button</Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button size="lg">Large Button</Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("border-radius", "0.8rem")
      expect(component).toHaveStyleRule(
        "font-size",
        pxToRem(
          theme.typography.variants.h4.size,
          theme.typography.htmlFontSize
        )
      )
    })
  })
  describe("Default variant", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="default">Default Button</Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button variant="default">Default Button</Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.primary
      )
      expect(component).toHaveStyleRule("color", theme.palette.text.white)
    })

    it("with state 'info' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="default" state="info">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'warn' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="default" state="warn">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'error' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="default" state="error">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'success' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="default" state="success">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
  describe("Default variant disabled", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="default" isDisabled={true}>
            Default Button disabled
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button variant="default" isDisabled={true}>
            Default Button disabled
          </Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.background.disabled
      )
      expect(component).toHaveStyleRule("color", theme.palette.text.darkDimmed)
    })
  })
  describe("Outlined variant", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined">Outlined Button</Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined">Outlined Button</Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("background-color", "transparent")
      expect(component).toHaveStyleRule("color", theme.palette.primary)
      expect(component).toHaveStyleRule("box-sizing", "border-box")
      expect(component).toHaveStyleRule(
        "border",
        `0.1rem solid ${theme.palette.primary}`
      )
    })

    it("with state 'info' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined" state="info">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'warn' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined" state="warn">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'error' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined" state="error">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'success' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined" state="success">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
  describe("Outlined variant disabled", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined" isDisabled={true}>
            Outlined Button disabled
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button variant="outlined" isDisabled={true}>
            Outlined Button disabled
          </Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("background-color", "transparent")
      expect(component).toHaveStyleRule("color", theme.palette.text.darkDimmed)
      expect(component).toHaveStyleRule("box-sizing", "border-box")
      expect(component).toHaveStyleRule(
        "border",
        `0.1rem solid ${theme.palette.disabled}`
      )
    })
  })
  describe("Text variant", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="text">Text Button</Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button variant="text">Text Button</Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("background-color", "transparent")
      expect(component).toHaveStyleRule("color", theme.palette.primary)
    })

    it("with state 'info' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="text" state="info">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'warn' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="text" state="warn">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'error' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="text" state="error">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("with state 'success' should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="text" state="success">
            Default Info Button
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
  describe("Text variant disabled", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Button variant="text" isDisabled={true}>
            Text Button disabled
          </Button>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Button variant="text" isDisabled={true}>
            Text Button disabled
          </Button>
        </UiProvider>
      )

      const element = screen.getByRole("button")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule("background-color", "transparent")
      expect(component).toHaveStyleRule("color", theme.palette.text.darkDimmed)
    })
  })
})
