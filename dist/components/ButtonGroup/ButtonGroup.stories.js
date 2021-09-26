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
import Button from "../Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
var meta = {
    title: "Components/ButtonGroup",
    component: ButtonGroup,
    argTypes: {}
};
var ButtonGroupStory = function (args) { return (React.createElement(ButtonGroup, __assign({}, args),
    React.createElement(Button, { size: "sm" }, "First"),
    React.createElement(Button, { size: "sm" }, "Second"),
    React.createElement(Button, { size: "sm" }, "Third"))); };
var Regular = ButtonGroupStory.bind({});
export { Regular };
export default meta;
