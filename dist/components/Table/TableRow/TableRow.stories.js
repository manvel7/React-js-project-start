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
import React from "react";
import Table from "../index";
import TableBody from "../TableBody";
import TableCell from "../TableCell/index";
import TableRow from "./TableRow";
var meta = {
    title: "Components/Table/Row",
    component: TableRow,
    argTypes: {}
};
var TableRowStory = function (args) { return (React.createElement(Table, null,
    React.createElement(TableBody, null,
        React.createElement(TableRow, __assign({}, args),
            React.createElement(TableCell, null, "Spruce"),
            React.createElement(TableCell, null, "290"),
            React.createElement(TableCell, null, "29"),
            React.createElement(TableCell, null, "234"))))); };
var Regular = TableRowStory.bind({});
Regular.args = {};
var Disabled = TableRowStory.bind({});
Disabled.args = {
    disabled: true
};
export { Regular, Disabled };
export default meta;
