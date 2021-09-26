import { HTMLAttributes } from "react";
export declare type JumbotronSize = "sm" | "lg";
export interface IProps extends HTMLAttributes<HTMLElement> {
    size?: JumbotronSize;
}
declare const Jumbotron: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default Jumbotron;
