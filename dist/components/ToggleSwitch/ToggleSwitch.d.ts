import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
export interface IProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    label?: ReactNode;
}
declare const ToggleSwitch: FunctionComponent<IProps>;
export default ToggleSwitch;
