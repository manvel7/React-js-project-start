var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import clsx from "clsx";
import _ from "lodash";
import styled, { css } from "styled-components";
import { mediaBreakpointUp } from "../../utils/breakpoint";
import { pxToRem, toPercent } from "../../utils/unit";
var colBreakpoints = ["xs", "sm", "md", "lg", "xl"];
var widthMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    var _a = props.theme.grid, breakpoints = _a.breakpoints, columns = _a.columns;
    return colBreakpoints
        .map(function (breakpoint) {
        var colConfig = props[breakpoint];
        if (!_.isNil(colConfig)) {
            var size = colConfig.size, order = colConfig.order, offset = colConfig.offset;
            var breakpointStyles = [];
            // Column size
            switch (true) {
                case size === "auto":
                    breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "flex: 0 0 auto;\n                  width: auto;\n                  max-width: none;"));
                    break;
                case _.isNumber(size):
                    breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "flex: 0 0 " + toPercent(size, columns) + ";\n                  max-width: " + toPercent(size, columns) + ";"));
                    break;
                default:
                    breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "flex-basis: 0;\n                  flex-grow: 1;\n                  max-width: 100%;"));
            }
            // Column order
            switch (true) {
                case order === "first":
                    breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "order: -1;"));
                    break;
                case order === "last":
                    breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "order: 13;"));
                    break;
                case _.isNumber(order):
                    breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "order: " + order + ";"));
                    break;
                default:
            }
            // Column offset
            if (!_.isNil(offset) && _.isNumber(offset)) {
                breakpointStyles.push(mediaBreakpointUp(breakpoint, breakpoints, "margin-left: " + toPercent(offset, columns) + ";"));
            }
            return breakpointStyles.join("\n");
        }
        return mediaBreakpointUp(breakpoint, breakpoints, "flex-basis: 0;\n          flex-grow: 1;\n          max-width: 100%;");
    })
        .join("\n");
});
var Col = styled.div.attrs(function (props) {
    var _a;
    var className = props.className, xs = props.xs, sm = props.sm, md = props.md, lg = props.lg, xl = props.xl;
    return {
        className: clsx(className, (_a = {
                col: true
            },
            // xs
            _a["col-" + (xs === null || xs === void 0 ? void 0 : xs.size)] = !_.isNil(xs === null || xs === void 0 ? void 0 : xs.size) && (xs === null || xs === void 0 ? void 0 : xs.size) !== true,
            _a["order-xs-" + (xs === null || xs === void 0 ? void 0 : xs.order)] = !_.isNil(xs === null || xs === void 0 ? void 0 : xs.order),
            _a["offset-xs-" + (xs === null || xs === void 0 ? void 0 : xs.offset)] = !_.isNil(xs === null || xs === void 0 ? void 0 : xs.offset),
            // sm
            _a["col-sm"] = !_.isNil(sm === null || sm === void 0 ? void 0 : sm.size) && (sm === null || sm === void 0 ? void 0 : sm.size) === true,
            _a["col-sm-" + (sm === null || sm === void 0 ? void 0 : sm.size)] = !_.isNil(sm === null || sm === void 0 ? void 0 : sm.size) && (sm === null || sm === void 0 ? void 0 : sm.size) !== true,
            _a["order-sm-" + (sm === null || sm === void 0 ? void 0 : sm.order)] = !_.isNil(sm === null || sm === void 0 ? void 0 : sm.order),
            _a["offset-sm-" + (sm === null || sm === void 0 ? void 0 : sm.offset)] = !_.isNil(sm === null || sm === void 0 ? void 0 : sm.offset),
            // md
            _a["col-md"] = !_.isNil(md === null || md === void 0 ? void 0 : md.size) && (md === null || md === void 0 ? void 0 : md.size) === true,
            _a["col-md-" + (md === null || md === void 0 ? void 0 : md.size)] = !_.isNil(md === null || md === void 0 ? void 0 : md.size) && (md === null || md === void 0 ? void 0 : md.size) !== true,
            _a["order-md-" + (md === null || md === void 0 ? void 0 : md.order)] = !_.isNil(md === null || md === void 0 ? void 0 : md.order),
            _a["offset-md-" + (md === null || md === void 0 ? void 0 : md.offset)] = !_.isNil(md === null || md === void 0 ? void 0 : md.offset),
            // lg
            _a["col-lg"] = !_.isNil(lg === null || lg === void 0 ? void 0 : lg.size) && (lg === null || lg === void 0 ? void 0 : lg.size) === true,
            _a["col-lg-" + (lg === null || lg === void 0 ? void 0 : lg.size)] = !_.isNil(lg === null || lg === void 0 ? void 0 : lg.size) && (lg === null || lg === void 0 ? void 0 : lg.size) !== true,
            _a["order-lg-" + (lg === null || lg === void 0 ? void 0 : lg.order)] = !_.isNil(lg === null || lg === void 0 ? void 0 : lg.order),
            _a["offset-lg-" + (lg === null || lg === void 0 ? void 0 : lg.offset)] = !_.isNil(lg === null || lg === void 0 ? void 0 : lg.offset),
            // xl
            _a["col-xl"] = !_.isNil(xl === null || xl === void 0 ? void 0 : xl.size) && (xl === null || xl === void 0 ? void 0 : xl.size) === true,
            _a["col-xl-" + (xl === null || xl === void 0 ? void 0 : xl.size)] = !_.isNil(xl === null || xl === void 0 ? void 0 : xl.size) && (xl === null || xl === void 0 ? void 0 : xl.size) !== true,
            _a["order-xl-" + (xl === null || xl === void 0 ? void 0 : xl.order)] = !_.isNil(xl === null || xl === void 0 ? void 0 : xl.order),
            _a["offset-xl-" + (xl === null || xl === void 0 ? void 0 : xl.offset)] = !_.isNil(xl === null || xl === void 0 ? void 0 : xl.offset),
            _a))
    };
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 0.1rem;\n  padding-left: calc(\n    ", " / 2\n  );\n  padding-right: calc(\n    ", " / 2\n  );\n  position: relative;\n  width: 100%;\n  ", "\n"], ["\n  min-height: 0.1rem;\n  padding-left: calc(\n    ",
    " / 2\n  );\n  padding-right: calc(\n    ",
    " / 2\n  );\n  position: relative;\n  width: 100%;\n  ", "\n"])), function (_a) {
    var _b = _a.theme, gutterWidth = _b.grid.gutterWidth, htmlFontSize = _b.typography.htmlFontSize;
    return pxToRem(gutterWidth, htmlFontSize);
}, function (_a) {
    var _b = _a.theme, gutterWidth = _b.grid.gutterWidth, htmlFontSize = _b.typography.htmlFontSize;
    return pxToRem(gutterWidth, htmlFontSize);
}, widthMixin);
export default Col;
var templateObject_1, templateObject_2;
