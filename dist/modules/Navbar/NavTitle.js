var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { h5Mixin } from "../../styles/typography";
import { mediaBreakpointDown } from "../../utils/breakpoint";
var mediaMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, "display: none; padding: 0.8rem 1.6rem;");
});
var NavTitle = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 1.6rem;\n\n  ", "\n  ", "\n"], ["\n  padding: 1.6rem;\n\n  ", "\n  ", "\n"])), h5Mixin(), mediaMixin);
export default NavTitle;
var templateObject_1, templateObject_2;
