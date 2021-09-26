var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { smallMixin, h5Mixin, h6Mixin } from "../../../styles/typography";
var lgMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h5Mixin());
var mdMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h6Mixin());
var smMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), h6Mixin());
var xsMixin = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), smallMixin());
var Label = styled.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  ", ";\n  margin-bottom: 0.8rem;\n  width: 100%;\n"], ["\n  color: ",
    ";\n  display: inline-block;\n  ",
    ";\n  margin-bottom: 0.8rem;\n  width: 100%;\n"])), function (_a) {
    var disabled = _a.disabled, theme = _a.theme;
    return disabled ? theme.palette.text.darkDimmed : theme.palette.text.dark;
}, function (_a) {
    var displaySize = _a.displaySize;
    switch (displaySize) {
        case "lg":
            return lgMixin;
        case "sm":
            return smMixin;
        case "xs":
            return xsMixin;
        case "md":
        default:
            return mdMixin;
    }
});
export default Label;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
