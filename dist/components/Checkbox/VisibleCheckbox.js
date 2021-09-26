var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var disabledMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n"], ["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.text.darkDimmed;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.disabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.disabled;
});
var VisibleCheckbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  display: flex;\n  height: 1.6rem;\n  justify-content: center;\n  margin-right: 1.6rem;\n  transition: all 150ms;\n  width: 1.6rem;\n\n  ", ";\n\n  svg {\n    visibility: ", ";\n  }\n"], ["\n  align-items: center;\n  background: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  display: flex;\n  height: 1.6rem;\n  justify-content: center;\n  margin-right: 1.6rem;\n  transition: all 150ms;\n  width: 1.6rem;\n\n  ", ";\n\n  svg {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? disabledMixin : "");
}, function (_a) {
    var checked = _a.checked;
    return (checked ? "visible" : "hidden");
});
export default VisibleCheckbox;
var templateObject_1, templateObject_2;
