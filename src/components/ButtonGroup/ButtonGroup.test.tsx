import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Button from "../Button"
import ButtonGroup from "./ButtonGroup"

describe("ButtonGroup", () => {
  describe("Regular", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <ButtonGroup>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
