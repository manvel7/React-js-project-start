import { HTMLAttributes } from "react";
declare type DisplayPosition = "top" | "bottom" | "auto";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    displayPosition?: DisplayPosition;
}
declare const SidebarItemWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default SidebarItemWrapper;
