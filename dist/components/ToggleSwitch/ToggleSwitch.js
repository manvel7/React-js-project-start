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
import ToggleSwitchContainer from "./Container";
import HiddenCheckbox from "./HiddenCheckbox";
import VisibleSwitch from "./VisibleSwitch";
var ToggleSwitch = function (props) {
    var checked = props.checked, disabled = props.disabled, label = props.label, error = props.error;
    return (React.createElement(ToggleSwitchContainer, null,
        React.createElement(HiddenCheckbox, __assign({}, props)),
        React.createElement(VisibleSwitch, { checked: checked, disabled: disabled, error: error, hasLabel: !!label },
            React.createElement("div", { className: "toggle-switch__dot" })),
        label));
};
export default ToggleSwitch;
