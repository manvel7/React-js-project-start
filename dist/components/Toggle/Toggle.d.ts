import { FunctionComponent, HTMLAttributes } from "react";
export declare type ToggleButtonSize = "sm" | "md";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    initialActive?: number;
    size?: ToggleButtonSize;
    onActiveChange?: (activeIndex: number) => void;
}
declare const Toggle: FunctionComponent<IProps>;
export default Toggle;
