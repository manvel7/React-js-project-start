import { LiHTMLAttributes } from "react";
export interface IProps extends LiHTMLAttributes<HTMLLIElement> {
    isActive?: boolean;
}
declare const ListItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, IProps, never>;
export default ListItem;
