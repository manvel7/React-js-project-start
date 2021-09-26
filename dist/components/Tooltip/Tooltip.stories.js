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
import Pill from "../Pill";
import Tooltip from "./Tooltip";
var meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    argTypes: {
        placement: {
            control: {
                type: "select",
                options: ["top", "bottom", "left", "right"]
            }
        },
        trigger: {
            control: {
                type: "select",
                options: ["click", "hover", "none"]
            }
        },
        tooltipShown: {
            control: {
                type: "boolean"
            }
        },
        followCursor: {
            control: {
                type: "boolean"
            }
        }
    }
};
var TooltipStory = function (args) { return React.createElement(Tooltip, __assign({}, args)); };
var TextReference = TooltipStory.bind({});
TextReference.args = {
    children: "Text reference",
    content: "tooltip"
};
var Manual = TooltipStory.bind({});
Manual.args = {
    children: React.createElement(Pill, null, "Manual state"),
    content: "tooltip",
    trigger: "none",
    tooltipShown: true
};
var Placement = TooltipStory.bind({});
Placement.args = {
    children: React.createElement(Pill, null, "Right placement"),
    content: "tooltip",
    placement: "right"
};
export { TextReference, Manual, Placement };
export default meta;
