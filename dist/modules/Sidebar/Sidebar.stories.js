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
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Scout } from "../../assets/icons/scout.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import Sidebar from "./Sidebar";
import { SidebarDivider, SidebarItem } from "./index";
var meta = {
    title: "Modules/Sidebar",
    component: Sidebar
};
var SidebarStory = function (args) { return (React.createElement(Sidebar, __assign({}, args, { ToggleIcon: Burger }),
    React.createElement(SidebarItem, { icon: React.createElement(Logo, null), title: "Logo", displayPosition: "top" }),
    React.createElement(SidebarItem, { icon: React.createElement(Scout, null), title: "Scout" }),
    React.createElement(SidebarDivider, null),
    React.createElement(SidebarItem, { icon: React.createElement(Scout, null), title: "Scout" }),
    React.createElement(SidebarItem, { icon: React.createElement(Scout, null), title: "Scout (auto)", displayPosition: "auto" }),
    React.createElement(SidebarItem, { icon: React.createElement(User, null), title: "Profile", displayPosition: "bottom" }))); };
var Default = SidebarStory.bind({});
export { Default };
export default meta;
