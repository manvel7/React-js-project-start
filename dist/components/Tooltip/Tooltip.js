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
import React, { Children, isValidElement, cloneElement, createElement } from "react";
import TooltipTrigger from "react-popper-tooltip";
import TooltipArrow from "./Arrow";
import TooltipContainer from "./Container";
var Tooltip = function (props) {
    var children = props.children, content = props.content, tooltipShown = props.tooltipShown, placement = props.placement, trigger = props.trigger, delayHide = props.delayHide, followCursor = props.followCursor, defaultTooltipShown = props.defaultTooltipShown;
    if (Children.count(children) > 1) {
        throw new Error("Tooltip children should contain only 1 element");
    }
    var reference = (Array.isArray(children) ? children[0] : children) || createElement("span");
    if (typeof reference === "string") {
        reference = createElement("span", {}, reference);
    }
    return (React.createElement(TooltipTrigger, { tooltipShown: tooltipShown, trigger: trigger, placement: placement, delayHide: delayHide, followCursor: followCursor, defaultTooltipShown: defaultTooltipShown, modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 10]
                }
            }
        ], tooltip: function (_a) {
            var arrowRef = _a.arrowRef, tooltipRef = _a.tooltipRef, getArrowProps = _a.getArrowProps, getTooltipProps = _a.getTooltipProps, placement = _a.placement;
            return (React.createElement(TooltipContainer, __assign({}, getTooltipProps({
                ref: tooltipRef
            })),
                React.createElement(TooltipArrow, __assign({}, getArrowProps({
                    ref: arrowRef,
                    "data-placement": placement
                }))),
                content));
        } }, function (_a) {
        var getTriggerProps = _a.getTriggerProps, triggerRef = _a.triggerRef;
        return cloneElement(isValidElement(reference) ? reference : createElement("span"), __assign({}, getTriggerProps({
            ref: triggerRef
        })));
    }));
};
Tooltip.defaultProps = {
    placement: "bottom",
    delayHide: 200
};
export default Tooltip;
