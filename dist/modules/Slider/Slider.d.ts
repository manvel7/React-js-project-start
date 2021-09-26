import { FunctionComponent, HTMLAttributes, ReactElement } from "react";
interface IProps extends HTMLAttributes<HTMLDivElement> {
    slides: ReactElement[];
}
declare const Slider: FunctionComponent<IProps>;
export default Slider;
