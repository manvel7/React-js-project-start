import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
declare const SliderItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default SliderItem;
