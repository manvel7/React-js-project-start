import React from "react"
import {render} from "@testing-library/react"
import {theme} from "../../styles"
import Col from "./Col"

describe("Col", () => {
  describe("with auto layout", () => {
    it("should match snapshot", () => {
      const result = render(<Col theme={theme}>This is a column</Col>)
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with size", () => {
    it("should match snapshot", () => {
      const result = render(
        <Col theme={theme} sm={{size: 3}}>
          This is a column
        </Col>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with offset", () => {
    it("should match snapshot", () => {
      const result = render(
        <Col theme={theme} sm={{offset: 3}}>
          This is a column
        </Col>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with order", () => {
    it("should match snapshot", () => {
      const result = render(
        <Col theme={theme} sm={{order: 3}}>
          This is a column
        </Col>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with size, offset and order", () => {
    it("should match snapshot", () => {
      const result = render(
        <Col theme={theme} sm={{size: 3, offset: 5, order: "last"}}>
          This is a column
        </Col>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
