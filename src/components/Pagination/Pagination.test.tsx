import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Pagination from "./Pagination"

describe("Pagination", () => {
  describe("Default variant", () => {
    describe("with medium size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Pagination size="md" pageCount={3} currentPage={1} />
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })

    describe("with large size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Pagination size="lg" pageCount={3} currentPage={1} />
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })
  })

  describe("Circle variant", () => {
    describe("with medium size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Pagination
              variant="circle"
              size="md"
              pageCount={3}
              currentPage={1}
            />
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })

    describe("with large size", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Pagination
              variant="circle"
              size="lg"
              pageCount={3}
              currentPage={1}
            />
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })

    describe("without numbers", () => {
      it("should match snapshot", () => {
        const result = render(
          <UiProvider>
            <Pagination
              variant="circle"
              hidePageNumber={true}
              pageCount={3}
              currentPage={1}
            />
          </UiProvider>
        )
        expect(result.container.firstChild).toMatchSnapshot()
      })
    })
  })
})
