var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { mediaBreakpointDown } from "../../../utils/breakpoint";
var mobileMixin = "\n  margin-right: 0;\n";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1 0 75%;\n  height: ", ";\n  margin-right: 0.8rem;\n  position: relative;\n\n  .nav-buttons {\n    background-color: transparent;\n    bottom: 1.6rem;\n    left: 1.6rem;\n    position: absolute;\n\n    button {\n      background-color: ", ";\n      border: 0.1rem solid ", ";\n      border-radius: 0.4rem;\n      color: ", ";\n      cursor: pointer;\n      height: 4rem;\n      width: 4rem;\n\n      &:first-child {\n        margin-right: 0.8rem;\n      }\n    }\n  }\n\n  ", "\n"], ["\n  flex: 1 0 75%;\n  height: ", ";\n  margin-right: 0.8rem;\n  position: relative;\n\n  .nav-buttons {\n    background-color: transparent;\n    bottom: 1.6rem;\n    left: 1.6rem;\n    position: absolute;\n\n    button {\n      background-color: ", ";\n      border: 0.1rem solid ", ";\n      border-radius: 0.4rem;\n      color: ", ";\n      cursor: pointer;\n      height: 4rem;\n      width: 4rem;\n\n      &:first-child {\n        margin-right: 0.8rem;\n      }\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var containerHeight = _a.containerHeight;
    return containerHeight + "rem";
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var theme = _a.theme;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin);
});
export default Wrapper;
var templateObject_1;
