import React from "react"
import {render} from "@testing-library/react"
import {Dropdown, DropdownMenuItem} from "../../components/Dropdown"
import {UiProvider} from "../../styles"
import Toolbar from "./Toolbar"

describe("Toolbar", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Toolbar>
            <Dropdown size="sm" title="Share">
              <DropdownMenuItem>Item 1</DropdownMenuItem>
              <DropdownMenuItem>Item 2</DropdownMenuItem>
            </Dropdown>
            <Dropdown size="sm" title="Export">
              <DropdownMenuItem>Item 1</DropdownMenuItem>
              <DropdownMenuItem>Item 2</DropdownMenuItem>
            </Dropdown>
          </Toolbar>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
