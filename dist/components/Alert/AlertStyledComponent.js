var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { h5Mixin } from "../../styles/typography";
var primaryMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
});
var infoMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.info;
});
var successMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.success;
});
var warningMixin = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.warn;
});
var errorMixin = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.error;
});
var AlertStyledComponent = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 0.5rem;\n  bottom: 1.6rem;\n  box-sizing: border-box;\n  color: ", ";\n  display: flex;\n  justify-content: space-between;\n  opacity: 1;\n  padding: 1.2rem 1.6rem;\n  transition: 0.6s linear all;\n  visibility: visible;\n  width: 100%;\n  ", "\n\n  ", "\n \n  &.hidden {\n    opacity: 0;\n    visibility: hidden;\n  }\n"], ["\n  align-items: center;\n  border-radius: 0.5rem;\n  bottom: 1.6rem;\n  box-sizing: border-box;\n  color: ", ";\n  display: flex;\n  justify-content: space-between;\n  opacity: 1;\n  padding: 1.2rem 1.6rem;\n  transition: 0.6s linear all;\n  visibility: visible;\n  width: 100%;\n  ", "\n\n  ",
    "\n \n  &.hidden {\n    opacity: 0;\n    visibility: hidden;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
}, h5Mixin(), function (_a) {
    var variant = _a.variant;
    switch (variant) {
        case "info":
            return infoMixin;
        case "success":
            return successMixin;
        case "warning":
            return warningMixin;
        case "error":
            return errorMixin;
        case "primary":
        default:
            return primaryMixin;
    }
});
export default AlertStyledComponent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
