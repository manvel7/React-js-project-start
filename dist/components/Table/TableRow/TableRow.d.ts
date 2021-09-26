import { HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLTableRowElement> {
    disabled?: boolean;
}
declare const TableRow: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, IProps, never>;
export default TableRow;
