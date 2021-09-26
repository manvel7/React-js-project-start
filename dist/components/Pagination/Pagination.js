import React, { useMemo } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import _ from "lodash";
import Button from "../Button";
import PaginationButton from "./Button";
import PaginationWrapper from "./PaginationWrapper";
var HALF_RANGE = 2;
var FIRST_PAGES_COUNT = 5;
var LAST_PAGES_OFFSET = 4;
var ELLIPSIS_OFFSET = 4;
var FIRST_LAST_PAGE_OFFSET = 3;
var ELLIPSIS_SKIP = 5;
var FIRST_LAST_PAGE_VISIBLE = 5;
var Pagination = function (props) {
    var currentPage = props.currentPage, pageCount = props.pageCount, onPageChange = props.onPageChange, size = props.size, variant = props.variant, hidePageNumber = props.hidePageNumber;
    var onPreviousClick = function () {
        if (onPageChange) {
            onPageChange(currentPage - 1);
        }
    };
    var onNextClick = function () {
        if (onPageChange) {
            onPageChange(currentPage + 1);
        }
    };
    var setPage = function (page) { return function () {
        if (onPageChange) {
            if (page < 1) {
                onPageChange(1);
            }
            else if (page > pageCount) {
                onPageChange(pageCount);
            }
            else {
                onPageChange(page);
            }
        }
    }; };
    var pages = useMemo(function () {
        if (currentPage <= HALF_RANGE) {
            return _.range(1, _.min([FIRST_PAGES_COUNT + 1, pageCount + 1]));
        }
        if (currentPage > pageCount - HALF_RANGE) {
            return _.range(_.max([1, pageCount - LAST_PAGES_OFFSET]) || 1, pageCount + 1);
        }
        return _.range(currentPage - HALF_RANGE, currentPage + HALF_RANGE + 1);
    }, [currentPage, pageCount]);
    return (React.createElement(PaginationWrapper, null,
        React.createElement(Button, { className: clsx({ hidden: currentPage === 1 }), onClick: onPreviousClick, variant: "text", size: size },
            React.createElement(FontAwesomeIcon, { icon: faAngleLeft, style: { marginRight: "0.8rem" } }),
            "Previous"),
        pageCount > FIRST_LAST_PAGE_VISIBLE && (React.createElement(React.Fragment, null,
            currentPage > FIRST_LAST_PAGE_OFFSET && (React.createElement(PaginationButton, { onClick: setPage(1), size: size, variant: variant }, "1")),
            currentPage > ELLIPSIS_OFFSET && (React.createElement(PaginationButton, { onClick: setPage(currentPage - ELLIPSIS_SKIP), size: size, variant: variant }, "\u2026")))),
        pages.map(function (page) { return (React.createElement(PaginationButton, { key: page, isActive: page === currentPage, disabled: page === currentPage, onClick: setPage(page), size: size, variant: variant }, !hidePageNumber && page)); }),
        pageCount > FIRST_LAST_PAGE_VISIBLE && (React.createElement(React.Fragment, null,
            currentPage <= pageCount - ELLIPSIS_OFFSET && (React.createElement(PaginationButton, { onClick: setPage(currentPage + ELLIPSIS_SKIP), size: size, variant: variant }, "\u2026")),
            currentPage <= pageCount - FIRST_LAST_PAGE_OFFSET && (React.createElement(PaginationButton, { onClick: setPage(pageCount), size: size, variant: variant }, pageCount)))),
        React.createElement(Button, { className: clsx({ hidden: currentPage === pageCount }), onClick: onNextClick, variant: "text", size: size },
            "Next",
            React.createElement(FontAwesomeIcon, { icon: faAngleRight, style: { marginLeft: "0.8rem" } }))));
};
Pagination.defaultProps = {
    size: "md",
    variant: "normal",
    hidePageNumber: false
};
export default Pagination;
