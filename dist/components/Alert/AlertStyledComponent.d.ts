import { HTMLAttributes } from "react";
export declare type AlertVariant = "primary" | "info" | "success" | "warning" | "error";
export interface IProps extends HTMLAttributes<HTMLElement> {
    isDismissible?: boolean;
    variant?: AlertVariant;
}
declare const AlertStyledComponent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default AlertStyledComponent;
