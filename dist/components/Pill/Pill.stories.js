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
import Pill from "./Pill";
var meta = {
    title: "Components/Pill",
    component: Pill,
    argTypes: {
        onClick: { action: "onClick" }
    }
};
var PillStory = function (args) { return React.createElement(Pill, __assign({}, args), "Pill"); };
var Active = PillStory.bind({});
Active.args = {
    isActive: true
};
var NotActive = PillStory.bind({});
NotActive.args = {
    isActive: false
};
var Medium = PillStory.bind({});
Medium.args = {
    size: "md"
};
var Small = PillStory.bind({});
Small.args = {
    size: "sm"
};
export { Active, NotActive, Medium, Small };
export default meta;
