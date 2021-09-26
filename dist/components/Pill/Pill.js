var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { bodyMixin, smallMixin } from "../../styles/typography";
var smMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), smallMixin());
var mdMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), bodyMixin());
var activeMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n"], ["\n  background-color: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
});
var Pill = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  border-radius: 0.4rem;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  padding: 0.4rem 1.6rem;\n\n  ", "\n\n  ", "\n"], ["\n  background-color: transparent;\n  border: none;\n  border-radius: 0.4rem;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  padding: 0.4rem 1.6rem;\n\n  ", "\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
}, function (_a) {
    var size = _a.size;
    switch (size) {
        case "sm":
            return smMixin;
        case "md":
        default:
            return mdMixin;
    }
});
Pill.defaultProps = {
    isActive: true
};
export default Pill;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
