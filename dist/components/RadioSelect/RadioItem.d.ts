import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    checked?: boolean;
    error?: boolean;
    disabled?: boolean;
}
declare const RadioItem: FunctionComponent<IProps>;
export default RadioItem;
