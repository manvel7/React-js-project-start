import { FunctionComponent } from "react";
import { IProps as IDropdownProps } from "../Dropdown";
interface IProps extends IDropdownProps {
    isOpened: boolean;
    onToggleOpen: () => void;
}
declare const DropdownButton: FunctionComponent<IProps>;
export default DropdownButton;
