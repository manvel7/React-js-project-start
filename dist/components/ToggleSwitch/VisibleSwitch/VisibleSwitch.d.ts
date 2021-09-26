import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    checked?: boolean;
    disabled?: boolean;
    hasLabel?: boolean;
    error?: boolean;
}
declare const VisibleSwitch: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default VisibleSwitch;
