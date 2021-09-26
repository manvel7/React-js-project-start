var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { smallMixin } from "../../styles/typography";
var stripedMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  tbody {\n    tr:nth-of-type(odd) {\n      background-color: ", ";\n    }\n  }\n"], ["\n  tbody {\n    tr:nth-of-type(odd) {\n      background-color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
});
var Table = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-collapse: separate;\n  border-spacing: 0 0.8rem;\n  color: ", ";\n  width: 100%;\n  ", "\n\n  ", "\n"], ["\n  border-collapse: separate;\n  border-spacing: 0 0.8rem;\n  color: ", ";\n  width: 100%;\n  ", "\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.text.dark;
}, smallMixin(), function (_a) {
    var striped = _a.striped;
    return (striped ? stripedMixin : "");
});
export default Table;
var templateObject_1, templateObject_2;
