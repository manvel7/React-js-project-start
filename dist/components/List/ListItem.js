var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var activeMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-color: ", ";\n"], ["\n  border-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.dark;
});
var ListItem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0.2rem solid ", ";\n  border-radius: 0.4rem;\n  min-height: 6.4rem;\n  padding: 0.8rem 1.6rem 1.6rem;\n  width: 100%;\n\n  small {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: 0.2rem solid ", ";\n  border-radius: 0.4rem;\n  min-height: 6.4rem;\n  padding: 0.8rem 1.6rem 1.6rem;\n  width: 100%;\n\n  small {\n    color: ", ";\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.tinted;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.tinted;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.darkDimmed;
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
});
export default ListItem;
var templateObject_1, templateObject_2;
