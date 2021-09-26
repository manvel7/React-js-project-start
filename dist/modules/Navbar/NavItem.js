var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import Pill from "../../components/Pill";
import { mediaBreakpointDown } from "../../utils/breakpoint";
var mediaMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, "margin: 0 !important;");
});
var NavItem = styled(Pill)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:not(:last-of-type) {\n    margin-right: 1.6rem;\n  }\n\n  ", "\n"], ["\n  &:not(:last-of-type) {\n    margin-right: 1.6rem;\n  }\n\n  ", "\n"])), mediaMixin);
export default NavItem;
var templateObject_1, templateObject_2;
