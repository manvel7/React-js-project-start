import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { TooltipTriggerProps } from "react-popper-tooltip";
export interface IProps extends HTMLAttributes<HTMLDivElement>, Partial<Omit<TooltipTriggerProps, "children" | "onVisibilityChange" | "tooltip">> {
    content: ReactNode;
}
declare const Tooltip: FunctionComponent<IProps>;
export default Tooltip;
