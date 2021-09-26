var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { h4Mixin, h5Mixin } from "../../../styles/typography";
var lgMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h4Mixin());
var mdMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h5Mixin());
var normalMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 0.4rem;\n"], ["\n  border-radius: 0.4rem;\n"])));
var circleMixin = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  /*width is not fixed, so 50% doesn't work*/\n  border-radius: 10rem;\n"], ["\n  /*width is not fixed, so 50% doesn't work*/\n  border-radius: 10rem;\n"])));
var activeMixin = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n"], ["\n  background-color: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
});
var PaginationButton = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  margin: 0 0.4rem;\n  min-height: 3.2rem;\n  min-width: 3.2rem;\n  padding: 0.4rem 0.8rem;\n\n  &[disabled] {\n    cursor: initial;\n  }\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  margin: 0 0.4rem;\n  min-height: 3.2rem;\n  min-width: 3.2rem;\n  padding: 0.4rem 0.8rem;\n\n  &[disabled] {\n    cursor: initial;\n  }\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  ",
    "\n\n  ",
    "\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.tinted;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var size = _a.size;
    switch (size) {
        case "lg":
            return lgMixin;
        case "md":
        default:
            return mdMixin;
    }
}, function (_a) {
    var variant = _a.variant;
    switch (variant) {
        case "circle":
            return circleMixin;
        case "normal":
        default:
            return normalMixin;
    }
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
});
PaginationButton.defaultProps = {
    variant: "normal",
    isActive: false
};
export default PaginationButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
