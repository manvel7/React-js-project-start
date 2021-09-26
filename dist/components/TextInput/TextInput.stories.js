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
import TextInput from "./TextInput";
var meta = {
    title: "Components/TextInput",
    component: TextInput,
    argTypes: {}
};
var TextInputStory = function (args) { return React.createElement(TextInput, __assign({}, args)); };
var Default = TextInputStory.bind({});
Default.args = {
    label: "Input Label",
    placeholder: "Placeholder",
    id: "test-1"
};
var Disabled = TextInputStory.bind({});
Disabled.args = {
    label: "Input Label",
    placeholder: "Placeholder",
    id: "test-2",
    disabled: true
};
var Large = TextInputStory.bind({});
Large.args = {
    label: "Input Label",
    placeholder: "Placeholder",
    displaySize: "lg",
    id: "test-3",
    value: "Input Value"
};
var Small = TextInputStory.bind({});
Small.args = {
    label: "Input Label",
    placeholder: "Placeholder",
    id: "test-4",
    displaySize: "sm"
};
var ExtraSmall = TextInputStory.bind({});
ExtraSmall.args = {
    label: "Input Label",
    placeholder: "Placeholder",
    id: "test-5",
    displaySize: "xs"
};
export { Default, Disabled, Large, Small, ExtraSmall };
export default meta;
