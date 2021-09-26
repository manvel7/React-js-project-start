var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var disabledMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", " !important;\n  color: ", " !important;\n"], ["\n  background-color: ",
    " !important;\n  color: ", " !important;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.disabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.darkDimmed;
});
var TableRow = styled.tr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n\n  ", "\n\n  td,th {\n    text-align: right;\n\n    &:first-child {\n      text-align: left;\n      border-radius: 0.4rem 0 0 0.4rem;\n    }\n\n    &:last-child {\n      border-radius: 0 0.4rem 0.4rem 0;\n    }\n  }\n"], ["\n  background-color: ", ";\n\n  ", "\n\n  td,th {\n    text-align: right;\n\n    &:first-child {\n      text-align: left;\n      border-radius: 0.4rem 0 0 0.4rem;\n    }\n\n    &:last-child {\n      border-radius: 0 0.4rem 0.4rem 0;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.light;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? disabledMixin : "");
});
export default TableRow;
var templateObject_1, templateObject_2;
