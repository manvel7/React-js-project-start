import { FunctionComponent, HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    containerHeight: number;
    onClickPrev: () => void;
    onClickNext: () => void;
}
declare const CurrentImage: FunctionComponent<IProps>;
export default CurrentImage;
