var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var checkedMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n\n  .toggle-switch__dot {\n    left: calc(100% - 0.8rem);\n  }\n"], ["\n  background-color: ", ";\n\n  .toggle-switch__dot {\n    left: calc(100% - 0.8rem);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
});
var disabledMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n\n  .toggle-switch__dot {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n\n  .toggle-switch__dot {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.disabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.darkDimmed;
});
var errorMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n\n  .toggle-switch__dot {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n\n  .toggle-switch__dot {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.error;
});
var VisibleSwitch = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0.4rem;\n  display: inline-block;\n  height: 0.8rem;\n  margin-right: ", ";\n  position: relative;\n  transition: background-color 0.1s cubic-bezier(0.47, 0.09, 0.86, 0.68);\n  transition-delay: 0.1s;\n  width: 3.2rem;\n\n  .toggle-switch__dot {\n    background-color: ", ";\n    border-radius: 50%;\n    height: 1.6rem;\n    left: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%) translateX(calc(-50% + 0.4rem));\n    transition: left 0.2s cubic-bezier(0.47, 0.09, 0.86, 0.68);\n    width: 1.6rem;\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 0.4rem;\n  display: inline-block;\n  height: 0.8rem;\n  margin-right: ", ";\n  position: relative;\n  transition: background-color 0.1s cubic-bezier(0.47, 0.09, 0.86, 0.68);\n  transition-delay: 0.1s;\n  width: 3.2rem;\n\n  .toggle-switch__dot {\n    background-color: ", ";\n    border-radius: 50%;\n    height: 1.6rem;\n    left: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%) translateX(calc(-50% + 0.4rem));\n    transition: left 0.2s cubic-bezier(0.47, 0.09, 0.86, 0.68);\n    width: 1.6rem;\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var hasLabel = _a.hasLabel;
    return (hasLabel ? "0.8rem" : "0");
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var checked = _a.checked;
    return (checked ? checkedMixin : "");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? disabledMixin : "");
}, function (_a) {
    var error = _a.error;
    return (error ? errorMixin : "");
});
export default VisibleSwitch;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
