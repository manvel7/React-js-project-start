import { FunctionComponent, ReactNode } from "react";
import { IProps as IWrapperProps } from "./ItemWrapper/SidebarItemWrapper";
interface IProps extends IWrapperProps {
    icon: ReactNode;
    title?: string;
}
declare const SidebarItem: FunctionComponent<IProps>;
export default SidebarItem;
