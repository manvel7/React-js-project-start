import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
declare const AccordionLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default AccordionLabel;
