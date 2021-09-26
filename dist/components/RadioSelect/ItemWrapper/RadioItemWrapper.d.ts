import { LabelHTMLAttributes, ReactNode } from "react";
interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
    label?: ReactNode;
    checked?: boolean;
    error?: boolean;
    disabled?: boolean;
}
declare const RadioItemWrapper: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, IProps, never>;
export default RadioItemWrapper;
