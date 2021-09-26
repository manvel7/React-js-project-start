var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var ButtonGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-wrap: no-wrap;\n\n  button {\n    &:first-child {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n    }\n\n    &:last-child {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n    }\n\n    &:not(:first-child):not(:last-child) {\n      border-radius: 0;\n    }\n\n    &.toggle__button--inactive {\n      border-color: ", ";\n    }\n\n    &.toggle__button--active {\n      font-weight: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n  flex-wrap: no-wrap;\n\n  button {\n    &:first-child {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n    }\n\n    &:last-child {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n    }\n\n    &:not(:first-child):not(:last-child) {\n      border-radius: 0;\n    }\n\n    &.toggle__button--inactive {\n      border-color: ", ";\n    }\n\n    &.toggle__button--active {\n      font-weight: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.fontWeights.boldest;
});
export default ButtonGroup;
var templateObject_1;
