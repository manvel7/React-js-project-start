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
import Navbar from "./Navbar";
import { NavTitle, Nav, NavItem } from "./index";
var meta = {
    title: "Modules/Navbar",
    component: Navbar
};
var NavbarStory = function (args) { return (React.createElement(Navbar, __assign({}, args),
    React.createElement(NavTitle, null, "NavbarStory"),
    React.createElement(Nav, null,
        React.createElement(NavItem, null, "Active"),
        React.createElement(NavItem, { isActive: false }, "Not Active")))); };
var Default = NavbarStory.bind({});
export { Default };
export default meta;
