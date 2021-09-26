import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Button from "../Button"
import Toggle from "./Toggle"

describe("Toggle", () => {
  describe("without initial active", () => {
    describe("default size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Toggle>
              <Button>first</Button>
              <Button>second</Button>
              <Button>third</Button>
            </Toggle>
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })

    describe("small size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Toggle size="sm">
              <Button>first</Button>
              <Button>second</Button>
              <Button>third</Button>
            </Toggle>
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })
  })

  describe("with initial active", () => {
    describe("default size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Toggle initialActive={2}>
              <Button>first</Button>
              <Button>second</Button>
              <Button>third</Button>
            </Toggle>
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })

    describe("small size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Toggle size="sm" initialActive={1}>
              <Button>first</Button>
              <Button>second</Button>
              <Button>third</Button>
            </Toggle>
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })
  })
})
