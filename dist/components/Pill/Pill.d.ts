import { ButtonHTMLAttributes } from "react";
export declare type PillSize = "sm" | "md";
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: PillSize;
    isActive?: boolean;
}
declare const Pill: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IProps, never>;
export default Pill;
