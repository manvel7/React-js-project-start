import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    hideOnXsScreen?: boolean;
}
declare const Navbar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default Navbar;
