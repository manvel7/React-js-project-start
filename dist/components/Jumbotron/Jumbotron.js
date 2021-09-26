var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { h3Mixin, h4Mixin } from "../../styles/typography";
var lgMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h3Mixin());
var smMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h4Mixin());
var Jumbotron = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  padding: 1.6rem;\n  width: 100%;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  padding: 1.6rem;\n  width: 100%;\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
}, function (_a) {
    var size = _a.size;
    switch (size) {
        case "lg":
            return lgMixin;
        case "sm":
        default:
            return smMixin;
    }
});
export default Jumbotron;
var templateObject_1, templateObject_2, templateObject_3;
