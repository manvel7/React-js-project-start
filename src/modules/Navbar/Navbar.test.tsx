import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Navbar from "./Navbar"
import {NavTitle, Nav, NavItem} from "./index"

describe("Navbar", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Navbar>
            <NavTitle>Navbar</NavTitle>
            <Nav>
              <NavItem>Active</NavItem>
              <NavItem isActive={false}>Not Active</NavItem>
            </Nav>
          </Navbar>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
