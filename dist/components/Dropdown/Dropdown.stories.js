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
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownMenuItem";
var meta = {
    title: "Components/Dropdown",
    component: Dropdown
};
var DropdownStory = function (args) { return (React.createElement(Dropdown, __assign({}, args),
    React.createElement(DropdownItem, null, "Item 1"),
    React.createElement(DropdownItem, null, "Item 2"))); };
var Medium = DropdownStory.bind({});
Medium.args = {
    size: "md",
    title: "Action"
};
var Small = DropdownStory.bind({});
Small.args = {
    size: "sm",
    title: "Action"
};
export { Medium, Small };
export default meta;
