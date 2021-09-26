import { FunctionComponent, HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    onValueChange?: (value: string) => void;
    error?: boolean;
    disabled?: boolean;
}
declare const RadioSelect: FunctionComponent<IProps>;
export default RadioSelect;
