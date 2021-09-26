import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import {List, ListItem} from "./index"

describe("List", () => {
  describe("without active item", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <List>
            <ListItem>item 1</ListItem>
            <ListItem>item 2</ListItem>
            <ListItem>item 3</ListItem>
          </List>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("with active item", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <List>
            <ListItem>item 1</ListItem>
            <ListItem isActive={true}>item 2</ListItem>
            <ListItem>item 3</ListItem>
          </List>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
