import React from "react"
import {render} from "@testing-library/react"
import {theme} from "../../styles"
import Container from "./Container"

describe("Container", () => {
  describe("default", () => {
    it("should match snapshot", () => {
      const result = render(
        <Container theme={theme}>This is a container</Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("fluid", () => {
    it("on all breakpoints should match snapshot", () => {
      const result = render(
        <Container theme={theme} fluid={true}>
          This is a container
        </Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("on xs breakpoint should match snapshot", () => {
      const result = render(
        <Container theme={theme} fluid="xs">
          This is a container
        </Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("on sm breakpoint should match snapshot", () => {
      const result = render(
        <Container theme={theme} fluid="sm">
          This is a container
        </Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("on md breakpoint should match snapshot", () => {
      const result = render(
        <Container theme={theme} fluid="md">
          This is a container
        </Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("on lg breakpoint should match snapshot", () => {
      const result = render(
        <Container theme={theme} fluid="lg">
          This is a container
        </Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })

    it("on xl breakpoint should match snapshot", () => {
      const result = render(
        <Container theme={theme} fluid="xl">
          This is a container
        </Container>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
