var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { bodyMixin } from "../../../styles/typography";
var Input = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0.2rem solid ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  display: block;\n  padding: 0.8rem 1.6rem;\n  width: 100%;\n  ", "\n\n  &:focus {\n    background-color: ", ";\n    border: 0.2rem solid ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: 0.2rem solid ", ";\n    color: ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0.2rem solid ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  display: block;\n  padding: 0.8rem 1.6rem;\n  width: 100%;\n  ", "\n\n  &:focus {\n    background-color: ", ";\n    border: 0.2rem solid ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: 0.2rem solid ", ";\n    color: ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.dark;
}, bodyMixin(), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.disabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.darkDimmed;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.darkDimmed;
});
export default Input;
var templateObject_1;
