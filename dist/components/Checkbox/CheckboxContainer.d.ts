import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLElement> {
    disabled?: boolean;
}
declare const CheckboxContainer: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, IProps, never>;
export default CheckboxContainer;
