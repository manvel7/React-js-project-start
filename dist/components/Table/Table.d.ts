import { TableHTMLAttributes } from "react";
export interface IProps extends TableHTMLAttributes<HTMLTableElement> {
    striped?: boolean;
}
declare const Table: import("styled-components").StyledComponent<"table", import("styled-components").DefaultTheme, IProps, never>;
export default Table;
