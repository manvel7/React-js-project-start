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
import HiddenInput from "./HiddenInput/HiddenInput";
import RadioItemWrapper from "./ItemWrapper";
var RadioItem = function (props) {
    var label = props.label, checked = props.checked, disabled = props.disabled, error = props.error;
    return (React.createElement(RadioItemWrapper, { label: label, checked: checked, error: error, disabled: disabled },
        React.createElement(HiddenInput, __assign({}, props, { disabled: disabled })),
        React.createElement("div", { className: "radio-select__item" }),
        label && React.createElement("span", null, label)));
};
export default RadioItem;
