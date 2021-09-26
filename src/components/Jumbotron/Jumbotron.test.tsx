import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Jumbotron from "./Jumbotron"

describe("Jumbotron", () => {
  describe("Large", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Jumbotron>Jumbotron</Jumbotron>
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
