import { ButtonHTMLAttributes } from "react";
import { AlertVariant } from "./AlertStyledComponent";
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: AlertVariant;
}
declare const CloseButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IProps, never>;
export default CloseButton;
