var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var primaryMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
});
var infoMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.info;
});
var successMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.success;
});
var warningMixin = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.warn;
});
var errorMixin = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.error;
});
var CloseButton = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 5rem;\n  border-width: 0;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  height: 1.5rem;\n  justify-content: center;\n  margin-left: 1.5rem;\n  width: 1.5rem;\n\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 5rem;\n  border-width: 0;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  height: 1.5rem;\n  justify-content: center;\n  margin-left: 1.5rem;\n  width: 1.5rem;\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
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
export default CloseButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
