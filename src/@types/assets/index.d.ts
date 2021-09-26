declare module "*.svg" {
  import {FunctionComponent, SVGProps} from "react"

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>

  export const SvgMock: FunctionComponent

  const source: string
  export default source
}
