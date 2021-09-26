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
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
var meta = {
    title: "Components/ToggleSwitch",
    component: ToggleSwitch
};
var ToggleSwitchStory = function (args) {
    var _a = useState(false), checked = _a[0], setChecked = _a[1];
    var onChange = function () {
        setChecked(function (prev) { return !prev; });
    };
    return (React.createElement(ToggleSwitch, __assign({}, args, { checked: checked, onChange: onChange, label: "Switch" })));
};
var Default = ToggleSwitchStory.bind({});
var Disabled = ToggleSwitchStory.bind({});
Disabled.args = {
    disabled: true
};
var ErrorState = ToggleSwitchStory.bind({});
ErrorState.args = {
    error: true
};
export { Default, Disabled, ErrorState };
export default meta;
