import { FunctionComponent, HTMLAttributes } from "react";
import { ButtonVariant } from "./Button/PaginationButton";
export declare type PaginationSize = "md" | "lg";
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    size?: PaginationSize;
    currentPage: number;
    pageCount: number;
    onPageChange?: (page: number) => void;
    variant?: ButtonVariant;
    hidePageNumber?: boolean;
}
declare const Pagination: FunctionComponent<IProps>;
export default Pagination;
