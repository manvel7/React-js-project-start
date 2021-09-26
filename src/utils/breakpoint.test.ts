import {GridBreakpoints} from "../interfaces/grid"
import {
  mediaBreakpointBetween,
  mediaBreakpointDown,
  mediaBreakpointOnly,
  mediaBreakpointUp
} from "./breakpoint"

describe("utils / breakpoint", () => {
  const breakpoints: GridBreakpoints = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1456px"
  }

  describe("mediaBreakpointUp", () => {
    it("should match snapshot", () => {
      const mediaUpStyles = mediaBreakpointUp(
        "sm",
        breakpoints,
        "color: black;"
      )

      expect(mediaUpStyles).toMatchSnapshot()
    })
  })

  describe("mediaBreakpointDown", () => {
    it("should match snapshot", () => {
      const mediaDownStyles = mediaBreakpointDown(
        "md",
        breakpoints,
        "color: black;"
      )

      expect(mediaDownStyles).toMatchSnapshot()
    })
  })

  describe("mediaBreakpointBetween", () => {
    it("should match snapshot", () => {
      const mediaBetweenStyles = mediaBreakpointBetween(
        "sm",
        "lg",
        breakpoints,
        "color: black;"
      )

      expect(mediaBetweenStyles).toMatchSnapshot()
    })
  })

  describe("mediaBreakpointOnly", () => {
    it("should match snapshot", () => {
      const mediaOnlyStyles = mediaBreakpointOnly(
        "md",
        breakpoints,
        "color: black;"
      )

      expect(mediaOnlyStyles).toMatchSnapshot()
    })
  })
})
