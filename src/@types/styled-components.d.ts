import {ThemedStyledProps} from "styled-components"
import {IPalette} from "../interfaces/color"
import {IGrid} from "../interfaces/grid"
import {ISpacing} from "../interfaces/spacing"
import {ITypography} from "../interfaces/typography"

declare module "styled-components" {
  export interface DefaultTheme {
    palette: IPalette
    typography: ITypography
    grid: IGrid
    spacing: ISpacing
  }

  export type StyledProps<P> = ThemedStyledProps<P, DefaultTheme>
}
