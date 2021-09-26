import { FunctionComponent, HTMLAttributes, MouseEventHandler } from "react";
import { ButtonSize } from "../Button/Button";
export declare type DisplayType = "block" | "none";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    size?: ButtonSize;
    title: string;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
    onToggleClick?: () => void;
}
declare const Dropdown: FunctionComponent<IProps>;
export default Dropdown;
