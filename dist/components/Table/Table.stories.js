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
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
var meta = {
    title: "Components/Table",
    component: Table,
    argTypes: {}
};
var TableStory = function (args) { return (React.createElement(Table, __assign({}, args),
    React.createElement(TableHead, null,
        React.createElement(TableRow, null,
            React.createElement(TableHeadCell, null, "Species"),
            React.createElement(TableHeadCell, null, "Log (m3/ha)"),
            React.createElement(TableHeadCell, null, "Average height (m)"),
            React.createElement(TableHeadCell, null, "Average diameter (cm)"))),
    React.createElement(TableBody, null,
        React.createElement(TableRow, null,
            React.createElement(TableCell, null, "Spruce"),
            React.createElement(TableCell, null, "290"),
            React.createElement(TableCell, null, "29"),
            React.createElement(TableCell, null, "234")),
        React.createElement(TableRow, null,
            React.createElement(TableCell, null, "Dedicious"),
            React.createElement(TableCell, null, "329"),
            React.createElement(TableCell, null, "32"),
            React.createElement(TableCell, null, "329")),
        React.createElement(TableRow, { disabled: true },
            React.createElement(TableCell, null, "Spruce"),
            React.createElement(TableCell, null, "290"),
            React.createElement(TableCell, null, "29"),
            React.createElement(TableCell, null, "234"))))); };
var Regular = TableStory.bind({});
Regular.args = {};
var Striped = TableStory.bind({});
Striped.args = {
    striped: true
};
export { Regular, Striped };
export default meta;
