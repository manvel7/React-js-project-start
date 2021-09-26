import React from "react"
import {render} from "@testing-library/react"
import {theme} from "../../styles"
import Row from "./Row"

describe("Row", () => {
  describe("default", () => {
    it("should match snapshot", () => {
      const result = render(<Row theme={theme}>This is a row</Row>)
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with no gutters", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} noGutters={true}>
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})

describe("Row with alignItems", () => {
  describe("of center", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} alignItems="center">
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("of flex-end", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} alignItems="flex-end">
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("of flex-start", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} alignItems="flex-start">
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("of baseline", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} alignItems="baseline">
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("of normal", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} alignItems="normal">
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("of stretch", () => {
    it("should match snapshot", () => {
      const result = render(
        <Row theme={theme} alignItems="stretch">
          This is a row
        </Row>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
