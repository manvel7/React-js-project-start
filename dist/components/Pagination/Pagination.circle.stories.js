var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import Pagination from "./Pagination";
var meta = {
    title: "Components/Pagination/Circle",
    component: Pagination,
    argTypes: {}
};
var PaginationStory = function (args) {
    var currentPage = args.currentPage, rest = __rest(args, ["currentPage"]);
    var _a = useState(currentPage), page = _a[0], setPage = _a[1];
    var onChange = function (page) {
        setPage(page);
    };
    return (React.createElement(Pagination, __assign({}, rest, { variant: "circle", currentPage: page, onPageChange: onChange })));
};
var Medium = PaginationStory.bind({});
Medium.args = {
    pageCount: 7,
    currentPage: 1
};
var Large = PaginationStory.bind({});
Large.args = {
    size: "lg",
    pageCount: 3,
    currentPage: 1
};
var WithoutNumbers = PaginationStory.bind({});
WithoutNumbers.args = {
    pageCount: 3,
    currentPage: 1,
    hidePageNumber: true
};
export { Medium, Large, WithoutNumbers };
export default meta;
