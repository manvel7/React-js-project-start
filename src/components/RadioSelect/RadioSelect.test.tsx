import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import RadioItem from "./RadioItem"
import RadioSelect from "./RadioSelect"

describe("RadioItem", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <RadioSelect>
            <RadioItem label="first" />
            <RadioItem label="second" />
            <RadioItem label="third" />
          </RadioSelect>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("ErrorState", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <RadioSelect error={true}>
            <RadioItem label="first" />
            <RadioItem label="second" />
            <RadioItem label="third" />
          </RadioSelect>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("DisabledState", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <RadioSelect disabled={true}>
            <RadioItem label="first" />
            <RadioItem label="second" />
            <RadioItem label="third" />
          </RadioSelect>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
