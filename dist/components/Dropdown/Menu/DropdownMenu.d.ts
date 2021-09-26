import { HTMLAttributes } from "react";
import { DisplayType } from "../Dropdown";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    isOpened: boolean;
    displayValue: DisplayType;
}
declare const DropdownMenu: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default DropdownMenu;
