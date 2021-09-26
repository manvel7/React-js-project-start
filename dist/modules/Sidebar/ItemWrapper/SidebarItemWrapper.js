var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var topMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 2.4rem;\n"], ["\n  margin-bottom: 2.4rem;\n"])));
var bottomMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: auto;\n"], ["\n  margin-top: auto;\n"])));
var autoMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: auto;\n  margin-top: auto;\n"], ["\n  margin-bottom: auto;\n  margin-top: auto;\n"])));
var SidebarItemWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n\n  ", "\n\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n\n  .icon,\n  .text {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n  }\n\n  .icon {\n    flex-shrink: 0;\n    height: 6.4rem;\n    width: 6.4rem;\n  }\n\n  .text {\n    padding-left: 1.6rem;\n    white-space: nowrap;\n  }\n"], ["\n  align-items: center;\n  display: flex;\n\n  ",
    "\n\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n\n  .icon,\n  .text {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n  }\n\n  .icon {\n    flex-shrink: 0;\n    height: 6.4rem;\n    width: 6.4rem;\n  }\n\n  .text {\n    padding-left: 1.6rem;\n    white-space: nowrap;\n  }\n"])), function (_a) {
    var displayPosition = _a.displayPosition;
    switch (displayPosition) {
        case "bottom":
            return bottomMixin;
        case "top":
            return topMixin;
        case "auto":
            return autoMixin;
        default:
            return "";
    }
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.dark;
});
export default SidebarItemWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
