var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var AccordionWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  overflow: hidden;\n  padding: 0.8rem 1.6rem;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  overflow: hidden;\n  padding: 0.8rem 1.6rem;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.tinted;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
});
export default AccordionWrapper;
var templateObject_1;
