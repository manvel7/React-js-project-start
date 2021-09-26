import { FunctionComponent, ComponentType, HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    ToggleIcon: ComponentType;
    activeAppName?: string;
}
declare const Sidebar: FunctionComponent<IProps>;
export default Sidebar;
