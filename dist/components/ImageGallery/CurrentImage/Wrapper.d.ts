import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    containerHeight: number;
}
declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default Wrapper;
