import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Accordion from "./Accordion"

describe("Accordion", () => {
  describe("Regular", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Accordion isActive={true} label="Accordion">
            Primary Button
          </Accordion>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
