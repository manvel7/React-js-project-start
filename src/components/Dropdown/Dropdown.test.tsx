import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import {Dropdown, DropdownMenuItem} from "./index"

describe("Dropdown", () => {
  describe("Small 'sm' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Dropdown title="Small dropdown" size="sm">
            <DropdownMenuItem>First item</DropdownMenuItem>
            <DropdownMenuItem>Second item</DropdownMenuItem>
          </Dropdown>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Medium 'md' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Dropdown title="Medium dropdown" size="md">
            <DropdownMenuItem>First item</DropdownMenuItem>
            <DropdownMenuItem>Second item</DropdownMenuItem>
          </Dropdown>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
