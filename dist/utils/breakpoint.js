import _ from "lodash";
import { getUnit, getValue } from "./unit";
var breakpointNext = function (breakpointName, breakpoints) {
    var breakpointNames = Object.keys(breakpoints);
    var idx = breakpointNames.indexOf(breakpointName);
    if (idx !== -1 && idx + 1 < breakpointNames.length) {
        return breakpointNames[idx + 1];
    }
    return null;
};
var breakpointMin = function (breakpointName, breakpoints) {
    var min = getValue(breakpoints[breakpointName]);
    if (min !== 0) {
        return breakpoints[breakpointName];
    }
    return "";
};
var breakpointMax = function (breakpointName, breakpoints) {
    var next = breakpointNext(breakpointName, breakpoints);
    if (!_.isNil(next)) {
        var min = breakpointMin(next, breakpoints);
        if (!_.isEmpty(min)) {
            var value = getValue(min);
            var unit = getUnit(min);
            return "" + (value - 1) + unit;
        }
    }
    return "";
};
var mediaBreakpointUp = function (breakpointName, breakpoints, styles) {
    var min = breakpointMin(breakpointName, breakpoints);
    if (!_.isEmpty(min)) {
        return "\n      @media (min-width: " + min + ") {\n        " + styles + "\n      }\n    ";
    }
    return styles;
};
var mediaBreakpointDown = function (breakpointName, breakpoints, styles) {
    var max = breakpointMax(breakpointName, breakpoints);
    if (!_.isEmpty(max)) {
        return "\n      @media (max-width: " + max + ") {\n        " + styles + "\n      }\n    ";
    }
    return styles;
};
var mediaBreakpointBetween = function (lowerBreakpointName, upperBreakpointName, breakpoints, styles) {
    var min = breakpointMin(lowerBreakpointName, breakpoints);
    var max = breakpointMax(upperBreakpointName, breakpoints);
    if (!_.isEmpty(min) && !_.isEmpty(max)) {
        return "\n      @media (min-width: " + min + ") and (max-width: " + max + ") {\n        " + styles + "\n      }\n    ";
    }
    if (!_.isEmpty(min)) {
        return "\n      @media (min-width: " + min + ") {\n        " + styles + "\n      }\n    ";
    }
    if (!_.isEmpty(max)) {
        return "\n      @media (max-width: " + max + ") {\n        " + styles + "\n      }\n    ";
    }
    return styles;
};
var mediaBreakpointOnly = function (breakpointName, breakpoints, styles) {
    return mediaBreakpointBetween(breakpointName, breakpointName, breakpoints, styles);
};
export { mediaBreakpointUp, mediaBreakpointDown, mediaBreakpointBetween, mediaBreakpointOnly };
