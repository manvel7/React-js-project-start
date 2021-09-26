import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLInputElement> {
}
declare const HiddenCheckbox: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "checkbox";
} & IProps, "type">;
export default HiddenCheckbox;
