var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { h5Mixin } from "../../../styles/typography";
var activeMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &::after {\n    transform: rotate(90deg);\n  }\n"], ["\n  &::after {\n    transform: rotate(90deg);\n  }\n"])));
var AccordionLabel = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 0;\n\n  &::after {\n    color: ", ";\n    content: \"\u276F\";\n    height: 2.4rem;\n    text-align: center;\n    transform: rotate(0deg);\n    transition: all 0.35s;\n    width: 2.4rem;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 0;\n\n  &::after {\n    color: ", ";\n    content: \"\u276F\";\n    height: 2.4rem;\n    text-align: center;\n    transform: rotate(0deg);\n    transition: all 0.35s;\n    width: 2.4rem;\n  }\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.text.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, h5Mixin(), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
});
export default AccordionLabel;
var templateObject_1, templateObject_2;
