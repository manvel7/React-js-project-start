import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Pill from "./Pill"

describe("Pill", () => {
  describe("Active", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Pill isActive={true}>Active Pill</Pill>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Active small 'sm' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Pill isActive={true} size="sm">
            Small Pill
          </Pill>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Active medium 'md' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Pill isActive={true} size="md">
            Medium Pill
          </Pill>
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Not Active", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Pill isActive={false}>Not Active Pill</Pill>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Not Active small 'sm' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Pill size="sm" isActive={false}>
            Small Pill
          </Pill>
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Not Active medium 'md' size", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Pill size="md" isActive={false}>
            Medium Pill
          </Pill>
        </UiProvider>
      )

      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
