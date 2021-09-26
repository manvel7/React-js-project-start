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
import Checkbox from "./Checkbox";
var meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
        onChange: { action: "onChange" }
    }
};
var CheckboxStory = function (args) { return React.createElement(Checkbox, __assign({}, args)); };
var DefaultCheckbox = CheckboxStory.bind({});
DefaultCheckbox.args = {
    label: "Default checkbox"
};
var DefaultChecked = CheckboxStory.bind({});
DefaultChecked.args = {
    label: "Default checked",
    checked: true
};
var DashedChecked = CheckboxStory.bind({});
DashedChecked.args = {
    label: "Dashed checkbox",
    checked: true,
    variant: "dashed"
};
var DefaultDisabled = CheckboxStory.bind({});
DefaultDisabled.args = {
    label: "Disabled checkbox",
    disabled: true,
    checked: true
};
var DashedDisabled = CheckboxStory.bind({});
DashedDisabled.args = {
    label: "Disabled dashed checkbox",
    checked: true,
    variant: "dashed",
    disabled: true
};
export { DefaultCheckbox, DefaultChecked, DashedChecked, DefaultDisabled, DashedDisabled };
export default meta;
