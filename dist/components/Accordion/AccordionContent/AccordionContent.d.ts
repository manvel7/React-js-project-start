import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
declare const AccordionContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default AccordionContent;
