var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var TooltipContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.3rem;\n  display: flex;\n  flex-direction: column;\n  max-width: 20rem;\n  padding: 0.8rem 1.6rem;\n  z-index: 99;\n"], ["\n  background-color: ", ";\n  border: 0.1rem solid ", ";\n  border-radius: 0.3rem;\n  display: flex;\n  flex-direction: column;\n  max-width: 20rem;\n  padding: 0.8rem 1.6rem;\n  z-index: 99;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
});
export default TooltipContainer;
var templateObject_1;
