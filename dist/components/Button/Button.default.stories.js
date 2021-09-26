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
import Button from "./Button";
var meta = {
    title: "Components/Button/Default",
    component: Button,
    argTypes: {
        onClick: { action: "onClick" }
    }
};
var ButtonStory = function (args) { return React.createElement(Button, __assign({}, args), "Button"); };
var Large = ButtonStory.bind({});
Large.args = {
    size: "lg",
    variant: "default"
};
var LargeDisabled = ButtonStory.bind({});
LargeDisabled.args = {
    size: "lg",
    variant: "default",
    isDisabled: true
};
var Medium = ButtonStory.bind({});
Medium.args = {
    size: "md",
    variant: "default"
};
var MediumDisabled = ButtonStory.bind({});
MediumDisabled.args = {
    size: "md",
    variant: "default",
    isDisabled: true
};
var Small = ButtonStory.bind({});
Small.args = {
    size: "sm",
    variant: "default"
};
var SmallDisabled = ButtonStory.bind({});
SmallDisabled.args = {
    size: "sm",
    variant: "default",
    isDisabled: true
};
var Info = ButtonStory.bind({});
Info.args = {
    state: "info"
};
var Success = ButtonStory.bind({});
Success.args = {
    state: "success"
};
var Warn = ButtonStory.bind({});
Warn.args = {
    state: "warn"
};
var Error = ButtonStory.bind({});
Error.args = {
    state: "error"
};
export { Large, LargeDisabled, Medium, MediumDisabled, Small, SmallDisabled, Info, Success, Warn, Error };
export default meta;
