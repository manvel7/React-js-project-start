import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
export declare type CheckboxVariant = "default" | "dashed";
export interface IProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    label?: ReactNode;
    variant?: CheckboxVariant;
}
declare const Checkbox: FunctionComponent<IProps>;
export default Checkbox;
