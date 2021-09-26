import { InputHTMLAttributes } from "react";
import { TextInputSize } from "../TextInput";
export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    displaySize?: TextInputSize;
    disabled: boolean;
}
declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, IProps, never>;
export default Input;
