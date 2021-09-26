import { ButtonHTMLAttributes } from "react";
export declare type ButtonSize = "sm" | "md" | "lg";
export declare type ButtonVariant = "default" | "outlined" | "text";
export declare type ButtonState = "info" | "warn" | "success" | "error";
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isDisabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    state?: ButtonState;
}
declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IProps, never>;
export default Button;
