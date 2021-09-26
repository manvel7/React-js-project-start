var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import clsx from "clsx";
import _ from "lodash";
import styled, { css } from "styled-components";
import { mediaBreakpointUp } from "../../utils/breakpoint";
import { pxToRem } from "../../utils/unit";
var maxWidthMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var fluid = _a.fluid, _b = _a.theme, _c = _b.grid, breakpoints = _c.breakpoints, containerMaxWidths = _c.containerMaxWidths, htmlFontSize = _b.typography.htmlFontSize;
    if (fluid === true) {
        return "";
    }
    var shouldSkip = false;
    return Object.keys(breakpoints)
        .map(function (breakpoint) {
        if (breakpoint === fluid) {
            shouldSkip = true;
        }
        var maxWidth = containerMaxWidths[breakpoint];
        if (maxWidth) {
            return mediaBreakpointUp(breakpoint, breakpoints, shouldSkip
                ? "max-width: none;"
                : "max-width: " + pxToRem(maxWidth, htmlFontSize) + ";");
        }
        return "";
    })
        .join("\n");
});
var Container = styled.div.attrs(function (_a) {
    var _b;
    var className = _a.className, fluid = _a.fluid;
    return {
        className: clsx(className, (_b = {
                container: true,
                "container-fluid": !_.isNil(fluid) && fluid === true
            },
            _b["container-" + fluid + "-fluid"] = !_.isNil(fluid) && fluid !== true,
            _b))
    };
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: calc(\n    ", " / 2\n  );\n  padding-right: calc(\n    ", " / 2\n  );\n  width: 100%;\n\n  ", "\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: calc(\n    ",
    " / 2\n  );\n  padding-right: calc(\n    ",
    " / 2\n  );\n  width: 100%;\n\n  ", "\n"])), function (_a) {
    var _b = _a.theme, gutterWidth = _b.grid.gutterWidth, htmlFontSize = _b.typography.htmlFontSize;
    return pxToRem(gutterWidth, htmlFontSize);
}, function (_a) {
    var _b = _a.theme, gutterWidth = _b.grid.gutterWidth, htmlFontSize = _b.typography.htmlFontSize;
    return pxToRem(gutterWidth, htmlFontSize);
}, maxWidthMixin);
export default Container;
var templateObject_1, templateObject_2;
