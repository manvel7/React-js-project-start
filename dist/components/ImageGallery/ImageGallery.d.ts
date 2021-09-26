import { FunctionComponent, HTMLAttributes } from "react";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    images: string[];
    containerHeight?: number;
    containerWidth?: number;
}
declare const ImageGallery: FunctionComponent<IProps>;
export default ImageGallery;
