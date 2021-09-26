import { ButtonHTMLAttributes } from "react";
export declare type ButtonSize = "md" | "lg";
export declare type ButtonVariant = "normal" | "circle";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
}
declare const PaginationButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IProps, never>;
export default PaginationButton;
