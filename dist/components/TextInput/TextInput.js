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
import Input from "./Input";
import Label from "./Label";
var TextInput = function (props) {
    var displaySize = props.displaySize, label = props.label, disabled = props.disabled, placeholder = props.placeholder, className = props.className, id = props.id, value = props.value, onChange = props.onChange, rest = __rest(props, ["displaySize", "label", "disabled", "placeholder", "className", "id", "value", "onChange"]);
    var disabledValue = disabled || false;
    return (React.createElement("div", __assign({ className: className }, rest),
        React.createElement(Label, { displaySize: displaySize, disabled: disabledValue, htmlFor: id }, label),
        React.createElement(Input, __assign({ id: id, name: id, displaySize: displaySize, disabled: disabledValue, placeholder: placeholder, value: value, onChange: onChange }, rest))));
};
export default TextInput;
