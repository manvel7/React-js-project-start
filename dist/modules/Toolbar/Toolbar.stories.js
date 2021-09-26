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
import { Dropdown, DropdownMenuItem } from "../../components/Dropdown";
import Toolbar from "./Toolbar";
var meta = {
    title: "Modules/Toolbar",
    component: Toolbar
};
var ToolbarStory = function (args) { return (React.createElement(Toolbar, __assign({}, args),
    React.createElement(Dropdown, { size: "sm", title: "Share" },
        React.createElement(DropdownMenuItem, null, "Item 1"),
        React.createElement(DropdownMenuItem, null, "Item 2")),
    React.createElement(Dropdown, { size: "sm", title: "Export" },
        React.createElement(DropdownMenuItem, null, "Item 1"),
        React.createElement(DropdownMenuItem, null, "Item 2")))); };
var Default = ToolbarStory.bind({});
export { Default };
export default meta;
