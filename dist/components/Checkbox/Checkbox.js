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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { faCheckSquare, faMinusSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckboxContainer from "./CheckboxContainer";
import HiddenCheckbox from "./HiddenCheckbox";
import VisibleCheckbox from "./VisibleCheckbox";
var Checkbox = function (props) {
    var checked = props.checked, label = props.label, disabled = props.disabled, variant = props.variant, className = props.className, rest = __rest(props, ["checked", "label", "disabled", "variant", "className"]);
    return (React.createElement(CheckboxContainer, { disabled: disabled, className: className },
        React.createElement(HiddenCheckbox, __assign({ checked: checked, disabled: disabled }, rest)),
        React.createElement(VisibleCheckbox, { checked: checked, disabled: disabled },
            React.createElement(FontAwesomeIcon, { icon: variant === "dashed" ? faMinusSquare : faCheckSquare })),
        label));
};
Checkbox.defaultProps = {
    onChange: function () { return undefined; }
};
export default Checkbox;
