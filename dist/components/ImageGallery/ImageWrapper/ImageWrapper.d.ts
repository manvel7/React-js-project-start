import { HTMLAttributes } from "react";
import { DefaultTheme, StyledComponent } from "styled-components";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
declare const ImageWrapper: StyledComponent<"div", DefaultTheme, IProps>;
export default ImageWrapper;
