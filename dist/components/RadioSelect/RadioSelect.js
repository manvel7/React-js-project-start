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
import React, { Children, cloneElement, useState } from "react";
import RadioItem from "./RadioItem";
import RadioSelectWrapper from "./Wrapper";
var RadioSelect = function (props) {
    var children = props.children, disabled = props.disabled, onValueChange = props.onValueChange, error = props.error, rest = __rest(props, ["children", "disabled", "onValueChange", "error"]);
    var _a = useState(), value = _a[0], setValue = _a[1];
    var items = Children.map(children, function (item, index) {
        if (typeof item !== "object" || item.type !== RadioItem) {
            throw new TypeError("RadioSelect children should only contain RadioItem elements");
        }
        var itemValue = item.props.value;
        return cloneElement(item, {
            onChange: function (event) {
                var target = event.target;
                setValue(target.value);
                if (onValueChange) {
                    onValueChange(target.value);
                }
            },
            checked: (itemValue || index.toString()) === value,
            value: itemValue || index.toString(),
            error: error,
            disabled: disabled
        });
    });
    return React.createElement(RadioSelectWrapper, __assign({}, rest), items);
};
export default RadioSelect;
