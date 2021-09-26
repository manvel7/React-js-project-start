import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
export declare type TextInputSize = "xs" | "sm" | "md" | "lg";
export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    displaySize?: TextInputSize;
    label?: ReactNode;
    disabled?: boolean;
    placeholder?: string;
    id: string;
}
declare const TextInput: FunctionComponent<IProps>;
export default TextInput;
