import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    moreRight?: number;
    moreLeft?: number;
}
declare const ImageGalleryList: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IProps, never>;
export default ImageGalleryList;
