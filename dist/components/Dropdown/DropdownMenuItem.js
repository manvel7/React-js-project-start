var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var DropdownMenuItem = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.4rem;\n  cursor: pointer;\n  display: block;\n  padding: 0.8rem 1.6rem;\n  transition: background-color 0.15s ease-in;\n  width: 100%;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.4rem;\n  cursor: pointer;\n  display: block;\n  padding: 0.8rem 1.6rem;\n  transition: background-color 0.15s ease-in;\n  width: 100%;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.tinted;
});
export default DropdownMenuItem;
var templateObject_1;
