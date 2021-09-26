import { InputHTMLAttributes } from "react";
import { TextInputSize } from "../TextInput";
export interface IProps extends InputHTMLAttributes<HTMLLabelElement> {
    displaySize?: TextInputSize;
    disabled: boolean;
}
declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, IProps, never>;
export default Label;
