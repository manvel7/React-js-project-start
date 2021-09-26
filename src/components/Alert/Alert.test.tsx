import React from "react"
import {render, screen} from "@testing-library/react"
import {UiProvider} from "../../styles"
import theme from "../../styles/theme"
import Alert from "./Alert"

describe("Alert", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert>Default alert</Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
    it("dismissible should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert isDismissible={true}>Default dismissible alert</Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert>Default alert</Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.primary
      )
    })
    it("dismissible renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert isDismissible={true}>Default dismissible alert</Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const buttonElement = screen.getByRole("button")
      expect(buttonElement).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.primary
      )
    })
  })

  describe("Info", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="info">Info alert</Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
    it("dismissible should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="info" isDismissible={true}>
            Info dismissible alert
          </Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="info">Info alert</Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.info
      )
    })
    it("dismissible renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="info" isDismissible={true}>
            Info dismissible alert
          </Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const buttonElement = screen.getByRole("button")
      expect(buttonElement).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.info
      )
    })
  })

  describe("Success", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="success">Success alert</Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
    it("dismissible should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="success" isDismissible={true}>
            Success alert
          </Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="success">Success alert</Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.success
      )
    })
    it("dismissible renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="success" isDismissible={true}>
            Success dismissible alert
          </Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const buttonElement = screen.getByRole("button")
      expect(buttonElement).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.success
      )
    })
  })

  describe("Warning", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="warning">Warning alert</Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
    it("dismissible should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="warning" isDismissible={true}>
            Warning dismissible alert
          </Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="warning">Warning alert</Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.warn
      )
    })
    it("dismissible renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="warning" isDismissible={true}>
            Warning dismissible alert
          </Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const buttonElement = screen.getByRole("button")
      expect(buttonElement).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.warn
      )
    })
  })

  describe("Error", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="error">Error alert</Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
    it("dismissible should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Alert variant="error" isDismissible={true}>
            Error dismissible alert
          </Alert>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="error">Error alert</Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.error
      )
    })
    it("dismissible renders on screen properly", () => {
      const result = render(
        <UiProvider>
          <Alert variant="error" isDismissible={true}>
            Error dismissible alert
          </Alert>
        </UiProvider>
      )

      const element = screen.getByRole("alert")
      expect(element).toBeInTheDocument()

      const buttonElement = screen.getByRole("button")
      expect(buttonElement).toBeInTheDocument()

      const component = result.container.firstChild
      expect(component).toHaveStyleRule(
        "background-color",
        theme.palette.alert.error
      )
    })
  })
})
