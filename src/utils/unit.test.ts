import {getUnit, getValue, pxToRem, toPercent, Unit} from "./unit"

describe("utils / unit", () => {
  describe("getUnit", () => {
    it("returns px unit", () => {
      const unit = getUnit("10px")

      expect(unit).toEqual(Unit.px)
    })

    it("returns em unit", () => {
      const unit = getUnit("10em")

      expect(unit).toEqual(Unit.em)
    })

    it("returns rem unit", () => {
      const unit = getUnit("10rem")

      expect(unit).toEqual(Unit.rem)
    })

    it("returns % unit", () => {
      const unit = getUnit("10%")

      expect(unit).toEqual(Unit.percent)
    })

    it("throw error when unit is not px, em, rem or %", () => {
      try {
        getUnit("10unknown")
      } catch (err) {
        expect(err.message).toContain("Unit can't be extracted from")
      }
    })
  })

  describe("getValue", () => {
    it("returns value for px", () => {
      const unit = getValue("10px")

      expect(unit).toEqual(10)
    })

    it("returns value for em", () => {
      const unit = getValue("10em")

      expect(unit).toEqual(10)
    })

    it("returns value for rem", () => {
      const unit = getValue("10rem")

      expect(unit).toEqual(10)
    })

    it("returns value for %", () => {
      const unit = getValue("10%")

      expect(unit).toEqual(10)
    })
  })

  describe("toPercent", () => {
    it("return percent value", () => {
      const percentValue = toPercent(3, 12)

      expect(percentValue).toEqual("25%")
    })

    it("return percent value without specified decimal", () => {
      const percentValue = toPercent(2, 12)

      expect(percentValue).toEqual("16.6666666666%")
    })

    it("return percent value with specified decimal", () => {
      const percentValue = toPercent(2, 12, 2)

      expect(percentValue).toEqual("16.66%")
    })
  })

  describe("pxToRem", () => {
    const baselinePxValue = "10px"

    it("return rem value", () => {
      const remValue = pxToRem("10px", baselinePxValue)

      expect(remValue).toEqual("1rem")
    })

    it("return rem value with specified decimal", () => {
      const remValue = pxToRem("1.123456789px", baselinePxValue, 10)

      expect(remValue).toEqual("0.1123456789rem")
    })
  })
})
