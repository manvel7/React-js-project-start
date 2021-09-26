type ColBreakpointName = "xs" | "sm" | "md" | "lg" | "xl"
type ScreenBreakpointName = ColBreakpointName | "xxl"

type ColBreakpoints = Record<ColBreakpointName, string>
type GridBreakpoints = Record<ScreenBreakpointName, string>
type ContainerMaxWidths = Partial<Record<ScreenBreakpointName, string>>

interface IGrid {
  columns: number
  gutterWidth: string
  breakpoints: GridBreakpoints
  containerMaxWidths: ContainerMaxWidths
}

export {
  ColBreakpointName,
  ColBreakpoints,
  ScreenBreakpointName,
  ContainerMaxWidths,
  GridBreakpoints,
  IGrid
}
