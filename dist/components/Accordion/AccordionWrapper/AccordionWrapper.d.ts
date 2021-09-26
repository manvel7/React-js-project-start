import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
declare const AccordionWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default AccordionWrapper;
