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
import Toggle from "./Toggle";
var meta = {
    title: "Components/Toggle",
    component: Toggle,
    argTypes: {}
};
var ToggleStory = function (args) {
    var onActiveChange = function (activeIndex) {
        console.log("new active index: " + activeIndex);
    };
    return (React.createElement(Toggle, __assign({}, args, { onActiveChange: onActiveChange }),
        React.createElement(Button, null, "first"),
        React.createElement(Button, null, "second"),
        React.createElement(Button, null, "third")));
};
var Regular = ToggleStory.bind({});
var Small = ToggleStory.bind({});
Small.args = {
    size: "sm"
};
var ToggleInitialActiveStory = function (args) {
    return (React.createElement(Toggle, __assign({}, args, { initialActive: 2 }),
        React.createElement(Button, null, "first"),
        React.createElement(Button, null, "second"),
        React.createElement(Button, null, "third active")));
};
var initialActive = ToggleInitialActiveStory.bind({});
export { Regular, Small, initialActive };
export default meta;
