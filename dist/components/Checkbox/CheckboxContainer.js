var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { h6Mixin } from "../../styles/typography";
var CheckboxContainer = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: inline-flex;\n  justify-content: center;\n  ", ";\n"], ["\n  align-items: center;\n  color: ",
    ";\n  display: inline-flex;\n  justify-content: center;\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled, theme = _a.theme;
    return disabled ? theme.palette.text.darkDimmed : theme.palette.text.dark;
}, h6Mixin());
export default CheckboxContainer;
var templateObject_1;
