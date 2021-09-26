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
import RadioItem from "./RadioItem";
import RadioSelect from "./RadioSelect";
var meta = {
    title: "Components/RadioSelect",
    component: RadioSelect,
    argTypes: {
        onValueChange: {
            action: "onValueChange"
        }
    }
};
var Default = function (args) { return (React.createElement(RadioSelect, __assign({}, args),
    React.createElement(RadioItem, { label: "First item", value: "first" }),
    React.createElement(RadioItem, { label: "Second item", value: "second" }),
    React.createElement(RadioItem, { label: "Third item", value: "third" }))); };
var WithoutLabels = function (args) { return (React.createElement(RadioSelect, __assign({}, args),
    React.createElement(RadioItem, { value: "first" }),
    React.createElement(RadioItem, { value: "second" }),
    React.createElement(RadioItem, { value: "third" }))); };
var WithAutoValues = function (args) { return (React.createElement(RadioSelect, __assign({}, args),
    React.createElement(RadioItem, { label: "First item" }),
    React.createElement(RadioItem, { label: "Second item" }),
    React.createElement(RadioItem, { label: "Third item" }))); };
var ErrorState = Default.bind({});
ErrorState.args = {
    error: true
};
var DisabledState = Default.bind({});
DisabledState.args = {
    disabled: true
};
export { Default, WithoutLabels, WithAutoValues, ErrorState, DisabledState };
export default meta;
