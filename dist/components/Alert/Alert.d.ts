import { FunctionComponent, HTMLAttributes } from "react";
import { AlertVariant } from "./AlertStyledComponent";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    isDismissible?: boolean;
    variant?: AlertVariant;
    onClose?: () => void;
}
declare const Alert: FunctionComponent<IProps>;
export default Alert;
