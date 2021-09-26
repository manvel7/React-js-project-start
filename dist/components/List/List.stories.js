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
import List from "./List";
import ListItem from "./ListItem";
var meta = {
    title: "Components/List",
    component: List,
    argTypes: {}
};
var ListStory = function (args) { return (React.createElement(List, __assign({}, args),
    React.createElement(ListItem, null, "item 1"),
    React.createElement(ListItem, { isActive: true }, "item 2"),
    React.createElement(ListItem, null, "item 3"))); };
var Regular = ListStory.bind({});
export { Regular };
export default meta;
