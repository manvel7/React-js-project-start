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
import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionLabel from "./AccordionLabel";
import AccordionWrapper from "./AccordionWrapper";
var Accordion = function (props) {
    var label = props.label, children = props.children, rest = __rest(props, ["label", "children"]);
    var _a = useState(props.isActive), isActive = _a[0], setIsActive = _a[1];
    return (React.createElement(AccordionWrapper, __assign({ isActive: isActive }, rest),
        React.createElement(AccordionLabel, { isActive: isActive, onClick: function () { return setIsActive(!isActive); } }, label),
        React.createElement(AccordionContent, { isActive: isActive }, children)));
};
export default Accordion;
