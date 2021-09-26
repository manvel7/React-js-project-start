import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    checked?: boolean;
}
declare const VisibleCheckbox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default VisibleCheckbox;
