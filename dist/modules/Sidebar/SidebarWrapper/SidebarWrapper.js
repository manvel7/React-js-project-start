var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { mediaBreakpointDown } from "../../../utils/breakpoint";
var mobileMixin = "\n  bottom: initial;\n  right: 0;\n  width: initial;\n  height: 5.6rem;\n  transition: height 0.4s ease-in-out;\n\n  &:hover {\n    width: initial;\n  }\n\n  &.expanded {\n    height: 100vh;\n    overflow-y: auto;\n  }\n\n  .mobile-heading {\n    display: block;\n  }\n\n  overflow-y: hidden;\n";
var SidebarWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  bottom: 0;\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition: width 0.4s ease-in-out;\n  width: 6.4rem;\n  z-index: 10;\n\n  &:hover {\n    transition-duration: 0.25s;\n    width: 25.6rem;\n  }\n\n  .mobile-heading {\n    display: none;\n    flex: 0 0 5.6rem;\n    line-height: 5.6rem;\n    position: relative;\n    text-align: center;\n\n    h4 {\n      line-height: 5.6rem;\n    }\n\n    .burger-button {\n      align-items: center;\n      bottom: 0;\n      display: flex;\n      padding: 0 2.4rem;\n      position: absolute;\n      top: 0;\n      svg path {\n        fill: ", ";\n      }\n    }\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  bottom: 0;\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition: width 0.4s ease-in-out;\n  width: 6.4rem;\n  z-index: 10;\n\n  &:hover {\n    transition-duration: 0.25s;\n    width: 25.6rem;\n  }\n\n  .mobile-heading {\n    display: none;\n    flex: 0 0 5.6rem;\n    line-height: 5.6rem;\n    position: relative;\n    text-align: center;\n\n    h4 {\n      line-height: 5.6rem;\n    }\n\n    .burger-button {\n      align-items: center;\n      bottom: 0;\n      display: flex;\n      padding: 0 2.4rem;\n      position: absolute;\n      top: 0;\n      svg path {\n        fill: ", ";\n      }\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
}, function (_a) {
    var theme = _a.theme;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin);
});
export default SidebarWrapper;
var templateObject_1;
