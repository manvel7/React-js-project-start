var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { mediaBreakpointDown } from "../../utils/breakpoint";
var mediaMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, hideOnXsScreen = _a.hideOnXsScreen;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, hideOnXsScreen ? "display: none;" : "");
});
var Navbar = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-bottom: 0.1rem solid ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 0.8rem;\n  width: 100%;\n\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-bottom: 0.1rem solid ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 0.8rem;\n  width: 100%;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, mediaMixin);
export default Navbar;
var templateObject_1, templateObject_2;
