import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Slider from "./Slider"

describe("Slider", () => {
  describe("Default variant", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Slider
            slides={[
              <div key="1">first slide</div>,
              <div key="2">second slide</div>
            ]}
          />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
