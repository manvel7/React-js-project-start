import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    label?: ReactNode;
}
declare const Accordion: FunctionComponent<IProps>;
export default Accordion;
